/*
  Warnings:

  - You are about to drop the column `isReaded` on the `Notification` table. All the data in the column will be lost.
  - Added the required column `roleId` to the `RoleArchive` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Notification` DROP COLUMN `isReaded`,
    ADD COLUMN `is_responded` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `target` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `RoleArchive` ADD COLUMN `roleId` INTEGER NOT NULL;
