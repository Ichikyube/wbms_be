import { Injectable } from '@nestjs/common';

import { DbService } from 'src/db/db.service';
import { CreateCompanyDto, UpdateCompanyDto } from './dto';
import { CompanyEntity } from 'src/entities';
import { Prisma } from '@prisma/client';
import { SemaiService } from 'src/semai/semai.service';

@Injectable()
export class CompaniesService {
  constructor(
    private db: DbService,
    private semaiService: SemaiService,
  ) {}

  async syncWithSemai() {
    const companies = await this.semaiService
      .transporters()
      .then((res) => res.data.transporters);

    if (companies?.length > 0)
      companies.forEach(
        ({
          id,
          name,
          address,
          addressExt,
          postalCode,
          city,
          province,
          country,
          contactName,
          contactEmail,
          contactPhone,
          phone,
          url,
          code,
          shortName,
          isMill,
          isEstate,
          isTransporter,
          isDeleted,
          createdTime,
          createdBy,
          updatedTime,
          updatedBy,
          deletedTime,
          deletedBy,
        }) => {
          this.db.site
            .findFirstOrThrow({
              where: {
                refType: 1,
                refId: id,
              },
            })
            .then((res) => {
              this.db.company
                .update({
                  where: { id: res.id },
                  data: {
                    code,
                    name,
                    shortName,
                    address,
                    addressExt,
                    postalCode,
                    country,
                    province,
                    city,
                    phone,
                    url,
                    contactName,
                    contactEmail,
                    contactPhone,
                    isMillOperator:isMill,
                    isTransporter,
                    isEstate,
                    isDeleted: isDeleted === 1? true: false,
                    userCreated: createdBy,
                    userModified: isDeleted ? deletedBy : updatedBy,
                    dtCreated: new Date(createdTime),
                    dtModified: isDeleted ? new Date(deletedTime) : new Date(updatedTime),
                  },
                })
                .then((res) => console.log(res));
            })
            .catch(() => {
              this.db.company
                .create({
                  data: {
                    refType: 1,
                    refId: id,
                    code,
                    name,
                    shortName,
                    address,
                    addressExt,
                    postalCode,
                    country,
                    province,
                    city,
                    phone,
                    url,
                    contactName,
                    contactEmail,
                    contactPhone,
                    isMillOperator:isMill,
                    isTransporter,
                    isEstate,
                    isDeleted: isDeleted === 1? true: false,
                    userCreated: createdBy,
                    userModified: isDeleted ? deletedBy : updatedBy,
                    dtCreated: new Date(createdTime),
                    dtModified: isDeleted ? new Date(deletedTime) : new Date(updatedTime),
                  },
                })
                .then((res) => console.log(res));
            });
        },
      );

    return companies;
  }

  async getAll(): Promise<CompanyEntity[]> {
    const records = await this.db.company.findMany({
      where: { isDeleted: false },
      orderBy: [
        {
          dtCreated: 'desc',
        },
        {
          name: 'desc',
        },
      ],
    });

    return records;
  }

  async getAllDeleted(): Promise<CompanyEntity[]> {
    const records = await this.db.company.findMany({
      where: { isDeleted: true },
    });

    return records;
  }

  async getById(id: string): Promise<CompanyEntity> {
    const record = await this.db.company.findUnique({
      where: { id },
    });

    return record;
  }

  async searchFirst(query: any): Promise<CompanyEntity> {
    query.where = { ...query.where, isDeleted: false };

    const record = await this.db.company.findFirst(query);

    return record;
  }

  async searchMany(query: any): Promise<CompanyEntity[]> {
    query.where = { ...query.where, isDeleted: false };

    const records = await this.db.company.findMany(query);

    return records;
  }

  async searchFirstDeleted(query: any): Promise<CompanyEntity> {
    query.where = { ...query.where, isDeleted: true };

    const record = await this.db.company.findFirst(query);

    return record;
  }

  async searchManyDeleted(query: any): Promise<CompanyEntity[]> {
    query.where = { ...query.where, isDeleted: true };

    const records = await this.db.company.findMany(query);

    return records;
  }

  async create(dto: CreateCompanyDto, userId: string): Promise<CompanyEntity> {
    const params = {
      data: {
        ...dto,
        userCreated: userId,
        userModified: userId,
      },
    };

    const record = await this.db.company.create(params);

    return record;
  }

  async updateById(
    id: string,
    dto: UpdateCompanyDto,
    userId: string,
  ): Promise<CompanyEntity> {
    const params = {
      where: { id },
      data: { ...dto, userModified: userId },
    };

    const record = await this.db.company.update(params);

    return record;
  }

  async deleteById(id: string, userId: string): Promise<CompanyEntity> {
    const params = {
      where: { id },
      data: { isDeleted: true, userModified: userId },
    };

    const record = await this.db.company.update(params);

    return record;
  }

  // async syncWithSemai() {
  //   const companies = await this.semaiService.companies().then((res) => res.data.companies);

  //   if (companies?.length > 0)
  //     companies.forEach((site) => {
  //       this.db.site
  //         .findFirstOrThrow({
  //           where: {
  //             refType: 1,
  //             refId: site.id,
  //           },
  //         })
  //         .then((res) => {
  //           this.db.site
  //             .update({
  //               where: { id: res.id },
  //               data: {
  //                 sourceSiteRefId: site?.sourceSiteId,
  //                 sourceSiteName: site?.sourceSiteName,

  //                 companyRefId: site?.companyId,
  //                 companyName: site?.companyName,

  //                 code: site?.code,
  //                 name: site?.name,
  //                 shortName: site?.shortName,
  //                 description: site?.description,

  //                 latitude: site?.latitude,
  //                 longitude: site?.longitude,
  //                 solarCalibration: site?.solarCalibration,

  //                 isMill: site?.isMill,

  //                 isDeleted: !!site?.isDeleted,
  //               },
  //             })
  //             .then((res) => console.log(res));
  //         })
  //         .catch(() => {
  //           this.db.site
  //             .create({
  //               data: {
  //                 refType: 1,
  //                 refId: site.id,

  //                 sourceSiteRefId: site?.sourceSiteId,
  //                 sourceSiteName: site?.sourceSiteName,

  //                 companyRefId: site?.companyId,
  //                 companyName: site?.companyName,

  //                 code: site?.code,
  //                 name: site?.name,
  //                 shortName: site?.shortName,
  //                 description: site?.description,

  //                 latitude: site?.latitude,
  //                 longitude: site?.longitude,
  //                 solarCalibration: site?.solarCalibration,

  //                 isMill: site?.isMill,

  //                 isDeleted: !!site?.isDeleted,

  //                 userCreated: "",
  //                 userModified: "",
  //               },
  //             })
  //             .then((res) => console.log(res));
  //         });
  //     });

  //   return companies;
  // }
}
