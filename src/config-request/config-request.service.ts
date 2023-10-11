import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateConfigRequestDto } from './dto/create-config-request.dto';
import { DbService } from 'src/db/db.service';
import { RequestStatus } from '@prisma/client';
import { ConfigsService } from 'src/configs/configs.service';

@Injectable()
export class ConfigRequestService {
  constructor(
    private db: DbService,
    private configService: ConfigsService,
  ) {}

  async createRequest(userId: string, dto: CreateConfigRequestDto) {
    const date = dto.schedule;
    date.setHours(0);
    const endDate =  new Date(date.getTime() + 24 * 60 * 60 * 1000)
    console.log(date)
    console.log(endDate)
    const existingSchedule = await this.db.config.findFirst({
      where: {
        start: {
          gte: date,
          lte: endDate,
        },
      },
    });
    const existingRequest = await this.db.configRequest.findFirst({
      where: {
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
      schedule: dto.schedule,
      userCreated: userId,
    };

    return this.db.configRequest.create({ data });
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
    try {
      await this.db.configRequest.update({
        where: { id: requestId },
        data,
      });
      if (currentLevel === configLvl) {
        const tempValue= "true"; 
        const start= configRequest.schedule;
        this.configService.requestApproved(configRequest.configId, tempValue, start, userId);
      };
    } catch (e) {}
  }
}
