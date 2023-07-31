/*
  Warnings:

  - You are about to drop the column `approval1` on the `Config` table. All the data in the column will be lost.
  - You are about to drop the column `approval2` on the `Config` table. All the data in the column will be lost.
  - You are about to drop the column `fileFolder` on the `Config` table. All the data in the column will be lost.
  - You are about to drop the column `imageFolder` on the `Config` table. All the data in the column will be lost.
  - You are about to drop the column `millHeadCode` on the `Config` table. All the data in the column will be lost.
  - You are about to drop the column `millHeadName` on the `Config` table. All the data in the column will be lost.
  - You are about to drop the column `minWeight` on the `Config` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `Config` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Config` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Status` to the `Config` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activeEnd` to the `Config` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activeStart` to the `Config` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Config` table without a default value. This is not possible if the table is not empty.
  - Added the required column `siteId` to the `Config` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Config` DROP FOREIGN KEY `Config_id_fkey`;

-- AlterTable
ALTER TABLE `Config` DROP COLUMN `approval1`,
    DROP COLUMN `approval2`,
    DROP COLUMN `fileFolder`,
    DROP COLUMN `imageFolder`,
    DROP COLUMN `millHeadCode`,
    DROP COLUMN `millHeadName`,
    DROP COLUMN `minWeight`,
    DROP COLUMN `notes`,
    ADD COLUMN `Status` BOOLEAN NOT NULL,
    ADD COLUMN `activeEnd` DATETIME(3) NOT NULL,
    ADD COLUMN `activeStart` DATETIME(3) NOT NULL,
    ADD COLUMN `name` VARCHAR(30) NOT NULL,
    ADD COLUMN `siteId` CHAR(36) NOT NULL,
    ADD COLUMN `type` ENUM('boolean', 'string', 'number', 'bigint', 'array', 'object') NOT NULL DEFAULT 'number';

-- AlterTable
ALTER TABLE `Grant` ADD COLUMN `dtCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `dtModified` DATETIME(3) NULL,
    ADD COLUMN `userCreated` CHAR(36) NULL,
    ADD COLUMN `userModified` CHAR(36) NULL;

-- AlterTable
ALTER TABLE `Permission` ADD COLUMN `dtCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `dtModified` DATETIME(3) NULL,
    ADD COLUMN `userCreated` CHAR(36) NULL,
    ADD COLUMN `userModified` CHAR(36) NULL;

-- AlterTable
ALTER TABLE `Role` ADD COLUMN `dtCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `dtModified` DATETIME(3) NULL,
    ADD COLUMN `userCreated` CHAR(36) NULL,
    ADD COLUMN `userModified` CHAR(36) NULL;

-- CreateTable
CREATE TABLE `_ConfigToSite` (
    `A` CHAR(36) NOT NULL,
    `B` CHAR(36) NOT NULL,

    UNIQUE INDEX `_ConfigToSite_AB_unique`(`A`, `B`),
    INDEX `_ConfigToSite_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Config_name_key` ON `Config`(`name`);

-- AddForeignKey
ALTER TABLE `_ConfigToSite` ADD CONSTRAINT `_ConfigToSite_A_fkey` FOREIGN KEY (`A`) REFERENCES `Config`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ConfigToSite` ADD CONSTRAINT `_ConfigToSite_B_fkey` FOREIGN KEY (`B`) REFERENCES `Site`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
