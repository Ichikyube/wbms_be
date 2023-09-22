-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: wbms-db
-- Generation Time: Sep 22, 2023 at 03:02 AM
-- Server version: 11.0.3-MariaDB-log
-- PHP Version: 8.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wbms`
--

-- --------------------------------------------------------

--
-- Table structure for table `barcode_types`
--

CREATE TABLE `barcode_types` (
  `id` char(36) NOT NULL,
  `name` varchar(50) NOT NULL,
  `short_description` varchar(100) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `user_created` char(36) DEFAULT NULL,
  `user_modified` char(36) DEFAULT NULL,
  `date_created` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `date_modified` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` char(36) NOT NULL,
  `province_id` char(36) NOT NULL,
  `name` varchar(30) NOT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `user_created` char(36) DEFAULT NULL,
  `user_modified` char(36) DEFAULT NULL,
  `date_created` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `date_modified` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id`, `province_id`, `name`, `is_deleted`, `user_created`, `user_modified`, `date_created`, `date_modified`) VALUES
('05f29fdc-4d65-462d-8ef2-7d31b87da688', 'df8ad7ea-8bbb-4cbe-97e6-120bb6a11572', 'LAMPUNG', 0, '', '', '2023-08-21 02:38:17.031', '2023-08-21 02:38:17.031'),
('11', '1', 'Mamuju', 0, '', '', '2023-08-10 06:50:49.518', NULL),
('12', '2', 'Jayapura', 0, '', '', '2023-08-10 06:50:49.518', NULL),
('13', '3', 'Balikpapan', 0, '', '', '2023-08-10 06:50:49.518', NULL),
('14', '4', 'Pangkalpinang', 0, '', '', '2023-08-10 06:50:49.518', NULL),
('15', '5', 'Ambon', 0, '', '', '2023-08-10 06:50:49.518', NULL),
('16', '6', 'Palembang', 0, '', '', '2023-08-10 06:51:28.102', NULL),
('17', '7', 'Kotamobagu', 0, '', '', '2023-08-10 06:51:28.102', NULL),
('18', '8', 'Jambi', 0, '', '', '2023-08-10 06:51:28.102', NULL),
('19', '9', 'Kupang', 0, '', '', '2023-08-10 06:51:28.102', NULL),
('1b98378f-c0f9-4f7a-aa6f-1139a62cb6fb', '836312e3-f493-4b4e-9bb3-18cdc2c30894', 'SURAKARTA', 0, '', '', '2023-08-21 02:37:45.559', '2023-08-21 02:37:45.559'),
('20', '10', 'Pangkalpinang', 0, '', '', '2023-08-10 06:51:28.102', NULL),
('2e73ee99-75e5-4cb8-9e8d-4e4a52fa8217', '7c08395d-9c89-4147-bf65-192401277c36', 'BANDUNG', 0, '', '', '2023-08-21 02:37:51.329', '2023-08-21 02:37:51.329'),
('301d335d-6e80-4426-bd36-f3b5c42a3fe1', '7c08395d-9c89-4147-bf65-192401277c36', 'BEKASI', 0, '', '', '2023-08-21 02:37:13.170', '2023-08-21 02:37:13.170'),
('62d4570b-97b5-4574-9869-48e91649d920', 'c3f6fe22-cdfc-4edf-af3c-3e571db510f0', 'TERNATE', 1, '', '', '2023-08-21 02:44:37.716', '2023-08-21 06:54:49.577'),
('6cae8012-0321-4df9-9178-caf362cab169', '3bf5fc67-2d5e-4fef-b088-955234862c44', 'SAMPIT', 0, '', '', '2023-08-21 02:38:03.260', '2023-08-21 02:38:03.260'),
('906165d5-8d4b-484c-9bc4-8f44d3dc23b2', 'dbf614be-dba9-40f3-beec-a373d0749a10', 'PONTIANAK', 0, '', '', '2023-08-21 02:38:09.184', '2023-08-21 02:38:09.184'),
('af7e6083-8182-460b-b6e3-c19178705523', '1e243c79-3f53-4e9d-bfd6-d4dfb5cdd934', 'JOGJA', 0, '', '', '2023-08-21 02:38:38.779', '2023-08-21 06:54:59.693'),
('b1afd79d-8e22-4c0f-8c68-dde078378464', '9e02d81b-c563-4aa9-8280-9a5fdc8284e3', 'NGAWI', 0, '', '', '2023-08-21 02:38:32.081', '2023-08-21 02:38:32.081'),
('e80e8636-55ab-4dac-82cd-ff418c4c380f', '9e02d81b-c563-4aa9-8280-9a5fdc8284e3', 'SURABAYA', 0, '', '', '2023-08-21 02:37:26.123', '2023-08-21 02:37:26.123');

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` char(36) NOT NULL,
  `ref_type` int(11) NOT NULL DEFAULT 0,
  `ref_id` varchar(50) DEFAULT NULL,
  `code` varchar(50) NOT NULL,
  `code_sap` varchar(50) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `address` varchar(250) DEFAULT NULL,
  `address_ext` varchar(250) DEFAULT NULL,
  `postal_code` varchar(10) DEFAULT NULL,
  `country` varchar(30) DEFAULT NULL,
  `province` varchar(30) DEFAULT NULL,
  `city` varchar(30) DEFAULT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `contact_name` varchar(50) DEFAULT NULL,
  `contact_email` varchar(30) DEFAULT NULL,
  `contact_phone` varchar(30) DEFAULT NULL,
  `is_mill_operator` tinyint(1) NOT NULL DEFAULT 0,
  `is_transporter` tinyint(1) NOT NULL DEFAULT 0,
  `is_site_operator` tinyint(1) NOT NULL DEFAULT 0,
  `is_estate` tinyint(1) NOT NULL DEFAULT 0,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `user_created` char(36) DEFAULT NULL,
  `user_modified` char(36) DEFAULT NULL,
  `date_created` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `date_modified` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `ref_type`, `ref_id`, `code`, `code_sap`, `name`, `short_name`, `address`, `address_ext`, `postal_code`, `country`, `province`, `city`, `phone`, `url`, `contact_name`, `contact_email`, `contact_phone`, `is_mill_operator`, `is_transporter`, `is_site_operator`, `is_estate`, `is_deleted`, `user_created`, `user_modified`, `date_created`, `date_modified`) VALUES
('1d46a39a-df09-4db4-b6a3-f56318dae2d9', 0, NULL, '345x', '345xx', 'PT. AGRO ANUGRAH LESTARI', 'AAL', 'Bekasi', 'KRANJI', '17135', 'Indonesia', 'Jawa Barat', 'Kota Bekasi', '089111222333', 'https://www.youtube.com/watch?v=fq7k_gVV5x8', 'MPE', 'testing@gmail.com', '089111222333', 1, 1, 0, 0, 0, '', '', '2023-08-13 03:06:54.450', '2023-08-13 03:06:54.450'),
('32c68957-2326-426a-836e-0ec8ade49ede', 0, NULL, '456', '456x', 'PT. AGRO PLANKAN LESTARI', 'APL', 'Bekasi', 'KRANJI', '17135', 'Indonesia', 'Jawa Barat', 'Kota Bekasi', '089111222333', 'https://www.youtube.com/watch?v=fq7k_gVV5x8', 'MPE', 'testing@gmail.com', '089111222333', 1, 1, 1, 1, 0, '', '', '2023-08-13 03:04:44.393', '2023-08-13 03:04:44.393'),
('4eab1203-d752-44c1-9d5b-739f77454ded', 0, NULL, '123', '123', 'PT. APA GEK', 'PAG', 'Jalan Lapangan Bola RT 01/15 Kranji, Bekasi Barat', 'TEST', '17135', 'Indonesia', 'Jawa Barat', 'Kota Bekasi', '089111222333', 'https://www.youtube.com/watch?v=fq7k_gVV5x8', 'MPE', 'testing@gmail.com', '089111222333', 1, 1, 1, 1, 1, '', '', '2023-08-21 02:45:17.359', '2023-08-21 03:07:22.264'),
('6cf3df4c-bd16-40f2-8be4-61621c9cf0aa', 0, NULL, '123', '123', 'PT. MULTI JAYA PERKASA', 'MJP', 'Bekasi', 'KRANJI', '17135', 'Indonesia', 'Jawa Barat', 'Kota Bekasi', '089111222333', 'https://www.youtube.com/watch?v=fq7k_gVV5x8', 'MPE', 'testing@gmail.com', '089111222333', 1, 1, 1, 1, 0, '', '', '2023-08-13 03:05:22.818', '2023-08-13 03:05:22.818'),
('7b80cc52-9926-4072-9e87-02b722aac45e', 0, NULL, '123', '123x', 'PT. MULTI PRIMA ENTAKAI', 'MPE', 'Bekasi', 'Kranji, Bekasi Barat', '17135', 'Indonesia', 'Jawa Barat', 'Kota Bekasi', '089111222333', 'https://www.youtube.com/watch?v=fq7k_gVV5x8', 'MPE', 'testing@gmail.com', '089111222333', 1, 1, 1, 1, 0, '', '', '2023-08-13 03:03:12.571', '2023-08-13 03:03:12.571'),
('84da0b4e-0c74-4542-8b51-07e3a60621e5', 0, NULL, '222Q', 'Q222', 'PT. TINTIN BOYOK SAWIT MAKMUR', 'TBSM', 'Bekasi', 'BEKASI', '17135', 'Indonesia', 'Jawa Barat', 'Kota Bekasi', '089111222333', 'https://www.youtube.com/watch?v=fq7k_gVV5x8', 'MPE', 'testing@gmail.com', '089111222333', 1, 0, 1, 0, 0, '', '', '2023-08-13 03:09:22.670', '2023-08-13 03:09:22.670'),
('944630de-441e-46d6-aa2e-7c167f958fb7', 0, NULL, '555E', 'E555', 'PT. SEGORI SERASAU SEJAHTERA', 'SSS', 'Bekasi', 'PRINDAVAN', '17135', 'Indonesia', 'Jawa Barat', 'Kota Bekasi', '089111222333', 'https://www.youtube.com/watch?v=fq7k_gVV5x8', 'MPE', 'testing@gmail.com', '089111222333', 0, 1, 1, 0, 0, '', '', '2023-08-13 03:10:40.544', '2023-08-13 03:10:40.544'),
('d866e74d-204e-47d1-8c2f-ee80d76611a3', 0, NULL, '123', '123', 'PT. SURYA DELI', 'SD', 'Bekasi', 'KRANJI', '17135', 'Indonesia', 'Jawa Barat', 'Kota Bekasi', '089111222333', 'https://www.youtube.com/watch?v=fq7k_gVV5x8', 'MPE', 'testing@gmail.com', '089111222333', 0, 0, 0, 0, 0, '', '', '2023-08-13 03:05:58.141', '2023-08-13 03:05:58.141'),
('E1F', 0, NULL, 'APU67', NULL, 'PT. PERMATA HIJAU SARANA', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, NULL, NULL, '2023-08-10 07:08:19.821', NULL),
('e23c72a1-e840-4c1a-8400-f33fcdc91b98', 0, NULL, '111XY', '111YX', 'PT. KOP BUN TIRTA MAKMUR SEJAHTERA', 'KTMS', 'Bekasi', 'KRANJI', '17135', 'Indonesia', 'Jawa Barat', 'Kota Bekasi', '089111222333', 'https://www.youtube.com/watch?v=fq7k_gVV5x8', 'MPE', 'testing@gmail.com', '089111222333', 0, 0, 1, 1, 0, '', '', '2023-08-13 03:07:55.555', '2023-08-13 03:07:55.555'),
('e2a884aa-bd63-4f22-ada1-f47422e23456', 0, NULL, '777A', 'A777', 'PT. PRIMA GENERASI SUKSES', 'PGS', 'Bekasi', 'KRANJI', '17135', 'Indonesia', 'Jawa Barat', 'Kota Bekasi', '089111222333', 'https://www.youtube.com/watch?v=fq7k_gVV5x8', 'MPE', 'testing@gmail.com', '089111222333', 0, 1, 0, 1, 0, '', '', '2023-08-13 03:08:40.761', '2023-08-13 03:08:40.761'),
('E2P', 0, NULL, 'PGV46', NULL, 'PT. MULTI PRIMA ENTAKAI', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, NULL, NULL, '2023-08-10 07:08:55.838', NULL),
('f921742e-4ca9-4a40-ab0d-8a1413a4f462', 0, NULL, '444W', 'W444', 'PT. MULTI PRIMA ENTAKAI', 'MPE', 'Bekasi', 'WAKANDA', '17135', 'Indonesia', 'Jawa Barat', 'Kota Bekasi', '089111222333', 'https://www.youtube.com/watch?v=fq7k_gVV5x8', 'MPE', 'testing@gmail.com', '089111222333', 1, 0, 0, 1, 0, '', '', '2023-08-13 03:10:02.563', '2023-08-13 03:10:02.563');

-- --------------------------------------------------------

--
-- Table structure for table `configs`
--

CREATE TABLE `configs` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `level_of_approval` int(11) NOT NULL,
  `status` enum('ACTIVE','DISABLED') DEFAULT NULL,
  `start` datetime(3) DEFAULT NULL,
  `end` datetime(3) DEFAULT NULL,
  `livespan` int(11) DEFAULT 43200,
  `user_modified` char(36) DEFAULT NULL,
  `date_modified` datetime(3) DEFAULT NULL,
  `type` enum('Boolean','Int','Json','Status','String') NOT NULL,
  `default_value` varchar(191) NOT NULL,
  `temp_value` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `configs`
--

INSERT INTO `configs` (`id`, `name`, `description`, `level_of_approval`, `status`, `start`, `end`, `livespan`, `user_modified`, `date_modified`, `type`, `default_value`, `temp_value`) VALUES
(1, 'Zero Lock', 'Mengubah status menjadi unlock pada timbangan secara realtime', 3, 'ACTIVE', NULL, NULL, 43200, NULL, '2023-09-21 09:58:40.199', 'Int', '0', NULL),
(2, 'UnStable Lock', 'Mengubah status Unlock menjadi lock pada timbangan sehingga operator tidak bisa melakukan double entry', 3, 'ACTIVE', NULL, NULL, 43200, NULL, '2023-09-21 09:58:40.199', 'Int', '3000', NULL),
(3, 'manualEntryWB', 'Manual Entry For Weighbridge', 3, 'ACTIVE', NULL, NULL, 43200, NULL, '2023-09-21 09:58:40.199', 'Boolean', 'false', NULL),
(4, 'backdatedTemplate', 'Manual Entry For CPO/PKO Transaction', 3, 'ACTIVE', '2023-09-22 09:58:40.188', NULL, 43200, NULL, '2023-09-21 09:58:40.199', 'Boolean', 'false', NULL),
(5, 'backDatedForm', 'Fitur melakukan input manual untuk transaksi TBS Internal', 3, 'ACTIVE', '2023-09-21 09:58:40.188', NULL, 43200, NULL, '2023-09-21 09:58:40.199', 'Boolean', 'false', NULL),
(6, 'editTransaction', 'Fitur melakukan input manual untuk transaksi TBS External', 3, 'ACTIVE', '2023-09-21 09:58:40.188', NULL, 43200, NULL, '2023-09-21 09:58:40.199', 'Boolean', 'false', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `config_admin_list`
--

CREATE TABLE `config_admin_list` (
  `id` int(11) NOT NULL,
  `lvl_map` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`lvl_map`)),
  `user_created` char(36) DEFAULT NULL,
  `date_created` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `config_admin_list`
--

INSERT INTO `config_admin_list` (`id`, `lvl_map`, `user_created`, `date_created`) VALUES
(1, '{\"7f20c889-43c1-4831-a454-64b9400a75fb\":\"PJ1\"}', NULL, '2023-09-18 22:14:55.373'),
(2, '{\"7f20c889-43c1-4831-a454-64b9400a75fb\":\"PJ1\",\"12a4633d-e044-40a8-8816-1b877d41d754\":\"PJ2\",\"93dd85d3-83ce-4a81-8e8e-11ad530280f3\":\"PJ3\"}', '1a4492cc-6418-46cb-9b6e-db8853267eb1', '2023-09-21 09:28:30.503');

-- --------------------------------------------------------

--
-- Table structure for table `config_requests`
--

CREATE TABLE `config_requests` (
  `id` char(36) NOT NULL,
  `config_id` int(11) NOT NULL,
  `status` enum('PENDING','APPROVED','REJECTED') NOT NULL,
  `approval` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`approval`)),
  `schedule` datetime(3) NOT NULL,
  `user_created` char(36) DEFAULT NULL,
  `user_modified` char(36) DEFAULT NULL,
  `date_created` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `date_modified` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `config_requests`
--

INSERT INTO `config_requests` (`id`, `config_id`, `status`, `approval`, `schedule`, `user_created`, `user_modified`, `date_created`, `date_modified`) VALUES
('27d86d48-a209-44d1-a7ca-2e7df6e69f06', 1, 'APPROVED', '[\"7f20c889-43c1-4831-a454-64b9400a75fb\",\"12a4633d-e044-40a8-8816-1b877d41d754\",\"93dd85d3-83ce-4a81-8e8e-11ad530280f3\"]', '2023-09-29 21:34:00.000', NULL, NULL, '2023-09-21 21:34:09.072', '2023-09-21 22:02:40.707'),
('2ccc9439-f045-4939-8f9a-0139cd6ffc92', 3, 'REJECTED', '[\"7f20c889-43c1-4831-a454-64b9400a75fb\"]', '2023-09-21 20:22:00.000', NULL, NULL, '2023-09-21 20:22:30.351', '2023-09-21 20:50:39.022'),
('3afcb1d0-4e7a-4a56-b448-2412a15c1c2d', 3, 'APPROVED', '[\"7f20c889-43c1-4831-a454-64b9400a75fb\",\"12a4633d-e044-40a8-8816-1b877d41d754\",\"93dd85d3-83ce-4a81-8e8e-11ad530280f3\"]', '2023-09-23 21:07:00.000', NULL, NULL, '2023-09-21 21:07:18.147', '2023-09-21 21:10:44.622'),
('3e447d2b-74b6-4ebd-9847-4228b4d09353', 3, 'REJECTED', '[\"7f20c889-43c1-4831-a454-64b9400a75fb\"]', '2023-09-21 20:54:00.000', NULL, NULL, '2023-09-21 20:54:16.810', '2023-09-21 20:56:29.672'),
('5d189b43-e17f-4a25-89e2-fcaa1eac1ac5', 4, 'REJECTED', '[\"7f20c889-43c1-4831-a454-64b9400a75fb\"]', '2023-09-21 20:22:00.000', NULL, NULL, '2023-09-21 20:23:00.782', '2023-09-21 20:50:35.843'),
('6cba85b7-90dd-47b9-a063-efdc312f424d', 5, 'REJECTED', '[\"7f20c889-43c1-4831-a454-64b9400a75fb\"]', '2023-09-21 20:23:00.000', NULL, NULL, '2023-09-21 20:24:03.193', '2023-09-21 20:50:17.710'),
('6d001da6-e752-4719-b22b-afd799cfab6b', 4, 'APPROVED', '[\"7f20c889-43c1-4831-a454-64b9400a75fb\",\"12a4633d-e044-40a8-8816-1b877d41d754\",\"93dd85d3-83ce-4a81-8e8e-11ad530280f3\"]', '2023-09-21 20:55:00.000', NULL, NULL, '2023-09-21 20:55:47.303', '2023-09-21 21:06:15.588'),
('7ec1605b-a434-47fb-a9e2-c32ba48ee76b', 5, 'APPROVED', '[\"7f20c889-43c1-4831-a454-64b9400a75fb\",\"12a4633d-e044-40a8-8816-1b877d41d754\",\"93dd85d3-83ce-4a81-8e8e-11ad530280f3\"]', '2023-09-21 20:55:00.000', NULL, NULL, '2023-09-21 20:55:22.675', '2023-09-21 21:03:50.690'),
('8062eab3-af5f-48f1-b4c5-95336c4bed04', 2, 'APPROVED', '[\"7f20c889-43c1-4831-a454-64b9400a75fb\",\"12a4633d-e044-40a8-8816-1b877d41d754\",\"93dd85d3-83ce-4a81-8e8e-11ad530280f3\"]', '2023-09-21 21:29:00.000', NULL, NULL, '2023-09-21 21:30:01.619', '2023-09-21 21:31:06.054'),
('939abbbe-1355-4ab9-8ceb-baed275fd51b', 1, 'APPROVED', '[\"7f20c889-43c1-4831-a454-64b9400a75fb\",\"12a4633d-e044-40a8-8816-1b877d41d754\",\"93dd85d3-83ce-4a81-8e8e-11ad530280f3\"]', '2023-09-21 21:31:00.000', NULL, NULL, '2023-09-21 21:31:55.060', '2023-09-21 21:33:39.856'),
('99679d93-5c7b-4aa2-ba1a-c529d7a73893', 3, 'APPROVED', '[\"7f20c889-43c1-4831-a454-64b9400a75fb\",\"12a4633d-e044-40a8-8816-1b877d41d754\",\"93dd85d3-83ce-4a81-8e8e-11ad530280f3\"]', '2023-09-21 20:54:00.000', NULL, NULL, '2023-09-21 20:54:10.979', '2023-09-21 21:02:59.000'),
('a23f92ea-04df-4487-956c-a94e242960d3', 2, 'APPROVED', '[\"7f20c889-43c1-4831-a454-64b9400a75fb\",\"12a4633d-e044-40a8-8816-1b877d41d754\",\"93dd85d3-83ce-4a81-8e8e-11ad530280f3\"]', '2023-09-29 21:27:00.000', NULL, NULL, '2023-09-21 21:27:40.311', '2023-09-21 21:29:14.349'),
('aa0aa432-0f67-4d7f-9bff-fef275c6868c', 1, 'REJECTED', '[\"7f20c889-43c1-4831-a454-64b9400a75fb\"]', '2023-09-25 20:35:00.000', NULL, NULL, '2023-09-21 20:35:36.487', '2023-09-21 20:49:57.131'),
('b5a4d445-4124-410c-a993-b118309fe001', 6, 'REJECTED', '[\"7f20c889-43c1-4831-a454-64b9400a75fb\"]', '2023-09-24 20:33:00.000', NULL, NULL, '2023-09-21 20:33:03.865', '2023-09-21 20:50:02.592'),
('cd7412d9-6e6a-496b-8b95-ce2a5651dad6', 6, 'REJECTED', '[\"7f20c889-43c1-4831-a454-64b9400a75fb\"]', '2023-09-23 20:30:00.000', NULL, NULL, '2023-09-21 20:31:11.552', '2023-09-21 20:53:49.495'),
('cdc5dd4d-9aa1-4b6e-b912-3e585cba1260', 2, 'REJECTED', '[\"7f20c889-43c1-4831-a454-64b9400a75fb\"]', '2023-09-27 20:36:00.000', NULL, NULL, '2023-09-21 20:36:16.599', '2023-09-21 20:49:51.744'),
('ce78f70f-9c61-4454-bf92-fbb965b8c070', 2, 'REJECTED', '[\"7f20c889-43c1-4831-a454-64b9400a75fb\"]', '2023-09-20 17:30:00.000', NULL, NULL, '2023-09-19 02:31:00.211', '2023-09-21 20:52:53.080'),
('df0cce3c-ad79-4afe-a099-469da316be28', 1, 'REJECTED', '[\"7f20c889-43c1-4831-a454-64b9400a75fb\"]', '2023-09-06 00:15:00.000', NULL, NULL, '2023-09-19 00:15:09.589', '2023-09-21 20:51:59.202'),
('fa4b8090-3ae8-44a6-a19e-0d9ab30f7bc9', 6, 'APPROVED', '[\"7f20c889-43c1-4831-a454-64b9400a75fb\",\"12a4633d-e044-40a8-8816-1b877d41d754\",\"93dd85d3-83ce-4a81-8e8e-11ad530280f3\"]', '2023-09-21 21:24:00.000', NULL, NULL, '2023-09-21 21:24:35.251', '2023-09-21 21:27:23.172');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` char(36) NOT NULL,
  `customer_type_id` char(36) NOT NULL,
  `customer_group_id` char(36) NOT NULL,
  `city_id` char(36) NOT NULL,
  `code` varchar(50) NOT NULL,
  `code_sap` varchar(50) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `address` varchar(250) DEFAULT NULL,
  `Address_ext` varchar(250) DEFAULT NULL,
  `postal_code` varchar(10) DEFAULT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `contact_name` varchar(50) DEFAULT NULL,
  `contact_email` varchar(30) DEFAULT NULL,
  `contact_phone` varchar(30) DEFAULT NULL,
  `sortasi` double DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `user_created` char(36) DEFAULT NULL,
  `user_modified` char(36) DEFAULT NULL,
  `date_created` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `date_modified` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `customer_type_id`, `customer_group_id`, `city_id`, `code`, `code_sap`, `name`, `short_name`, `address`, `Address_ext`, `postal_code`, `phone`, `url`, `contact_name`, `contact_email`, `contact_phone`, `sortasi`, `is_deleted`, `user_created`, `user_modified`, `date_created`, `date_modified`) VALUES
('0191406a-51b5-44c6-9d28-6fa1f2b8330e', '5bee92e2-a25c-4c32-b964-12e72056e995', '314a1e5a-eea7-4012-b937-e0a866c5ff59', '05f29fdc-4d65-462d-8ef2-7d31b87da688', '111', '123', 'MPE', 'MPE', 'Jalan Lapangan Bola RT 01/15 Kranji, Bekasi Barat', 'TEST', '17135', '089111222333', 'www.testing.com', 'MPE', 'testing@gmail.com', '089111222333', 1223, 1, '', '', '2023-08-21 03:10:33.499', '2023-08-21 03:10:39.348'),
('259b8b40-ed46-4690-b71c-34287e58ce09', '420144fd-9d9a-40e7-b9ce-f734d967f06c', '314a1e5a-eea7-4012-b937-e0a866c5ff59', '906165d5-8d4b-484c-9bc4-8f44d3dc23b2', '444R', '345xx', 'CEB', 'CB', 'Jalan Lapangan Bola RT 01/15 Kranji, Bekasi Barat', 'TEST', '17135', '089111222333', 'www.testing.com', 'MPE', 'testing@gmail.com', '089111222333', 5, 0, '', '', '2023-08-21 03:13:47.188', '2023-08-21 03:13:47.188'),
('2b764f9d-ae3f-4689-b271-e488211b54b0', '3168999d-f7eb-4061-9512-16bf8c5d7148', '58ff3222-64e9-4d6f-96d4-7682b086658b', 'b1afd79d-8e22-4c0f-8c68-dde078378464', '222', 'R666', 'ANA', 'AN', 'Jalan Lapangan Bola RT 01/15 Kranji, Bekasi Barat', 'TEST', '17135', '089111222333', 'www.testing.com', 'MPE', 'testing@gmail.com', '089111222333', 3, 0, '', '', '2023-08-21 03:12:23.928', '2023-08-21 03:12:23.928'),
('4179f563-fc1d-404e-9b87-8cb90de720c0', 'ba3ec675-6415-4aac-a555-fb758068ac5c', 'c7b2a1a4-7d47-442d-976a-5458da342606', 'af7e6083-8182-460b-b6e3-c19178705523', '111', 'xxx2', 'TOPSON', 'TSN', 'Jalan Lapangan Bola RT 01/15 Kranji, Bekasi Barat', 'TEST', '17135', '089111222333', 'www.testing.com', 'MPE', 'testing@gmail.com', '089111222333', 2, 0, '', '', '2023-08-21 03:11:52.554', '2023-08-21 03:11:52.554'),
('6a7efdb8-1b22-4787-aac5-f13e297c1996', '615b591c-969c-4bca-a780-e7022a77011a', 'bc437b00-19fd-478a-80f3-f74a22e64114', '62d4570b-97b5-4574-9869-48e91649d920', '123', '123', 'JERAX', 'AMR', 'Jalan Lapangan Bola RT 01/15 Kranji, Bekasi Barat', 'TEST', '17135', '089111222333', 'www.testing.com', 'MPE', 'testing@gmail.com', '089111222333', 1, 0, '', '', '2023-08-21 03:11:18.505', '2023-08-21 03:11:18.505'),
('bcdde0d6-5191-4e0a-914b-a0bd01ba9175', '5bee92e2-a25c-4c32-b964-12e72056e995', '3adf2dd7-0127-4152-8b7d-3acdce338a38', '05f29fdc-4d65-462d-8ef2-7d31b87da688', '777A', '222121', 'NOTAIL', 'NTL', 'Jalan Lapangan Bola RT 01/15 Kranji, Bekasi Barat', 'TEST', '17135', '089111222333', 'www.testing.com', 'MPE', 'testing@gmail.com', '089111222333', 4, 0, '', '', '2023-08-21 03:13:01.215', '2023-08-21 03:13:01.215');

-- --------------------------------------------------------

--
-- Table structure for table `customer_groups`
--

CREATE TABLE `customer_groups` (
  `id` char(36) NOT NULL,
  `name` varchar(50) NOT NULL,
  `short_description` varchar(100) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `user_created` char(36) DEFAULT NULL,
  `user_modified` char(36) DEFAULT NULL,
  `date_created` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `date_modified` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customer_groups`
--

INSERT INTO `customer_groups` (`id`, `name`, `short_description`, `description`, `is_deleted`, `user_created`, `user_modified`, `date_created`, `date_modified`) VALUES
('314a1e5a-eea7-4012-b937-e0a866c5ff59', 'GROUP 5', 'G5', 'TEST', 0, '', '', '2023-08-13 03:18:52.070', '2023-08-13 03:18:52.070'),
('3adf2dd7-0127-4152-8b7d-3acdce338a38', 'GROUP 4', 'G4', 'TEST', 0, '', '', '2023-08-13 03:18:43.207', '2023-08-13 03:18:43.207'),
('58ff3222-64e9-4d6f-96d4-7682b086658b', 'GROUP 3', 'G3', 'TEST', 0, '', '', '2023-08-13 03:18:34.148', '2023-08-13 03:18:34.148'),
('bc437b00-19fd-478a-80f3-f74a22e64114', 'GROUP 1', 'G1', 'TEST', 0, '', '', '2023-08-13 03:18:10.688', '2023-08-13 03:18:10.688'),
('c7b2a1a4-7d47-442d-976a-5458da342606', 'GROUP 2', 'G2', 'TEST', 0, '', '', '2023-08-13 03:18:23.094', '2023-08-13 03:18:23.094');

-- --------------------------------------------------------

--
-- Table structure for table `customer_types`
--

CREATE TABLE `customer_types` (
  `id` char(36) NOT NULL,
  `name` varchar(50) NOT NULL,
  `short_description` varchar(100) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `user_created` char(36) DEFAULT NULL,
  `user_modified` char(36) DEFAULT NULL,
  `date_created` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `date_modified` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customer_types`
--

INSERT INTO `customer_types` (`id`, `name`, `short_description`, `description`, `is_deleted`, `user_created`, `user_modified`, `date_created`, `date_modified`) VALUES
('3168999d-f7eb-4061-9512-16bf8c5d7148', 'TYPE 3', 'T3', 'TEST', 0, '', '', '2023-08-13 03:17:16.386', '2023-08-13 03:17:16.386'),
('420144fd-9d9a-40e7-b9ce-f734d967f06c', 'TYPE 5', 'T5', 'TEST', 0, '', '', '2023-08-13 03:17:27.096', '2023-08-13 03:17:27.096'),
('5bee92e2-a25c-4c32-b964-12e72056e995', 'TYPE 4', 'T4', 'TEST', 0, '', '', '2023-08-13 03:17:36.344', '2023-08-13 03:17:36.344'),
('615b591c-969c-4bca-a780-e7022a77011a', 'TYPE 1', 'T1', 'TEST', 0, '', '', '2023-08-13 03:16:40.036', '2023-08-13 03:16:40.036'),
('ba3ec675-6415-4aac-a555-fb758068ac5c', 'TYPE 2', 'T2', 'TEST', 0, '', '', '2023-08-13 03:17:05.891', '2023-08-13 03:17:05.891'),
('d58d80ef-d176-4de2-9e21-1ea6e77e1e51', 'TYPE 2', 'INI', '-', 1, '', '', '2023-08-07 08:58:57.354', '2023-08-21 02:50:33.332');

-- --------------------------------------------------------

--
-- Table structure for table `drivers`
--

CREATE TABLE `drivers` (
  `id` char(36) NOT NULL,
  `ref_type` int(11) NOT NULL DEFAULT 0,
  `ref_id` varchar(50) DEFAULT NULL,
  `code_sap` varchar(50) NOT NULL,
  `company_id` char(36) DEFAULT NULL,
  `company_ref_id` varchar(50) DEFAULT NULL,
  `company_name` varchar(50) NOT NULL,
  `nik` varchar(30) NOT NULL,
  `name` varchar(50) NOT NULL,
  `address` varchar(250) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `license_no` varchar(30) DEFAULT NULL,
  `license_ed` datetime(3) DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `user_created` char(36) DEFAULT NULL,
  `user_modified` char(36) DEFAULT NULL,
  `date_created` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `date_modified` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `drivers`
--

INSERT INTO `drivers` (`id`, `ref_type`, `ref_id`, `code_sap`, `company_id`, `company_ref_id`, `company_name`, `nik`, `name`, `address`, `email`, `phone`, `license_no`, `license_ed`, `is_deleted`, `user_created`, `user_modified`, `date_created`, `date_modified`) VALUES
('48786ee2-f7b7-47fa-9d8f-f72494469f58', 0, NULL, 'R666', '32c68957-2326-426a-836e-0ec8ade49ede', NULL, 'PT. AGRO PLANKAN LESTARI', '1234567891011125', 'GUMILANG', 'Bekasi', 'dasd@gmail.com', '089111222333', 'B', '2023-08-12 17:00:00.000', 0, '', '', '2023-08-13 03:37:27.322', '2023-08-13 03:37:27.322'),
('4a0ac60c-c856-418d-a6d8-b0a4a0350478', 0, NULL, '123', '944630de-441e-46d6-aa2e-7c167f958fb7', NULL, 'PT. SEGORI SERASAU SEJAHTERA', '1234567891011121', 'SURYO', 'Bekasi', 'dasd@gmail.com', '089111222333', 'B', '2023-08-12 17:00:00.000', 0, '', '', '2023-08-13 03:34:55.404', '2023-08-13 03:34:55.404'),
('b5c89a61-a3c5-4002-81b1-da0f5733fd9f', 0, NULL, '123', 'e23c72a1-e840-4c1a-8400-f33fcdc91b98', NULL, 'PT. KOP BUN TIRTA MAKMUR SEJAHTERA', '1234567891011124', 'PANJI', 'Bekasi', 'dasd@gmail.com', '089111222333', 'A', '2023-08-12 17:00:00.000', 0, '', '', '2023-08-13 03:37:08.074', '2023-08-13 03:37:08.074'),
('e000ee92-aaa3-4420-843a-fe336d402222', 0, NULL, '345xx', '84da0b4e-0c74-4542-8b51-07e3a60621e5', NULL, 'PT. TINTIN BOYOK SAWIT MAKMUR', '1234567891011123', 'MAHARANI', 'Bekasi', 'dasd@gmail.com', '089111222333', 'C', '2023-08-12 17:00:00.000', 0, '', '', '2023-08-13 03:36:32.589', '2023-08-13 03:36:32.589'),
('ec4720b2-2a13-450b-80df-16c472099c45', 0, NULL, 'xxx2', 'f921742e-4ca9-4a40-ab0d-8a1413a4f462', NULL, 'PT. MULTI PRIMA ENTAKAI', '1234567891011122', 'JOKO', 'Bekasi', 'dasd@gmail.com', '089111222333', 'A', '2023-08-12 17:00:00.000', 0, '', '', '2023-08-13 03:36:05.121', '2023-08-13 03:36:05.121');

-- --------------------------------------------------------

--
-- Table structure for table `Image`
--

CREATE TABLE `Image` (
  `id` char(36) NOT NULL,
  `path` varchar(191) NOT NULL,
  `date_created` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `date_modified` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `mills`
--

CREATE TABLE `mills` (
  `id` char(36) NOT NULL,
  `site_id` char(36) NOT NULL,
  `company_id` char(36) NOT NULL,
  `code` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `user_created` char(36) DEFAULT NULL,
  `user_modified` char(36) DEFAULT NULL,
  `date_created` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `date_modified` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `mills`
--

INSERT INTO `mills` (`id`, `site_id`, `company_id`, `code`, `name`, `is_deleted`, `user_created`, `user_modified`, `date_created`, `date_modified`) VALUES
('27a4d13d-7c4c-487b-bb8a-49abca18f2b3', '0874c2d9-18f5-4e1f-878a-b28de7772f5b', '944630de-441e-46d6-aa2e-7c167f958fb7', '123', 'MILL 01', 0, '', '', '2023-08-21 03:03:14.774', '2023-08-21 03:03:14.774'),
('470eb19c-13b7-4215-8303-531df6b550a5', 'e19c5989-f6d3-46f3-b6d2-86e0cf92d5f8', 'f921742e-4ca9-4a40-ab0d-8a1413a4f462', '333E', 'MILL 02', 0, '', '', '2023-08-21 03:03:29.704', '2023-08-21 03:03:29.704'),
('c8048e4d-cd18-4819-bb0c-63923c08f0bf', 'c3131f99-0bfc-4a68-b057-39fa0b0e2f88', 'd866e74d-204e-47d1-8c2f-ee80d76611a3', 'TTT5', 'MILL 04', 0, '', '', '2023-08-21 03:04:00.970', '2023-08-21 03:04:00.970'),
('c87766e3-f15e-404b-8278-70a30f63bd75', '86bd25f9-2771-4151-9f42-ae679f86f422', '6cf3df4c-bd16-40f2-8be4-61621c9cf0aa', 'DDD3', 'MILL 05', 0, '', '', '2023-08-21 03:04:14.291', '2023-08-21 03:04:14.291'),
('f3df21d9-8858-4048-9a73-46633e12da35', 'c926eab0-de32-47b6-9011-2e0056d7dac3', 'e2a884aa-bd63-4f22-ada1-f47422e23456', '444R', 'MILL 03', 0, '', '', '2023-08-21 03:03:47.432', '2023-08-21 03:03:47.432');

-- --------------------------------------------------------

--
-- Table structure for table `Notification`
--

CREATE TABLE `Notification` (
  `id` char(36) NOT NULL,
  `message` varchar(191) NOT NULL,
  `dtCreated` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `is_responded` tinyint(1) NOT NULL DEFAULT 0,
  `target` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`target`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` char(36) NOT NULL,
  `ref_type` int(11) NOT NULL DEFAULT 0,
  `ref_id` varchar(50) DEFAULT NULL,
  `productGroupName` varchar(191) DEFAULT NULL,
  `code` varchar(50) NOT NULL,
  `code_sap` varchar(50) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `certification` varchar(100) DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `user_created` char(36) DEFAULT NULL,
  `user_modified` char(36) DEFAULT NULL,
  `date_created` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `date_modified` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `ref_type`, `ref_id`, `productGroupName`, `code`, `code_sap`, `name`, `short_name`, `description`, `certification`, `is_deleted`, `user_created`, `user_modified`, `date_created`, `date_modified`) VALUES
('35b238cf-eca1-4aae-9dd6-986bd38ce303', 0, NULL, 'PKB', '888R', 'RRR8', 'PUPUK', 'PUK', 'TEST', '444', 0, '', '', '2023-08-13 03:30:50.120', '2023-08-13 03:30:50.120'),
('64be8f8d-7344-4e6e-bf62-f0ef63f75f78', 0, NULL, 'BAH', '777A', 'A777', 'KERNEL', 'KRL', 'TEST', '111', 0, '', '', '2023-08-13 03:29:11.624', '2023-08-13 03:29:11.624'),
('757c0363-8230-4efd-bebb-650c540183b8', 0, NULL, 'MYK', 'UU8', '8UU', 'PKO', 'pko', 'TEST', '333', 0, '', '', '2023-08-22 02:04:33.726', '2023-08-22 02:04:33.726'),
('8fdc9998-abed-4d95-8950-057189d175f1', 0, NULL, 'PKB', '787Y', 'Y787', 'CPO', 'cpo', 'TEST', '222', 0, '', '', '2023-08-22 02:04:12.058', '2023-08-22 02:04:12.058'),
('998024eb-dfa2-4bcb-8912-e6aa3c42b7eb', 0, NULL, 'PKB', '888Y', 'Y888', 'CANGKANG', 'CKG', 'TEST', '222', 0, '', '', '2023-08-13 03:29:45.701', '2023-08-13 03:29:45.701'),
('b03a86af-3619-4e0d-977f-c4576db17764', 0, NULL, 'BAH', 'DD3', '3DD', 'TBS', 'tbs', 'test', '911', 0, '', '', '2023-08-22 02:05:47.797', '2023-08-22 02:05:47.797'),
('BY15', 0, NULL, NULL, 'tym3', NULL, 'Kelapa Sawit', NULL, NULL, NULL, 0, NULL, NULL, '2023-08-10 09:44:24.566', NULL),
('e2a291c3-52b9-4331-9bd1-3b5de146d202', 0, NULL, 'MYK', '999U', 'UUU9', 'JANGKOS', 'JKS', 'TEST', '333', 0, '', '', '2023-08-13 03:30:10.954', '2023-08-13 03:30:10.954'),
('EF12', 0, NULL, NULL, 'jou7', NULL, 'Kayu Jati', NULL, NULL, NULL, 0, NULL, NULL, '2023-08-10 09:44:24.566', NULL),
('f419e22d-451e-43e3-a3b7-97c29c7e5f41', 0, NULL, 'MYK', '111E', 'EEE1', 'SOLAR', 'SLR', 'TEST', '111', 0, '', '', '2023-08-13 03:31:18.312', '2023-08-13 03:31:18.312'),
('FE51', 0, NULL, NULL, 'yhv3', NULL, 'Cabe', NULL, NULL, NULL, 0, NULL, NULL, '2023-08-10 09:44:24.566', NULL),
('GM31', 0, NULL, NULL, 'mlj6', NULL, 'Beras', NULL, NULL, NULL, 0, NULL, NULL, '2023-08-10 09:44:24.566', NULL),
('SU80', 0, NULL, NULL, 'dny3', NULL, 'Kopi', NULL, NULL, NULL, 0, NULL, NULL, '2023-08-10 09:44:24.566', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product_groups`
--

CREATE TABLE `product_groups` (
  `id` char(36) NOT NULL,
  `name` varchar(50) NOT NULL,
  `short_description` varchar(100) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `user_created` char(36) DEFAULT NULL,
  `user_modified` char(36) DEFAULT NULL,
  `date_created` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `date_modified` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_groups`
--

INSERT INTO `product_groups` (`id`, `name`, `short_description`, `description`, `is_deleted`, `user_created`, `user_modified`, `date_created`, `date_modified`) VALUES
('33b8eb69-5687-490a-be55-da76a9cf71c4', 'KAYU', 'KY', 'TEST', 0, '', '', '2023-08-13 03:26:24.847', '2023-08-13 03:26:24.847'),
('35fc8bd7-3934-41b0-a10c-999c707882ba', 'BUAH', 'BAH', 'TEST', 0, '', '', '2023-08-13 03:28:09.007', '2023-08-13 03:28:09.007'),
('621d8e17-4a7c-4d5a-86dc-b8804ae494e6', 'SAYUR', 'SYR', 'TEST', 0, '', '', '2023-08-13 03:27:07.519', '2023-08-13 03:27:07.519'),
('979b6338-ea31-487c-9a7a-d0faf9e276a2', 'PERKEBUNAN', 'KBN', 'TEST', 0, '', '', '2023-08-13 03:26:52.160', '2023-08-13 03:26:52.160'),
('BY15', 'Minyak', NULL, NULL, 0, NULL, NULL, '2023-08-10 09:38:57.695', NULL),
('e30c82d5-0b2f-428b-8f87-94a09231c91b', 'MINYAK', 'MYK', 'TEST', 0, '', '', '2023-08-13 03:26:36.428', '2023-08-13 03:26:36.428'),
('EF12', 'Kayu', NULL, NULL, 0, NULL, NULL, '2023-08-10 09:38:57.695', NULL),
('FE51', 'Buah', NULL, NULL, 0, NULL, NULL, '2023-08-10 09:38:57.695', NULL),
('GM31', 'Sayur', NULL, NULL, 0, NULL, NULL, '2023-08-10 09:38:57.695', NULL),
('SU80', 'Perkebunan', NULL, NULL, 0, NULL, NULL, '2023-08-10 09:38:57.695', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `profiles` (
  `id` char(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `name` varchar(50) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `division` varchar(30) NOT NULL,
  `position` varchar(30) NOT NULL,
  `date_of_birth` datetime(3) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `user_created` varchar(36) DEFAULT NULL,
  `user_modified` varchar(36) DEFAULT NULL,
  `date_created` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `date_modified` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`id`, `user_id`, `name`, `photo`, `phone`, `division`, `position`, `date_of_birth`, `alamat`, `user_created`, `user_modified`, `date_created`, `date_modified`) VALUES
('1857d3f8-bf9d-4adc-a065-afc2285e4f21', '7f20c889-43c1-4831-a454-64b9400a75fb', 'gacor', '397f1ce4-065d-499c-83fa-15158c4ff02e-26108.jpg', '0896556414898', 're', 'wt', NULL, NULL, NULL, NULL, '2023-08-21 10:09:13.521', '2023-08-21 10:09:13.521'),
('37bb2fd3-8d74-46e5-98e6-ada3658ba864', '1a109bba-ff76-48d7-99af-009511c5b30c', 'deno', '3ec66538-63db-48ca-adc3-92d400917219-06b8.png', '456453643564', 're', 'we', '2023-09-02 17:00:00.000', '', NULL, NULL, '2023-09-18 23:13:22.472', '2023-09-18 23:13:22.472'),
('49b1117c-f019-459c-8c25-520c0aabdeca', '4e5e76d3-114a-46c1-9a10-d4389deb7ad2', 'Deni Sukendar', '6c11cfd5-ed78-4354-8355-fedf6e5c640d-3514.jpg', '0896556414898', 're', 'wt', '1984-08-26 17:00:00.000', 'Sawangan', NULL, NULL, '2023-09-19 03:05:21.673', '2023-09-19 03:05:21.673'),
('6cb7ab5b-5db1-42f6-ba24-089b1f65b0b8', '72ed1051-ae74-471d-9a3a-55b85f44db7b', 'admin', '8a240770-70e8-4b08-ae05-b84136123cf7-bcfc.jpg', '', '', '', '2023-01-07 17:00:00.000', '', NULL, NULL, '2023-09-09 16:25:20.962', '2023-09-09 16:25:20.962'),
('91ac918a-e730-4f8b-bf88-ca4e3215eaba', 'bfeea10b-d078-4f6f-861d-8d3821815f01', 'admin', '7c2f64cc-3239-4a2d-be2a-111b51c3f626-27f5.jpg', '', '', '', '2023-01-07 17:00:00.000', '', NULL, NULL, '2023-09-09 16:22:51.866', '2023-09-09 16:22:51.866'),
('96c395e4-8091-47c6-8aa8-23d2a693effc', '70e3aad8-0b79-4ba5-a555-4c763216f4c8', 'admin', 'f7f1c215-428f-432a-bb1d-82b5f878a4cd-333a.jpg', '', '', '', '2023-01-07 17:00:00.000', '', NULL, NULL, '2023-09-09 16:24:28.596', '2023-09-09 16:24:28.596'),
('cfa58dfd-2481-493b-84fa-d67d86bc3301', '1164c8ca-7b42-4164-86cd-263558b16a6c', 'Jabrik Shakaful', '8492316d-735d-46ad-8d43-a8e4b677a8af-daf7.jpg', '092342553538', 're', 'miri', '1985-08-26 17:00:00.000', 'Bulokapak', NULL, NULL, '2023-09-19 03:08:59.450', '2023-09-19 03:08:59.450'),
('d0fd7a96-584b-4545-b10f-d3f1ba54fac6', 'd01386dc-1e38-4deb-8eec-8be3bd5ab24f', 'mika', '6b7deb41-10c1-44dc-8bab-b597ddd68a0b-7dda.jpg', '12345679872', 're', 'wt', NULL, NULL, NULL, NULL, '2023-08-22 06:08:20.867', '2023-08-22 06:08:20.867'),
('d1c8c405-0bd6-4f34-bf84-60c010a50d90', '1d732ccd-289c-44ca-8d3a-ccef9042fd11', 'admin', '9ce786f4-cd97-4dd1-8591-ae290e994444-b16e.jpg', '', '', '', '2023-09-07 17:00:00.000', '', NULL, NULL, '2023-09-09 16:18:12.278', '2023-09-09 16:18:12.278'),
('d2c54392-3bac-4749-968f-328d56cb6b09', '1a4492cc-6418-46cb-9b6e-db8853267eb1', 'Roberto Chaniago', '767b59db-cadd-4584-9597-11f29b42a0c5-dee8.jpg', '12030543562', 're', 'we', '2023-09-04 17:00:00.000', 'BantarGebang', NULL, NULL, '2023-09-19 03:39:39.701', '2023-09-19 03:39:39.701'),
('e9040fc3-7425-47ab-b61a-fd3f2abb27c4', 'dead2fb4-738a-49f1-bc7f-ae61e1943b45', 'mr. Eleven', '4e1884a8-13a3-4427-b17b-bc4a13c2c644-a45d.jpg', '089655641489', 're', 'we', '1996-09-29 17:00:00.000', 'Repavifista', NULL, NULL, '2023-09-19 03:43:57.159', '2023-09-19 03:43:57.159'),
('ed9c86ec-72da-4973-8fda-bf28875a78ea', '12a4633d-e044-40a8-8816-1b877d41d754', 'ghina', 'a48f4b6e-4e5d-4dc7-8dbb-02998f17cef5-71fa.jpg', '089655641489', 're', 'we', '2000-09-19 17:00:00.000', '-', NULL, NULL, '2023-09-19 02:23:11.858', '2023-09-19 02:23:11.858'),
('feb03bac-3e36-44a8-b0e0-abbc1678219e', '93dd85d3-83ce-4a81-8e8e-11ad530280f3', 'Mariana Sheena', 'a5448e32-3aa3-4b75-a28d-13232746b91c-aad10.jpg', '089655641489', 'ferivi', 'we', '1989-02-05 17:00:00.000', 'Bekasi', NULL, NULL, '2023-09-19 03:07:40.486', '2023-09-19 03:07:40.486');

-- --------------------------------------------------------

--
-- Table structure for table `provinces`
--

CREATE TABLE `provinces` (
  `id` char(36) NOT NULL,
  `name` varchar(30) NOT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `user_created` char(36) DEFAULT NULL,
  `user_modified` char(36) DEFAULT NULL,
  `date_created` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `date_modified` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `provinces`
--

INSERT INTO `provinces` (`id`, `name`, `is_deleted`, `user_created`, `user_modified`, `date_created`, `date_modified`) VALUES
('1', 'North Kalimantan', 0, '', '', '2023-08-10 06:45:21.489', NULL),
('10', 'South Sumatra', 0, '', '', '2023-08-10 06:45:54.338', NULL),
('10d7dc92-25dc-462a-adbb-08f51c09a0f4', 'DKI JAKARTA', 0, '', '', '2023-08-13 02:40:04.621', '2023-08-13 02:40:04.621'),
('1e243c79-3f53-4e9d-bfd6-d4dfb5cdd934', 'YOGYAKARTA', 0, '', '', '2023-08-21 02:24:26.581', '2023-08-21 02:24:26.581'),
('2', 'East Kalimantan', 0, '', '', '2023-08-10 06:45:21.489', NULL),
('23da3248-4493-4427-8112-5422dfd19c4f', 'JAWA TENGAH', 0, '', '', '2023-08-13 02:39:11.080', '2023-08-13 02:39:11.080'),
('3', 'West Java', 0, '', '', '2023-08-10 06:45:21.489', NULL),
('3bf5fc67-2d5e-4fef-b088-955234862c44', 'KALIMANTAN BARAT', 0, '', '', '2023-08-21 02:24:37.477', '2023-08-21 02:24:37.477'),
('4', 'Aceh', 0, '', '', '2023-08-10 06:45:21.489', NULL),
('4a2d47b5-651d-4055-b1ba-dd35c7cd72e6', 'SULAWESI BARAT', 0, '', '', '2023-08-21 02:23:50.206', '2023-08-21 02:23:50.206'),
('5', 'East Nusa Tenggara', 0, '', '', '2023-08-10 06:45:21.489', NULL),
('6', 'West Sumatra', 0, '', '', '2023-08-10 06:45:54.338', NULL),
('6f660b89-413e-4706-9c22-e962b5182d26', 'KALIMANTAN BARAT', 1, '', '', '2023-08-13 02:38:44.557', '2023-08-21 03:00:44.984'),
('7', 'Aceh', 0, '', '', '2023-08-10 06:45:54.338', NULL),
('77872a35-336b-472b-a91c-38e1474ea567', 'PAPUA BARAT', 1, '', '', '2023-08-13 02:40:14.495', '2023-08-21 03:01:10.948'),
('7c08395d-9c89-4147-bf65-192401277c36', 'JAWA BARAT', 0, '', '', '2023-08-21 02:23:56.730', '2023-08-21 02:23:56.730'),
('8', 'West Papua', 0, '', '', '2023-08-10 06:45:54.338', NULL),
('836312e3-f493-4b4e-9bb3-18cdc2c30894', 'JAWA TENGAH', 0, '', '', '2023-08-21 02:24:06.921', '2023-08-21 02:24:06.921'),
('8b5c710b-bf53-41de-bd5b-113b0625cbf7', 'SULAWESI TIMUR', 0, '', '', '2023-08-21 02:24:57.629', '2023-08-21 02:24:57.629'),
('9', 'Southeast Sulawesi', 0, '', '', '2023-08-10 06:45:54.338', NULL),
('9e02d81b-c563-4aa9-8280-9a5fdc8284e3', 'JAWA TIMUR', 0, '', '', '2023-08-21 02:24:14.603', '2023-08-21 02:24:14.603'),
('ba55f18c-5038-4b1a-80f2-8852f441113c', 'KALIMANTAN TENGAH', 1, '', '', '2023-08-13 02:39:36.721', '2023-08-21 03:00:37.491'),
('c3f6fe22-cdfc-4edf-af3c-3e571db510f0', 'PAPUA BARAT', 0, '', '', '2023-08-21 02:44:26.225', '2023-08-21 02:44:26.225'),
('dbf614be-dba9-40f3-beec-a373d0749a10', 'KALIMANTAN TENGAH', 0, '', '', '2023-08-21 02:24:44.548', '2023-08-21 02:24:44.548'),
('df8ad7ea-8bbb-4cbe-97e6-120bb6a11572', 'SUMATERA BARAT', 0, '', '', '2023-08-21 02:23:40.411', '2023-08-21 02:23:40.411'),
('e12239d7-3e41-448d-916b-001cd8d16dfc', 'SUMATERA UTARA', 0, '', '', '2023-08-13 02:39:21.834', '2023-08-13 02:39:21.834');

-- --------------------------------------------------------

--
-- Table structure for table `RoleArchive`
--

CREATE TABLE `RoleArchive` (
  `id` char(36) NOT NULL,
  `permissions` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`permissions`)),
  `user_created` varchar(36) DEFAULT NULL,
  `date_created` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `roleId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` varchar(255) NOT NULL,
  `permissions` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`permissions`)),
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `user_created` varchar(36) DEFAULT NULL,
  `user_modified` varchar(36) DEFAULT NULL,
  `date_created` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `date_modified` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `description`, `permissions`, `is_deleted`, `user_created`, `user_modified`, `date_created`, `date_modified`) VALUES
(1, 'adminIT', 'Admin IT', '[{\"resource\":\"user\",\"grants\":[{\"action\":\"read\",\"possession\":\"any\"},{\"action\":\"create\",\"possession\":\"any\"},{\"action\":\"update\",\"possession\":\"any\"},{\"action\":\"delete\",\"possession\":\"any\"}]},{\"resource\":\"config\",\"grants\":[{\"action\":\"read\",\"possession\":\"any\"},{\"action\":\"create\",\"possession\":\"any\"},{\"action\":\"update\",\"possession\":\"any\"},{\"action\":\"delete\",\"possession\":\"any\"}]}]', 0, NULL, NULL, '2023-09-17 18:37:09.032', '2023-09-17 18:37:09.032'),
(2, 'admin_system', 'Admin System', '[{\"resource\":\"user\",\"grants\":[{\"action\":\"read\",\"possession\":\"any\"},{\"action\":\"create\",\"possession\":\"any\"},{\"action\":\"update\",\"possession\":\"any\"},{\"action\":\"delete\",\"possession\":\"any\"}]},{\"resource\":\"config\",\"grants\":[{\"action\":\"read\",\"possession\":\"any\"},{\"action\":\"create\",\"possession\":\"any\"},{\"action\":\"update\",\"possession\":\"any\"},{\"action\":\"delete\",\"possession\":\"any\"}]}]', 0, NULL, NULL, '2023-09-17 18:37:09.057', '2023-09-17 18:37:09.057'),
(3, 'admin_HC', 'Admin HC', '[{\"resource\":\"user\",\"grants\":[{\"action\":\"read\",\"possession\":\"any\"},{\"action\":\"create\",\"possession\":\"any\"},{\"action\":\"update\",\"possession\":\"any\"},{\"action\":\"delete\",\"possession\":\"any\"}]},{\"resource\":\"config\",\"grants\":[{\"action\":\"read\",\"possession\":\"any\"},{\"action\":\"create\",\"possession\":\"any\"},{\"action\":\"update\",\"possession\":\"any\"},{\"action\":\"delete\",\"possession\":\"any\"}]}]', 0, NULL, NULL, '2023-09-17 18:46:50.022', '2023-09-17 18:46:50.022'),
(4, 'Staff', 'Not Typical Staff', '[{\"resource\":\"Company\",\"grants\":[{\"action\":\"read\",\"possession\":\"own\",\"attributes\":[{\"attr\":\"\"}]},{\"action\":\"create\",\"possession\":\"own\",\"attributes\":[{\"attr\":\"\"}]},{\"action\":\"update\",\"possession\":\"own\",\"attributes\":[{\"attr\":\"\"}]},{\"action\":\"delete\",\"possession\":\"own\",\"attributes\":[{\"attr\":\"\"}]}]},{\"resource\":\"Product\",\"grants\":[{\"action\":\"read\",\"possession\":\"own\",\"attributes\":[{\"attr\":\"\"}]},{\"action\":\"create\",\"possession\":\"own\",\"attributes\":[{\"attr\":\"\"}]},{\"action\":\"update\",\"possession\":\"own\",\"attributes\":[{\"attr\":\"\"}]},{\"action\":\"delete\",\"possession\":\"own\",\"attributes\":[{\"attr\":\"\"}]}]},{\"resource\":\"Site\",\"grants\":[{\"action\":\"read\",\"possession\":\"own\",\"attributes\":[{\"attr\":\"\"}]},{\"action\":\"create\",\"possession\":\"own\",\"attributes\":[{\"attr\":\"\"}]},{\"action\":\"update\",\"possession\":\"own\",\"attributes\":[{\"attr\":\"\"}]},{\"action\":\"delete\",\"possession\":\"own\",\"attributes\":[{\"attr\":\"\"}]}]},{\"resource\":\"Transaction\",\"grants\":[{\"action\":\"read\",\"possession\":\"own\",\"attributes\":[{\"attr\":\"\"}]},{\"action\":\"create\",\"possession\":\"own\",\"attributes\":[{\"attr\":\"\"}]},{\"action\":\"update\",\"possession\":\"own\",\"attributes\":[{\"attr\":\"\"}]},{\"action\":\"delete\",\"possession\":\"own\",\"attributes\":[{\"attr\":\"\"}]}]},{\"resource\":\"Weighbridge\",\"grants\":[{\"action\":\"read\",\"possession\":\"own\",\"attributes\":[{\"attr\":\"\"}]},{\"action\":\"create\",\"possession\":\"own\",\"attributes\":[{\"attr\":\"\"}]},{\"action\":\"update\",\"possession\":\"own\",\"attributes\":[{\"attr\":\"\"}]},{\"action\":\"delete\",\"possession\":\"own\",\"attributes\":[{\"attr\":\"\"}]}]}]', 0, '7f20c889-43c1-4831-a454-64b9400a75fb', '7f20c889-43c1-4831-a454-64b9400a75fb', '2023-09-18 23:04:14.694', '2023-09-19 02:29:34.742'),
(5, 'enichiro', 'maks', '[{\"resource\":\"Province\",\"grants\":[{\"action\":\"read\",\"possession\":\"own\",\"attributes\":[]},{\"action\":\"create\",\"possession\":\"own\",\"attributes\":[]},{\"action\":\"update\",\"possession\":\"own\",\"attributes\":[]},{\"action\":\"delete\",\"possession\":\"own\",\"attributes\":[]}]},{\"resource\":\"City\",\"grants\":[{\"action\":\"read\",\"possession\":\"own\",\"attributes\":[]},{\"action\":\"create\",\"possession\":\"own\",\"attributes\":[]},{\"action\":\"update\",\"possession\":\"own\",\"attributes\":[]},{\"action\":\"delete\",\"possession\":\"own\",\"attributes\":[]}]},{\"resource\":\"Driver\",\"grants\":[{\"action\":\"read\",\"possession\":\"own\",\"attributes\":[{\"attr\":\"refType\"},{\"attr\":\"refId\"},{\"attr\":\"companyId\"},{\"attr\":\"companyRefId\"},{\"attr\":\"companyName\"}]},{\"action\":\"create\",\"possession\":\"own\",\"attributes\":[]},{\"action\":\"update\",\"possession\":\"own\",\"attributes\":[{\"attr\":\"refId\"},{\"attr\":\"codeSap\"},{\"attr\":\"companyId\"}]},{\"action\":\"delete\",\"possession\":\"own\",\"attributes\":[]}]}]', 0, '1a4492cc-6418-46cb-9b6e-db8853267eb1', '', '2023-09-21 09:08:59.424', '2023-09-21 09:08:59.424');

-- --------------------------------------------------------

--
-- Table structure for table `sites`
--

CREATE TABLE `sites` (
  `id` char(36) NOT NULL,
  `ref_type` int(11) NOT NULL DEFAULT 0,
  `ref_id` varchar(50) DEFAULT NULL,
  `source_site_id` char(36) DEFAULT NULL,
  `source_site_ref_id` varchar(50) DEFAULT NULL,
  `source_site_name` varchar(50) DEFAULT NULL,
  `company_id` char(36) DEFAULT NULL,
  `company_ref_id` varchar(50) DEFAULT NULL,
  `company_name` varchar(50) NOT NULL,
  `city_id` char(36) DEFAULT NULL,
  `code` varchar(50) NOT NULL,
  `code_sap` varchar(50) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  `solarCalibration` int(11) DEFAULT NULL,
  `isMill` tinyint(1) NOT NULL DEFAULT 0,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `user_created` varchar(36) DEFAULT NULL,
  `user_modified` varchar(36) DEFAULT NULL,
  `date_created` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `date_modified` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sites`
--

INSERT INTO `sites` (`id`, `ref_type`, `ref_id`, `source_site_id`, `source_site_ref_id`, `source_site_name`, `company_id`, `company_ref_id`, `company_name`, `city_id`, `code`, `code_sap`, `name`, `short_name`, `description`, `latitude`, `longitude`, `solarCalibration`, `isMill`, `is_deleted`, `user_created`, `user_modified`, `date_created`, `date_modified`) VALUES
('0874c2d9-18f5-4e1f-878a-b28de7772f5b', 0, NULL, 'e19c5989-f6d3-46f3-b6d2-86e0cf92d5f8', NULL, 'T30 03', '1d46a39a-df09-4db4-b6a3-f56318dae2d9', NULL, 'PT. AGRO ANUGRAH LESTARI', '301d335d-6e80-4426-bd36-f3b5c42a3fe1', '1QQQ', 'QQQ1', 'LABANAN', 'LBN', 'TEST', 555, 111, 111, 1, 0, '', '', '2023-08-21 02:49:10.391', '2023-08-21 02:49:10.391'),
('86bd25f9-2771-4151-9f42-ae679f86f422', 0, NULL, NULL, NULL, NULL, '944630de-441e-46d6-aa2e-7c167f958fb7', NULL, 'PT. SEGORI SERASAU SEJAHTERA', '6cae8012-0321-4df9-9178-caf362cab169', '123', 'xxx2', 'PKS 01', 'P1', 'TEST', 333, 222, 1111, 1, 0, '', '', '2023-08-21 02:46:38.263', '2023-08-21 02:46:38.263'),
('c3131f99-0bfc-4a68-b057-39fa0b0e2f88', 0, NULL, NULL, NULL, NULL, 'f921742e-4ca9-4a40-ab0d-8a1413a4f462', NULL, 'PT. MULTI PRIMA ENTAKAI', 'b1afd79d-8e22-4c0f-8c68-dde078378464', '222', 'R666', 'T30 01', 'T1', 'TEST', 555, 666, 111, 1, 0, '', '', '2023-08-21 02:47:17.696', '2023-08-21 02:47:17.696'),
('c926eab0-de32-47b6-9011-2e0056d7dac3', 0, NULL, NULL, NULL, NULL, '84da0b4e-0c74-4542-8b51-07e3a60621e5', NULL, 'PT. TINTIN BOYOK SAWIT MAKMUR', '05f29fdc-4d65-462d-8ef2-7d31b87da688', '777A', 'YTTA', 'T30 02', 'T2', 'TEST', 444, 666, 111, 1, 0, '', '', '2023-08-21 02:47:53.078', '2023-08-21 02:47:53.078'),
('e19c5989-f6d3-46f3-b6d2-86e0cf92d5f8', 0, NULL, '86bd25f9-2771-4151-9f42-ae679f86f422', NULL, 'PKS 01', 'e2a884aa-bd63-4f22-ada1-f47422e23456', NULL, 'PT. PRIMA GENERASI SUKSES', '1b98378f-c0f9-4f7a-aa6f-1139a62cb6fb', '6TTT', 'TTT6', 'T30 03', 'T3', 'TEST', 555, 555, 111, 1, 0, '', '', '2023-08-21 02:48:31.971', '2023-08-21 02:48:31.971');

-- --------------------------------------------------------

--
-- Table structure for table `storage_tanks`
--

CREATE TABLE `storage_tanks` (
  `id` char(36) NOT NULL,
  `ref_type` int(11) NOT NULL DEFAULT 0,
  `ref_id` varchar(50) DEFAULT NULL,
  `site_id` char(36) DEFAULT NULL,
  `site_ref_id` varchar(50) DEFAULT NULL,
  `site_name` varchar(50) NOT NULL,
  `stock_owner_id` char(36) DEFAULT NULL,
  `stock_owner_ref_id` varchar(50) DEFAULT NULL,
  `stock_owner_name` varchar(50) DEFAULT NULL,
  `product_id` char(36) DEFAULT NULL,
  `product_ref_id` varchar(50) DEFAULT NULL,
  `product_name` varchar(50) DEFAULT NULL,
  `code` varchar(50) NOT NULL,
  `code_sap` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `capacity` double DEFAULT NULL,
  `height` double DEFAULT NULL,
  `sccModel` int(11) NOT NULL DEFAULT 0,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `user_created` char(36) DEFAULT NULL,
  `user_modified` char(36) DEFAULT NULL,
  `date_created` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `date_modified` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `storage_tanks`
--

INSERT INTO `storage_tanks` (`id`, `ref_type`, `ref_id`, `site_id`, `site_ref_id`, `site_name`, `stock_owner_id`, `stock_owner_ref_id`, `stock_owner_name`, `product_id`, `product_ref_id`, `product_name`, `code`, `code_sap`, `name`, `short_name`, `description`, `capacity`, `height`, `sccModel`, `is_deleted`, `user_created`, `user_modified`, `date_created`, `date_modified`) VALUES
('77404efa-121c-4612-b478-9a7ace07e783', 0, NULL, '86bd25f9-2771-4151-9f42-ae679f86f422', NULL, 'PKS 01', 'e23c72a1-e840-4c1a-8400-f33fcdc91b98', NULL, 'PT. KOP BUN TIRTA MAKMUR SEJAHTERA', '64be8f8d-7344-4e6e-bf62-f0ef63f75f78', NULL, 'KERNEL', '666R', 'A777', 'TANK 05', 'T5', 'TEST', 1000, 168, 666, 0, '', '', '2023-08-21 03:09:00.050', '2023-08-21 03:09:00.050'),
('7c2eca1a-db76-4eb5-b213-f97cf21a58a8', 0, NULL, 'c926eab0-de32-47b6-9011-2e0056d7dac3', NULL, 'T30 02', '84da0b4e-0c74-4542-8b51-07e3a60621e5', NULL, 'PT. TINTIN BOYOK SAWIT MAKMUR', 'e2a291c3-52b9-4331-9bd1-3b5de146d202', NULL, 'JANGKOS', '111', 'R666', 'TANK 03', 'T3', 'TEST', 1000, 168, 222, 0, '', '', '2023-08-21 03:08:10.218', '2023-08-21 03:08:10.218'),
('879627a9-9a94-42c6-ba2f-f739987bd0bc', 0, NULL, '0874c2d9-18f5-4e1f-878a-b28de7772f5b', NULL, 'LABANAN', '944630de-441e-46d6-aa2e-7c167f958fb7', NULL, 'PT. SEGORI SERASAU SEJAHTERA', 'f419e22d-451e-43e3-a3b7-97c29c7e5f41', NULL, 'SOLAR', '123', '123', 'TANK 01', 'T1', 'TEST', 1000, 168, 111, 0, '', '', '2023-08-21 03:07:11.480', '2023-08-21 03:07:11.480'),
('ea4df79c-5ceb-4b1f-87ee-2463f2e62bcc', 0, NULL, 'e19c5989-f6d3-46f3-b6d2-86e0cf92d5f8', NULL, 'T30 03', 'f921742e-4ca9-4a40-ab0d-8a1413a4f462', NULL, 'PT. MULTI PRIMA ENTAKAI', '35b238cf-eca1-4aae-9dd6-986bd38ce303', NULL, 'PUPUK', '222', 'xxx2', 'TANK 02', 'T2', 'TEST', 1000, 168, 443, 0, '', '', '2023-08-21 03:07:46.955', '2023-08-21 03:07:46.955'),
('fc72f5ba-d2cd-4260-bc99-f2d76a290a58', 0, NULL, 'c3131f99-0bfc-4a68-b057-39fa0b0e2f88', NULL, 'T30 01', 'e2a884aa-bd63-4f22-ada1-f47422e23456', NULL, 'PT. PRIMA GENERASI SUKSES', '998024eb-dfa2-4bcb-8912-e6aa3c42b7eb', NULL, 'CANGKANG', '777A', '222121', 'TANK 04', 'T4', 'TEST', 1000, 168, 552, 0, '', '', '2023-08-21 03:08:36.257', '2023-08-21 03:08:36.257');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` char(36) NOT NULL,
  `transaction_type` int(11) NOT NULL DEFAULT 1,
  `bon_trip_no` char(16) DEFAULT NULL,
  `vehicle_status` int(11) NOT NULL DEFAULT 0,
  `delivery_status` int(11) NOT NULL DEFAULT 0,
  `progress_status` int(11) NOT NULL DEFAULT 0,
  `delivery_order_id` char(36) DEFAULT NULL,
  `delivery_order_no` varchar(50) DEFAULT NULL,
  `delivery_date` datetime(3) DEFAULT NULL,
  `product_id` char(36) DEFAULT NULL,
  `product_code` varchar(30) DEFAULT NULL,
  `product_name` varchar(50) DEFAULT NULL,
  `customer_id` char(36) DEFAULT NULL,
  `customer_code` varchar(50) DEFAULT NULL,
  `customer_name` varchar(50) DEFAULT NULL,
  `rspo_scc_model` int(11) NOT NULL DEFAULT 0,
  `rspo_unique_number` varchar(50) DEFAULT NULL,
  `iscc_scc_model` int(11) NOT NULL DEFAULT 0,
  `iscc_unique_number` varchar(50) DEFAULT NULL,
  `iscc_ghg_value` double NOT NULL DEFAULT 0,
  `iscc_eee_value` double NOT NULL DEFAULT 0,
  `transporter_id` char(36) DEFAULT NULL,
  `transporter_company_code` varchar(30) DEFAULT NULL,
  `transporter_company_name` varchar(50) DEFAULT NULL,
  `transporter_company_short_name` varchar(30) DEFAULT NULL,
  `driver_id` char(36) DEFAULT NULL,
  `driver_nik` varchar(30) DEFAULT NULL,
  `driver_name` varchar(50) DEFAULT NULL,
  `driver_license_no` varchar(30) DEFAULT NULL,
  `transport_vehicle_id` char(36) DEFAULT NULL,
  `transport_vehicle_plate_no` varchar(12) DEFAULT NULL,
  `transport_vehicle_product_code` varchar(30) DEFAULT NULL,
  `transport_vehicle_product_name` varchar(50) DEFAULT NULL,
  `transport_vehicle_scc_model` int(11) DEFAULT 0,
  `origin_site_id` char(36) DEFAULT NULL,
  `origin_site_code` varchar(30) DEFAULT NULL,
  `origin_site_name` varchar(50) DEFAULT NULL,
  `origin_source_storage_tank_id` char(36) DEFAULT NULL,
  `origin_source_storage_tank_code` varchar(30) DEFAULT NULL,
  `origin_source_storage_tank_name` varchar(50) DEFAULT NULL,
  `destination_site_id` char(36) DEFAULT NULL,
  `destination_site_code` varchar(30) DEFAULT NULL,
  `destination_site_name` varchar(50) DEFAULT NULL,
  `destination_sink_storage_tank_id` char(36) DEFAULT NULL,
  `destination_sink_storage_tank_code` varchar(30) DEFAULT NULL,
  `destination_sink_storage_tank_name` varchar(50) DEFAULT NULL,
  `origin_ffa_percentage` double NOT NULL DEFAULT 0,
  `origin_moist_percentage` double NOT NULL DEFAULT 0,
  `origin_dirt_percentage` double NOT NULL DEFAULT 0,
  `origin_weigh_in_kg` double NOT NULL DEFAULT 0,
  `origin_weigh_in_remark` varchar(500) DEFAULT NULL,
  `origin_weigh_in_operator_name` varchar(50) DEFAULT NULL,
  `origin_weigh_in_timestamp` datetime(3) DEFAULT NULL,
  `origin_weigh_out_kg` double NOT NULL DEFAULT 0,
  `origin_weigh_out_remark` varchar(500) DEFAULT NULL,
  `origin_weigh_out_operator_name` varchar(50) DEFAULT NULL,
  `origin_weigh_out_timestamp` datetime(3) DEFAULT NULL,
  `potongan_wajib` double NOT NULL DEFAULT 0,
  `potongan_lain` double NOT NULL DEFAULT 0,
  `destination_weigh_in_kg` double NOT NULL DEFAULT 0,
  `destination_weigh_in_remark` varchar(500) DEFAULT NULL,
  `destination_weigh_in_operator_name` varchar(50) DEFAULT NULL,
  `destination_weigh_in_timestamp` datetime(3) DEFAULT NULL,
  `destination_weigh_out_kg` double NOT NULL DEFAULT 0,
  `destination_weigh_out_remark` varchar(500) DEFAULT NULL,
  `destination_weigh_out_operator_name` varchar(50) DEFAULT NULL,
  `destination_weigh_out_timestamp` datetime(3) DEFAULT NULL,
  `return_weigh_in_kg` double NOT NULL DEFAULT 0,
  `return_weigh_in_remark` varchar(500) DEFAULT NULL,
  `return_weigh_in_operator_name` varchar(50) DEFAULT NULL,
  `return_weigh_in_timestamp` datetime(3) DEFAULT NULL,
  `return_weigh_out_kg` double NOT NULL DEFAULT 0,
  `return_weigh_out_remark` varchar(500) DEFAULT NULL,
  `return_weigh_out_operator_name` varchar(50) DEFAULT NULL,
  `return_weigh_out_timestamp` datetime(3) DEFAULT NULL,
  `current_seal_1` varchar(30) DEFAULT NULL,
  `current_seal_2` varchar(30) DEFAULT NULL,
  `current_seal_3` varchar(30) DEFAULT NULL,
  `current_seal_4` varchar(30) DEFAULT NULL,
  `loaded_seal_1` varchar(30) DEFAULT NULL,
  `loaded_seal_2` varchar(30) DEFAULT NULL,
  `loaded_seal_3` varchar(30) DEFAULT NULL,
  `loaded_seal_4` varchar(30) DEFAULT NULL,
  `loading_remark` varchar(500) DEFAULT NULL,
  `loading_operator_name` varchar(50) DEFAULT NULL,
  `loading_timestamp` datetime(3) DEFAULT NULL,
  `unloaded_seal_1` varchar(30) DEFAULT NULL,
  `unloaded_seal_2` varchar(30) DEFAULT NULL,
  `unloaded_seal_3` varchar(30) DEFAULT NULL,
  `unloaded_seal_4` varchar(30) DEFAULT NULL,
  `unloading_remark` varchar(500) DEFAULT NULL,
  `unloading_operator_name` varchar(50) DEFAULT NULL,
  `unloading_timestamp` datetime(3) DEFAULT NULL,
  `return_unloaded_seal_1` varchar(30) DEFAULT NULL,
  `return_unloaded_seal_2` varchar(30) DEFAULT NULL,
  `return_unloaded_seal_3` varchar(30) DEFAULT NULL,
  `return_unloaded_seal_4` varchar(30) DEFAULT NULL,
  `return_unloading_remark` varchar(500) DEFAULT NULL,
  `return_unloading_operator_name` varchar(50) DEFAULT NULL,
  `return_unloading_timestamp` datetime(3) DEFAULT NULL,
  `qty_tbs` int(11) DEFAULT 0,
  `qty_tbs_dikirim` int(11) DEFAULT 0,
  `qty_tbs_dikembalikan` int(11) DEFAULT 0,
  `jsonData` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`jsonData`)),
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `user_created` varchar(36) DEFAULT NULL,
  `user_modified` varchar(36) DEFAULT NULL,
  `date_created` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `date_modified` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `transaction_type`, `bon_trip_no`, `vehicle_status`, `delivery_status`, `progress_status`, `delivery_order_id`, `delivery_order_no`, `delivery_date`, `product_id`, `product_code`, `product_name`, `customer_id`, `customer_code`, `customer_name`, `rspo_scc_model`, `rspo_unique_number`, `iscc_scc_model`, `iscc_unique_number`, `iscc_ghg_value`, `iscc_eee_value`, `transporter_id`, `transporter_company_code`, `transporter_company_name`, `transporter_company_short_name`, `driver_id`, `driver_nik`, `driver_name`, `driver_license_no`, `transport_vehicle_id`, `transport_vehicle_plate_no`, `transport_vehicle_product_code`, `transport_vehicle_product_name`, `transport_vehicle_scc_model`, `origin_site_id`, `origin_site_code`, `origin_site_name`, `origin_source_storage_tank_id`, `origin_source_storage_tank_code`, `origin_source_storage_tank_name`, `destination_site_id`, `destination_site_code`, `destination_site_name`, `destination_sink_storage_tank_id`, `destination_sink_storage_tank_code`, `destination_sink_storage_tank_name`, `origin_ffa_percentage`, `origin_moist_percentage`, `origin_dirt_percentage`, `origin_weigh_in_kg`, `origin_weigh_in_remark`, `origin_weigh_in_operator_name`, `origin_weigh_in_timestamp`, `origin_weigh_out_kg`, `origin_weigh_out_remark`, `origin_weigh_out_operator_name`, `origin_weigh_out_timestamp`, `potongan_wajib`, `potongan_lain`, `destination_weigh_in_kg`, `destination_weigh_in_remark`, `destination_weigh_in_operator_name`, `destination_weigh_in_timestamp`, `destination_weigh_out_kg`, `destination_weigh_out_remark`, `destination_weigh_out_operator_name`, `destination_weigh_out_timestamp`, `return_weigh_in_kg`, `return_weigh_in_remark`, `return_weigh_in_operator_name`, `return_weigh_in_timestamp`, `return_weigh_out_kg`, `return_weigh_out_remark`, `return_weigh_out_operator_name`, `return_weigh_out_timestamp`, `current_seal_1`, `current_seal_2`, `current_seal_3`, `current_seal_4`, `loaded_seal_1`, `loaded_seal_2`, `loaded_seal_3`, `loaded_seal_4`, `loading_remark`, `loading_operator_name`, `loading_timestamp`, `unloaded_seal_1`, `unloaded_seal_2`, `unloaded_seal_3`, `unloaded_seal_4`, `unloading_remark`, `unloading_operator_name`, `unloading_timestamp`, `return_unloaded_seal_1`, `return_unloaded_seal_2`, `return_unloaded_seal_3`, `return_unloaded_seal_4`, `return_unloading_remark`, `return_unloading_operator_name`, `return_unloading_timestamp`, `qty_tbs`, `qty_tbs_dikirim`, `qty_tbs_dikembalikan`, `jsonData`, `is_deleted`, `user_created`, `user_modified`, `date_created`, `date_modified`) VALUES
('0d54f754-87a5-4124-bce1-64fe697c0157', 1, 'P041230823114802', 0, 0, 1, NULL, '123', '2023-08-24 11:51:36.000', '35b238cf-eca1-4aae-9dd6-986bd38ce303', NULL, 'PUPUK', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, 'd866e74d-204e-47d1-8c2f-ee80d76611a3', NULL, 'PT. SURYA DELI', NULL, '48786ee2-f7b7-47fa-9d8f-f72494469f58', NULL, 'GUMILANG', NULL, '99179ed5-3843-4a69-9f54-39d042c45da6', '10201216', NULL, NULL, 666, 'c926eab0-de32-47b6-9011-2e0056d7dac3', NULL, 'T30 02', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 2222, NULL, NULL, '2023-08-23 04:48:20.454', 0, NULL, NULL, '2023-08-17 14:05:22.000', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, '2023-08-22 14:07:08.000', 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 123, 0, 0, NULL, 0, '', '', '2023-08-23 04:48:20.479', '2023-08-23 04:48:20.479'),
('11092cc2-5bf3-46cb-8543-f776a09d71e7', 1, 'P041230823092745', 0, 0, 4, NULL, '123', '2023-01-11 09:29:27.000', 'b03a86af-3619-4e0d-977f-c4576db17764', NULL, 'TBS', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, 'e23c72a1-e840-4c1a-8400-f33fcdc91b98', NULL, 'PT. KOP BUN TIRTA MAKMUR SEJAHTERA', NULL, 'b5c89a61-a3c5-4002-81b1-da0f5733fd9f', NULL, 'PANJI', NULL, 'dd7e6680-fa53-4132-9d62-895de12df195', '10201218', NULL, NULL, 552, 'c926eab0-de32-47b6-9011-2e0056d7dac3', NULL, 'T30 02', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 555, NULL, NULL, '2023-08-23 02:28:04.932', 1, NULL, NULL, '2023-12-23 14:07:51.000', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 123, 0, 0, NULL, 0, '', '', '2023-08-23 02:28:04.990', '2023-08-23 04:47:17.070'),
('1488a145-31cc-4b16-a9d8-ceb79519ae65', 1, 'P041230822095656', 0, 0, 4, NULL, '123', '2023-02-09 09:30:06.000', '8fdc9998-abed-4d95-8950-057189d175f1', NULL, 'CPO', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, 'e2a884aa-bd63-4f22-ada1-f47422e23456', NULL, 'PT. PRIMA GENERASI SUKSES', NULL, 'e000ee92-aaa3-4420-843a-fe336d402222', NULL, 'MAHARANI', NULL, '2261c455-b9df-45f1-87c9-aa56d0806019', '10201211', NULL, NULL, 111, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 444, NULL, NULL, '2023-08-22 02:57:10.919', 111, NULL, NULL, '2023-08-23 02:09:00.036', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, NULL, 0, '', '', '2023-08-22 02:57:10.968', '2023-08-23 02:09:00.080'),
('167d9fdc-067c-4acd-8feb-f397aa80a250', 1, 'P041230821142330', 0, 0, 4, NULL, '1233', '2023-03-22 09:30:23.000', 'e2a291c3-52b9-4331-9bd1-3b5de146d202', NULL, 'JANGKOS', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, '6cf3df4c-bd16-40f2-8be4-61621c9cf0aa', NULL, 'PT. MULTI JAYA PERKASA', NULL, 'b5c89a61-a3c5-4002-81b1-da0f5733fd9f', NULL, 'PANJI', NULL, 'dd7e6680-fa53-4132-9d62-895de12df195', '10201215', NULL, NULL, 552, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 123, NULL, NULL, '2023-08-21 07:23:49.883', 33, NULL, NULL, '2023-08-22 02:08:51.120', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, NULL, 0, '', '', '2023-08-21 07:23:49.920', '2023-08-22 02:08:51.140'),
('24cdff7a-786f-4211-9695-98e07a66d887', 1, 'P041230823092508', 0, 0, 4, NULL, '123', '2023-04-10 09:31:33.000', 'b03a86af-3619-4e0d-977f-c4576db17764', NULL, 'TBS', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, '944630de-441e-46d6-aa2e-7c167f958fb7', NULL, 'PT. SEGORI SERASAU SEJAHTERA', NULL, '48786ee2-f7b7-47fa-9d8f-f72494469f58', NULL, 'GUMILANG', NULL, '99179ed5-3843-4a69-9f54-39d042c45da6', '10201216', NULL, NULL, 666, '0874c2d9-18f5-4e1f-878a-b28de7772f5b', NULL, 'LABANAN', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 1111, NULL, NULL, '2023-08-23 02:25:41.317', 1, NULL, NULL, '2023-08-23 04:47:42.374', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 123, 0, 0, NULL, 0, '', '', '2023-08-23 02:25:41.379', '2023-08-23 04:47:42.430'),
('4527af06-b81d-4d3b-83a7-9016598cb2a5', 1, 'P041230823092600', 0, 0, 4, NULL, '123', '2023-05-31 09:31:49.000', 'b03a86af-3619-4e0d-977f-c4576db17764', NULL, 'TBS', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, 'd866e74d-204e-47d1-8c2f-ee80d76611a3', NULL, 'PT. SURYA DELI', NULL, 'b5c89a61-a3c5-4002-81b1-da0f5733fd9f', NULL, 'PANJI', NULL, 'e70a3e22-e6bd-45c2-b6c2-6c83b98ed398', '10201214', NULL, NULL, 552, 'e19c5989-f6d3-46f3-b6d2-86e0cf92d5f8', NULL, 'T30 03', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 222, NULL, NULL, '2023-08-23 02:26:16.534', 1, NULL, NULL, '2023-08-23 04:47:49.410', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 123, 0, 0, NULL, 0, '', '', '2023-08-23 02:26:16.580', '2023-08-23 04:47:49.460'),
('48ba0023-91b7-4b30-a8b3-cd2b3734658a', 1, 'P041230821143625', 0, 0, 4, NULL, '123', '2023-06-21 09:32:09.000', '64be8f8d-7344-4e6e-bf62-f0ef63f75f78', NULL, 'KERNEL', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, '32c68957-2326-426a-836e-0ec8ade49ede', NULL, 'PT. AGRO PLANKAN LESTARI', NULL, 'e000ee92-aaa3-4420-843a-fe336d402222', NULL, 'MAHARANI', NULL, '717315ab-0e04-4d9f-82af-0d56b494aa10', '10201217', NULL, NULL, 666, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 66, NULL, NULL, '2023-08-21 07:36:43.548', 23, NULL, NULL, '2023-08-22 02:07:56.940', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 234, NULL, 0, '', '', '2023-08-21 07:36:43.591', '2023-08-22 02:07:56.966'),
('4fc7590a-e378-4000-aef3-7a8c93fef16a', 1, 'P041230822091050', 0, 0, 4, NULL, '222', '2023-07-09 09:32:25.000', '757c0363-8230-4efd-bebb-650c540183b8', NULL, 'PKO', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, '1d46a39a-df09-4db4-b6a3-f56318dae2d9', NULL, 'PT. AGRO ANUGRAH LESTARI', NULL, 'b5c89a61-a3c5-4002-81b1-da0f5733fd9f', NULL, 'PANJI', NULL, 'a84b5535-ecda-4f5b-8f56-77b5beaf2bba', '10201219', NULL, NULL, 443, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 5445, NULL, NULL, '2023-08-22 02:11:21.617', 1, NULL, NULL, '2023-08-23 02:09:38.392', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, NULL, 0, '', '', '2023-08-22 02:11:21.659', '2023-08-23 02:09:38.415'),
('5e3f4f22-a25b-4158-8ef3-d8b6c2914fd5', 1, 'P041230821143604', 0, 0, 4, NULL, '123', '2023-08-16 16:14:06.000', '998024eb-dfa2-4bcb-8912-e6aa3c42b7eb', NULL, 'CANGKANG', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, '1d46a39a-df09-4db4-b6a3-f56318dae2d9', NULL, 'PT. AGRO ANUGRAH LESTARI', NULL, 'ec4720b2-2a13-450b-80df-16c472099c45', NULL, 'JOKO', NULL, 'a84b5535-ecda-4f5b-8f56-77b5beaf2bba', '10201219', NULL, NULL, 443, '86bd25f9-2771-4151-9f42-ae679f86f422', NULL, 'PKS 01', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 555, NULL, NULL, '2023-08-21 07:36:22.601', 22, NULL, NULL, '2023-08-22 02:08:16.386', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 123, 0, 0, NULL, 0, '', '', '2023-08-21 07:36:22.639', '2023-08-22 02:08:16.459'),
('61227ac8-4d3a-436e-b20b-2a0a3e8dd440', 1, 'P041230823092705', 0, 0, 4, NULL, '123', '2023-09-16 09:32:46.000', 'b03a86af-3619-4e0d-977f-c4576db17764', NULL, 'TBS', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, 'd866e74d-204e-47d1-8c2f-ee80d76611a3', NULL, 'PT. SURYA DELI', NULL, '48786ee2-f7b7-47fa-9d8f-f72494469f58', NULL, 'GUMILANG', NULL, 'a84b5535-ecda-4f5b-8f56-77b5beaf2bba', '10201219', NULL, NULL, 443, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 444, NULL, NULL, '2023-08-23 02:27:19.049', 1, NULL, NULL, '2023-08-23 04:47:25.126', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, NULL, 0, '', '', '2023-08-23 02:27:19.106', '2023-08-23 04:47:25.135'),
('694e8bc0-6a0f-4308-9f8e-545f1c29ec72', 1, 'P041230822090917', 0, 0, 4, NULL, '123', '2023-08-24 16:35:11.000', 'b03a86af-3619-4e0d-977f-c4576db17764', NULL, 'TBS', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, '944630de-441e-46d6-aa2e-7c167f958fb7', NULL, 'PT. SEGORI SERASAU SEJAHTERA', NULL, '48786ee2-f7b7-47fa-9d8f-f72494469f58', NULL, 'GUMILANG', NULL, '99179ed5-3843-4a69-9f54-39d042c45da6', '10201216', NULL, NULL, 666, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 233, NULL, NULL, '2023-08-22 02:09:31.332', 1, NULL, NULL, '2023-08-23 02:25:03.669', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, NULL, 0, '', '', '2023-08-22 02:09:31.383', '2023-08-23 02:25:03.693'),
('6d3b5a54-13f0-4256-ba30-1e43519b626a', 1, 'P041230821143114', 0, 0, 4, NULL, '123', '2023-08-13 16:35:44.000', 'f419e22d-451e-43e3-a3b7-97c29c7e5f41', NULL, 'SOLAR', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, 'd866e74d-204e-47d1-8c2f-ee80d76611a3', NULL, 'PT. SURYA DELI', NULL, 'e000ee92-aaa3-4420-843a-fe336d402222', NULL, 'MAHARANI', NULL, 'e70a3e22-e6bd-45c2-b6c2-6c83b98ed398', '10201214', NULL, NULL, 552, '0874c2d9-18f5-4e1f-878a-b28de7772f5b', NULL, 'LABANAN', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 2222, NULL, NULL, '2023-08-21 07:31:35.764', 44, NULL, NULL, '2023-08-22 02:08:57.434', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 123, 0, 0, NULL, 0, '', '', '2023-08-21 07:31:35.810', '2023-08-22 02:08:57.457'),
('6e48bc3c-5990-4272-b27d-c9eabfdef123', 1, 'P041230823092722', 0, 0, 4, NULL, '123', NULL, 'b03a86af-3619-4e0d-977f-c4576db17764', NULL, 'TBS', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, '84da0b4e-0c74-4542-8b51-07e3a60621e5', NULL, 'PT. TINTIN BOYOK SAWIT MAKMUR', NULL, 'ec4720b2-2a13-450b-80df-16c472099c45', NULL, 'JOKO', NULL, '717315ab-0e04-4d9f-82af-0d56b494aa10', '10201217', NULL, NULL, 666, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 555, NULL, NULL, '2023-08-23 02:27:39.377', 1, NULL, NULL, '2023-08-23 04:47:37.996', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, NULL, 0, '', '', '2023-08-23 02:27:39.433', '2023-08-23 04:47:38.006'),
('775b0069-b948-4fbb-8393-2b688bc7f7b8', 1, 'P041230823092638', 0, 0, 4, NULL, '123', NULL, 'b03a86af-3619-4e0d-977f-c4576db17764', NULL, 'TBS', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, '6cf3df4c-bd16-40f2-8be4-61621c9cf0aa', NULL, 'PT. MULTI JAYA PERKASA', NULL, 'ec4720b2-2a13-450b-80df-16c472099c45', NULL, 'JOKO', NULL, '208d9971-6418-4431-bd21-9a336c5135f2', '10201212', NULL, NULL, 111, 'c926eab0-de32-47b6-9011-2e0056d7dac3', NULL, 'T30 02', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 5555, NULL, NULL, '2023-08-23 02:27:00.672', 1, NULL, NULL, '2023-08-23 04:47:30.125', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 123, 0, 0, NULL, 0, '', '', '2023-08-23 02:27:00.722', '2023-08-23 04:47:30.180'),
('8fc858ca-d73c-404d-983f-6c2f733bbb35', 1, 'P041230821143532', 0, 0, 4, NULL, '123', '2023-08-16 16:36:04.000', '35b238cf-eca1-4aae-9dd6-986bd38ce303', NULL, 'PUPUK', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, '7b80cc52-9926-4072-9e87-02b722aac45e', NULL, 'PT. MULTI PRIMA ENTAKAI', NULL, '4a0ac60c-c856-418d-a6d8-b0a4a0350478', NULL, 'SURYO', NULL, '208d9971-6418-4431-bd21-9a336c5135f2', '10201212', NULL, NULL, 111, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 334, NULL, NULL, '2023-08-21 07:35:53.864', 22, NULL, NULL, '2023-08-22 02:08:22.327', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, NULL, 0, '', '', '2023-08-21 07:35:53.901', '2023-08-22 02:08:22.350'),
('9688e238-f44d-442e-a03a-bc5088eb4cb5', 1, 'P041230823092544', 0, 0, 4, NULL, '123', NULL, 'b03a86af-3619-4e0d-977f-c4576db17764', NULL, 'TBS', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, 'd866e74d-204e-47d1-8c2f-ee80d76611a3', NULL, 'PT. SURYA DELI', NULL, 'b5c89a61-a3c5-4002-81b1-da0f5733fd9f', NULL, 'PANJI', NULL, '25df8a79-528c-4120-a13d-0c2d807c980c', '10201215', NULL, NULL, 222, '0874c2d9-18f5-4e1f-878a-b28de7772f5b', NULL, 'LABANAN', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 222, NULL, NULL, '2023-08-23 02:25:58.339', 1, NULL, NULL, '2023-08-23 04:47:45.716', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 123, 0, 0, NULL, 0, '', '', '2023-08-23 02:25:58.385', '2023-08-23 04:47:45.770'),
('a0e5d061-713e-47e5-83e2-62d7353ba275', 1, 'P041230821142241', 0, 0, 4, NULL, '123', '2023-08-17 16:36:27.000', '35b238cf-eca1-4aae-9dd6-986bd38ce303', NULL, 'PUPUK', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, '6cf3df4c-bd16-40f2-8be4-61621c9cf0aa', NULL, 'PT. MULTI JAYA PERKASA', NULL, 'b5c89a61-a3c5-4002-81b1-da0f5733fd9f', NULL, 'PANJI', NULL, '717315ab-0e04-4d9f-82af-0d56b494aa10', '10201216', NULL, NULL, 666, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 11123, NULL, NULL, '2023-08-21 07:23:11.295', 44, NULL, NULL, '2023-08-22 02:09:02.264', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 312, 23, NULL, 0, '', '', '2023-08-21 07:23:11.334', '2023-08-22 02:09:02.285'),
('aa68805f-c860-4ddc-854e-6a934c259d89', 1, 'P041230822090951', 0, 0, 4, NULL, '123', '2023-09-23 09:33:17.000', 'b03a86af-3619-4e0d-977f-c4576db17764', NULL, 'TBS', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, '84da0b4e-0c74-4542-8b51-07e3a60621e5', NULL, 'PT. TINTIN BOYOK SAWIT MAKMUR', NULL, 'e000ee92-aaa3-4420-843a-fe336d402222', NULL, 'MAHARANI', NULL, 'e70a3e22-e6bd-45c2-b6c2-6c83b98ed398', '10201214', NULL, NULL, 552, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 5555, NULL, NULL, '2023-08-22 02:10:07.083', 1, NULL, NULL, '2023-08-23 02:24:52.316', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, NULL, 0, '', '', '2023-08-22 02:10:07.126', '2023-08-23 02:24:52.341'),
('b573bbf3-30a3-4505-889c-51562996b75b', 1, 'P041230822091156', 0, 0, 4, NULL, '123', '2023-10-23 09:33:35.000', '8fdc9998-abed-4d95-8950-057189d175f1', NULL, 'CPO', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, 'd866e74d-204e-47d1-8c2f-ee80d76611a3', NULL, 'PT. SURYA DELI', NULL, 'e000ee92-aaa3-4420-843a-fe336d402222', NULL, 'MAHARANI', NULL, 'dd7e6680-fa53-4132-9d62-895de12df195', '10201218', NULL, NULL, 552, '86bd25f9-2771-4151-9f42-ae679f86f422', NULL, 'PKS 01', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 551, NULL, NULL, '2023-08-22 02:12:15.207', 11, NULL, NULL, '2023-08-23 02:09:18.653', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 123, 0, 0, NULL, 0, '', '', '2023-08-22 02:12:15.250', '2023-08-23 02:09:18.679'),
('ba49914b-91a4-4e7a-9b67-2169fa24b270', 1, 'P041230821142208', 0, 0, 4, NULL, '123', '2023-08-13 16:37:34.000', 'f419e22d-451e-43e3-a3b7-97c29c7e5f41', NULL, 'SOLAR', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, '944630de-441e-46d6-aa2e-7c167f958fb7', NULL, 'PT. SEGORI SERASAU SEJAHTERA', NULL, '48786ee2-f7b7-47fa-9d8f-f72494469f58', NULL, 'GUMILANG', NULL, 'a84b5535-ecda-4f5b-8f56-77b5beaf2bba', '10201218', NULL, NULL, 443, '0874c2d9-18f5-4e1f-878a-b28de7772f5b', NULL, 'LABANAN', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 1111, NULL, NULL, '2023-08-21 07:22:31.119', 44, NULL, NULL, '2023-08-22 02:09:08.200', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 123, 0, 0, NULL, 0, '', '', '2023-08-21 07:22:31.167', '2023-08-22 02:09:08.266'),
('bd4b5a12-c873-4332-ad3e-9679f3a46832', 1, 'P041230823092619', 0, 0, 4, NULL, '123', NULL, 'b03a86af-3619-4e0d-977f-c4576db17764', NULL, 'TBS', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, 'e2a884aa-bd63-4f22-ada1-f47422e23456', NULL, 'PT. PRIMA GENERASI SUKSES', NULL, '48786ee2-f7b7-47fa-9d8f-f72494469f58', NULL, 'GUMILANG', NULL, 'fb5dfafc-4355-4d5e-92e9-9ea82bf1f3d5', '10201213', NULL, NULL, 666, '0874c2d9-18f5-4e1f-878a-b28de7772f5b', NULL, 'LABANAN', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 223, NULL, NULL, '2023-08-23 02:26:36.247', 1, NULL, NULL, '2023-08-23 04:47:34.269', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 123, 0, 0, NULL, 0, '', '', '2023-08-23 02:26:36.297', '2023-08-23 04:47:34.320'),
('bd6ca3c4-11d9-427c-897d-233e93513bc9', 1, 'P041230823092823', 0, 0, 4, NULL, '123', NULL, 'b03a86af-3619-4e0d-977f-c4576db17764', NULL, 'TBS', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, '6cf3df4c-bd16-40f2-8be4-61621c9cf0aa', NULL, 'PT. MULTI JAYA PERKASA', NULL, 'b5c89a61-a3c5-4002-81b1-da0f5733fd9f', NULL, 'PANJI', NULL, '2261c455-b9df-45f1-87c9-aa56d0806019', '10201211', NULL, NULL, 111, '0874c2d9-18f5-4e1f-878a-b28de7772f5b', NULL, 'LABANAN', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 544, NULL, NULL, '2023-08-23 02:28:37.595', 1, NULL, NULL, '2023-08-23 04:46:59.973', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 123, 0, 0, NULL, 0, '', '', '2023-08-23 02:28:37.647', '2023-08-23 04:47:00.041'),
('bf464f4d-1794-4ac6-9a35-5c7aeff81be9', 1, 'P041230822091009', 0, 0, 4, NULL, '123', '2023-12-01 09:34:37.000', '757c0363-8230-4efd-bebb-650c540183b8', NULL, 'PKO', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, 'e2a884aa-bd63-4f22-ada1-f47422e23456', NULL, 'PT. PRIMA GENERASI SUKSES', NULL, '4a0ac60c-c856-418d-a6d8-b0a4a0350478', NULL, 'SURYO', NULL, 'fb5dfafc-4355-4d5e-92e9-9ea82bf1f3d5', '10201213', NULL, NULL, 666, 'c926eab0-de32-47b6-9011-2e0056d7dac3', NULL, 'T30 02', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 664, NULL, NULL, '2023-08-22 02:10:29.259', 1, NULL, NULL, '2023-08-23 02:09:55.943', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 123, 0, 0, NULL, 0, '', '', '2023-08-22 02:10:29.301', '2023-08-23 02:09:56.013'),
('c95d38bf-d7cc-45e3-9683-b694da9c93d2', 1, 'P041230822091245', 0, 0, 4, NULL, '123', '2023-08-12 16:38:19.000', '8fdc9998-abed-4d95-8950-057189d175f1', NULL, 'CPO', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, '6cf3df4c-bd16-40f2-8be4-61621c9cf0aa', NULL, 'PT. MULTI JAYA PERKASA', NULL, '4a0ac60c-c856-418d-a6d8-b0a4a0350478', NULL, 'SURYO', NULL, '2261c455-b9df-45f1-87c9-aa56d0806019', '10201211', NULL, NULL, 111, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 234, NULL, NULL, '2023-08-22 02:12:57.112', 111, NULL, NULL, '2023-08-22 02:56:28.176', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, NULL, 0, '', '', '2023-08-22 02:12:57.153', '2023-08-22 02:56:28.197'),
('c9ee8617-6586-4f31-8006-be98693e5c06', 1, 'P041230822091127', 0, 0, 4, NULL, '3333', '2023-11-25 09:33:52.000', '757c0363-8230-4efd-bebb-650c540183b8', NULL, 'PKO', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, 'd866e74d-204e-47d1-8c2f-ee80d76611a3', NULL, 'PT. SURYA DELI', NULL, 'b5c89a61-a3c5-4002-81b1-da0f5733fd9f', NULL, 'PANJI', NULL, '717315ab-0e04-4d9f-82af-0d56b494aa10', '10201217', NULL, NULL, 666, 'c3131f99-0bfc-4a68-b057-39fa0b0e2f88', NULL, 'T30 01', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 534, NULL, NULL, '2023-08-22 02:11:50.350', 1, NULL, NULL, '2023-08-23 02:09:25.845', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 123, 0, 0, NULL, 0, '', '', '2023-08-22 02:11:50.394', '2023-08-23 02:09:25.914'),
('d76eeef3-08b7-4405-ab9b-a5ae94e9a24b', 1, 'P041230823092807', 0, 0, 4, NULL, '123', NULL, 'b03a86af-3619-4e0d-977f-c4576db17764', NULL, 'TBS', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, '1d46a39a-df09-4db4-b6a3-f56318dae2d9', NULL, 'PT. AGRO ANUGRAH LESTARI', NULL, '48786ee2-f7b7-47fa-9d8f-f72494469f58', NULL, 'GUMILANG', NULL, '1e0b678e-53c6-4956-8c22-0ebe154530bd', '10201210', NULL, NULL, 222, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 555, NULL, NULL, '2023-08-23 02:28:21.598', 1, NULL, NULL, '2023-08-23 04:47:21.445', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, NULL, 0, '', '', '2023-08-23 02:28:21.649', '2023-08-23 04:47:21.456'),
('de882430-cad6-4499-90d7-a2a414964a0b', 1, 'P041230822091032', 0, 0, 4, NULL, '123', '2023-08-15 16:39:02.000', '757c0363-8230-4efd-bebb-650c540183b8', NULL, 'PKO', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, 'e23c72a1-e840-4c1a-8400-f33fcdc91b98', NULL, 'PT. KOP BUN TIRTA MAKMUR SEJAHTERA', NULL, '48786ee2-f7b7-47fa-9d8f-f72494469f58', NULL, 'GUMILANG', NULL, '208d9971-6418-4431-bd21-9a336c5135f2', '10201212', NULL, NULL, 111, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 544, NULL, NULL, '2023-08-22 02:10:48.459', 10, NULL, NULL, '2023-08-23 02:09:47.907', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, NULL, 0, '', '', '2023-08-22 02:10:48.510', '2023-08-23 02:09:47.927'),
('e1e220b4-9223-4298-a6a6-2a80e8464548', 1, 'P041230822091220', 0, 0, 4, NULL, '123', '2023-08-24 16:39:21.000', '8fdc9998-abed-4d95-8950-057189d175f1', NULL, 'CPO', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, '32c68957-2326-426a-836e-0ec8ade49ede', NULL, 'PT. AGRO PLANKAN LESTARI', NULL, 'ec4720b2-2a13-450b-80df-16c472099c45', NULL, 'JOKO', NULL, '1e0b678e-53c6-4956-8c22-0ebe154530bd', '10201210', NULL, NULL, 222, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 234, NULL, NULL, '2023-08-22 02:12:41.929', 1, NULL, NULL, '2023-08-23 02:09:31.453', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, NULL, 0, '', '', '2023-08-22 02:12:41.973', '2023-08-23 02:09:31.476'),
('f3cf0674-a615-4a4d-99d5-4949750df7d3', 1, 'P041230822090933', 0, 0, 4, NULL, '123', '2023-08-27 16:39:40.000', 'b03a86af-3619-4e0d-977f-c4576db17764', NULL, 'TBS', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, 'f921742e-4ca9-4a40-ab0d-8a1413a4f462', NULL, 'PT. MULTI PRIMA ENTAKAI', NULL, 'b5c89a61-a3c5-4002-81b1-da0f5733fd9f', NULL, 'PANJI', NULL, '25df8a79-528c-4120-a13d-0c2d807c980c', '10201215', NULL, NULL, 222, 'e19c5989-f6d3-46f3-b6d2-86e0cf92d5f8', NULL, 'T30 03', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 445, NULL, NULL, '2023-08-22 02:09:48.913', 1, NULL, NULL, '2023-08-23 02:24:56.517', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 123, 0, 0, NULL, 0, '', '', '2023-08-22 02:09:48.957', '2023-08-23 02:24:56.539'),
('f3dd3c89-5c12-4587-894e-ec2ede0f7375', 1, 'P041230821143504', 0, 0, 4, NULL, '123', '2023-08-31 16:39:57.000', '35b238cf-eca1-4aae-9dd6-986bd38ce303', NULL, 'PUPUK', NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, '6cf3df4c-bd16-40f2-8be4-61621c9cf0aa', NULL, 'PT. MULTI JAYA PERKASA', NULL, '48786ee2-f7b7-47fa-9d8f-f72494469f58', NULL, 'GUMILANG', NULL, 'fb5dfafc-4355-4d5e-92e9-9ea82bf1f3d5', '10201213', NULL, NULL, 666, 'c3131f99-0bfc-4a68-b057-39fa0b0e2f88', NULL, 'T30 01', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 4444, NULL, NULL, '2023-08-21 07:35:29.312', 22, NULL, NULL, '2023-08-22 02:08:32.095', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 123, 0, 0, NULL, 0, '', '', '2023-08-21 07:35:29.352', '2023-08-22 02:08:32.157');

-- --------------------------------------------------------

--
-- Table structure for table `transportation_vehicles`
--

CREATE TABLE `transportation_vehicles` (
  `id` char(36) NOT NULL,
  `ref_type` int(11) NOT NULL DEFAULT 0,
  `ref_id` varchar(50) DEFAULT NULL,
  `code_sap` varchar(50) NOT NULL,
  `company_id` char(36) DEFAULT NULL,
  `company_ref_id` varchar(50) DEFAULT NULL,
  `company_name` varchar(50) NOT NULL,
  `product_id` char(36) DEFAULT NULL,
  `product_ref_id` varchar(50) DEFAULT NULL,
  `product_name` varchar(50) NOT NULL,
  `product_code` varchar(50) NOT NULL,
  `plate_no` varchar(10) NOT NULL,
  `capacity` double DEFAULT NULL,
  `brand` varchar(30) DEFAULT NULL,
  `model` varchar(30) DEFAULT NULL,
  `scc_model` int(11) NOT NULL DEFAULT 0,
  `notes` varchar(1000) DEFAULT NULL,
  `license_ed` datetime(3) DEFAULT NULL,
  `keur_ed` datetime(3) DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `user_created` char(36) DEFAULT NULL,
  `user_modified` char(36) DEFAULT NULL,
  `date_created` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `date_modified` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transportation_vehicles`
--

INSERT INTO `transportation_vehicles` (`id`, `ref_type`, `ref_id`, `code_sap`, `company_id`, `company_ref_id`, `company_name`, `product_id`, `product_ref_id`, `product_name`, `product_code`, `plate_no`, `capacity`, `brand`, `model`, `scc_model`, `notes`, `license_ed`, `keur_ed`, `is_deleted`, `user_created`, `user_modified`, `date_created`, `date_modified`) VALUES
('1e0b678e-53c6-4956-8c22-0ebe154530bd', 0, NULL, 'xxx2', 'f921742e-4ca9-4a40-ab0d-8a1413a4f462', NULL, 'PT. MULTI PRIMA ENTAKAI', '35b238cf-eca1-4aae-9dd6-986bd38ce303', NULL, 'PUPUK', '1122', '10201210', 1000, 'ADIDAS', '1111', 222, 'TEST', '2023-08-12 17:00:00.000', '2023-08-12 17:00:00.000', 0, '', '', '2023-08-13 03:38:59.346', '2023-08-13 03:38:59.346'),
('208d9971-6418-4431-bd21-9a336c5135f2', 0, NULL, '123', 'f921742e-4ca9-4a40-ab0d-8a1413a4f462', NULL, 'PT. MULTI PRIMA ENTAKAI', '998024eb-dfa2-4bcb-8912-e6aa3c42b7eb', NULL, 'CANGKANG', '334', '10201212', 1000, 'NIKKE', '1111', 111, 'TEST', '2023-08-20 17:00:00.000', '2023-08-20 17:00:00.000', 0, '', '', '2023-08-21 07:25:05.841', '2023-08-21 07:25:05.841'),
('2261c455-b9df-45f1-87c9-aa56d0806019', 0, NULL, '123', '944630de-441e-46d6-aa2e-7c167f958fb7', NULL, 'PT. SEGORI SERASAU SEJAHTERA', 'f419e22d-451e-43e3-a3b7-97c29c7e5f41', NULL, 'SOLAR', '1111', '10201211', 1000, 'ADIDAS', '1111', 111, 'TEST', '2023-08-12 17:00:00.000', '2023-08-12 17:00:00.000', 0, '', '', '2023-08-13 03:38:32.268', '2023-08-13 03:38:32.268'),
('25df8a79-528c-4120-a13d-0c2d807c980c', 0, NULL, 'xxx2', 'e23c72a1-e840-4c1a-8400-f33fcdc91b98', NULL, 'PT. KOP BUN TIRTA MAKMUR SEJAHTERA', '35b238cf-eca1-4aae-9dd6-986bd38ce303', NULL, 'PUPUK', '1122', '10201215', 1000, 'ASUS', 'bcvbcvb12', 222, 'TEST', '2023-08-20 17:00:00.000', '2023-08-20 17:00:00.000', 0, '', '', '2023-08-21 07:28:24.087', '2023-08-21 07:28:24.087'),
('717315ab-0e04-4d9f-82af-0d56b494aa10', 0, NULL, 'RRR8', 'd866e74d-204e-47d1-8c2f-ee80d76611a3', NULL, 'PT. SURYA DELI', '998024eb-dfa2-4bcb-8912-e6aa3c42b7eb', NULL, 'CANGKANG', '6666', '10201217', 1000, 'ASUS', '333', 666, 'TEST', '2023-08-12 17:00:00.000', '2023-08-12 17:00:00.000', 0, '', '', '2023-08-13 03:40:19.819', '2023-08-13 03:40:19.819'),
('99179ed5-3843-4a69-9f54-39d042c45da6', 0, NULL, 'xxx2', 'd866e74d-204e-47d1-8c2f-ee80d76611a3', NULL, 'PT. SURYA DELI', 'f419e22d-451e-43e3-a3b7-97c29c7e5f41', NULL, 'SOLAR', '555', '10201216', 1000, 'ADVAN', '1111', 666, 'TEST', '2023-08-20 17:00:00.000', '2023-08-20 17:00:00.000', 0, '', '', '2023-08-21 07:28:48.273', '2023-08-21 07:28:48.273'),
('a84b5535-ecda-4f5b-8f56-77b5beaf2bba', 0, NULL, 'T777', 'e2a884aa-bd63-4f22-ada1-f47422e23456', NULL, 'PT. PRIMA GENERASI SUKSES', '64be8f8d-7344-4e6e-bf62-f0ef63f75f78', NULL, 'KERNEL', '334', '10201219', 1000, 'ADVAN', '1111', 443, 'TEST', '2023-08-12 17:00:00.000', '2023-08-12 17:00:00.000', 0, '', '', '2023-08-13 03:40:51.661', '2023-08-13 03:40:51.661'),
('dd7e6680-fa53-4132-9d62-895de12df195', 0, NULL, 'A777', '84da0b4e-0c74-4542-8b51-07e3a60621e5', NULL, 'PT. TINTIN BOYOK SAWIT MAKMUR', 'e2a291c3-52b9-4331-9bd1-3b5de146d202', NULL, 'JANGKOS', '555', '10201218', 1000, 'NIKKE', '333S', 552, 'TEST', '2023-08-12 17:00:00.000', '2023-08-12 17:00:00.000', 0, '', '', '2023-08-13 03:39:32.145', '2023-08-13 03:39:32.145'),
('e70a3e22-e6bd-45c2-b6c2-6c83b98ed398', 0, NULL, '123', '84da0b4e-0c74-4542-8b51-07e3a60621e5', NULL, 'PT. TINTIN BOYOK SAWIT MAKMUR', 'e2a291c3-52b9-4331-9bd1-3b5de146d202', NULL, 'JANGKOS', '6666', '10201214', 1000, 'ADIDAS', '1111', 552, 'TEST', '2023-08-20 17:00:00.000', '2023-08-20 17:00:00.000', 0, '', '', '2023-08-21 07:27:54.658', '2023-08-21 07:27:54.658'),
('fb5dfafc-4355-4d5e-92e9-9ea82bf1f3d5', 0, NULL, 'xxx2', 'f921742e-4ca9-4a40-ab0d-8a1413a4f462', NULL, 'PT. MULTI PRIMA ENTAKAI', '64be8f8d-7344-4e6e-bf62-f0ef63f75f78', NULL, 'KERNEL', '334', '10201213', 1000, 'NIKKE', '1111', 666, 'TEST', '2023-08-20 17:00:00.000', '2023-08-20 17:00:00.000', 0, '', '', '2023-08-21 07:25:40.772', '2023-08-21 07:25:40.772');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` char(36) NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `nik` varchar(30) NOT NULL,
  `role_id` int(11) NOT NULL,
  `hashed_password` varchar(100) NOT NULL,
  `hashed_rt` varchar(100) DEFAULT NULL,
  `is_email_verified` tinyint(1) NOT NULL DEFAULT 0,
  `is_ldap_user` tinyint(1) NOT NULL DEFAULT 0,
  `is_disabled` tinyint(1) NOT NULL DEFAULT 0,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `user_created` varchar(36) DEFAULT NULL,
  `user_modified` varchar(36) DEFAULT NULL,
  `date_created` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `date_modified` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `nik`, `role_id`, `hashed_password`, `hashed_rt`, `is_email_verified`, `is_ldap_user`, `is_disabled`, `is_deleted`, `user_created`, `user_modified`, `date_created`, `date_modified`) VALUES
('1164c8ca-7b42-4164-86cd-263558b16a6c', 'jabrik', 'sahajabrik@mmail.com', 'string4562546g6575', 4, '$argon2id$v=19$m=65536,t=3,p=4$0UX9EiUl86Si3MlmnGzSNg$ouuXSfRhYOAcLgo11wbm94pG8byWxKtwzDZCy+jiZCo', NULL, 0, 0, 0, 0, '7f20c889-43c1-4831-a454-64b9400a75fb', NULL, '2023-09-19 03:08:59.450', '2023-09-19 03:08:59.450'),
('12a4633d-e044-40a8-8816-1b877d41d754', 'gina', 'gina@mail.com', '321321321321321', 4, '$argon2id$v=19$m=65536,t=3,p=4$v2qcY2KicF9tVG1cR4VhTg$0kLpNalci6JUqEHidt+NTUHLMwQipFxEd6zZgKFf0aY', '$argon2id$v=19$m=65536,t=3,p=4$XHonJbpNKhyvLCmR6ZUwqw$IkBafzTQ954PfDrueomuDj1ehKKPUfOon7W7rrWZwcg', 0, 0, 0, 0, '7f20c889-43c1-4831-a454-64b9400a75fb', NULL, '2023-09-19 02:23:11.858', '2023-09-22 02:59:35.294'),
('1a109bba-ff76-48d7-99af-009511c5b30c', 'testing', 'dediirawansyafiq@gmail.com', 'string45625475474574576575', 4, '$argon2id$v=19$m=65536,t=3,p=4$/For4/y68EOCZl/qpNC1PA$/bLUu8/TpGrZ8x8AZWfXmuWfkcJdH2mLMwQAfQ3plgw', NULL, 0, 0, 0, 0, '7f20c889-43c1-4831-a454-64b9400a75fb', NULL, '2023-09-18 23:13:22.472', '2023-09-21 20:55:56.855'),
('1a4492cc-6418-46cb-9b6e-db8853267eb1', 'Robert', 'roberto@mmail.com', 'string5668990dew', 3, '$argon2id$v=19$m=65536,t=3,p=4$nMXC4qQqky54GsSgDATxQQ$mD7wGVGpneXwhqZqBFfw/KfYPxbuKsufD/86PiO3Ykk', NULL, 0, 0, 0, 0, '7f20c889-43c1-4831-a454-64b9400a75fb', NULL, '2023-09-19 03:39:39.701', '2023-09-21 09:45:14.536'),
('4e5e76d3-114a-46c1-9a10-d4389deb7ad2', 'sukendari', 'deni@mmail.com', '32132145671321', 4, '$argon2id$v=19$m=65536,t=3,p=4$CtgIpnEUYEFL3toWgEdcxw$dNuXwvVIAgXvfoLzRL4lgc+H8S8tMYqJrOgyY07gHtY', NULL, 0, 0, 0, 0, '7f20c889-43c1-4831-a454-64b9400a75fb', NULL, '2023-09-19 03:05:21.673', '2023-09-19 03:05:21.673'),
('7f20c889-43c1-4831-a454-64b9400a75fb', 'Valentino Alam', 'ichikyube@gmail.com', '123445567890123456789', 1, '$argon2id$v=19$m=65536,t=3,p=4$YNlEuyi2bmzq+C77/DVHHg$bH/PC2GkmLzTbmyl8eooUgpxMGqkf1oIbc0SXUMy508', NULL, 0, 0, 0, 0, '', '', '2023-08-21 10:09:13.521', '2023-09-21 21:34:47.182'),
('93dd85d3-83ce-4a81-8e8e-11ad530280f3', 'Sheena', 'sheena@mmail.com', '24355gbh120345', 4, '$argon2id$v=19$m=65536,t=3,p=4$REUiZPvKzVgwybN31puDCw$NZdV8UdJqPioP1qvH1KHmaGmoPu+NWtOpW8GHgwG9SQ', '$argon2id$v=19$m=65536,t=3,p=4$k1xhrxS3VJGzqwVHdrydlQ$JLvHeYlp3JJYq3iQnrrbxVqrV6cEQe7rGYEf98kRoJ4', 0, 0, 0, 0, '7f20c889-43c1-4831-a454-64b9400a75fb', NULL, '2023-09-19 03:07:40.486', '2023-09-21 22:02:31.408'),
('dead2fb4-738a-49f1-bc7f-ae61e1943b45', 'uEleven', 'user11@wbms.dsn', 'string456254754745f', 2, '$argon2id$v=19$m=65536,t=3,p=4$lJ0/3jma/dhKdDokwArwvg$P/38ynXkL61mdPivyudZe1K5mkoCo9efgOvez/0ftVo', NULL, 0, 1, 0, 0, '7f20c889-43c1-4831-a454-64b9400a75fb', NULL, '2023-09-19 03:43:57.159', '2023-09-19 03:43:57.159');

-- --------------------------------------------------------

--
-- Table structure for table `weighbridges`
--

CREATE TABLE `weighbridges` (
  `id` char(36) NOT NULL,
  `site_id` char(36) NOT NULL,
  `code` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `user_created` char(36) DEFAULT NULL,
  `user_modified` char(36) DEFAULT NULL,
  `date_created` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `date_modified` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `weighbridges`
--

INSERT INTO `weighbridges` (`id`, `site_id`, `code`, `name`, `is_deleted`, `user_created`, `user_modified`, `date_created`, `date_modified`) VALUES
('3b536937-40bb-4ac3-b8f0-959d4d3413d6', 'c926eab0-de32-47b6-9011-2e0056d7dac3', '222', 'TIMBANGAN 03', 0, '', '', '2023-08-21 03:05:25.532', '2023-08-21 03:05:25.532'),
('46934fd4-14ab-4fc1-91a4-a4842c992765', 'e19c5989-f6d3-46f3-b6d2-86e0cf92d5f8', '123', 'TIMBANGAN 02', 0, '', '', '2023-08-21 03:05:12.149', '2023-08-21 03:05:12.149'),
('6e516db3-f1c8-453f-aacb-ae1e9c733de5', 'c3131f99-0bfc-4a68-b057-39fa0b0e2f88', '444R', 'TIMBANGAN 04', 0, '', '', '2023-08-21 03:05:38.699', '2023-08-21 03:05:38.699'),
('89dd6361-4860-44a3-aa6d-3c6c21bbaba3', '0874c2d9-18f5-4e1f-878a-b28de7772f5b', '111', 'TIMBANGAN 01', 0, '', '', '2023-08-21 03:04:28.384', '2023-08-21 03:04:28.384'),
('f6c92443-c0f2-485b-bf7e-947a76f36d90', '86bd25f9-2771-4151-9f42-ae679f86f422', '666T', 'TIMBANGAN 05', 0, '', '', '2023-08-21 03:05:49.124', '2023-08-21 03:05:49.124');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('43528c92-2206-4f7d-9b27-c27b9ffd898b', 'b40ad5f12299f81626d24338e4a8cd8a137edca901d974e87d7e59f0511d1a2c', '2023-09-09 09:56:21.602', '20230908161541_mamoth', NULL, NULL, '2023-09-09 09:56:12.978', 1),
('b115067a-f180-4e4e-96f0-8e7c82961321', '6bd318bff4bbcfc143977dfd6a34b776f8e9dc1d84dfa12ae1eb176fb4b32aee', '2023-09-09 09:57:32.907', '20230909095732_mimi', NULL, NULL, '2023-09-09 09:57:32.776', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barcode_types`
--
ALTER TABLE `barcode_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cities_province_id_fkey` (`province_id`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `configs`
--
ALTER TABLE `configs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `configs_name_key` (`name`);

--
-- Indexes for table `config_admin_list`
--
ALTER TABLE `config_admin_list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `config_requests`
--
ALTER TABLE `config_requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `config_requests_config_id_fkey` (`config_id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customers_customer_type_id_fkey` (`customer_type_id`),
  ADD KEY `customers_customer_group_id_fkey` (`customer_group_id`),
  ADD KEY `customers_city_id_fkey` (`city_id`);

--
-- Indexes for table `customer_groups`
--
ALTER TABLE `customer_groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer_types`
--
ALTER TABLE `customer_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `drivers`
--
ALTER TABLE `drivers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `drivers_nik_key` (`nik`),
  ADD KEY `drivers_company_id_fkey` (`company_id`);

--
-- Indexes for table `Image`
--
ALTER TABLE `Image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mills`
--
ALTER TABLE `mills`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mills_site_id_fkey` (`site_id`),
  ADD KEY `mills_company_id_fkey` (`company_id`);

--
-- Indexes for table `Notification`
--
ALTER TABLE `Notification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_groups`
--
ALTER TABLE `product_groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `profiles_user_id_key` (`user_id`);

--
-- Indexes for table `provinces`
--
ALTER TABLE `provinces`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `RoleArchive`
--
ALTER TABLE `RoleArchive`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_key` (`name`);

--
-- Indexes for table `sites`
--
ALTER TABLE `sites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sites_source_site_id_fkey` (`source_site_id`),
  ADD KEY `sites_company_id_fkey` (`company_id`),
  ADD KEY `sites_city_id_fkey` (`city_id`);

--
-- Indexes for table `storage_tanks`
--
ALTER TABLE `storage_tanks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `storage_tanks_site_id_fkey` (`site_id`),
  ADD KEY `storage_tanks_stock_owner_id_fkey` (`stock_owner_id`),
  ADD KEY `storage_tanks_product_id_fkey` (`product_id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transactions_product_id_fkey` (`product_id`),
  ADD KEY `transactions_customer_id_fkey` (`customer_id`),
  ADD KEY `transactions_transporter_id_fkey` (`transporter_id`),
  ADD KEY `transactions_transport_vehicle_id_fkey` (`transport_vehicle_id`),
  ADD KEY `transactions_driver_id_fkey` (`driver_id`),
  ADD KEY `transactions_origin_site_id_fkey` (`origin_site_id`),
  ADD KEY `transactions_destination_site_id_fkey` (`destination_site_id`),
  ADD KEY `transactions_origin_source_storage_tank_id_fkey` (`origin_source_storage_tank_id`),
  ADD KEY `transactions_destination_sink_storage_tank_id_fkey` (`destination_sink_storage_tank_id`);

--
-- Indexes for table `transportation_vehicles`
--
ALTER TABLE `transportation_vehicles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transportation_vehicles_company_id_fkey` (`company_id`),
  ADD KEY `transportation_vehicles_product_id_fkey` (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_key` (`username`),
  ADD UNIQUE KEY `users_email_key` (`email`),
  ADD UNIQUE KEY `users_nik_key` (`nik`),
  ADD KEY `users_role_id_fkey` (`role_id`);

--
-- Indexes for table `weighbridges`
--
ALTER TABLE `weighbridges`
  ADD PRIMARY KEY (`id`),
  ADD KEY `weighbridges_site_id_fkey` (`site_id`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `configs`
--
ALTER TABLE `configs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `config_admin_list`
--
ALTER TABLE `config_admin_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cities`
--
ALTER TABLE `cities`
  ADD CONSTRAINT `cities_province_id_fkey` FOREIGN KEY (`province_id`) REFERENCES `provinces` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `config_requests`
--
ALTER TABLE `config_requests`
  ADD CONSTRAINT `config_requests_config_id_fkey` FOREIGN KEY (`config_id`) REFERENCES `configs` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `customers`
--
ALTER TABLE `customers`
  ADD CONSTRAINT `customers_city_id_fkey` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `customers_customer_group_id_fkey` FOREIGN KEY (`customer_group_id`) REFERENCES `customer_groups` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `customers_customer_type_id_fkey` FOREIGN KEY (`customer_type_id`) REFERENCES `customer_types` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `drivers`
--
ALTER TABLE `drivers`
  ADD CONSTRAINT `drivers_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `mills`
--
ALTER TABLE `mills`
  ADD CONSTRAINT `mills_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `mills_site_id_fkey` FOREIGN KEY (`site_id`) REFERENCES `sites` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `profiles`
--
ALTER TABLE `profiles`
  ADD CONSTRAINT `profiles_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `sites`
--
ALTER TABLE `sites`
  ADD CONSTRAINT `sites_city_id_fkey` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `sites_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `sites_source_site_id_fkey` FOREIGN KEY (`source_site_id`) REFERENCES `sites` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `storage_tanks`
--
ALTER TABLE `storage_tanks`
  ADD CONSTRAINT `storage_tanks_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `storage_tanks_site_id_fkey` FOREIGN KEY (`site_id`) REFERENCES `sites` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `storage_tanks_stock_owner_id_fkey` FOREIGN KEY (`stock_owner_id`) REFERENCES `companies` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `transactions_destination_sink_storage_tank_id_fkey` FOREIGN KEY (`destination_sink_storage_tank_id`) REFERENCES `storage_tanks` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `transactions_destination_site_id_fkey` FOREIGN KEY (`destination_site_id`) REFERENCES `sites` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `transactions_driver_id_fkey` FOREIGN KEY (`driver_id`) REFERENCES `drivers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `transactions_origin_site_id_fkey` FOREIGN KEY (`origin_site_id`) REFERENCES `sites` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `transactions_origin_source_storage_tank_id_fkey` FOREIGN KEY (`origin_source_storage_tank_id`) REFERENCES `storage_tanks` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `transactions_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `transactions_transport_vehicle_id_fkey` FOREIGN KEY (`transport_vehicle_id`) REFERENCES `transportation_vehicles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `transactions_transporter_id_fkey` FOREIGN KEY (`transporter_id`) REFERENCES `companies` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `transportation_vehicles`
--
ALTER TABLE `transportation_vehicles`
  ADD CONSTRAINT `transportation_vehicles_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `transportation_vehicles_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `weighbridges`
--
ALTER TABLE `weighbridges`
  ADD CONSTRAINT `weighbridges_site_id_fkey` FOREIGN KEY (`site_id`) REFERENCES `sites` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
