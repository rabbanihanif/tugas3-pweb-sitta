# 📚 Tugas Praktikum 3 — Pemrograman Website  
Aplikasi Pengelolaan Bahan Ajar & Tracking Delivery Order (UT)

Proyek ini dibuat sebagai pemenuhan Tugas Praktikum 3 mata kuliah **Pemrograman Website** Universitas Terbuka.  
Aplikasi dibangun menggunakan **Vue.js** dengan struktur **komponen + template**, serta penggunaan **JSON sebagai sumber data** tanpa backend / database.

---

## Fitur Utama

### 1. Halaman Stok Bahan Ajar
- Menampilkan daftar stok bahan ajar dari file JSON.  
- Filter berdasarkan:
  - UPBJJ
  - Kategori
  - Qty < Safety
  - Qty = 0  
- Sorting: Judul, Harga, Qty  
- Reset filter  
- Badge status otomatis (Aman, Menipis, Kosong)  
- Tooltip catatan tambahan  
- Tambah stok baru melalui modal form  
- Edit data stok  
- Hapus data stok  

### 2. Modal Form Tambah/Edit Stok
- Input kode, judul, kategori, rak, qty, safety, catatan  
- Dropdown:
  - UPBJJ
  - Kategori
  - Jenis pengiriman
  - Paket UT (otomatis override harga)  
- Harga otomatis mengikuti paket yang dipilih  

### 3. Tracking Delivery Order (DO)
- Pencarian DO berdasarkan No DO atau NIM  
- Tampilan detail pengiriman  
- Riwayat perjalanan (timeline)  
- Tambah DO baru  
---
## Tech stack
- Vue.js 3 CDN Framework utama (tanpa bundler)
- TailwindCSS + DaisyUI UI styling 
- JSON File Dummy data / data source
- JavaScript Event & state handling 
- HTML Template Komponen terpisah 
