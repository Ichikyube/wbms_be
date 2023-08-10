/*
  Warnings:

  - You are about to drop the `_ConfigToSite` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_ConfigToSite` DROP FOREIGN KEY `_ConfigToSite_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ConfigToSite` DROP FOREIGN KEY `_ConfigToSite_B_fkey`;

-- AlterTable
ALTER TABLE `configuration` MODIFY `start` DATETIME(3) NULL,
    MODIFY `end` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `roles` MODIFY `user_created` VARCHAR(36) NULL,
    MODIFY `user_modified` VARCHAR(36) NULL;

-- AlterTable
ALTER TABLE `transactions` ADD COLUMN `customer_id` CHAR(36) NULL,
    ADD COLUMN `qty_tbs` INTEGER NULL DEFAULT 0,
    ADD COLUMN `qty_tbs_dikembalikan` INTEGER NULL DEFAULT 0,
    ADD COLUMN `qty_tbs_dikirim` INTEGER NULL DEFAULT 0;

-- DropTable
DROP TABLE `_ConfigToSite`;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
