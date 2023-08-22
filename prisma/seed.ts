import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
    const masterAdmin = await prisma.role.upsert({
        where: { name: 'Admin Master' },
        update: {},
        create: {
            name: "Admin Master",
            permissions: {
                create: [
                    {
                        resource: "users",
                        grants: {
                            create: [
                                {
                                    action: "read",
                                    possession: "any",
                                },
                                {
                                    action: "create",
                                    possession: "any",
                                },
                                {
                                    action: "update",
                                    possession: "any",
                                },
                                {
                                    action: "delete",
                                    possession: "any",
                                },
                            ]
                        }
                    },
                    {
                        resource: "configs",
                        grants: {
                            create: [
                                {
                                    action: "read",
                                    possession: "any",
                                },
                                {
                                    action: "create",
                                    possession: "any",
                                },
                                {
                                    action: "update",
                                    possession: "any",
                                },
                                {
                                    action: "delete",
                                    possession: "any",
                                },
                            ]
                        }
                    }
                ]
            }
        }
    });

    const admin = await prisma.role.upsert({
        where: { name: 'Admin System' },
        update: {},
        create: {
            name: "string",
            permissions: {
                create: [
                    {
                        resource: "user",
                        grants: {
                            create: [
                                {
                                    action: "string",
                                    possession: "string",
                                    attributes: {
                                        create:[
                                            {
                                                "attr": "*"
                                            },
                                        ]
                                    }
                                    
                                },
                                {
                                    action: "read",
                                    possession: "own",
                                },
                                {
                                    action: "create",
                                    possession: "own",
                                },
                                {
                                    action: "update",
                                    possession: "own",
                                },
                                {
                                    action: "delete",
                                    possession: "own",
                                },
                            ]
                        }
                    },
                    {
                        resource: "user",
                        grants: {
                            create: [
                                {
                                    action: "read",
                                    possession: "any",
                                },
                                {
                                    action: "create",
                                    possession: "any",
                                },
                                {
                                    action: "update",
                                    possession: "any",
                                },
                                {
                                    action: "delete",
                                    possession: "any",
                                },
                            ]
                        }
                    }
                ]
            }
        }
    });

    console.log({ masterAdmin, admin });

}

main()
.then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})


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