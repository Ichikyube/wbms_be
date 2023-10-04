import { ConfigType, Prisma, PrismaClient } from '@prisma/client';
import { values } from 'lodash';

const prisma = new PrismaClient();

async function main() {
  //   create two main roles
  try {
    const adminIT = await prisma.role.upsert({
      where: { name: 'adminIT' },
      update: {},
      create: {
        id: 1,
        name: 'adminIT',
        description: 'Admin IT',
        permissions: [
          {
            resource: 'user',
            grants: [
              {
                action: 'read',
                possession: 'any',
              },
              {
                action: 'create',
                possession: 'any',
              },
              {
                action: 'update',
                possession: 'any',
              },
              {
                action: 'delete',
                possession: 'any',
              },
            ],
          },
          {
            resource: 'config',
            grants: [
              {
                action: 'read',
                possession: 'any',
              },
              {
                action: 'create',
                possession: 'any',
              },
              {
                action: 'update',
                possession: 'any',
              },
              {
                action: 'delete',
                possession: 'any',
              },
            ],
          },
        ],
      },
    });

    const adminSys = await prisma.role.upsert({
      where: { name: 'admin_system' },
      update: {},
      create: {
        id: 2,
        name: 'admin_system',
        description: 'Admin System',
        permissions: [
          {
            resource: 'user',
            grants: [
              {
                action: 'read',
                possession: 'any',
              },
              {
                action: 'create',
                possession: 'any',
              },
              {
                action: 'update',
                possession: 'any',
              },
              {
                action: 'delete',
                possession: 'any',
              },
            ],
          },
          {
            resource: 'config',
            grants: [
              {
                action: 'read',
                possession: 'any',
              },
              {
                action: 'create',
                possession: 'any',
              },
              {
                action: 'update',
                possession: 'any',
              },
              {
                action: 'delete',
                possession: 'any',
              },
            ],
          },
        ],
      },
    });
    const adminHC = await prisma.role.upsert({
      where: { name: 'admin_HC' },
      update: {},
      create: {
        id: 3,
        name: 'admin_HC',
        description: 'Admin HC blablalbalalbala',
        permissions: [
          {
            resource: 'user',
            grants: [
              {
                action: 'read',
                possession: 'any',
              },
              {
                action: 'create',
                possession: 'any',
              },
              {
                action: 'update',
                possession: 'any',
              },
              {
                action: 'delete',
                possession: 'any',
              },
            ],
          },
          {
            resource: 'config',
            grants: [
              {
                action: 'read',
                possession: 'any',
              },
              {
                action: 'create',
                possession: 'any',
              },
              {
                action: 'update',
                possession: 'any',
              },
              {
                action: 'delete',
                possession: 'any',
              },
            ],
          },
        ],
      },
    });

    const configs = await prisma.config.createMany({
      data: [
        {
          id: 1,
          name: 'zeroLock',
          description:
            'Mengubah status menjadi unlock pada timbangan secara realtime',
          lvlOfApprvl: 3,
          lifespan: null,
          type: ConfigType.Number,
          defaultVal: '0',
        },
        {
          id: 2,
          name: 'stableLock',
          description:
            'Mengubah status Unlock menjadi lock pada timbangan sehingga operator tidak bisa melakukan double entry',
          lvlOfApprvl: 3,
          lifespan: null,
          type: ConfigType.Number,
          defaultVal: '3000',
        },
        {
          id: 3,
          name: 'manualEntryWB',
          description: 'Manual Entry For Weighbridge',
          lvlOfApprvl: 3,
          type: ConfigType.Boolean,
          defaultVal: 'false',
        },
        {
          id: 4,
          name: 'backDatedTemplate',
          description: 'Manual Entry For CPO/PKO Transaction',
          lvlOfApprvl: 3,
          type: ConfigType.Boolean,
          defaultVal: 'false',
          start: new Date(),
        },
        {
          id: 5,
          name: 'backDatedForm',
          description:
            'Fitur melakukan input manual untuk transaksi TBS Internal',
          lvlOfApprvl: 3,
          type: ConfigType.Boolean,
          defaultVal: 'false',
          start: new Date(),
        },
        {
          id: 6,
          name: 'editTransaction',
          description:
            'Fitur melakukan input manual untuk transaksi TBS External',
          lvlOfApprvl: 3,
          type: ConfigType.Boolean,
          defaultVal: 'false',
          start: new Date(),
        },
        {
          id: 7,
          name: 'trxGradingPencentage',
          description:
            'Fitur melakukan input manual untuk transaksi TBS External',
          type: ConfigType.Json,
          defaultVal:
            '{"trxGradingBMPERSEN":0, "trxGradingBLMPERSEN":0, "trxGradingTPPesen":0, "trxGradingSAMPAHPERSEN":0, "trxGradingAIRPERSEN":0, "trxGradingLAINNYAPERSEN":0, "trxGradingWAJIB":0}',
          start: new Date(),
        },
        {
          id: 8,
          name: 'potonganBuahMentah',
          description:
            'Fitur melakukan input manual untuk transaksi TBS External',
          type: ConfigType.Function,
          defaultVal: `trxGradingBMPERSENValidate(
            trxGradingBMPERSEN: number,
            qtyTbs: number,
            adTransactionMILL_ID: string,
            originWeighInKg: number,
            originWeighOutKg: number,
          ): number {
            let persenbm: number;
            let trxGradingBMKG: number = 0;
            const weightnetto = originWeighInKg - originWeighOutKg;
            if (trxGradingBMPERSEN !== null) {
              if (qtyTbs === 0 || qtyTbs === null) {
                // Display an error message (you can handle this as needed)
                console.error('Jumlah janjang 0 atau tidak ada.');
                persenbm = 0;
              } else {
                persenbm = trxGradingBMPERSEN / qtyTbs;
              }
          
              if (adTransactionMILL_ID === 'BA41') {
                trxGradingBMKG = Math.round((persenbm * weightnetto) / 100);
              }
          
              if (adTransactionMILL_ID === 'BN41') {
                trxGradingBMKG = Math.round(persenbm * weightnetto * 0.5);
              }
            }
          
            // Return the relevant value based on your logic
            // For example, you might want to return trxGradingBMKG or trxGradingBMKG
            return trxGradingBMKG; // or return trxGradingBMKG;
          }`,
        },
        {
          id: 9,
          name: 'potonganBuahlewatMatang',
          description:
            'Fitur melakukan input manual untuk transaksi TBS External',
          type: ConfigType.Function,
          defaultVal: `trxGradingBLMPERSENValidate(
            trxGradingBLMPERSEN: number,
            qtyTbs: number,
            adTransactionMILL_ID: string,
            originWeighInKg: number,
            originWeighOutKg: number,
            persentasiTangkaiPanjang: number,
          ): number {
            let persemblm: number = 0;
            const weightnetto = originWeighInKg - originWeighOutKg;
            if (trxGradingBLMPERSEN !== null) {
              if (qtyTbs === 0 || qtyTbs === null) {
                // Display an error message (you can handle this as needed)
                console.error('Jumlah janjang 0 atau tidak ada.');
              } else {
                persemblm = trxGradingBLMPERSEN / qtyTbs;
          
                if (adTransactionMILL_ID === 'BA41') {
                  return Math.round((persemblm * weightnetto) / 100);
                }
          
                if (adTransactionMILL_ID === 'BN41') {
                  persemblm *= 100;
          
                  if (persemblm >= 5) {
                    return Math.round(((25 / 100) * (persemblm - 5) * weightnetto) / 100);
                  } else {
                    return 0;
                  }
                }
              }
            }
          
            // Return 0 if none of the conditions are met
            return 0;
          }`,
        },
        {
          id: 10,
          name: 'potonganTangkaiPanjang',
          description:
            'Fitur melakukan input manual untuk transaksi TBS External',
          type: ConfigType.Function,
          defaultVal: `trxGradingTPPERSENValidate(
            trxGradingTPPesen: number,
            qtyTbs: number,
            adTransactionMILL_ID: string,
            originWeighInKg: number,
            originWeighOutKg: number,
          ): number {
            let persentp: number = 0;
            const weightnetto = originWeighInKg - originWeighOutKg;
            if (trxGradingTPPesen !== null) {
              if (qtyTbs === 0 || qtyTbs === null) {
                // Display an error message (you can handle this as needed)
                console.error('Jumlah janjang 0 atau tidak ada.');
              } else {
                persentp = (trxGradingTPPesen / qtyTbs) * 100;
          
                if (adTransactionMILL_ID === 'BA41') {
                  return Math.round((persentp * weightnetto) / 100);
                }
          
                if (adTransactionMILL_ID === 'BN41') {
                  return Math.round((persentp * (1 / 100) * weightnetto) / 100);
                }
              }
            }
          
            // Return 0 if none of the conditions are met
            return 0;
          }
          `,
        },
        {
          id: 11,
          name: 'potonganTandanKosong',
          description:
            'Fitur melakukan input manual untuk transaksi TBS External',
          type: ConfigType.Function,
          defaultVal: ``,
        },
        {
          id: 12,
          name: 'potonganSampah',
          description:
            'Fitur melakukan input manual untuk transaksi TBS External',
          type: ConfigType.Function,
          defaultVal: `trxGradingSAMPAHPERSENValidate(
            trxGradingSAMPAHPERSEN: number,
            originWeighInKg: number,
            originWeighOutKg: number,
            adTransactionMILLID: string,
          ): number {
            let trxGradingSAMPAHKG = 0;
            const weightnetto = originWeighInKg - originWeighOutKg;
            if (trxGradingSAMPAHPERSEN !== null) {
              trxGradingSAMPAHKG = Math.round(
                (trxGradingSAMPAHPERSEN / weightnetto) * 100,
              );
            }
          
            if (adTransactionMILLID === 'BA4l' || adTransactionMILLID === 'BN41') {
              trxGradingSAMPAHKG = 2 * trxGradingSAMPAHPERSEN;
            }
          
            return trxGradingSAMPAHKG;
          }`,
        },
        {
          id: 13,
          name: 'potonganAir',
          description:
            'Fitur melakukan input manual untuk transaksi TBS External',
          type: ConfigType.Function,
          defaultVal: `trxGradingAIRPERSENValidate(
            trxGradingAIRPERSEN: number,
            originWeighInKg: number,
            originWeighOutKg: number,
          ): number {
            const weightnetto = originWeighInKg - originWeighOutKg;
            if (trxGradingAIRPERSEN !== null) {
              return Math.round((trxGradingAIRPERSEN * weightnetto) / 100);
            }
            return 0; // Return 0 if trxGradingAIRPERSEN is null
          }
          `,
        },
        {
          id: 14,
          name: 'potonganParteno',
          description:
            'Fitur melakukan input manual untuk transaksi TBS External',
          type: ConfigType.Function,
          defaultVal: ``,
        },
        {
          id: 15,
          name: 'potonganBrondolan',
          description:
            'Fitur melakukan input manual untuk transaksi TBS External',
          type: ConfigType.Function,
          defaultVal: ``,
        },
        {
          id: 16,
          name: 'potonganLainnya',
          description:
            'Fitur melakukan input manual untuk transaksi TBS External',
          type: ConfigType.Function,
          defaultVal: `trxGradingLAINNYAPERSENValidate(
            trxGradingLAINNYAPERSEN: number,
            originWeighInKg: number,
            originWeighOutKg: number,
            adTransactionMILL_ID: string,
          ): number {
            const weightnetto = originWeighInKg - originWeighOutKg;
            if (trxGradingLAINNYAPERSEN !== null) {
              let trxGradingLATNNYAKG = Math.round(
                (trxGradingLAINNYAPERSEN * weightnetto) / 100,
              );
          
              if (adTransactionMILL_ID === 'AN41') {
                trxGradingLATNNYAKG = Math.round(
                  (trxGradingLAINNYAPERSEN / 100) * weightnetto,
                );
              }
          
              return trxGradingLATNNYAKG;
            }
          
            // Return 0 if trxGradingLAINNYAPERSEN is null
            return 0;
          }
          `,
        },
        {
          id: 15,
          name: 'potonganWajib',
          description:
            'Fitur melakukan input manual untuk transaksi TBS External',
          lvlOfApprvl: 3,
          lifespan: null,
          type: ConfigType.Function,
          defaultVal: `txxGradingWAJIBValidate(
            trxGradingWAJIB: number,
            originWeighInKg: number,
            originWeighOutKg: number,
            adTransactionMILL_ID: string,
          ): number {
            const weightnetto = originWeighInKg - originWeighOutKg;
            if (trxGradingWAJIB !== null) {
              let trxGradingWAJIBKG = Math.round((trxGradingWAJIB * weightnetto) / 100);
          
              if (adTransactionMILL_ID === 'AN41') {
                trxGradingWAJIBKG = Math.round((trxGradingWAJIB / 100) * weightnetto);
              }
          
              return trxGradingWAJIBKG;
            }
          
            return 0; // Return 0 if trxGradingWAJIB is null
          }`,
        },
        {
          id: 16,
          name: 'trxTypeCodes',
          description:
            'Fitur melakukan input manual untuk transaksi TBS External',
          type: ConfigType.Json,
          defaultVal: `{"company":"DS","millPlant":"DS43","millStoLoc":"TW30","transitStoLoc":""}`,
        },
        {
          id: 17,
          name: 'WBMS_SEMAI_API_KEY',
          description:
            'Fitur melakukan input manual untuk transaksi TBS External',
          type: ConfigType.String,
          defaultVal: `lg8EzYBtTVJnBuTSjQIJkChoDNlGMpso`,
        },
        {
          id: 17,
          name: 'WBMS_SEMAI_API_URL',
          description:
            'Fitur melakukan input manual untuk transaksi TBS External',
          type: ConfigType.String,
          defaultVal: `https://dispatch.dsngroup.co.id/api/external-channel/`,
        },
        {
          id: 18,
          name: 'WBMS_WB_IP',
          description:
            'Fitur melakukan input manual untuk transaksi TBS External',
          type: ConfigType.String,
          defaultVal: `localhost`,
        },
        {
          id: 19,
          name: 'WBMS_WB_MIN_WEIGHT',
          description:
            'Fitur melakukan input manual untuk transaksi TBS External',
          type: ConfigType.Number,
          defaultVal: `1`,
        },
        {
          id: 20,
          name: 'WBMS_WB_PORT',
          description:
            'Fitur melakukan input manual untuk transaksi TBS External',
          type: ConfigType.Number,
          defaultVal: `9001`,
        },
        {
          id: 21,
          name: 'WBMS_WB_STABLE_PERIOD',
          description:
            'Fitur melakukan input manual untuk transaksi TBS External',
          type: ConfigType.Number,
          defaultVal: `3000`,
        },
      ],
      skipDuplicates: true,
    });

    console.log('Role created with permissions:', adminIT, adminSys, adminHC);
    console.log(configs);
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (e.code === 'P2002') {
        console.log(
          'There is a unique constraint violation, a new user cannot be created with this email',
        );
      }
    }
    throw e;
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

export default main;

if (require.main === module) {
  main()
    .catch((error) => {
      console.error(error);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}
