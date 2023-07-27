/*
  Warnings:

  - You are about to alter the column `action` on the `Permission` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.
  - You are about to alter the column `possesion` on the `Permission` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Permission` MODIFY `action` VARCHAR(191) NOT NULL,
    MODIFY `possesion` VARCHAR(191) NOT NULL;
