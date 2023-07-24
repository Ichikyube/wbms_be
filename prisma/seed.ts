// // prisma/seed.ts

// import { PrismaClient, Role, Permission } from '@prisma/client';

// const prisma = new PrismaClient();

// async function seedRoles() {
//   const roles: Role[] = [
//     {
//       name: 'Admin',
//       baseRole: 'ADMIN',
//     },
//     {
//       name: 'Regular',
//       baseRole: 'REGULAR',
//     },
//   ];

//   try {
//     await prisma.role.createMany({
//       data: roles,
//       skipDuplicates: true,
//     });

//     console.log('Roles seeded successfully!');
//   } catch (error) {
//     console.error('Error seeding roles:', error);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// seedRoles();

// async function seedPermissions() {
//   const permissions: Permission[] = [
//     {
//       action: { user: 'WRITE', city: 'READ' },
//     },
//     {
//       action: { city: 'WRITE' },
//     },
//     {
//       action: { user: 'DELETE', city: 'DELETE' },
//     },
//   ];

//   try {
//     await prisma.permission.createMany({
//       data: permissions,
//       skipDuplicates: true,
//     });

//     console.log('Permissions seeded successfully!');
//   } catch (error) {
//     console.error('Error seeding permissions:', error);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// seedPermissions();
