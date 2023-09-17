import { Prisma, PrismaClient } from '@prisma/client';

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
          name: 'Zero Lock',
          description:
            'Mengubah status menjadi unlock pada timbangan secara realtime',
          lvlOfApprvl: 3,
          default: 'ACTIVE',
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
