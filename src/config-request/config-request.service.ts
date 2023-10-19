import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateConfigRequestDto } from './dto/create-config-request.dto';
import { DbService } from 'src/db/db.service';
import { RequestStatus } from '@prisma/client';
import { ConfigsService } from 'src/configs/configs.service';
import * as moment from 'moment-timezone';

@Injectable()
export class ConfigRequestService {
  constructor(
    private db: DbService,
    private configService: ConfigsService,
  ) {}

  async createRequest(userId: string, dto: CreateConfigRequestDto) {
    const date = new Date(dto.schedule);
    date.setHours(0);
    const endDate = new Date(date.getTime() + 24 * 60 * 60 * 1000);

    const existingSchedule = await this.db.config.findFirst({
      where: {
        id: dto.configId,
        start: {
          gte: date,
          lte: endDate,
        },
      },
    });
    const existingRequest = await this.db.configRequest.findFirst({
      where: {
        configId: dto.configId,
        schedule: {
          gte: date,
          lte: endDate,
        },
      },
    });

    if (existingSchedule) {
      throw new NotFoundException(
        'Request failed: Schedule already exists for this date.',
      );
    } else if (existingRequest) {
      throw new NotFoundException(
        'Request failed: Request already exists for this date.',
      );
    }

    const config = await this.db.config.findFirst({
      where: { id: dto.configId },
    });
    const data = {
      config: {
        connect: {
          id: config.id,
        },
      },
      approval: [],
      status: RequestStatus.PENDING,
      schedule: moment
        .tz(dto.schedule, 'Asia/Brunei')
        .format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]'),
      userCreated: userId,
    };

    const userInfo = await this.db.profile.findFirst({ where: { userId } });
    const groupMap = await this.db.configAdminList.findFirst({
      orderBy: {
        dtCreated: 'desc',
      },
      select: {
        lvlMap: true,
      },
    });
    const record = await this.db.configRequest.create({ data });
    const notificationData = {
      photo: userInfo.profilePic,
      sender: userInfo.name,
      message: `Meminta persetujuan untuk mengaktifkan ${config.name}`,
      target: Object.keys(groupMap.lvlMap).filter(
        (id) => groupMap.lvlMap[id] === 'PJ1',
      ),
      configRequestId: record.id,
    };
    await this.db.notification.create({
      data: notificationData,
    });
    return record;
  }

  async getAllRequests() {
    return this.db.configRequest.findMany({
      where: { status: 'PENDING' },
      orderBy: [
        {
          dtCreated: 'desc',
        },
      ],
      include: {
        config: true,
      },
    });
  }

  async rejectRequest(userId: string, requestId: string) {
    const configRequest = await this.db.configRequest.findUnique({
      where: { id: requestId },
      include: { config: { select: { lvlOfApprvl: true } } },
    });

    if (configRequest.status === RequestStatus.REJECTED) return;
    const signList = JSON.parse(JSON.stringify(configRequest.approval));
    signList.push(userId);
    return this.db.configRequest.update({
      where: { id: requestId },
      data: {
        status: RequestStatus.REJECTED,
        approval: signList,
      },
    });
  }

  async approveRequest(userId: string, requestId: string) {
    const lvl = {
      1: 'PJ1',
      2: 'PJ2',
      3: 'PJ3',
    };
    const result = await this.db.configAdminList
      .findFirst({
        orderBy: { dtCreated: 'desc' },
      })
      .then((data) => JSON.parse(JSON.stringify(data)));
    const { lvlMap } = result;
    const userLvl = lvlMap[userId];
    const configRequest = await this.db.configRequest.findUnique({
      where: { id: requestId },
      include: { config: { select: { lvlOfApprvl: true, id: true } } },
    });
    const configLvl = configRequest.config.lvlOfApprvl;
    const signList = JSON.parse(JSON.stringify(configRequest.approval));
    const newList = [...signList, userId];

    const currentLevel = signList.length + 1; //setiap kali approval currentLvl naik 1 tingkat
    if (userLvl !== lvl[currentLevel]) return console.log('false approver');

    /**
     * Hanya apabila approval di semua level approve,
     * maka status request berubah menjadi Approved,
     */
    const data =
      currentLevel < configLvl
        ? {
            approval: newList,
          }
        : {
            status: RequestStatus.APPROVED,
            approval: newList,
          };
    const userInfo = await this.db.profile.findFirst({ where: { userId } });
    const groupMap = await this.db.configAdminList.findFirst({
      orderBy: {
        dtCreated: 'desc',
      },
      select: {
        lvlMap: true,
      },
    });
    const notificationData = {
      target: Object.keys(groupMap).filter(
        (id) => groupMap[id] === lvl[data.approval.length + 1],
      ),
      photo: userInfo.profilePic,
      sender: userInfo.name,
    };
    let record;
    try {
      record = await this.db.configRequest.update({
        where: { id: requestId },
        data,
      });
      if (currentLevel === configLvl) {
        const tempValue = 'true';
        const start = configRequest.schedule;
        this.configService.requestApproved(
          configRequest.configId,
          tempValue,
          start,
          userId,
        );
      }
      if (signList.length < configLvl) {
        await this.db.notification.update({
          where: { configRequestId: configRequest.id },
          data: notificationData,
        });
      }

    } catch (e) {}
    return record;
  }
}
