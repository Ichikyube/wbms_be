import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  //   create two main roles
  try {
    const newRole = await prisma.role.create({
      data: {
        name: 'admin',
        description: 'Administrator role',
        permissions: {
          "config": {
            'create:own': ['*'],
            'read:own': ['*'],
            'update:own': ['*'],
            'delete:own': ['*'],
          },
          "configRequest": {
            'create:own': ['*'],
            'read:own': ['*'],
            'update:own': ['*'],
            'delete:own': ['*'],
          },
        }, // Store JSON data as a string
      },
    });

    console.log('Role created with permissions:', newRole);
  } catch (error) {
    console.error('Error creating role:', error);
  } finally {
    await prisma.$disconnect();
  }
  // const adminIT = await prisma.role.create({
  //   data: {
  //     name: 'adminIT',
  //     description: 'Admin IT',
  //     permissions: JSON.stringify({
  //       user: {
  //         'create:any': ['*'],
  //         'read:any': ['*'],
  //         'update:any': ['*'],
  //         'delete:any': ['*'],
  //       },
  //       config: {
  //         'create:any': ['*'],
  //         'read:any': ['*'],
  //         'update:any': ['*'],
  //         'delete:any': ['*'],
  //       },
  //     }),
  //   }
  // });

  // const adminSys = await prisma.role.create({
  //   data: {
  //     name: 'admin_system',
  //     description: 'Admin System',
  //     permissions: {
  //       create: [
  //         {
  //           resource: 'user',
  //           grants: {
  //             create: [
  //               {
  //                 action: 'read',
  //                 possession: 'own',
  //               },
  //               {
  //                 action: 'create',
  //                 possession: 'own',
  //               },
  //               {
  //                 action: 'update',
  //                 possession: 'own',
  //               },
  //               {
  //                 action: 'delete',
  //                 possession: 'own',
  //               },
  //             ],
  //           },
  //         },
  //         {
  //           resource: 'user',
  //           grants: {
  //             create: [
  //               {
  //                 action: 'read',
  //                 possession: 'any',
  //               },
  //               {
  //                 action: 'create',
  //                 possession: 'any',
  //               },
  //               {
  //                 action: 'update',
  //                 possession: 'any',
  //               },
  //               {
  //                 action: 'delete',
  //                 possession: 'any',
  //               },
  //             ],
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
  // const adminHC = await prisma.role.create({
  //   data: {
  //     name: 'adminHC',
  //     description: 'Admin HC',
  //     permissions: {
  //       create: [
  //         {
  //           resource: 'user',
  //           grants: {
  //             create: [
  //               {
  //                 action: 'read',
  //                 possession: 'own',
  //               },
  //               {
  //                 action: 'create',
  //                 possession: 'own',
  //               },
  //               {
  //                 action: 'update',
  //                 possession: 'own',
  //               },
  //               {
  //                 action: 'delete',
  //                 possession: 'own',
  //               },
  //             ],
  //           },
  //         },
  //         {
  //           resource: 'user',
  //           grants: {
  //             create: [
  //               {
  //                 action: 'read',
  //                 possession: 'any',
  //               },
  //               {
  //                 action: 'create',
  //                 possession: 'any',
  //               },
  //               {
  //                 action: 'update',
  //                 possession: 'any',
  //               },
  //               {
  //                 action: 'delete',
  //                 possession: 'any',
  //               },
  //             ],
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });

  const configs = await prisma.config.createMany({
    data: [
      {
        name: 'Zero Lock',
        description:
          'Mengubah status menjadi unlock pada timbangan secara realtime',
        lvlOfApprvl: 3,
        status: 'ACTIVE',
      },
      {
        name: 'UnStable Lock',
        description:
          'Mengubah status Unlock menjadi lock pada timbangan sehingga operator tidak bisa melakukan double entry',
        lvlOfApprvl: 3,
        status: 'ACTIVE',
      },
      {
        name: 'Manual Entry For Weighbridge',
        description:
          'Fitur untuk melakukan scan barcode dan melakukan decode barcode',
        lvlOfApprvl: 3,
        status: 'ACTIVE',
      },
      {
        name: 'Manual Entry For CPO/PKO Transaction',
        description: 'Fitur melakukan input manual untuk transaksi CPO/PKO',
        lvlOfApprvl: 3,
        status: 'DISABLED',
      },
      {
        name: 'Manual Entry For TBS Internal Transaction',
        description:
          'Fitur melakukan input manual untuk transaksi TBS Internal',
        lvlOfApprvl: 3,
        status: 'DISABLED',
      },
      {
        name: 'Manual Entry For TBS External Transaction',
        description:
          'Fitur melakukan input manual untuk transaksi TBS External',
        lvlOfApprvl: 3,
        status: 'DISABLED',
      },
    ],
    skipDuplicates: true,
  });
  // console.log({ masterAdmin, admin, configs });
  console.log(configs);
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
