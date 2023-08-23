import { Controller, Get } from '@nestjs/common';
import { Roles } from './common/decorators';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Attributes')
@Controller('app')
export class AppController {
  //   @Roles('Administrator')
  @Get('resourceslist')
  async getAll() {
    const dataOut = {
      status: true,
      message: '',
      data: {
        model: {
          records: [],
          allAttributes: {},
        },
      },
      logs: {},
    };

    try {
      const models = Prisma.dmmf.datamodel.models.map((model) => model.name);
      let schemas = {};
      models.forEach(async (name) => {
        schemas[name] = Prisma.dmmf.datamodel.models
          .find((model) => model.name === name)
          .fields.map((field) => field.name);
      });

      dataOut.data.model.records = models;
      dataOut.data.model.allAttributes = schemas;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }
  @Get('configlist')
  async getConfigs() {
    const configo = [
      [1, 'Zero Lock', 'Mengubah status menjadi unlock pada timbangan secara realtime', 'number', '0', 3, 'ACTIVE', '', '', 0, '', '', '2023-08-20 23:40:41.952', ''],
      [2, 'UnStable Lock', 'Mengubah status Unlock menjadi lock pada timbangan sehingga operator tidak bisa melakukan double entry', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:44:27.000', ''],
      [3, 'Scan & Decode Barcode', 'Fitur untuk melakukan scan barcode dan melakukan decode barcode', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:45:51.000', ''],
      [4, 'View QR CodeQR Code', 'Fitur untuk mengerate Barcode dan menampilkannya', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:45:51.000', ''],
      [5, 'View Bontrip', 'Untuk membuat surat surat jalan', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:45:51.000', ''],
      [6, 'Entry Manual Data Pengemudi dan kendaraan', 'Jika terjadi masalah integrasi sehingga tidak bisa diproses dilapangan', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:45:51.000', ''],
      [7, 'Approval Timbang Keluar', 'Fitur yang dipakai untuk melakukan approval oleh Mill Head jika terjadi masalah', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:45:51.000', ''],
      [8, 'Entry manual Timbangan', 'Jika timbangan terjadi masalah.', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:45:51.000', ''],
      [9, 'Fitur Penentuan Kendaraan masuk dan keluar berdasarkan produk', 'Fitur untuk menentukan Kendaraan keluar atau masuk berdasarkan selisih timbangan awal dan timbangan akhir dilihat dari jenis komoditas dan lokasi', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:45:51.000', ''],
      [10, 'Reporting summary [Generate PDF dan Excel]', 'Fitur untuk menampilkan summary report, disesuaikan dengan kebutuhan user field dan format laporan [Produk , Customer, Harian]', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:45:51.000', ''],
      [11, 'Daily Report Transaksi [generate Report PDF dan Excel]', 'Fitur untuk membuat laporan harian, disesuaikan dengan kebutuhan user field dan format laporan [Produk, Customer,  Unit]', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:45:51.000', ''],
      [12, 'Integrasi Jembatan Timbang', 'Fitur untuk mengambil berat timbangan', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:45:51.000', ''],
      [13, 'Integrasi ke SAP', 'Fitur untuk melakukan integrasi dengan SAP yang bertindak sebagai penyedia data', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:45:51.000', ''],
      [14, 'Show Produk dan Lokasi', 'Penambahan Field untuk melihat informasi Produk dan Lokasi', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:45:51.000', ''],
      [15, 'Integrasi dengan E-Dispatch - Api Get Data Master[ Vehicle, Pengemudi]', 'API untuk mengambil data Pengemudi dan dan kendaraan pada system E-Dispatch', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:45:51.000', ''],
      [16, 'Integrasi dengan E-Dispatch - API Get RKH Timbang Keluar', 'API untuk mengambil data RKH pada system E-Dispatch', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:45:51.000', ''],
      [17, 'Integrasi dengan E-dispatch - API Closed Delivery Diterima', 'API untuk mengakhiri pengiriman dengan kondisi produk diterima [Normal]', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:45:51.000', ''],
      [18, 'Integrasi dengan E-dispatch - API Closed Delivery Dibatalkan', 'API untuk mengakhiri pengiriman dengan kondisi produk dibatalkan', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:45:51.000', ''],
      [19, 'Integrasi dengan E-dispatch - API Closed Delivery Rejected', 'API untuk mengakhiri pengiriman dengan kondisi produk ditolak [normal]', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:45:51.000', ''],
      [20, 'Integrasi dengan Sensor untuk Fitur posisi Truk yang ditimbang', 'Fitur untuk mengunci posisi truk ditimbangan sehingga jika keluar posisi berat truk tidak bisa di ambil [Tombol Get Weight Disable]', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:45:51.000', ''],
      [21, 'Integrasi dengan E-LHP – API Get data Muatan, Kendaraan dan pengemudi', 'API untuk mengambil data Muatan, Kendaraan dan Pengemudi', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:45:51.000', ''],
      [22, 'Integrasi dengan DSN Move On – API Get data Muatan, Kendaraan dan pengemudi', 'API untuk mengambil data Muatan, Kendaraan dan Pengemudi', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:45:51.000', ''],
      [23, 'Integrasi dengan TBS Eksternal Mobile – API Get data Muatan, Kendaraan dan pengemudi', 'API untuk mengambil data Muatan, Kendataan dan Pengemudi', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:44:27.000', ''],
      [24, 'Fitur Cancel / Delete Timbangan', 'Fitur untuk melakukan cancel/ delete penimbangan', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:44:27.000', ''],
      [25, 'Data Company', 'Fitur untuk menampilkan data-data company', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:44:27.000', ''],
      [26, 'Data Customer', 'Fitur untuk menampilkan data-data Customer', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:44:27.000', ''],
      [27, 'Data Site', 'Fitur untuk menampilkan data-data Site', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:44:27.000', ''],
      [28, 'Data Weighbridge', 'Fitur untuk menampilkan data-data Weghbridge', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:44:27.000', ''],
      [29, 'Data Product', 'Fitur untuk menampilkan data-data Product', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:44:27.000', ''],
      [30, 'Data Storage Tank', 'Fitur untuk menampilkan data-data Storage Tank', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:45:51.000', ''],
      [31, 'Data Driver', 'Fitur untuk menampilkan data-data Pengemudi', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:44:27.000', ''],
      [32, 'Data Vehicle', 'Fitur untuk menampilkan data-data Kendaraan', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:44:27.000', ''],
      [33, 'Admin Login', 'Fitur Login untuk masuk ke menu Admin', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:44:27.000', ''],
      [34, 'Dashboard Admin', 'Fitur Untuk menampilkan dashboard Admin', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:44:27.000', ''],
      [35, 'Edit Profile', 'Fitur Untuk mengedit profil user', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:44:27.000', ''],
      [36, 'WBMS Config', 'Fitur untuk melakukan setting konfigurasi WBMS', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:44:27.000', ''],
      [37, 'Config Request Approval', 'Fitur untuk melakukan approval terkait perubahan konfigurasi', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 11:11:13.000', ''],
      [38, 'Fitur Edit data WBMS', 'Fitur untuk melakukan Edit WBMS [Case yang baru ditemukan Pemindahan Lokasi asal muatan dan lokasi Tujuan [CPO[Tangki], TBS[Kebun] ]', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 11:11:13.000', ''],
      [39, 'Alert/Notifikasi', 'Notifikasi Sudah ada namun dibuat berbahasa Indonesia dan lebih informatif', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:44:27.000', ''],
      [40, 'Input Segel', 'Fitur untuk menginput nomor Segel', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:44:27.000', ''],
      [41, 'Fungsi pengecekan status awal timbang Truk', 'Fungsi untuk mengidentifikasi bahwa truk sudah mempunyai setatus awal truk. Case saat ini Truk bisa di isi meskipun tidak timbang kosong untuk CPO/PKO Saat ini status awal truk dilempar dari aplikasi E-dispatch.', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:44:27.000', ''],
      [42, 'Fungsi Header', 'Fungsi tombol dan search pada header harus sudah berjalan sesuai dengan fungsinya', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:44:27.000', ''],
      [43, 'Fitur Penambahan Notes ditimbangan keluar', 'Fitur untuk menambah Notes pada timbangan keluar', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:44:27.000', ''],
      [44, 'Edit Segel', 'Fitur untuk mengedit nomor segel', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:44:27.000', ''],
      [45, 'BA Selisih muatan awal dan muatan akhir', 'Berita Acara jika ada selisih muatan 0,3%', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:44:27.000', ''],
      [46, 'Sertifikasi WBMS', 'Fungsi untuk melihat Nomor Sertifikasi', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:44:27.000', ''],
      [47, 'Fitur Upload Foto', 'Fitur untuk melakukan Upload Foto sebagai bukti bahwa truk tersebut di cancel atau di reject', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:44:27.000', ''],
      [48, 'Lansir dari 1 mobil Ke 2 Mobil', 'Fitur untuk memindahkan Isi muatan dari 1 truk ke lebih dari 1 Truk', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:44:27.000', ''],
      [49, 'Get Weight', 'Fitur untuk Mengambil berat muatan timbangan', 'number', '0', 3, 'PENDING', '', '', 0, '', '', '2023-08-22 10:44:27.000', '']
      ]

    const machintpo = configo.map(conf=> ({name:conf[1], description:conf[2], type: conf[3], value: conf[4], level_of_approval: conf[5], status: conf[6]}))
      console.log(machintpo)
      return machintpo
  }
}
