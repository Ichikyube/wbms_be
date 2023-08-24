-- CreateTable
CREATE TABLE `provinces` (
    `id` CHAR(36) NOT NULL,
    `name` VARCHAR(30) NOT NULL,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    `user_created` CHAR(36) NULL,
    `user_modified` CHAR(36) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_modified` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cities` (
    `id` CHAR(36) NOT NULL,
    `province_id` CHAR(36) NOT NULL,
    `name` VARCHAR(30) NOT NULL,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    `user_created` CHAR(36) NULL,
    `user_modified` CHAR(36) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_modified` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Image` (
    `id` CHAR(36) NOT NULL,
    `path` VARCHAR(191) NOT NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_modified` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `companies` (
    `id` CHAR(36) NOT NULL,
    `ref_type` INTEGER NOT NULL DEFAULT 0,
    `ref_id` VARCHAR(50) NULL,
    `code` VARCHAR(50) NOT NULL,
    `code_sap` VARCHAR(50) NULL,
    `name` VARCHAR(50) NOT NULL,
    `short_name` VARCHAR(50) NULL,
    `address` VARCHAR(250) NULL,
    `address_ext` VARCHAR(250) NULL,
    `postal_code` VARCHAR(10) NULL,
    `country` VARCHAR(30) NULL,
    `province` VARCHAR(30) NULL,
    `city` VARCHAR(30) NULL,
    `phone` VARCHAR(30) NULL,
    `url` VARCHAR(100) NULL,
    `contact_name` VARCHAR(50) NULL,
    `contact_email` VARCHAR(30) NULL,
    `contact_phone` VARCHAR(30) NULL,
    `is_mill_operator` BOOLEAN NOT NULL DEFAULT false,
    `is_transporter` BOOLEAN NOT NULL DEFAULT false,
    `is_site_operator` BOOLEAN NOT NULL DEFAULT false,
    `is_estate` BOOLEAN NOT NULL DEFAULT false,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    `user_created` CHAR(36) NULL,
    `user_modified` CHAR(36) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_modified` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customers` (
    `id` CHAR(36) NOT NULL,
    `customer_type_id` CHAR(36) NOT NULL,
    `customer_group_id` CHAR(36) NOT NULL,
    `city_id` CHAR(36) NOT NULL,
    `code` VARCHAR(50) NOT NULL,
    `code_sap` VARCHAR(50) NULL,
    `name` VARCHAR(50) NOT NULL,
    `short_name` VARCHAR(50) NULL,
    `address` VARCHAR(250) NULL,
    `Address_ext` VARCHAR(250) NULL,
    `postal_code` VARCHAR(10) NULL,
    `phone` VARCHAR(30) NULL,
    `url` VARCHAR(100) NULL,
    `contact_name` VARCHAR(50) NULL,
    `contact_email` VARCHAR(30) NULL,
    `contact_phone` VARCHAR(30) NULL,
    `sortasi` DOUBLE NULL,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    `user_created` CHAR(36) NULL,
    `user_modified` CHAR(36) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_modified` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customer_types` (
    `id` CHAR(36) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `short_description` VARCHAR(100) NULL,
    `description` VARCHAR(500) NULL,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    `user_created` CHAR(36) NULL,
    `user_modified` CHAR(36) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_modified` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customer_groups` (
    `id` CHAR(36) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `short_description` VARCHAR(100) NULL,
    `description` VARCHAR(500) NULL,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    `user_created` CHAR(36) NULL,
    `user_modified` CHAR(36) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_modified` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `barcode_types` (
    `id` CHAR(36) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `short_description` VARCHAR(100) NULL,
    `description` VARCHAR(500) NULL,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    `user_created` CHAR(36) NULL,
    `user_modified` CHAR(36) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_modified` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sites` (
    `id` CHAR(36) NOT NULL,
    `ref_type` INTEGER NOT NULL DEFAULT 0,
    `ref_id` VARCHAR(50) NULL,
    `source_site_id` CHAR(36) NULL,
    `source_site_ref_id` VARCHAR(50) NULL,
    `source_site_name` VARCHAR(50) NULL,
    `company_id` CHAR(36) NULL,
    `company_ref_id` VARCHAR(50) NULL,
    `company_name` VARCHAR(50) NOT NULL,
    `city_id` CHAR(36) NULL,
    `code` VARCHAR(50) NOT NULL,
    `code_sap` VARCHAR(50) NULL,
    `name` VARCHAR(50) NOT NULL,
    `short_name` VARCHAR(50) NULL,
    `description` VARCHAR(500) NULL,
    `latitude` DOUBLE NULL,
    `longitude` DOUBLE NULL,
    `solarCalibration` INTEGER NULL,
    `isMill` BOOLEAN NOT NULL DEFAULT false,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    `user_created` VARCHAR(36) NULL,
    `user_modified` VARCHAR(36) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_modified` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mills` (
    `id` CHAR(36) NOT NULL,
    `site_id` CHAR(36) NOT NULL,
    `company_id` CHAR(36) NOT NULL,
    `code` VARCHAR(50) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    `user_created` CHAR(36) NULL,
    `user_modified` CHAR(36) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_modified` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `weighbridges` (
    `id` CHAR(36) NOT NULL,
    `site_id` CHAR(36) NOT NULL,
    `code` VARCHAR(50) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    `user_created` CHAR(36) NULL,
    `user_modified` CHAR(36) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_modified` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `config_approval` (
    `id` CHAR(36) NOT NULL,
    `request_id` CHAR(36) NOT NULL,
    `lvl_1_signed` VARCHAR(191) NOT NULL,
    `lvl_2_signed` VARCHAR(191) NULL,
    `lvl_3_signed` VARCHAR(191) NULL,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    `user_created` CHAR(36) NULL,
    `user_modified` CHAR(36) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_modified` DATETIME(3) NULL,

    UNIQUE INDEX `config_approval_request_id_key`(`request_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `config_requests` (
    `id` CHAR(36) NOT NULL,
    `config_id` INTEGER NOT NULL,
    `status` ENUM('PENDING', 'APPROVED', 'REJECTED') NOT NULL,
    `start` DATETIME(3) NULL,
    `end` DATETIME(3) NULL,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    `user_created` CHAR(36) NULL,
    `user_modified` CHAR(36) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_modified` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `configs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `level_of_approval` INTEGER NOT NULL,
    `status` ENUM('ACTIVE', 'DISABLED') NOT NULL,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    `user_created` CHAR(36) NULL,
    `user_modified` CHAR(36) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_modified` DATETIME(3) NULL,

    UNIQUE INDEX `configs_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `profiles` (
    `id` CHAR(36) NOT NULL,
    `user_id` VARCHAR(36) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `photo` VARCHAR(255) NULL,
    `phone` VARCHAR(30) NULL,
    `division` VARCHAR(30) NOT NULL,
    `position` VARCHAR(30) NOT NULL,
    `date_of_birth` DATETIME(3) NULL,
    `alamat` VARCHAR(255) NULL,
    `user_created` VARCHAR(36) NULL,
    `user_modified` VARCHAR(36) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_modified` DATETIME(3) NULL,

    UNIQUE INDEX `profiles_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` CHAR(36) NOT NULL,
    `username` VARCHAR(30) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `nik` VARCHAR(30) NOT NULL,
    `role_id` VARCHAR(36) NOT NULL,
    `role` VARCHAR(36) NOT NULL,
    `hashed_password` VARCHAR(100) NOT NULL,
    `hashed_rt` VARCHAR(100) NULL,
    `is_email_verified` BOOLEAN NOT NULL DEFAULT false,
    `is_ldap_user` BOOLEAN NOT NULL,
    `is_disabled` BOOLEAN NOT NULL DEFAULT false,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    `user_created` VARCHAR(36) NULL,
    `user_modified` VARCHAR(36) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_modified` DATETIME(3) NULL,

    UNIQUE INDEX `users_username_key`(`username`),
    UNIQUE INDEX `users_email_key`(`email`),
    UNIQUE INDEX `users_nik_key`(`nik`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `id` CHAR(36) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `user_created` VARCHAR(36) NULL,
    `user_modified` VARCHAR(36) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_modified` DATETIME(3) NULL,

    UNIQUE INDEX `roles_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permissions` (
    `id` CHAR(36) NOT NULL,
    `resource` CHAR(36) NOT NULL,
    `role_id` VARCHAR(36) NOT NULL,
    `user_created` VARCHAR(36) NULL,
    `user_modified` VARCHAR(36) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_modified` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `grants` (
    `id` CHAR(36) NOT NULL,
    `action` VARCHAR(191) NOT NULL,
    `possession` VARCHAR(191) NOT NULL,
    `permission_id` CHAR(36) NOT NULL,
    `user_created` VARCHAR(36) NULL,
    `user_modified` VARCHAR(36) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_modified` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `attributes` (
    `id` CHAR(36) NOT NULL,
    `attr` VARCHAR(191) NOT NULL,
    `grant_id` CHAR(36) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `id` CHAR(36) NOT NULL,
    `ref_type` INTEGER NOT NULL DEFAULT 0,
    `ref_id` VARCHAR(50) NULL,
    `productGroupName` VARCHAR(191) NULL,
    `code` VARCHAR(50) NOT NULL,
    `code_sap` VARCHAR(50) NULL,
    `name` VARCHAR(50) NOT NULL,
    `short_name` VARCHAR(50) NULL,
    `description` VARCHAR(500) NULL,
    `certification` VARCHAR(100) NULL,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    `user_created` CHAR(36) NULL,
    `user_modified` CHAR(36) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_modified` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_groups` (
    `id` CHAR(36) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `short_description` VARCHAR(100) NULL,
    `description` VARCHAR(500) NULL,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    `user_created` CHAR(36) NULL,
    `user_modified` CHAR(36) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_modified` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `storage_tanks` (
    `id` CHAR(36) NOT NULL,
    `ref_type` INTEGER NOT NULL DEFAULT 0,
    `ref_id` VARCHAR(50) NULL,
    `site_id` CHAR(36) NULL,
    `site_ref_id` VARCHAR(50) NULL,
    `site_name` VARCHAR(50) NOT NULL,
    `stock_owner_id` CHAR(36) NULL,
    `stock_owner_ref_id` VARCHAR(50) NULL,
    `stock_owner_name` VARCHAR(50) NULL,
    `product_id` CHAR(36) NULL,
    `product_ref_id` VARCHAR(50) NULL,
    `product_name` VARCHAR(50) NULL,
    `code` VARCHAR(50) NOT NULL,
    `code_sap` VARCHAR(50) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `short_name` VARCHAR(50) NULL,
    `description` VARCHAR(500) NULL,
    `capacity` DOUBLE NULL,
    `height` DOUBLE NULL,
    `sccModel` INTEGER NOT NULL DEFAULT 0,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    `user_created` CHAR(36) NULL,
    `user_modified` CHAR(36) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_modified` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `drivers` (
    `id` CHAR(36) NOT NULL,
    `ref_type` INTEGER NOT NULL DEFAULT 0,
    `ref_id` VARCHAR(50) NULL,
    `code_sap` VARCHAR(50) NOT NULL,
    `company_id` CHAR(36) NULL,
    `company_ref_id` VARCHAR(50) NULL,
    `company_name` VARCHAR(50) NOT NULL,
    `nik` VARCHAR(30) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `address` VARCHAR(250) NULL,
    `email` VARCHAR(30) NULL,
    `phone` VARCHAR(30) NULL,
    `license_no` VARCHAR(30) NULL,
    `license_ed` DATETIME(3) NULL,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    `user_created` CHAR(36) NULL,
    `user_modified` CHAR(36) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_modified` DATETIME(3) NULL,

    UNIQUE INDEX `drivers_nik_key`(`nik`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transportation_vehicles` (
    `id` CHAR(36) NOT NULL,
    `ref_type` INTEGER NOT NULL DEFAULT 0,
    `ref_id` VARCHAR(50) NULL,
    `code_sap` VARCHAR(50) NOT NULL,
    `company_id` CHAR(36) NULL,
    `company_ref_id` VARCHAR(50) NULL,
    `company_name` VARCHAR(50) NOT NULL,
    `product_id` CHAR(36) NULL,
    `product_ref_id` VARCHAR(50) NULL,
    `product_name` VARCHAR(50) NOT NULL,
    `product_code` VARCHAR(50) NOT NULL,
    `plate_no` VARCHAR(10) NOT NULL,
    `capacity` DOUBLE NULL,
    `brand` VARCHAR(30) NULL,
    `model` VARCHAR(30) NULL,
    `scc_model` INTEGER NOT NULL DEFAULT 0,
    `notes` VARCHAR(1000) NULL,
    `license_ed` DATETIME(3) NULL,
    `keur_ed` DATETIME(3) NULL,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    `user_created` CHAR(36) NULL,
    `user_modified` CHAR(36) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_modified` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transactions` (
    `id` CHAR(36) NOT NULL,
    `transaction_type` INTEGER NOT NULL DEFAULT 1,
    `bon_trip_no` CHAR(16) NULL,
    `vehicle_status` INTEGER NOT NULL DEFAULT 0,
    `delivery_status` INTEGER NOT NULL DEFAULT 0,
    `progress_status` INTEGER NOT NULL DEFAULT 0,
    `delivery_order_id` CHAR(36) NULL,
    `delivery_order_no` VARCHAR(50) NULL,
    `delivery_date` DATETIME(3) NULL,
    `product_id` CHAR(36) NULL,
    `product_code` VARCHAR(30) NULL,
    `product_name` VARCHAR(50) NULL,
    `customer_id` CHAR(36) NULL,
    `customer_code` VARCHAR(50) NULL,
    `customer_name` VARCHAR(50) NULL,
    `rspo_scc_model` INTEGER NOT NULL DEFAULT 0,
    `rspo_unique_number` VARCHAR(50) NULL,
    `iscc_scc_model` INTEGER NOT NULL DEFAULT 0,
    `iscc_unique_number` VARCHAR(50) NULL,
    `iscc_ghg_value` DOUBLE NOT NULL DEFAULT 0,
    `iscc_eee_value` DOUBLE NOT NULL DEFAULT 0,
    `transporter_id` CHAR(36) NULL,
    `transporter_company_code` VARCHAR(30) NULL,
    `transporter_company_name` VARCHAR(50) NULL,
    `transporter_company_short_name` VARCHAR(30) NULL,
    `driver_id` CHAR(36) NULL,
    `driver_nik` VARCHAR(30) NULL,
    `driver_name` VARCHAR(50) NULL,
    `driver_license_no` VARCHAR(30) NULL,
    `transport_vehicle_id` CHAR(36) NULL,
    `transport_vehicle_plate_no` VARCHAR(12) NULL,
    `transport_vehicle_product_code` VARCHAR(30) NULL,
    `transport_vehicle_product_name` VARCHAR(50) NULL,
    `transport_vehicle_scc_model` INTEGER NULL DEFAULT 0,
    `origin_site_id` CHAR(36) NULL,
    `origin_site_code` VARCHAR(30) NULL,
    `origin_site_name` VARCHAR(50) NULL,
    `origin_source_storage_tank_id` CHAR(36) NULL,
    `origin_source_storage_tank_code` VARCHAR(30) NULL,
    `origin_source_storage_tank_name` VARCHAR(50) NULL,
    `destination_site_id` CHAR(36) NULL,
    `destination_site_code` VARCHAR(30) NULL,
    `destination_site_name` VARCHAR(50) NULL,
    `destination_sink_storage_tank_id` CHAR(36) NULL,
    `destination_sink_storage_tank_code` VARCHAR(30) NULL,
    `destination_sink_storage_tank_name` VARCHAR(50) NULL,
    `origin_ffa_percentage` DOUBLE NOT NULL DEFAULT 0,
    `origin_moist_percentage` DOUBLE NOT NULL DEFAULT 0,
    `origin_dirt_percentage` DOUBLE NOT NULL DEFAULT 0,
    `origin_weigh_in_kg` DOUBLE NOT NULL DEFAULT 0,
    `origin_weigh_in_remark` VARCHAR(500) NULL,
    `origin_weigh_in_operator_name` VARCHAR(50) NULL,
    `origin_weigh_in_timestamp` DATETIME(3) NULL,
    `origin_weigh_out_kg` DOUBLE NOT NULL DEFAULT 0,
    `origin_weigh_out_remark` VARCHAR(500) NULL,
    `origin_weigh_out_operator_name` VARCHAR(50) NULL,
    `origin_weigh_out_timestamp` DATETIME(3) NULL,
    `potongan_wajib` DOUBLE NOT NULL DEFAULT 0,
    `potongan_lain` DOUBLE NOT NULL DEFAULT 0,
    `destination_weigh_in_kg` DOUBLE NOT NULL DEFAULT 0,
    `destination_weigh_in_remark` VARCHAR(500) NULL,
    `destination_weigh_in_operator_name` VARCHAR(50) NULL,
    `destination_weigh_in_timestamp` DATETIME(3) NULL,
    `destination_weigh_out_kg` DOUBLE NOT NULL DEFAULT 0,
    `destination_weigh_out_remark` VARCHAR(500) NULL,
    `destination_weigh_out_operator_name` VARCHAR(50) NULL,
    `destination_weigh_out_timestamp` DATETIME(3) NULL,
    `return_weigh_in_kg` DOUBLE NOT NULL DEFAULT 0,
    `return_weigh_in_remark` VARCHAR(500) NULL,
    `return_weigh_in_operator_name` VARCHAR(50) NULL,
    `return_weigh_in_timestamp` DATETIME(3) NULL,
    `return_weigh_out_kg` DOUBLE NOT NULL DEFAULT 0,
    `return_weigh_out_remark` VARCHAR(500) NULL,
    `return_weigh_out_operator_name` VARCHAR(50) NULL,
    `return_weigh_out_timestamp` DATETIME(3) NULL,
    `current_seal_1` VARCHAR(30) NULL,
    `current_seal_2` VARCHAR(30) NULL,
    `current_seal_3` VARCHAR(30) NULL,
    `current_seal_4` VARCHAR(30) NULL,
    `loaded_seal_1` VARCHAR(30) NULL,
    `loaded_seal_2` VARCHAR(30) NULL,
    `loaded_seal_3` VARCHAR(30) NULL,
    `loaded_seal_4` VARCHAR(30) NULL,
    `loading_remark` VARCHAR(500) NULL,
    `loading_operator_name` VARCHAR(50) NULL,
    `loading_timestamp` DATETIME(3) NULL,
    `unloaded_seal_1` VARCHAR(30) NULL,
    `unloaded_seal_2` VARCHAR(30) NULL,
    `unloaded_seal_3` VARCHAR(30) NULL,
    `unloaded_seal_4` VARCHAR(30) NULL,
    `unloading_remark` VARCHAR(500) NULL,
    `unloading_operator_name` VARCHAR(50) NULL,
    `unloading_timestamp` DATETIME(3) NULL,
    `return_unloaded_seal_1` VARCHAR(30) NULL,
    `return_unloaded_seal_2` VARCHAR(30) NULL,
    `return_unloaded_seal_3` VARCHAR(30) NULL,
    `return_unloaded_seal_4` VARCHAR(30) NULL,
    `return_unloading_remark` VARCHAR(500) NULL,
    `return_unloading_operator_name` VARCHAR(50) NULL,
    `return_unloading_timestamp` DATETIME(3) NULL,
    `qty_tbs` INTEGER NULL DEFAULT 0,
    `qty_tbs_dikirim` INTEGER NULL DEFAULT 0,
    `qty_tbs_dikembalikan` INTEGER NULL DEFAULT 0,
    `jsonData` JSON NULL,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    `user_created` VARCHAR(36) NULL,
    `user_modified` VARCHAR(36) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_modified` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_other_product` (
    `A` CHAR(36) NOT NULL,
    `B` CHAR(36) NOT NULL,

    UNIQUE INDEX `_other_product_AB_unique`(`A`, `B`),
    INDEX `_other_product_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cities` ADD CONSTRAINT `cities_province_id_fkey` FOREIGN KEY (`province_id`) REFERENCES `provinces`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customers` ADD CONSTRAINT `customers_customer_type_id_fkey` FOREIGN KEY (`customer_type_id`) REFERENCES `customer_types`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customers` ADD CONSTRAINT `customers_customer_group_id_fkey` FOREIGN KEY (`customer_group_id`) REFERENCES `customer_groups`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customers` ADD CONSTRAINT `customers_city_id_fkey` FOREIGN KEY (`city_id`) REFERENCES `cities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sites` ADD CONSTRAINT `sites_source_site_id_fkey` FOREIGN KEY (`source_site_id`) REFERENCES `sites`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sites` ADD CONSTRAINT `sites_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `companies`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sites` ADD CONSTRAINT `sites_city_id_fkey` FOREIGN KEY (`city_id`) REFERENCES `cities`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mills` ADD CONSTRAINT `mills_site_id_fkey` FOREIGN KEY (`site_id`) REFERENCES `sites`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mills` ADD CONSTRAINT `mills_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `companies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `weighbridges` ADD CONSTRAINT `weighbridges_site_id_fkey` FOREIGN KEY (`site_id`) REFERENCES `sites`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `config_approval` ADD CONSTRAINT `config_approval_request_id_fkey` FOREIGN KEY (`request_id`) REFERENCES `config_requests`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `config_requests` ADD CONSTRAINT `config_requests_config_id_fkey` FOREIGN KEY (`config_id`) REFERENCES `configs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `profiles` ADD CONSTRAINT `profiles_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `permissions` ADD CONSTRAINT `permissions_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `grants` ADD CONSTRAINT `grants_permission_id_fkey` FOREIGN KEY (`permission_id`) REFERENCES `permissions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `attributes` ADD CONSTRAINT `attributes_grant_id_fkey` FOREIGN KEY (`grant_id`) REFERENCES `grants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `storage_tanks` ADD CONSTRAINT `storage_tanks_site_id_fkey` FOREIGN KEY (`site_id`) REFERENCES `sites`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `storage_tanks` ADD CONSTRAINT `storage_tanks_stock_owner_id_fkey` FOREIGN KEY (`stock_owner_id`) REFERENCES `companies`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `storage_tanks` ADD CONSTRAINT `storage_tanks_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `drivers` ADD CONSTRAINT `drivers_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `companies`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transportation_vehicles` ADD CONSTRAINT `transportation_vehicles_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `companies`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transportation_vehicles` ADD CONSTRAINT `transportation_vehicles_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_transporter_id_fkey` FOREIGN KEY (`transporter_id`) REFERENCES `companies`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_driver_id_fkey` FOREIGN KEY (`driver_id`) REFERENCES `drivers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_origin_site_id_fkey` FOREIGN KEY (`origin_site_id`) REFERENCES `sites`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_destination_site_id_fkey` FOREIGN KEY (`destination_site_id`) REFERENCES `sites`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_origin_source_storage_tank_id_fkey` FOREIGN KEY (`origin_source_storage_tank_id`) REFERENCES `storage_tanks`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_destination_sink_storage_tank_id_fkey` FOREIGN KEY (`destination_sink_storage_tank_id`) REFERENCES `storage_tanks`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_other_product` ADD CONSTRAINT `_other_product_A_fkey` FOREIGN KEY (`A`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_other_product` ADD CONSTRAINT `_other_product_B_fkey` FOREIGN KEY (`B`) REFERENCES `transportation_vehicles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
