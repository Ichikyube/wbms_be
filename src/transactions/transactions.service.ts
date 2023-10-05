import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DbService } from 'src/db/db.service';
import moment from 'moment';

import { SemaiService } from 'src/semai/semai.service';
import { ConfigsService } from 'src/configs/configs.service';

import { CreateTransactionDto } from './dto/create-transactionDto';
import { QrcodeDto } from 'src/semai/dto/qrcode.dt';
import { Prisma } from '@prisma/client';
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

  private copyQrToTransaction(dto: QrcodeDto, typeTransaction): CreateTransactionDto {
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
  async syncSap (dataMappings: any) {
    const {
      Company,
      Mill_Plant,
      Mill_SLoc,
      Transit_SLoc,
      Indicator,
      WB_Ticket,
      WB_Date_In,
      WB_Time_In,
      WB_Date_Out,
      WB_Time_Out,
      Material,
      Batch,
      Car_Plate,
      Driver_Name,
      Trans_Code,
      Contract_No,
      Contract_Item,
      Vendor_ID,
      SPB_No,
      Fruit_Type,
      Check_Grade,
      Year_of_Planting,
      Vendor_Qty,
      WB_In_Quantity,
      WB_Out_Quantity,
      Net_Quantity_Before_Grading,
      Grading_Flat_Percent,
      Net_Quantity_After_Grading,
      UoM,
      FROO_Un_ripe,
      FRO_Under_ripe,
      FRX_Over_ripe,
      FR5_Rotten,
      TK_Empty_Bunch,
      BM_Loose_Fruit,
      SMPH_Garbage_and_Dirt,
      TP_Long_Stalk,
      FRP_Parthenocarphic,
      ABN_Abnormal,
      EAT_Eaten_by_Rats,
      FR3_Bunch_LessThan_3_Kg,
      AIR_Water,
      LAIN2_Others,
      FROOBUNCH_Un_ripe,
      FROBUNCH_Under_ripe,
      FRXBUNCH_Over_ripe,
      FR5BUNCH_Rotten,
      TKBUNCH_Empty_Bunch,
      TPBUNCH_Long_Stalk,
      FRPBUNCH_Parthenocarphic,
      ABNBUNCH_Abnormal,
      EATBUNCH_Eaten_by_Rats,
      FR3BUNCH_Bunch_LessThan_3_Kg,
      LAIN2BUNCH_Others,
      Dura,
      Tenera,
      Dura_Bunch,
      Tenera_Bunch,
      Total_Bunch,
      ORIGIN,
      KONSTAN,
      AFDELING,
      SITE
    } = dataMappings;
  }
  async integrateSap (fetch_result: any) {
    const dataMappings = {
      Company: fetch_result.Company,
      Mill_Plant: fetch_result.Mill_Plant,
      Mill_SLoc: fetch_result.Mill_SLoc,
      Transit_SLoc: fetch_result.Transit_SLoc,
      Indicator: fetch_result['Indicator(I/O)'],
      WB_Ticket: fetch_result.WB_Ticket,
      WB_Date_In: fetch_result.WB_Date_In,
      WB_Time_In: fetch_result.WB_Time_In,
      WB_Date_Out: fetch_result.WB_Date_Out,
      WB_Time_Out: fetch_result.WB_Time_Out,
      Material: fetch_result.Material,
      Batch: fetch_result.Batch,
      Car_Plate: fetch_result.Car_Plate,
      Driver_Name: fetch_result.Driver_Name,
      Trans_Code: fetch_result.Trans_Code,
      Contract_No: fetch_result.Contract_No,
      Contract_Item: fetch_result.Contract_Item,
      Vendor_ID: fetch_result.Vendor_ID,
      SPB_No: fetch_result.SPB_No,
      Fruit_Type: fetch_result.Fruit_Type,
      Check_Grade: fetch_result.Check_Grade,
      Year_of_Planting: fetch_result.Year_of_Planting,
      Vendor_Qty: fetch_result.Vendor_Qty,
      WB_In_Quantity: fetch_result.WB_In_Quantity,
      WB_Out_Quantity: fetch_result.WB_Out_Quantity,
      Net_Quantity_Before_Grading: fetch_result.Net_Quantity_Before_Grading,
      Grading_Flat_Percent: fetch_result.Grading_Flat_Percent,
      Net_Quantity_After_Grading: fetch_result.Net_Quantity_After_Grading,
      UoM: fetch_result.UoM,
      FROO_Un_ripe: fetch_result.FROO_Un_ripe,
      FROBUNCH_Under_ripe: fetch_result.FROBUNCH_Under_ripe,
      FRXBUNCH_Over_ripe: fetch_result.FRXBUNCH_Over_ripe,
      FR5BUNCH_Rotten: fetch_result.FR5BUNCH_Rotten,
      TKBUNCH_Empty_Bunch: fetch_result.TKBUNCH_Empty_Bunch,
      TPBUNCH_Long_Stalk: fetch_result.TPBUNCH_Long_Stalk,
      FRPBUNCH_Parthenocarphic: fetch_result.FRPBUNCH_Parthenocarphic,
      ABNBUNCH_Abnormal: fetch_result.ABNBUNCH_Abnormal,
      EATBUNCH_Eaten_by_Rats: fetch_result.EATBUNCH_Eaten_by_Rats,
      FR3BUNCH_Bunch_LessThan_3_Kg: fetch_result.FR3BUNCH_Bunch_LessThan_3_Kg,
      LAIN2BUNCH_Others: fetch_result.LAIN2BUNCH_Others,
      Dura: fetch_result.Dura,
      Tenera: fetch_result.Tenera,
      Dura_Bunch: fetch_result.Dura_Bunch,
      Tenera_Bunch: fetch_result.Tenera_Bunch,
      Total_Bunch: fetch_result.Total_Bunch,
      ORIGIN: fetch_result.ORIGIN,
      KONSTAN: fetch_result.KONSTAN,
      AFDELING: fetch_result.AFDELING,
      SITE: fetch_result.SITE
    }
    
  }
}
