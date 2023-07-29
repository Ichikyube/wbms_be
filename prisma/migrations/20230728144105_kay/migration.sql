-- CreateTable
CREATE TABLE `Province` (
    `id` CHAR(36) NOT NULL,
    `name` VARCHAR(30) NOT NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `userCreated` CHAR(36) NOT NULL,
    `userModified` CHAR(36) NOT NULL,
    `dtCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dtModified` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `City` (
    `id` CHAR(36) NOT NULL,
    `provinceId` CHAR(36) NOT NULL,
    `name` VARCHAR(30) NOT NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `userCreated` CHAR(36) NOT NULL,
    `userModified` CHAR(36) NOT NULL,
    `dtCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dtModified` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `path` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Company` (
    `id` CHAR(36) NOT NULL,
    `refType` INTEGER NOT NULL DEFAULT 0,
    `refId` VARCHAR(50) NULL,
    `code` VARCHAR(50) NOT NULL,
    `codeSap` VARCHAR(50) NULL,
    `name` VARCHAR(50) NOT NULL,
    `shortName` VARCHAR(50) NULL,
    `address` VARCHAR(250) NULL,
    `addressExt` VARCHAR(250) NULL,
    `postalCode` VARCHAR(10) NULL,
    `country` VARCHAR(30) NULL,
    `province` VARCHAR(30) NULL,
    `city` VARCHAR(30) NULL,
    `phone` VARCHAR(30) NULL,
    `url` VARCHAR(100) NULL,
    `contactName` VARCHAR(50) NULL,
    `contactEmail` VARCHAR(30) NULL,
    `contactPhone` VARCHAR(30) NULL,
    `isMillOperator` BOOLEAN NOT NULL DEFAULT false,
    `isTransporter` BOOLEAN NOT NULL DEFAULT false,
    `isSiteOperator` BOOLEAN NOT NULL DEFAULT false,
    `isEstate` BOOLEAN NOT NULL DEFAULT false,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `userCreated` CHAR(36) NOT NULL,
    `userModified` CHAR(36) NOT NULL,
    `dtCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dtModified` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Customer` (
    `id` CHAR(36) NOT NULL,
    `customerTypeId` CHAR(36) NOT NULL,
    `customerGroupId` CHAR(36) NOT NULL,
    `cityId` CHAR(36) NOT NULL,
    `code` VARCHAR(50) NOT NULL,
    `codeSap` VARCHAR(50) NULL,
    `name` VARCHAR(50) NOT NULL,
    `shortName` VARCHAR(50) NULL,
    `address` VARCHAR(250) NULL,
    `addressExt` VARCHAR(250) NULL,
    `postalCode` VARCHAR(10) NULL,
    `phone` VARCHAR(30) NULL,
    `url` VARCHAR(100) NULL,
    `contactName` VARCHAR(50) NULL,
    `contactEmail` VARCHAR(30) NULL,
    `contactPhone` VARCHAR(30) NULL,
    `sortasi` DOUBLE NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `userCreated` CHAR(36) NOT NULL,
    `userModified` CHAR(36) NOT NULL,
    `dtCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dtModified` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CustomerType` (
    `id` CHAR(36) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `shortDesc` VARCHAR(100) NULL,
    `description` VARCHAR(500) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `userCreated` CHAR(36) NOT NULL,
    `userModified` CHAR(36) NOT NULL,
    `dtCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dtModified` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CustomerGroup` (
    `id` CHAR(36) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `shortDesc` VARCHAR(100) NULL,
    `description` VARCHAR(500) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `userCreated` CHAR(36) NOT NULL,
    `userModified` CHAR(36) NOT NULL,
    `dtCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dtModified` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BarcodeType` (
    `id` CHAR(36) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `shortDesc` VARCHAR(100) NULL,
    `description` VARCHAR(500) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `userCreated` CHAR(36) NOT NULL,
    `userModified` CHAR(36) NOT NULL,
    `dtCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dtModified` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Site` (
    `id` CHAR(36) NOT NULL,
    `refType` INTEGER NOT NULL DEFAULT 0,
    `refId` VARCHAR(50) NULL,
    `sourceSiteId` CHAR(36) NULL,
    `sourceSiteRefId` VARCHAR(50) NULL,
    `sourceSiteName` VARCHAR(50) NULL,
    `companyId` CHAR(36) NULL,
    `companyRefId` VARCHAR(50) NULL,
    `companyName` VARCHAR(50) NOT NULL,
    `cityId` CHAR(36) NULL,
    `code` VARCHAR(50) NOT NULL,
    `codeSap` VARCHAR(50) NULL,
    `name` VARCHAR(50) NOT NULL,
    `shortName` VARCHAR(50) NULL,
    `description` VARCHAR(500) NULL,
    `latitude` DOUBLE NULL,
    `longitude` DOUBLE NULL,
    `solarCalibration` INTEGER NULL,
    `isMill` BOOLEAN NOT NULL DEFAULT false,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `userCreated` VARCHAR(36) NOT NULL,
    `userModified` VARCHAR(36) NOT NULL,
    `dtCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dtModified` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mill` (
    `id` CHAR(36) NOT NULL,
    `siteId` CHAR(36) NOT NULL,
    `companyId` CHAR(36) NOT NULL,
    `code` VARCHAR(50) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `userCreated` CHAR(36) NOT NULL,
    `userModified` CHAR(36) NOT NULL,
    `dtCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dtModified` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Weighbridge` (
    `id` CHAR(36) NOT NULL,
    `siteId` CHAR(36) NOT NULL,
    `code` VARCHAR(50) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `userCreated` CHAR(36) NOT NULL,
    `userModified` CHAR(36) NOT NULL,
    `dtCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dtModified` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Config` (
    `id` CHAR(36) NOT NULL,
    `minWeight` DOUBLE NOT NULL DEFAULT 0,
    `imageFolder` VARCHAR(250) NOT NULL,
    `fileFolder` VARCHAR(250) NOT NULL,
    `millHeadCode` VARCHAR(50) NOT NULL,
    `millHeadName` VARCHAR(50) NOT NULL,
    `approval1` VARCHAR(50) NOT NULL,
    `approval2` VARCHAR(50) NOT NULL,
    `notes` VARCHAR(500) NOT NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `userCreated` CHAR(36) NOT NULL,
    `userModified` CHAR(36) NOT NULL,
    `dtCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dtModified` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` CHAR(36) NOT NULL,
    `username` VARCHAR(30) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `nik` VARCHAR(30) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `phone` VARCHAR(30) NULL,
    `division` VARCHAR(30) NOT NULL,
    `position` VARCHAR(30) NOT NULL,
    `profilePic` VARCHAR(191) NOT NULL,
    `roleId` INTEGER NULL,
    `role` VARCHAR(30) NOT NULL,
    `hashedPassword` VARCHAR(100) NOT NULL,
    `hashedRT` VARCHAR(100) NULL,
    `isEmailVerified` BOOLEAN NOT NULL DEFAULT false,
    `isLDAPUser` BOOLEAN NOT NULL DEFAULT true,
    `isDisabled` BOOLEAN NOT NULL DEFAULT false,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `userCreated` CHAR(36) NULL,
    `userModified` CHAR(36) NULL,
    `dtCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dtModified` DATETIME(3) NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_nik_key`(`nik`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Role_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Permission` (
    `id` CHAR(36) NOT NULL,
    `resource` CHAR(36) NOT NULL,
    `roleId` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Grant` (
    `id` CHAR(36) NOT NULL,
    `action` VARCHAR(191) NOT NULL,
    `possesion` VARCHAR(191) NOT NULL,
    `attributes` VARCHAR(191) NOT NULL,
    `PermissionId` CHAR(36) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` CHAR(36) NOT NULL,
    `refType` INTEGER NOT NULL DEFAULT 0,
    `refId` VARCHAR(50) NULL,
    `productGroupName` VARCHAR(191) NULL,
    `code` VARCHAR(50) NOT NULL,
    `codeSap` VARCHAR(50) NULL,
    `name` VARCHAR(50) NOT NULL,
    `shortName` VARCHAR(50) NULL,
    `description` VARCHAR(500) NULL,
    `certification` VARCHAR(100) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `userCreated` CHAR(36) NOT NULL,
    `userModified` CHAR(36) NOT NULL,
    `dtCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dtModified` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductGroup` (
    `id` CHAR(36) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `shortDesc` VARCHAR(100) NULL,
    `description` VARCHAR(500) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `userCreated` CHAR(36) NOT NULL,
    `userModified` CHAR(36) NOT NULL,
    `dtCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dtModified` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StorageTank` (
    `id` CHAR(36) NOT NULL,
    `refType` INTEGER NOT NULL DEFAULT 0,
    `refId` VARCHAR(50) NULL,
    `siteId` CHAR(36) NULL,
    `siteRefId` VARCHAR(50) NULL,
    `siteName` VARCHAR(50) NOT NULL,
    `stockOwnerId` CHAR(36) NULL,
    `stockOwnerRefId` VARCHAR(50) NULL,
    `stockOwnerName` VARCHAR(50) NULL,
    `productId` CHAR(36) NULL,
    `productRefId` VARCHAR(50) NULL,
    `productName` VARCHAR(50) NULL,
    `code` VARCHAR(50) NOT NULL,
    `codeSap` VARCHAR(50) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `shortName` VARCHAR(50) NULL,
    `description` VARCHAR(500) NULL,
    `capacity` DOUBLE NULL,
    `height` DOUBLE NULL,
    `sccModel` INTEGER NOT NULL DEFAULT 0,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `userCreated` CHAR(36) NOT NULL,
    `userModified` CHAR(36) NOT NULL,
    `dtCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dtModified` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Driver` (
    `id` CHAR(36) NOT NULL,
    `refType` INTEGER NOT NULL DEFAULT 0,
    `refId` VARCHAR(50) NULL,
    `codeSap` VARCHAR(50) NOT NULL,
    `companyId` CHAR(36) NULL,
    `companyRefId` VARCHAR(50) NULL,
    `companyName` VARCHAR(50) NOT NULL,
    `nik` VARCHAR(30) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `address` VARCHAR(250) NULL,
    `email` VARCHAR(30) NULL,
    `phone` VARCHAR(30) NULL,
    `licenseNo` VARCHAR(30) NULL,
    `licenseED` DATETIME(3) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `userCreated` CHAR(36) NOT NULL,
    `userModified` CHAR(36) NOT NULL,
    `dtCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dtModified` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Driver_nik_key`(`nik`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TransportVehicle` (
    `id` CHAR(36) NOT NULL,
    `refType` INTEGER NOT NULL DEFAULT 0,
    `refId` VARCHAR(50) NULL,
    `codeSap` VARCHAR(50) NOT NULL,
    `companyId` CHAR(36) NULL,
    `companyRefId` VARCHAR(50) NULL,
    `companyName` VARCHAR(50) NOT NULL,
    `productId` CHAR(36) NULL,
    `productRefId` VARCHAR(50) NULL,
    `productName` VARCHAR(50) NOT NULL,
    `productCode` VARCHAR(50) NOT NULL,
    `plateNo` VARCHAR(10) NOT NULL,
    `capacity` DOUBLE NULL,
    `brand` VARCHAR(30) NULL,
    `model` VARCHAR(30) NULL,
    `sccModel` INTEGER NOT NULL DEFAULT 0,
    `notes` VARCHAR(1000) NULL,
    `licenseED` DATETIME(3) NULL,
    `keurED` DATETIME(3) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `userCreated` CHAR(36) NOT NULL,
    `userModified` CHAR(36) NOT NULL,
    `dtCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dtModified` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transaction` (
    `id` CHAR(36) NOT NULL,
    `tType` INTEGER NOT NULL DEFAULT 1,
    `bonTripNo` CHAR(16) NULL,
    `vehicleStatus` INTEGER NOT NULL DEFAULT 0,
    `deliveryStatus` INTEGER NOT NULL DEFAULT 0,
    `progressStatus` INTEGER NOT NULL DEFAULT 0,
    `deliveryOrderId` CHAR(36) NULL,
    `deliveryOrderNo` VARCHAR(50) NULL,
    `deliveryDate` DATETIME(3) NULL,
    `productId` CHAR(36) NULL,
    `productCode` VARCHAR(30) NULL,
    `productName` VARCHAR(50) NULL,
    `rspoSccModel` INTEGER NOT NULL DEFAULT 0,
    `rspoUniqueNumber` VARCHAR(50) NULL,
    `isccSccModel` INTEGER NOT NULL DEFAULT 0,
    `isccUniqueNumber` VARCHAR(50) NULL,
    `isccGhgValue` DOUBLE NOT NULL DEFAULT 0,
    `isccEeeValue` DOUBLE NOT NULL DEFAULT 0,
    `transporterId` CHAR(36) NULL,
    `transporterCompanyCode` VARCHAR(30) NULL,
    `transporterCompanyName` VARCHAR(50) NULL,
    `transporterCompanyShortName` VARCHAR(30) NULL,
    `driverId` CHAR(36) NULL,
    `driverNik` VARCHAR(30) NULL,
    `driverName` VARCHAR(50) NULL,
    `driverLicenseNo` VARCHAR(30) NULL,
    `transportVehicleId` CHAR(36) NULL,
    `transportVehiclePlateNo` VARCHAR(10) NULL,
    `transportVehicleProductCode` VARCHAR(30) NULL,
    `transportVehicleProductName` VARCHAR(50) NULL,
    `transportVehicleSccModel` INTEGER NOT NULL DEFAULT 0,
    `originSiteId` CHAR(36) NULL,
    `originSiteCode` VARCHAR(30) NULL,
    `originSiteName` VARCHAR(50) NULL,
    `originSourceStorageTankId` CHAR(36) NULL,
    `originSourceStorageTankCode` VARCHAR(30) NULL,
    `originSourceStorageTankName` VARCHAR(50) NULL,
    `destinationSiteId` CHAR(36) NULL,
    `destinationSiteCode` VARCHAR(30) NULL,
    `destinationSiteName` VARCHAR(50) NULL,
    `destinationSinkStorageTankId` CHAR(36) NULL,
    `destinationSinkStorageTankCode` VARCHAR(30) NULL,
    `destinationSinkStorageTankName` VARCHAR(50) NULL,
    `originFfaPercentage` DOUBLE NOT NULL DEFAULT 0,
    `originMoistPercentage` DOUBLE NOT NULL DEFAULT 0,
    `originDirtPercentage` DOUBLE NOT NULL DEFAULT 0,
    `originWeighInKg` DOUBLE NOT NULL DEFAULT 0,
    `originWeighInRemark` VARCHAR(500) NULL,
    `originWeighInOperatorName` VARCHAR(50) NULL,
    `originWeighInTimestamp` DATETIME(3) NULL,
    `originWeighOutKg` DOUBLE NOT NULL DEFAULT 0,
    `originWeighOutRemark` VARCHAR(500) NULL,
    `originWeighOutOperatorName` VARCHAR(50) NULL,
    `originWeighOutTimestamp` DATETIME(3) NULL,
    `potonganWajib` DOUBLE NOT NULL DEFAULT 0,
    `potonganLain` DOUBLE NOT NULL DEFAULT 0,
    `destinationWeighInKg` DOUBLE NOT NULL DEFAULT 0,
    `destinationWeighInRemark` VARCHAR(500) NULL,
    `destinationWeighInOperatorName` VARCHAR(50) NULL,
    `destinationWeighInTimestamp` DATETIME(3) NULL,
    `destinationWeighOutKg` DOUBLE NOT NULL DEFAULT 0,
    `destinationWeighOutRemark` VARCHAR(500) NULL,
    `destinationWeighOutOperatorName` VARCHAR(50) NULL,
    `destinationWeighOutTimestamp` DATETIME(3) NULL,
    `returnWeighInKg` DOUBLE NOT NULL DEFAULT 0,
    `returnWeighInRemark` VARCHAR(500) NULL,
    `returnWeighInOperatorName` VARCHAR(50) NULL,
    `returnWeighInTimestamp` DATETIME(3) NULL,
    `returnWeighOutKg` DOUBLE NOT NULL DEFAULT 0,
    `returnWeighOutRemark` VARCHAR(500) NULL,
    `returnWeighOutOperatorName` VARCHAR(50) NULL,
    `returnWeighOutTimestamp` DATETIME(3) NULL,
    `currentSeal1` VARCHAR(30) NULL,
    `currentSeal2` VARCHAR(30) NULL,
    `currentSeal3` VARCHAR(30) NULL,
    `currentSeal4` VARCHAR(30) NULL,
    `loadedSeal1` VARCHAR(30) NULL,
    `loadedSeal2` VARCHAR(30) NULL,
    `loadedSeal3` VARCHAR(30) NULL,
    `loadedSeal4` VARCHAR(30) NULL,
    `loadingRemark` VARCHAR(500) NULL,
    `loadingOperatorName` VARCHAR(50) NULL,
    `loadingTimestamp` DATETIME(3) NULL,
    `unloadedSeal1` VARCHAR(30) NULL,
    `unloadedSeal2` VARCHAR(30) NULL,
    `unloadedSeal3` VARCHAR(30) NULL,
    `unloadedSeal4` VARCHAR(30) NULL,
    `unloadingRemark` VARCHAR(500) NULL,
    `unloadingOperatorName` VARCHAR(50) NULL,
    `unloadingTimestamp` DATETIME(3) NULL,
    `returnUnloadedSeal1` VARCHAR(30) NULL,
    `returnUnloadedSeal2` VARCHAR(30) NULL,
    `returnUnloadedSeal3` VARCHAR(30) NULL,
    `returnUnloadedSeal4` VARCHAR(30) NULL,
    `returnUnloadingRemark` VARCHAR(500) NULL,
    `returnUnloadingOperatorName` VARCHAR(50) NULL,
    `returnUnloadingTimestamp` DATETIME(3) NULL,
    `jsonData` JSON NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `userCreated` CHAR(36) NOT NULL,
    `userModified` CHAR(36) NOT NULL,
    `dtCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dtModified` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `City` ADD CONSTRAINT `City_provinceId_fkey` FOREIGN KEY (`provinceId`) REFERENCES `Province`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Customer` ADD CONSTRAINT `Customer_customerTypeId_fkey` FOREIGN KEY (`customerTypeId`) REFERENCES `CustomerType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Customer` ADD CONSTRAINT `Customer_customerGroupId_fkey` FOREIGN KEY (`customerGroupId`) REFERENCES `CustomerGroup`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Customer` ADD CONSTRAINT `Customer_cityId_fkey` FOREIGN KEY (`cityId`) REFERENCES `City`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Site` ADD CONSTRAINT `Site_sourceSiteId_fkey` FOREIGN KEY (`sourceSiteId`) REFERENCES `Site`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Site` ADD CONSTRAINT `Site_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Site` ADD CONSTRAINT `Site_cityId_fkey` FOREIGN KEY (`cityId`) REFERENCES `City`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mill` ADD CONSTRAINT `Mill_siteId_fkey` FOREIGN KEY (`siteId`) REFERENCES `Site`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mill` ADD CONSTRAINT `Mill_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Weighbridge` ADD CONSTRAINT `Weighbridge_siteId_fkey` FOREIGN KEY (`siteId`) REFERENCES `Site`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Config` ADD CONSTRAINT `Config_id_fkey` FOREIGN KEY (`id`) REFERENCES `Site`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Permission` ADD CONSTRAINT `Permission_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Grant` ADD CONSTRAINT `Grant_PermissionId_fkey` FOREIGN KEY (`PermissionId`) REFERENCES `Permission`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StorageTank` ADD CONSTRAINT `StorageTank_siteId_fkey` FOREIGN KEY (`siteId`) REFERENCES `Site`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StorageTank` ADD CONSTRAINT `StorageTank_stockOwnerId_fkey` FOREIGN KEY (`stockOwnerId`) REFERENCES `Company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StorageTank` ADD CONSTRAINT `StorageTank_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Driver` ADD CONSTRAINT `Driver_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TransportVehicle` ADD CONSTRAINT `TransportVehicle_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TransportVehicle` ADD CONSTRAINT `TransportVehicle_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_transporterId_fkey` FOREIGN KEY (`transporterId`) REFERENCES `Company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_driverId_fkey` FOREIGN KEY (`driverId`) REFERENCES `Driver`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_originSiteId_fkey` FOREIGN KEY (`originSiteId`) REFERENCES `Site`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_destinationSiteId_fkey` FOREIGN KEY (`destinationSiteId`) REFERENCES `Site`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_originSourceStorageTankId_fkey` FOREIGN KEY (`originSourceStorageTankId`) REFERENCES `StorageTank`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_destinationSinkStorageTankId_fkey` FOREIGN KEY (`destinationSinkStorageTankId`) REFERENCES `StorageTank`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
