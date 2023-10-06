import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { create } from 'xmlbuilder2';
import moment from 'moment';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
import { SemaiService } from 'src/semai/semai.service';
import { ConfigsService } from 'src/configs/configs.service';
import { CreateTransactionDto } from './dto/create-transactionDto';
import { QrcodeDto } from 'src/semai/dto/qrcode.dt';

import { TransactionEntity } from 'src/entities';

@Injectable()
export class TransactionService {
  constructor(
    private db: DbService,
    private config: ConfigService,
    private semaiAPI: SemaiService,
    private configWbms: ConfigsService,
  ) {}

  async getAll() {
    const dataOut = {
      status: true,
      message: '',
      page: 0,
      totalRecords: 0,
      records: {},
      logs: {},
    };

    try {
      const records = await this.db.transaction.findMany({
        where: {
          isDeleted: false,
        },
        orderBy: [
          {
            dtCreated: 'desc',
          },
        ],
      });
      dataOut.records = records;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { error };
    }

    return dataOut;
  }

  async searchMany(query: any) {
    const dataOut = {
      status: true,
      message: '',
      page: 0,
      totalRecords: 0,
      records: {},
      logs: {},
    };
    query.where['isDeleted'] = false;
    try {
      const records = await this.db.transaction.findMany({
        ...query,
      });

      dataOut.records = records;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { error };
    }

    return dataOut;
  }

  convertToXml(tag: string, value: string): string {
    return `<${tag}>${value}</${tag}>`;
  }

  convertDataToXml(data: string[]): string {
    return data.map((item) => this.convertToXml(item, `{${item}}`)).join('\n');
  }
  async searchManyToSAP(format: boolean, payload: any) {
    let record;
    const { date, id_ba, Year_of_Planting, afdeling, site } = payload;
    const parts = date.split('-');
    const day = parseInt(parts[0]);
    const month = parts[1]; // Months are 0-based in JavaScript Date objects
    const year = parseInt(parts[2]);
    const inputDate = new Date(Date.UTC(year, month - 1, day, 7));
    const endOfDay = new Date(
      new Date(inputDate).getTime() + 24 * 60 * 60 * 1000,
    );
    const query = {
      where: {
        dtCreated: {
          gte: inputDate,
          lte: endOfDay,
        },
        // MILL_PLANT: id_ba,
        isDeleted: false,
      },
      select: {
        originWeighInTimestamp: true,
        originWeighOutTimestamp: true,
        bonTripNo: true,
        product: {
          select: {
            batch: true,
          },
        },
        driverName: true,
        transportVehiclePlateNo: true,
        originWeighInKg: true,
        originWeighOutKg: true,
        qtyTbs: true,
        sapCode: true,
        spbNo: true,
        transporter: {
          select: {
            codeSap: true,
          },
        },
        checkGrade: true,
      },
    };

    try {
      record = await this.db.transaction.findMany(query);
    } catch (error) {
      throw error;
    }

    let mappedData = record.map(
      ({
        originWeighInTimestamp,
        originWeighOutTimestamp,
        originWeighOutKg,
        originWeighInKg,
        bonTripNo,
        product,
        driverName,
        transportVehiclePlateNo,
        destinationSite,
        originSite,
        qtyTbs,
        sapCode,
        spbNo,
        transporter,
        checkGrade,
      }) => {
        const Batch = product.batch;
        const Trans_Code = transporter.codeSap;
        const weightBrutto = Math.abs(originWeighOutKg - originWeighInKg);
        const weightNetto = Math.abs(originWeighOutKg - originWeighInKg);
        return {
          Company: this.config.get('Company_Code'),
          Mill_Plant: this.config.get('Mill_Plant'),
          Mill_SLoc: this.config.get('Mill_SLoc'),
          Transit_SLoc: this.config.get('Transit_SLoc'),
          Indicator: 'IN',
          WB_Ticket: bonTripNo,
          WB_Date_In: moment(originWeighInTimestamp).format('DD.MM.YYYY'),
          WB_Time_In: moment(originWeighInTimestamp).format('HH:mm:ss'),
          WB_Date_Out: moment(originWeighOutTimestamp).format('DD.MM.YYYY'),
          WB_Time_Out: moment(originWeighOutTimestamp).format('HH:mm:ss'),

          Material: sapCode,
          Batch,
          Car_Plate: transportVehiclePlateNo,
          Driver_Name: driverName,
          Trans_Code,
          Contract_No: '',
          Contract_Item: '',
          Vendor_ID: '',
          SPB_No: spbNo,

          Fruit_Type: 'B',
          Check_Grade: checkGrade,
          Year_of_Planting: Year_of_Planting,
          Vendor_Qty: weightBrutto,
          WB_In_Quantity: originWeighInKg,
          WB_Out_Quantity: originWeighOutKg,
          Net_Quantity_Before_Grading: weightBrutto,
          Grading_Flat_Percent: null,
          Net_Quantity_After_Grading: weightNetto,
          UoM: 'KG',
          FROO_Un_ripe: 'nilai potongan dlm kg',
          FRO_Under_ripe: 'nilai potongan dlm kg',
          FRX_Over_ripe: 'nilai potongan dlm kg',
          FR5_Rotten: 'nilai potongan dlm kg',
          TK_Empty_Bunch: 'nilai potongan dlm kg',
          BM_Loose_Fruit: 'nilai potongan dlm kg',
          SMPH_Garbage_and_Dirt: 'nilai potongan dlm kg',
          TP_Long_Stalk: 'nilai potongan dlm kg',
          FRP_Parthenocarphic: 'nilai potongan dlm kg',
          ABN_Abnormal: 'nilai potongan dlm kg',
          EAT_Eaten_by_Rats: 'nilai potongan dlm kg',
          FR3_Bunch_LessThan_3_Kg: 'nilai potongan dlm kg',
          AIR_Water: 'AIR_Water',
          LAIN2_Others: 'LAIN2_Others',
          FROOBUNCH_Un_ripe: 0,
          FROBUNCH_Under_ripe: 0,
          FRXBUNCH_Over_ripe: 0,
          FR5BUNCH_Rotten: 0,
          TKBUNCH_Empty_Bunch: 0,
          TPBUNCH_Long_Stalk: 0,
          FRPBUNCH_Parthenocarphic: 0,
          ABNBUNCH_Abnormal: 0,
          EATBUNCH_Eaten_by_Rats: 0,
          FR3BUNCH_Bunch_LessThan_3_Kg: 0,
          LAIN2BUNCH_Others: 0,

          Dura: 0,
          Tenera: 0,
          Dura_Bunch: 0,
          Tenera_Bunch: 0,
          Total_Bunch: qtyTbs,

          ORIGIN: null,
          AFDELING: afdeling,
          SITE: site,
        };
      },
    );
    // console.log(mappedData);
    if (format === true) {
      const root = create({ version: '1.0', encoding: 'UTF-8' }).ele('data');

      mappedData.forEach((dt) => {
        const wbelement = root.ele('WBDATA'); // Create a WBDATA element

        for (const key in dt) {
          // Inside the WBDATA element, create a child element with the current key
          wbelement.ele(key).txt(dt[key]).up();
        }
          // Move up to the root element
          wbelement.up();
      });
      const xml = root.end({ prettyPrint: true });
      console.log(xml);
      return xml;
    }
    return mappedData;
  }

  async searchFirst(query: any) {
    const dataOut = {
      status: true,
      message: '',
      record: {},
      logs: {},
    };
    query.where['isDeleted'] = false;
    try {
      const record = await this.db.transaction.findFirst({
        ...query,
      });

      dataOut.record = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { error };
    }

    return dataOut;
  }

  async openCreateByQrcodeSemai(body: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        transaction: {},
        typeTransaction: '',
        urlPath: '',
      },
      logs: {},
    };

    const { content, typeTransaction } = body;

    try {
      const response = await this.semaiAPI.decodeQrcode({ content });

      if (!response.status) {
        dataOut.status = false;
        dataOut.message = response.message;
        dataOut.logs = response.logs;

        return dataOut;
      }

      const decodedQrcode = response.data.decodedQrcode as QrcodeDto;
      decodedQrcode.deliveryStatus = decodedQrcode.deliveryStatus || 0;

      const statusMapping = this.configWbms.TransactionValidation();
      const urlMapping = this.configWbms.WbTransactionUrlMapping();

      try {
        dataOut.data.typeTransaction =
          statusMapping[typeTransaction][decodedQrcode.vehicleOperationStatus][
            decodedQrcode.deliveryStatus
          ];

        dataOut.data.urlPath =
          urlMapping[typeTransaction][decodedQrcode.vehicleOperationStatus][
            decodedQrcode.deliveryStatus
          ];
      } catch (error) {
        throw new Error(
          'Backend: Vehicle Operation Status atau Delivery Status tidak valid.',
        );
      }

      const transaction: CreateTransactionDto = this.copyQrToTransaction(
        decodedQrcode,
        typeTransaction,
      );

      const dtTransaction = await this.searchFirst({
        where: {
          transportVehiclePlateNo: transaction.transportVehiclePlateNo,
          progressStatus: { not: 15 },
          typeTransaction,
        },
        orderBy: { bonTripNo: 'desc' },
      }).then((res) => res.record);

      // if (decodedQrcode.vehicleOperationStatus == 1) {
      //   if (decodedQrcode.deliveryStatus == 0) {
      //     if (dtTransaction)
      //       throw new Error('Error: vStatus atau dStatus tidak valid.');

      //     transaction = new CreateTransactionDto();

      //     transaction.typeTransaction = typeTransaction;
      //     transaction.bonTripNo = `P041${moment().format('YYMMDDHHmmss')}`; //moment().valueOf()
      //     transaction.progressStatus = 0;
      //   }

      //   if (decodedQrcode.deliveryStatus == 15) {
      //     if (!dtTransaction) {
      //       transaction = new CreateTransactionDto();

      //       transaction.typeTransaction = typeTransaction;
      //       transaction.bonTripNo = `P041${moment().format('YYMMDDHHmmss')}`; //moment().valueOf()
      //     } else transaction = dtTransaction as CreateTransactionDto;

      //     transaction.progressStatus = 10;
      //   }
      // }

      // if (!dtTransaction) {
      //   transaction = new CreateTransactionDto();

      //   transaction.typeTransaction = typeTransaction;
      //   transaction.bonTripNo = '';
      // } else transaction = dtTransaction as CreateTransactionDto;

      dataOut.data.transaction = transaction;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { error };
    }

    return dataOut;
  }

  async searchByQR(query: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {},
      logs: {},
    };

    const { content, typeTransaction } = query;

    // console.log(query);
    // console.log(`${this.WBMS_SEMAI_API_URL}/sites`);

    try {
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { error };
    }

    return dataOut;
  }

  async getByPlateNo(query: any) {
    const dataOut = {
      status: true,
      message: '',
      page: 0,
      totalRecords: 0,
      record: {},
      logs: {},
    };

    const { key, sort = 'asc' } = query;

    try {
      const record = await this.db.transaction.findFirst({
        where: { transportVehiclePlateNo: key, isDeleted: false },
        orderBy: { id: sort },
      });

      dataOut.record = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { error };
    }

    return dataOut;
  }

  async getById(id: string) {
    const dataOut = {
      status: true,
      message: '',
      page: 0,
      totalRecords: 0,
      record: {},
      logs: {},
    };
    try {
      const record = await this.db.transaction.findUnique({
        where: { id, isDeleted: false },
      });

      dataOut.record = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { error };
    }

    return dataOut;
  }

  async create(dto: CreateTransactionDto) {
    const dataOut = {
      status: true,
      message: '',
      page: 0,
      totalRecords: 0,
      record: {},
      logs: {},
    };

    try {
      console.log('create new data:');
      console.log(dto);
      // const product
      // const transporter
      // const driver
      // const originSite
      // const destinationSite
      // const originSourceStorageTank
      // const destinationSinkStorageTank
      const userId = '';
      const arr = {
        productId: 'product',
        customerId: 'customer',
        driverId: 'driver',
        transporterId: 'transporter',
        transportVehicleId: 'transportVehicle',
        originSiteId: 'originSite',
        destinationSiteId: 'destinationSite',
        originSourceStorageTankId: 'originSourceStorageTank',
        destinationSinkStorageTankId: 'destinationSinkStorageTank',
      };
      let filteredDto: any = {};
      let filteredData: any = {};

      for (const prop in dto) {
        if (Object.keys(arr).includes(prop)) {
          filteredDto[prop] = dto[prop];
        } else filteredData[prop] = dto[prop];
      }
      let mappedArray = {};
      for (const prop in filteredDto) {
        mappedArray[arr[prop]] = {
          connect: {
            id: filteredDto[prop],
          },
        };
      }

      const data = {
        ...filteredData,
        ...mappedArray,
        userCreated: userId,
        userModified: '',
      };
      const record = await this.db.transaction.create({
        data,
      });

      dataOut.record = record;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        console.log('Missing properties:', error.meta.target); // e.meta.target contains the missing properties
      }
      if (error instanceof Prisma.PrismaClientValidationError) {
        console.log('Missing properties:', error.message); // e.meta.target contains the missing properties
      }
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { error };

      throw error;
    }

    return dataOut;
  }

  async updateById(id: string, dto: any) {
    const dataOut = {
      status: true,
      message: '',
      page: 0,
      totalRecords: 0,
      record: {},
      logs: {},
    };

    try {
      const record = await this.db.transaction.update({
        where: { id, isDeleted: false },
        data: { ...dto, userModified: '' },
      });

      dataOut.record = record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { error };

      throw error;
    }

    return dataOut;
  }

  async deleteById(id: string, userId: string) {
    const params = {
      where: { id, isDeleted: false },
      data: { isDeleted: true, userModified: userId },
    };

    const record = await this.db.transaction.update(params);

    return record;
  }

  private copyQrToTransaction(
    dto: QrcodeDto,
    typeTransaction,
  ): CreateTransactionDto {
    const transaction = new TransactionEntity();

    transaction.typeTransaction = typeTransaction;

    transaction.bonTripNo = dto.externalRefNo;
    transaction.vehicleStatus = dto.vehicleOperationStatus;
    transaction.deliveryStatus = dto.deliveryStatus || 0;
    transaction.progressStatus = 0;

    transaction.deliveryOrderId = dto?.deliveryOrderId;
    transaction.deliveryOrderNo = dto?.deliveryOrderNo;
    transaction.deliveryDate = dto.deliveryDate
      ? moment(dto?.deliveryDate).toDate()
      : null;

    transaction.transporterCompanyCode = dto.transporterCompanyCode;
    transaction.transporterCompanyName = dto.transporterCompanyFullName;

    transaction.driverNik = dto.driverCitizenNo;
    transaction.driverName = dto.driverFullName;
    transaction.driverLicenseNo = dto.drivingLicenceNo;

    transaction.transportVehiclePlateNo = dto.vehiclePlateNo;
    transaction.transportVehicleProductCode = dto.vehicleProductCode;
    transaction.transportVehicleProductName = dto.vehicleProductName;
    transaction.transportVehicleSccModel = dto.vehicleAllowableSccModel;

    transaction.originWeighInKg = dto.originWeighInKg || 0;
    transaction.originWeighInRemark = dto.originWeighInRemark;
    transaction.originWeighInOperatorName = dto.originWeighInOperatorName;
    transaction.originWeighInTimestamp = dto.originWeighInTimestamp
      ? moment(dto.originWeighInTimestamp).toDate()
      : null;

    transaction.originWeighOutKg = dto.originWeighOutKg || 0;
    transaction.originWeighOutRemark = dto.originWeighOutRemark;
    transaction.originWeighOutOperatorName = dto.originWeighOutOperatorName;
    transaction.originWeighOutTimestamp = dto.originWeighOutTimestamp
      ? moment(dto.originWeighOutTimestamp).toDate()
      : null;

    transaction.potonganWajib = 0;
    transaction.potonganLain = 0;

    transaction.returnWeighInKg = dto.returnWeighInKg || 0;
    transaction.returnWeighInRemark = dto.returnWeighInRemark;
    transaction.returnWeighInOperatorName = dto.returnWeighInOperatorName;
    transaction.returnWeighInTimestamp = dto.returnWeighInTimestamp
      ? moment(dto.returnWeighInTimestamp).toDate()
      : null;

    transaction.returnWeighOutKg = dto.returnWeighOutKg || 0;
    transaction.returnWeighOutRemark = dto.returnWeighOutRemark;
    transaction.returnWeighOutOperatorName = dto.returnWeighOutOperatorName;
    transaction.returnWeighOutTimestamp = dto.returnWeighOutTimestamp
      ? moment(dto.returnWeighOutTimestamp).toDate()
      : null;

    transaction.currentSeal1 = dto.currentSeal1;
    transaction.currentSeal2 = dto.currentSeal2;
    transaction.currentSeal3 = dto.currentSeal3;
    transaction.currentSeal4 = dto.currentSeal4;

    transaction.jsonData = dto.jsonData;

    return transaction;
  }

  // async set(key: string, value: string): Promise<string> {
  //   const client = this.redisService.getClient();
  //   await client.set(key, value);
  //   return value;
  // }

  // async get(key: string): Promise<string | null> {
  //   const client = this.redisService.getClient();
  //   return client.get(key);
  // }
}
