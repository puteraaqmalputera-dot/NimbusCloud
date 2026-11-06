# NimbusCloud

Antara muka infrastruktur interaktif oleh Putera MY, dibina dengan HTML, CSS dan JavaScript biasa dalam satu fail `index.html`. Terminal, dashboard, kalkulator sumber, kawalan penskalaan, peta bandar dan pemeriksaan pelayar boleh digunakan tanpa akaun atau backend hosting.

Laman: https://nimbuscloud-eta.vercel.app

Kod: https://github.com/puteraaqmalputera-dot/NimbusCloud

## Reka bentuk

Susun atur editorial mengutamakan tajuk, teks sejajar kiri, senarai bernombor dan baris yang dipisahkan dengan border nipis. Latar neutral gelap atau cerah menggunakan satu aksen jingga rust untuk pautan, butang dan penanda penting. Permukaan rata, jejari 8px dan jarak berasaskan 4/8px menggantikan hiasan latar.

Space Grotesk digunakan untuk tajuk dan Inter untuk teks. Kedua-duanya dimuatkan daripada Google Fonts; carta, peta dan ikon dibina dengan SVG sebaris. Senarai teknologi menghubungkan dokumentasi sebenar HTML, CSS, JavaScript, SVG, Intl dan IntersectionObserver. Nota pelaksanaan menghubungkan fail sumber serta README di GitHub.

Pergerakan digunakan untuk maklum balas kawalan, pertukaran nilai, skrol dan kemunculan ringkas kandungan. Tiada animasi hiasan berterusan. `prefers-reduced-motion` menghentikan kemas kini visual berterusan sambil mengekalkan kawalan pengguna.

## Enam alat

1. **Terminal berarahan.** Menyokong `help`, `deploy [nama-app]`, `status`, `scale <1-20>`, `regions`, `logs`, `whoami`, `theme <dark|light>`, `lang <ms|en>` dan `clear`. Kekunci ↑/↓ mengakses sejarah, Tab melengkapkan arahan dan Ctrl+L mengosongkan terminal. Cip arahan boleh digunakan pada telefon tanpa membuka papan kekunci secara automatik. Arahan `deploy` hanya menambah rekod aktiviti setempat dan mengemas kini keadaan halaman; ia tidak membina atau menerbitkan aplikasi.
2. **Kalkulator kos sumber.** Gelangsar projek, storan, trafik dan pilihan kadar sokongan menghasilkan pecahan compute, storan, trafik dan sokongan. Starter, Pro dan Enterprise ialah preset kadar rujukan dalam kod, bukan langganan hosting. Suis tahunan menggunakan diskaun 20%; tiada pembayaran atau permintaan sebut harga dihantar.
3. **Kawalan auto-scaling.** Trafik masuk, lonjakan 10× dan togol penskalaan mengubah CPU, bilangan instance, latensi model dan kos sejam. Carta mengekalkan 60 titik. CPU melebihi 70% menambah instance; CPU di bawah 30% mengurangkannya, dengan cooldown 4 saat aktif. Semua nilai ini dikira dalam pelayar dan tidak mengawal sumber cloud.
4. **Peta jarak bandar.** Lapan bandar sebenar boleh dipilih dengan tetikus, sentuhan atau papan kekunci: San Francisco, Toronto, São Paulo, London, Frankfurt, Mumbai, Singapura dan Sydney. Koordinat geografi menghasilkan jarak Haversine dan anggaran RTT. Pautan OpenStreetMap membuka lokasi sebenar; peta ini tidak menyenaraikan pusat data NimbusCloud.
5. **Dashboard bersama.** Hero memaparkan CPU model, instance aktif dan permintaan masuk sesaat daripada keadaan aplikasi yang sama dengan terminal serta kawalan penskalaan. Carta menunjukkan 60 titik trafik. Butang deploy menambah rekod aktiviti setempat dan memberikan maklum balas pada halaman.
6. **Pemeriksaan pelayar.** Enam pemeriksaan menguji enjin terjemahan/Intl, ketersediaan dashboard, pelaksana arahan, `navigator.onLine`, kebolehan baca/tulis `localStorage` dan sokongan SVG. Tempoh pemeriksaan diukur menggunakan `performance.now()`; nilainya ialah masa kerja setempat, bukan latensi pelayan. Petunjuk sambungan pelayar juga tidak membuktikan sesuatu perkhidmatan jauh boleh dicapai.

Baris fakta projek memaparkan satu fail HTML produksi, dua bahasa, enam alat interaktif dan sifar framework runtime. Tiada logo pelanggan, petikan pengguna atau ukuran perkhidmatan digunakan sebagai bukti pemasaran.

## Rekod pemeriksaan dan pemulihan

Bahagian status memeriksa kemampuan pelayar sebenar ketika bahagian itu kelihatan. Setiap pemeriksaan menyumbang kepada jumlah lulus dan jumlah pemeriksaan bagi tarikh setempat. Jalur 90 hari membaca rekod yang benar-benar disimpan pada peranti ini; hari tanpa rekod kekal neutral dan dipaparkan sebagai tiada rekod. Peratus yang dipaparkan ialah nisbah pemeriksaan lulus, bukan uptime hosting.

Butang pemeriksaan pemulihan memulakan aliran setempat tiga langkah: dikenal pasti, siasatan selepas 3 saat aktif dan selesai selepas 9 saat aktif. Ia tidak memutuskan sambungan atau mencetuskan gangguan perkhidmatan luar. Kemampuan pelayar diperiksa semula selepas selesai. Hanya pemeriksaan pemulihan yang benar-benar selesai disimpan, dengan masa dan tempohnya; sejarah mengekalkan maksimum tiga rekod terkini.

## Bahasa dan data setempat

Semua teks antaramuka berada dalam `i18n.ms` dan `i18n.en`, termasuk metadata, label kebolehcapaian, output arahan dan mesej dinamik. Bahasa awal mengikut pelayar: `ms` dan `id` memilih BM, manakala bahasa lain memilih EN. Pertukaran bahasa mengemas kini `<html lang>`, nilai berformat dan teks dinamik tanpa muat semula.

`localStorage` digunakan dengan `try/catch`:

| Kunci | Kandungan |
| --- | --- |
| `nimbus-theme` | Pilihan tema gelap atau cerah. |
| `nimbus-language` | Pilihan BM atau EN. |
| `nimbus-browser-health-v1` | Jumlah pemeriksaan dan keputusan lulus mengikut tarikh pada peranti ini. |
| `nimbus-recovery-history-v1` | Maksimum tiga pemeriksaan pemulihan setempat yang telah selesai. |

Storan tidak diselaraskan antara peranti. Jika akses storan disekat, pilihan dan rekod mungkin tidak kekal selepas muat semula. Keadaan alat serta rekod deploy berada dalam memori halaman. Borang emel hanya menyemak format pada peranti pengguna; alamat tidak dihantar atau disimpan sebagai akaun. Google Fonts ialah sumber fon luaran halaman.

## Struktur kod

| Fail / bahagian | Tanggungjawab |
| --- | --- |
| `index.html` | Halaman produksi lengkap: HTML semantik, token CSS, SVG, kamus bahasa dan JavaScript sebaris. |
| `createNimbusApp(i18n)` | Terjemahan, format nombor/mata wang/tarikh, pilihan pengguna, keadaan bersama dan pengurus tugas. |
| `window.NimbusState` | Keadaan sumber dan rekod aktiviti; `set(patch)`, `on(type, callback)` dan `deploy(name)` menyegerakkan modul. |
| `initShell` | Navigasi, tema, reveal ringkas, borang, dialog dan FAQ. |
| `initTerminal` | Pemproses arahan, sejarah, pelengkapan dan output berperingkat. |
| `initHero` | Metrik hero, carta trafik dan rekod aktiviti setempat. |
| `initPricingScaling` | Formula rujukan kos, kalkulator, carta dan log penskalaan. |
| `initMapStatus` | Koordinat bandar, jarak/RTT, pemeriksaan pelayar dan rekod pemulihan. |
| `tests/verify.cjs` | Ujian fungsi serta responsif dengan Playwright sebagai alat pembangunan. |

`window.NimbusApp` menyediakan pemformatan dan API modul. `NimbusApp.scheduler.inspect()` menunjukkan tugas yang diminta, kelihatan dan sedang berjalan. Pengurus tugas mengambil kira `visibilitychange`, IntersectionObserver dan pilihan gerakan pengguna. Tugas berkala berhenti apabila tab tersembunyi atau bahagiannya di luar skrin; langkah pemulihan dan cooldown hanya mengira masa aktif.

## Menambah atau mengubah terjemahan

1. Cari objek `const i18n = { ms: {...}, en: {...} }` dalam `index.html`. Tambah kunci rata yang sama pada kedua-dua bahasa, contohnya `product.regionTitle`.
2. Untuk teks biasa, gunakan `data-i18n="product.regionTitle"` pada elemen teks. Letakkan teks bersama ikon di dalam `span` tersendiri supaya ikon tidak diganti.
3. Untuk atribut, gunakan `data-i18n-placeholder`, `data-i18n-aria-label`, `data-i18n-title`, `data-i18n-content` atau `data-i18n-aria-roledescription` mengikut atribut yang hendak diterjemah.
4. Teks berparameter menggunakan bentuk seperti `"{count} projek"`. Isikan nilainya melalui `app.t(key, {count: app.n(value)})`. `app.rm(value)` memformat mata wang MYR dan `app.date(value)` memformat tarikh mengikut locale.
5. Output berdasarkan keadaan menyimpan `data-i18n`, `data-i18n-vars` dan penanda `data-i18n-dynamic`. Render semula melalui `app.onLanguage(callback)` supaya nilai semasa dikekalkan ketika bahasa bertukar.

Untuk menambah bahasa ketiga, tambah kamus lengkap, butang `data-lang`, pemetaan locale dan bahasa yang dibenarkan dalam `createNimbusApp`. Semak juga pilihan bahasa awal dan arahan `lang` dalam terminal. Kredit `Created by Putera MY` kekal sama untuk semua bahasa.

## Formula sumber dan kos

Semua tarif berada dalam `window.NimbusPricingConfig`. `window.calculateNimbusPrice(input, billing)` ialah fungsi tulen yang memulangkan input terhad, preset, pecahan kos, jumlah bulanan dan jumlah tahunan.

- Peruntukan Starter: 1 projek, 1 GB storan dan 0.1 TB trafik, dengan kadar sokongan komuniti.
- Compute: RM6 bagi setiap projek selepas projek pertama.
- Storan: RM0.35 bagi setiap GB selepas GB pertama.
- Trafik: RM12 bagi setiap TB selepas 0.1 TB pertama.
- Kadar sokongan: komuniti RM0, keutamaan RM25, atau 24/7 dengan SLA RM150.
- Minimum preset: Pro RM79; Enterprise RM249. Baki untuk mencapai minimum dimasukkan dalam compute.
- Pilihan tahunan mendarab setiap komponen dengan `0.8`. Setiap komponen dibundarkan kepada sen sebelum dijumlahkan; jumlah tahunan ialah jumlah bulanan selepas diskaun didarab 12.

Enterprise dipadankan apabila projek melebihi 10, storan melebihi 100 GB, trafik melebihi 10 TB atau kadar sokongan SLA dipilih. Had input ialah 50 projek, 1,000 GB dan 50 TB. Dengan semua input maksimum serta sokongan SLA, jumlah rujukan ialah RM1,392.45 sebulan atau RM1,113.96 sebulan untuk pilihan tahunan. Nilai di luar had preset dipaparkan sebagai julat tersuai, bukan arahan membeli perkhidmatan.

Model kapasiti menggunakan 100 permintaan/saat bagi setiap instance. CPU dikira daripada trafik dibahagi kapasiti, dengan paparan terhad pada 0–100%. Bilangan instance dihadkan pada 1–20. Latensi dan kos sejam pada alat penskalaan ialah hasil model dalam kod.

Peta menggunakan jejari bumi 6,371 km dalam formula Haversine. Anggaran RTT ialah `round(8 ms + jarak km / 95)`. Formula ini menerangkan hubungan jarak dan masa perjalanan; ia bukan ukuran ping atau jaminan prestasi rangkaian.

## Menjalankan halaman

Buka `index.html` dengan pelayar moden, atau jalankan pelayan fail statik dari direktori repositori:

```sh
python3 -m http.server 8080
```

Buka `http://localhost:8080`. Tiada pemasangan pakej, proses binaan, pangkalan data atau Firebase diperlukan untuk halaman produksi. Gunakan asal HTTP yang sama semasa memeriksa simpanan pilihan serta rekod pelayar, kerana `localStorage` terikat pada asal laman.

## Pengujian dan audit

Pasang alat ujian dalam persekitaran pembangunan, kemudian jalankan:

```sh
npm install --no-save --package-lock=false playwright
npx playwright install chromium
node tests/verify.cjs
```

Jika Chromium sudah dipasang pada sistem, tetapkan `CHROMIUM_PATH` kepada laluan binarinya. Skrip turut menggunakan `/usr/bin/chromium` secara automatik apabila tersedia. Playwright digunakan untuk pembangunan sahaja dan tidak dimuatkan oleh laman produksi.

Skop semakan fungsi meliputi arahan terminal, rekod deploy setempat, perkongsian keadaan, nilai ekstrem kalkulator, pertukaran serta simpanan bahasa, kawalan peta, pemeriksaan pelayar, aliran pemulihan, kitar hayat tugas dan pilihan gerakan dikurangkan. Semak kedua-dua tema dan bahasa pada lebar 360px, 768px serta 1280px, termasuk overflow mendatar, fokus papan kekunci dan rujukan anchor.

Ujian fungsi menggunakan fail produksi yang sama dan menggantikan permintaan Google Fonts dengan stylesheet kosong supaya keputusan tidak bergantung pada rangkaian. Audit visual berasingan menggunakan font sebenar dan meliputi 16 kombinasi: dua bahasa, dua tema dan lebar 360px, 768px, 1280px serta 1920px. Tiada overflow mendatar atau ralat konsol ditemui.

Keputusan audit reka bentuk editorial pada 6 November 2026:

| Semakan | Gelap | Cerah |
| --- | --- | --- |
| Lighthouse Performance, mudah alih 360px | 90 | 95 |
| Lighthouse Accessibility | 100 | 100 |
| Pelanggaran axe WCAG | 0 | 0 |

Audit Lighthouse menggunakan HTML produksi pada pelayan statik serta Google Fonts WOFF2 sebenar yang dicache secara setempat. Ini mengelakkan masalah sijil CA Chromium dalam persekitaran ujian tanpa mematikan pengesahan TLS. Laman produksi tetap menggunakan Google Fonts. Skor bergantung pada rangkaian dan keadaan mesin ketika audit.

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

Created by Putera MY
