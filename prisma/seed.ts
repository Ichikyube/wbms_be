import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // create two main roles
    // const masterAdmin = await prisma.role.upsert({
    //     where: { name: 'AdminMaster' },
    //     update: {},
    //     create: {
    //     name: 'AdminMaster',
    //     permissions: {
    //         create: [
    //         {
    //             resource: 'users',
    //             grants: {
    //             create: [
    //                 {
    //                 action: 'read',
    //                 possession: 'any',
    //                 },
    //                 {
    //                 action: 'create',
    //                 possession: 'any',
    //                 },
    //                 {
    //                 action: 'update',
    //                 possession: 'any',
    //                 },
    //                 {
    //                 action: 'delete',
    //                 possession: 'any',
    //                 },
    //             ],
    //             },
    //         },
    //         {
    //             resource: 'configs',
    //             grants: {
    //             create: [
    //                 {
    //                 action: 'read',
    //                 possession: 'any',
    //                 },
    //                 {
    //                 action: 'create',
    //                 possession: 'any',
    //                 },
    //                 {
    //                 action: 'update',
    //                 possession: 'any',
    //                 },
    //                 {
    //                 action: 'delete',
    //                 possession: 'any',
    //                 },
    //             ],
    //             },
    //         },
    //         ],
    //     },
    //     },
    // });

    // const admin = await prisma.role.upsert({
    //     where: { name: 'AdminSystem' },
    //     update: {},
    //     create: {
    //     name: 'AdminSystem',
    //     permissions: {
    //         create: [
    //         {
    //             resource: 'user',
    //             grants: {
    //             create: [
    //                 {
    //                 action: 'read',
    //                 possession: 'own',
    //                 },
    //                 {
    //                 action: 'create',
    //                 possession: 'own',
    //                 },
    //                 {
    //                 action: 'update',
    //                 possession: 'own',
    //                 },
    //                 {
    //                 action: 'delete',
    //                 possession: 'own',
    //                 },
    //             ],
    //             },
    //         },
    //         {
    //             resource: 'user',
    //             grants: {
    //             create: [
    //                 {
    //                 action: 'read',
    //                 possession: 'any',
    //                 },
    //                 {
    //                 action: 'create',
    //                 possession: 'any',
    //                 },
    //                 {
    //                 action: 'update',
    //                 possession: 'any',
    //                 },
    //                 {
    //                 action: 'delete',
    //                 possession: 'any',
    //                 },
    //             ],
    //             },
    //         },
    //         ],
    //     },
    //     },
    // });

    const configs = await prisma.config.createMany({
        data: [
        {
            name: 'Zero Lock',
            description:
            'Mengubah status menjadi unlock pada timbangan secara realtime',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'ACTIVE',
        },
        {
            name: 'UnStable Lock',
            description:
            'Mengubah status Unlock menjadi lock pada timbangan sehingga operator tidak bisa melakukan double entry',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Scan & Decode Barcode',
            description:
            'Fitur untuk melakukan scan barcode dan melakukan decode barcode',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'View QR CodeQR Code',
            description: 'Fitur untuk mengerate Barcode dan menampilkannya',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'View Bontrip',
            description: 'Untuk membuat surat surat jalan',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Entry Manual Data Pengemudi dan kendaraan',
            description:
            'Jika terjadi masalah integrasi sehingga tidak bisa diproses dilapangan',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Approval Timbang Keluar',
            description:
            'Fitur yang dipakai untuk melakukan approval oleh Mill Head jika terjadi masalah',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Entry manual Timbangan',
            description: 'Jika timbangan terjadi masalah.',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Fitur Penentuan Kendaraan masuk dan keluar berdasarkan produk',
            description:
            'Fitur untuk menentukan Kendaraan keluar atau masuk berdasarkan selisih timbangan awal dan timbangan akhir dilihat dari jenis komoditas dan lokasi',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Reporting summary [Generate PDF dan Excel]',
            description:
            'Fitur untuk menampilkan summary report, disesuaikan dengan kebutuhan user field dan format laporan [Produk , Customer, Harian]',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Daily Report Transaksi [generate Report PDF dan Excel]',
            description:
            'Fitur untuk membuat laporan harian, disesuaikan dengan kebutuhan user field dan format laporan [Produk, Customer,  Unit]',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Integrasi Jembatan Timbang',
            description: 'Fitur untuk mengambil berat timbangan',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Integrasi ke SAP',
            description:
            'Fitur untuk melakukan integrasi dengan SAP yang bertindak sebagai penyedia data',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Show Produk dan Lokasi',
            description:
            'Penambahan Field untuk melihat informasi Produk dan Lokasi',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Integrasi dengan E-Dispatch - Api Get Data Master[ Vehicle, Pengemudi]',
            description:
            'API untuk mengambil data Pengemudi dan dan kendaraan pada system E-Dispatch',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Integrasi dengan E-Dispatch - API Get RKH Timbang Keluar',
            description: 'API untuk mengambil data RKH pada system E-Dispatch',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Integrasi dengan E-dispatch - API Closed Delivery Diterima',
            description:
            'API untuk mengakhiri pengiriman dengan kondisi produk diterima [Normal]',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Integrasi dengan E-dispatch - API Closed Delivery Dibatalkan',
            description:
            'API untuk mengakhiri pengiriman dengan kondisi produk dibatalkan',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Integrasi dengan E-dispatch - API Closed Delivery Rejected',
            description:
            'API untuk mengakhiri pengiriman dengan kondisi produk ditolak [normal]',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Integrasi dengan Sensor untuk Fitur posisi Truk yang ditimbang',
            description:
            'Fitur untuk mengunci posisi truk ditimbangan sehingga jika keluar posisi berat truk tidak bisa di ambil [Tombol Get Weight Disable]',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Integrasi dengan E-LHP – API Get data Muatan, Kendaraan dan pengemudi',
            description: 'API untuk mengambil data Muatan, Kendaraan dan Pengemudi',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Integrasi dengan DSN Move On – API Get data Muatan, Kendaraan dan pengemudi',
            description: 'API untuk mengambil data Muatan, Kendaraan dan Pengemudi',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Integrasi dengan TBS Eksternal Mobile – API Get data Muatan, Kendaraan dan pengemudi',
            description: 'API untuk mengambil data Muatan, Kendataan dan Pengemudi',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Fitur Cancel / Delete Timbangan',
            description: 'Fitur untuk melakukan cancel/ delete penimbangan',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Data Company',
            description: 'Fitur untuk menampilkan data-data company',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Data Customer',
            description: 'Fitur untuk menampilkan data-data Customer',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Data Site',
            description: 'Fitur untuk menampilkan data-data Site',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Data Weighbridge',
            description: 'Fitur untuk menampilkan data-data Weghbridge',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Data Product',
            description: 'Fitur untuk menampilkan data-data Product',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Data Storage Tank',
            description: 'Fitur untuk menampilkan data-data Storage Tank',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Data Driver',
            description: 'Fitur untuk menampilkan data-data Pengemudi',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Data Vehicle',
            description: 'Fitur untuk menampilkan data-data Kendaraan',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Admin Login',
            description: 'Fitur Login untuk masuk ke menu Admin',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Dashboard Admin',
            description: 'Fitur Untuk menampilkan dashboard Admin',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Edit Profile',
            description: 'Fitur Untuk mengedit profil user',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'WBMS Config',
            description: 'Fitur untuk melakukan setting konfigurasi WBMS',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Config Request Approval',
            description:
            'Fitur untuk melakukan approval terkait perubahan konfigurasi',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Fitur Edit data WBMS',
            description:
            'Fitur untuk melakukan Edit WBMS [Case yang baru ditemukan Pemindahan Lokasi asal muatan dan lokasi Tujuan [CPO[Tangki], TBS[Kebun] ]',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Alert/Notifikasi',
            description:
            'Notifikasi Sudah ada namun dibuat berbahasa Indonesia dan lebih informatif',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Input Segel',
            description: 'Fitur untuk menginput nomor Segel',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Fungsi pengecekan status awal timbang Truk',
            description:
            'Fungsi untuk mengidentifikasi bahwa truk sudah mempunyai setatus awal truk. Case saat ini Truk bisa di isi meskipun tidak timbang kosong untuk CPO/PKO Saat ini status awal truk dilempar dari aplikasi E-dispatch.',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Fungsi Header',
            description:
            'Fungsi tombol dan search pada header harus sudah berjalan sesuai dengan fungsinya',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Fitur Penambahan Notes ditimbangan keluar',
            description: 'Fitur untuk menambah Notes pada timbangan keluar',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Edit Segel',
            description: 'Fitur untuk mengedit nomor segel',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'BA Selisih muatan awal dan muatan akhir',
            description: 'Berita Acara jika ada selisih muatan 0,3%',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Sertifikasi WBMS',
            description: 'Fungsi untuk melihat Nomor Sertifikasi',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Fitur Upload Foto',
            description:
            'Fitur untuk melakukan Upload Foto sebagai bukti bahwa truk tersebut di cancel atau di reject',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Lansir dari 1 mobil Ke 2 Mobil',
            description:
            'Fitur untuk memindahkan Isi muatan dari 1 truk ke lebih dari 1 Truk',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        {
            name: 'Get Weight',
            description: 'Fitur untuk Mengambil berat muatan timbangan',
            type: 'number',
            value: '0',
            lvlOfApprvl: 3,
            status: 'PENDING',
        },
        ],
        skipDuplicates: true,
    });
    // console.log({ masterAdmin, admin, configs });
    console.log(configs);
    }

    main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });

export default main;

if (require.main === module) {
    main()
        .catch((error) => {
        console.error(error);
        process.exit(1);
        })
        .finally(async () => {
        await prisma.$disconnect();
        });
}
