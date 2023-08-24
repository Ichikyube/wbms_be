import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  //   create two main roles
  const masterAdmin = await prisma.role.upsert({
    where: { name: 'Admin Master' },
    update: {},
    create: {
      name: 'Admin Master',
      permissions: {
        create: [
          {
            resource: 'users',
            grants: {
              create: [
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
          },
          {
            resource: 'configs',
            grants: {
              create: [
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
          },
        ],
      },
    },
  });

  const admin = await prisma.role.upsert({
    where: { name: 'Admin System' },
    update: {},
    create: {
      name: 'Admin System',
      permissions: {
        create: [
          {
            resource: 'user',
            grants: {
              create: [
                {
                  action: 'read',
                  possession: 'own',
                },
                {
                  action: 'create',
                  possession: 'own',
                },
                {
                  action: 'update',
                  possession: 'own',
                },
                {
                  action: 'delete',
                  possession: 'own',
                },
              ],
            },
          },
          {
            resource: 'user',
            grants: {
              create: [
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
          },
        ],
      },
    },
  });

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
