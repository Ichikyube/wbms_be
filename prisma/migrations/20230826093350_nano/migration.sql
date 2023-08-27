-- CreateTable
CREATE TABLE `config_admin_list` (
    `id` CHAR(36) NOT NULL,
    `groupmap` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
