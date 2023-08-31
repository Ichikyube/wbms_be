import { Injectable } from '@nestjs/common';
import { CreateConfigApprovalDto } from './dto/create-config-approval.dto';
import { UpdateConfigApprovalDto } from './dto/update-config-approval.dto';
import { DbService } from 'src/db/db.service';
import { ConfigService } from '@nestjs/config';
import { RequestStatus } from '@prisma/client';

@Injectable()
export class ConfigApprovalService {
  constructor(
    private db: DbService,
    private config: ConfigService,
  ) {}

  /**
   * Apabila user terdaftar sebagai pj
   * @param requestId
   * @returns
   */
  async approveLvl1(userId: string, requestId: string) {
    const { lvlMap } = await this.db.configAdminList.findFirst({
      orderBy: { dtCreated: 'desc' },
    });
    const userLvl = JSON.parse(JSON.stringify(lvlMap)).find(
      (user) => user.id === userId,
    );
    if (userLvl !== 1) {
      return;
    }

    const approval = await this.db.configApproval.update({
      where: { requestId },
      data: { lvl1Signed: userId },
    });

    return approval;
  }

  async approveLvl2(userId: string, requestId: string) {
    const { lvlMap } = await this.db.configAdminList.findFirst({
      orderBy: { dtCreated: 'desc' },
    });
    const userLvl = JSON.parse(JSON.stringify(lvlMap)).find(
      (user) => user.id === userId,
    );
    if (userLvl !== 2) {
      return;
    }

    const approval = await this.db.configApproval.update({
      where: { requestId },
      data: { lvl2Signed: userId },
    });

    return approval;
  }

  async approveLvl3(userId: string, requestId: string) {
    const { lvlMap } = await this.db.configAdminList.findFirst({
      orderBy: { dtCreated: 'desc' },
    });
    const userLvl = JSON.parse(JSON.stringify(lvlMap)).find(
      (user) => user.id === userId,
    );
    if (userLvl !== 3) {
      return;
    }

    await this.db.configApproval.update({
      where: { requestId },
      data: { lvl2Signed: userId },
    });

    const { lvl1Signed, lvl2Signed, lvl3Signed } =
      await this.db.configApproval.findFirst({ where: { requestId } });
    if (lvl1Signed && lvl2Signed && lvl3Signed) {
      return await this.db.configRequest.update({
        where: { id: requestId },
        data: {
          status: RequestStatus.APPROVED,
        },
      });
    }
  }

  /**
   * ketika PJ mengirim response apakah approve atau rejected, dikirim ke config-approval.
   *  Ketika response di level pertama rejected, maka request status Rejected,
   * apabila approved, maka approval masuk ke level kedua,
   * notifikasi masuk ke PJ2 untuk segera memberi response,
   * seperti itu seterusnya hingga level 3.
   * Hanya apabila approval di semua level approve,
   * maka status request berubah menjadi Approved,
   * dan status config berubah menjadi selain default.
   */
  async rejectRequest(requestId: string) {
    return this.db.configRequest.update({
      where: { id: requestId },
      data: { status: RequestStatus.REJECTED },
    });
  }
}
