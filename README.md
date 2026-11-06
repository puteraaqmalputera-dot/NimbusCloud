# NimbusCloud

Landing page cloud hosting dwibahasa dengan tema gelap dan cerah, dashboard hidup serta alat interaktif. Halaman menggunakan HTML, CSS dan JavaScript biasa. Satu-satunya sumber luaran untuk halaman ialah Google Fonts; ikon dan carta menggunakan SVG sebaris.

Laman: https://nimbuscloud-eta.vercel.app

## Ciri

- **Bahasa Melayu dan English:** semua salinan antaramuka berada dalam `i18n.ms` dan `i18n.en`, termasuk metadata, label kebolehcapaian, output terminal dan mesej dinamik. Bahasa awal mengikut pelayar: `ms` dan `id` memilih BM; bahasa lain memilih EN. Pilihan bahasa dan tema disimpan dalam `localStorage` dengan pengendalian ralat.
- **Terminal interaktif:** `help`, `deploy [nama-app]`, `status`, `scale <1-20>`, `regions`, `logs`, `whoami`, `theme <dark|light>`, `lang <ms|en>` dan `clear`. Kekunci ↑/↓ mengakses sejarah, Tab melengkapkan arahan dan Ctrl+L mengosongkan terminal. Chip arahan boleh digunakan pada telefon tanpa memfokuskan input secara automatik.
- **Kalkulator harga:** laraskan projek, storan, trafik dan sokongan untuk melihat pecahan kos serta cadangan pelan. Pilihan tahunan memberikan diskaun 20%. Keperluan yang melebihi had Pro memaparkan pilihan untuk menghubungi pasukan.
- **Auto-scaling:** trafik berjalan secara random walk, lonjakan 10× boleh dicetuskan, dan carta mengekalkan 60 titik. CPU melebihi 70% menambah instance; CPU di bawah 30% mengurangkannya. Cooldown 4 saat mengelakkan perubahan terlalu kerap. Kawalan manual tetap berfungsi apabila gerakan dikurangkan.
- **Peta global:** lapan lokasi boleh dipilih dengan tetikus, sentuhan atau papan kekunci. Pilihan wilayah asal mengemas kini laluan dan anggaran latensi daripada jarak Haversine: `8 ms + jarak km / 95`.
- **Dashboard hero:** metrik, carta rangkaian, aktiviti terkini dan toast deploy berkongsi keadaan dengan terminal serta auto-scaling.
- **Status sistem:** enam komponen, uptime 90 hari, sejarah insiden dan aliran insiden yang bergerak daripada dikenal pasti kepada penyiasatan dan pemulihan.

Semua tugas berulang dikawal oleh pengurus tugas bersama. Pemasa berhenti apabila tab tersembunyi atau bahagiannya di luar skrin. `prefers-reduced-motion` menghentikan gerakan berterusan sambil mengekalkan kawalan pengguna.

## Struktur kod

| Fail / bahagian | Tanggungjawab |
| --- | --- |
| `index.html` | Seluruh halaman produksi: struktur semantik, token CSS, SVG, kamus bahasa dan modul JavaScript sebaris. |
| `createNimbusApp(i18n)` | Terjemahan, format nombor/mata wang, pilihan pengguna, keadaan bersama dan pengurus tugas. |
| `window.NimbusState` | Data sumber, pengebilan dan deploy; `set(patch)`, `on(type, callback)` dan `deploy(name)` menyegerakkan modul. |
| `initShell`, `initTestimonials` | Navigasi, reveal, tema, borang, dialog, FAQ dan karusel. |
| `initTerminal`, `initHero` | Arahan terminal dan dashboard hero. |
| `initPricingScaling` | Formula harga, kalkulator, carta dan log penskalaan. |
| `initMapStatus` | Lokasi pusat data, anggaran jarak/latensi, uptime dan insiden. |
| `tests/verify.cjs` | Ujian fungsi dan responsif menggunakan Playwright sebagai alat pembangunan sahaja. |

`window.NimbusApp` menyediakan pemformatan dan API modul. `NimbusApp.scheduler.inspect()` menunjukkan tugas yang diminta, kelihatan dan sedang berjalan untuk membantu menyiasat kitar hayat pemasa.

## Menambah atau mengubah terjemahan

1. Cari objek `const i18n = { ms: {...}, en: {...} }` dalam `index.html`. Tambah kunci rata yang sama pada kedua-dua bahasa, contohnya `product.regionTitle`.
2. Untuk teks biasa, gunakan `data-i18n="product.regionTitle"` pada elemen teks. Letakkan teks bersama ikon di dalam `span` tersendiri supaya ikon tidak diganti.
3. Untuk atribut, gunakan `data-i18n-placeholder`, `data-i18n-aria-label`, `data-i18n-title`, `data-i18n-content` atau `data-i18n-aria-roledescription` mengikut atribut yang hendak diterjemah.
4. Teks berparameter menggunakan bentuk seperti `"{count} projek"`. Isikan nilainya melalui `app.t(key, {count: app.n(value)})`. `app.rm(value)` memformat mata wang MYR dan `app.date(value)` memformat tarikh.
5. Output yang bergantung pada keadaan menyimpan `data-i18n`, `data-i18n-vars` dan penanda `data-i18n-dynamic`; render semula melalui `app.onLanguage(callback)` supaya nilai semasa dikekalkan ketika bahasa bertukar.

Untuk menambah bahasa ketiga, tambah kamus lengkap, butang `data-lang`, pemetaan locale dan bahasa yang dibenarkan dalam `createNimbusApp`. Semak juga pilihan bahasa awal dan arahan `lang` dalam terminal. Kredit `Created by Putera MY` kekal sama untuk semua bahasa.

## Mengubah tarif

Semua tarif kalkulator berada dalam `window.NimbusPricingConfig`. `window.calculateNimbusPrice(input, billing)` ialah fungsi tulen yang memulangkan nilai input yang dihadkan, pelan, pecahan kos, jumlah bulanan dan jumlah tahunan.

- Peruntukan Starter: 1 projek, 1 GB storan dan 0.1 TB trafik, dengan sokongan komuniti.
- Compute: RM6 bagi setiap projek selepas projek pertama.
- Storan: RM0.35 bagi setiap GB selepas GB pertama.
- Trafik: RM12 bagi setiap TB selepas 0.1 TB pertama.
- Sokongan: komuniti RM0, keutamaan RM25, atau 24/7 dengan SLA RM150.
- Jumlah minimum: Pro RM79; anggaran sumber Enterprise RM249. Baki untuk mencapai minimum dimasukkan dalam compute.
- Pengebilan tahunan mendarab setiap komponen dengan `0.8`; komponen dibundarkan kepada sen sebelum dijumlahkan.

Enterprise disyorkan apabila projek melebihi 10, storan melebihi 100 GB, trafik melebihi 10 TB atau sokongan SLA dipilih. Had input ialah 50 projek, 1,000 GB dan 50 TB. Nilai maksimum menghasilkan RM1,392.45 sebulan atau RM1,113.96 sebulan dengan pengebilan tahunan; paparan utama meminta sebut harga khusus.

## Menjalankan halaman

Buka `index.html` dengan pelayar moden atau hidangkan direktori ini menggunakan pelayan fail statik. Tiada pemasangan pakej, proses binaan, pangkalan data atau Firebase diperlukan untuk halaman produksi.

Borang emel menyemak format pada peranti pengguna. Ia tidak menghantar emel, menyimpan maklumat akaun atau memanggil backend. Sambungkan endpoint sendiri jika pendaftaran sebenar diperlukan. Tema dan bahasa sahaja disimpan dalam pelayar.

## Menguji

Pasang alat ujian dalam persekitaran pembangunan, kemudian jalankan:

```sh
npm install --no-save --package-lock=false playwright
npx playwright install chromium
node tests/verify.cjs
```

Jika Chromium sudah dipasang pada sistem, tetapkan `CHROMIUM_PATH` kepada laluan binarinya. Skrip turut menggunakan `/usr/bin/chromium` secara automatik apabila tersedia.

Ujian menggunakan fail produksi yang sama melalui laluan pelayar setempat. Google Fonts diganti dengan stylesheet kosong dalam ujian fungsi supaya keputusan tidak bergantung pada rangkaian. Ujian ini meliputi arahan terminal, perkongsian keadaan, nilai ekstrem kalkulator, pertukaran dan simpanan bahasa, peta, insiden, kitar hayat pemasa, gerakan dikurangkan, serta lebar 360px, 768px dan 1280px untuk kedua-dua bahasa dan tema. Audit visual dengan font sebenar dan audit Lighthouse dijalankan secara berasingan; skor bergantung pada persekitaran audit.

Keputusan semakan pada 6 November 2026:

| Semakan | Gelap | Cerah |
| --- | --- | --- |
| Lighthouse Performance, mudah alih 360px | 95 | 97 |
| Lighthouse Accessibility | 100 | 100 |
| Pelanggaran axe WCAG selepas peralihan selesai | 0 | 0 |

Suite `node tests/verify.cjs` lulus tanpa ralat halaman atau konsol. Kesemua 12 kombinasi bahasa, tema dan lebar skrin tidak mempunyai overflow mendatar. Ujian tambahan meliputi pertukaran bahasa semasa deploy, arahan tidak sah, pembatalan deploy, cip sentuhan dan cooldown yang berhenti apabila tab tersembunyi.

Audit visual dan Lighthouse menggunakan fail HTML yang sama serta font Google WOFF2 sebenar yang dicache pada pelayan ujian. Kaedah ini mengelakkan isu sijil CA Chromium dalam persekitaran ujian tanpa mematikan pengesahan TLS; laman produksi kekal menggunakan Google Fonts seperti biasa.

## Deployment Vercel

Import repositori GitHub ke Vercel dan gunakan tetapan berikut:

| Tetapan | Nilai |
| --- | --- |
| Framework Preset | Other |
| Root Directory | Direktori utama repositori |
| Build Command | Kosong |
| Install Command | Kosong |
| Output Directory | `.` |
| Production Branch | `main` |

Push ke `main` menerbitkan versi baharu apabila integrasi Git Vercel diaktifkan. Untuk GitHub Pages, pilih cabang `main` dan direktori `/(root)` dalam Settings → Pages.
