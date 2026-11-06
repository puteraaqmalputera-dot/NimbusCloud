# NimbusCloud

Portfolio front-end interaktif oleh **Putera MY**. NimbusCloud ialah platform awan fiksyen; semua metrik, harga dan keluaran deploy ialah data contoh yang dikira dalam pelayar. Tiada sumber awan, akaun, pembayaran atau mesej sokongan diwujudkan.

- Laman: https://nimbuscloud-eta.vercel.app/
- Sumber: https://github.com/puteraaqmalputera-dot/NimbusCloud
- Portfolio: https://github.com/puteraaqmalputera-dot/psmy-portfolio

## Menjalankan projek

Tiada framework, pemasangan dependency runtime, Firebase atau langkah binaan diperlukan. Gunakan pelayan statik kerana `app.js` dimuatkan sebagai ES module:

```sh
python3 -m http.server 8080
```

Buka http://localhost:8080/. Google Fonts membekalkan Inter Tight, Inter dan JetBrains Mono dengan `font-display: swap`; fon sistem menjadi sandaran. Tiada imej, library carta atau JavaScript luaran dimuatkan.

## Fail dan tanggungjawab

| Fail | Kandungan |
| --- | --- |
| `index.html` | Landmark semantik, semua bahagian, SVG sebaris, dialog, templat elemen dan metadata SEO. |
| `styles.css` | Token tema, grid 12 lajur, komponen, saiz telefon dan pilihan gerakan minimum. |
| `app.js` | Kamus BM/EN, keadaan bersama, penjadual, carta canvas dan semua interaksi. |
| `README.md` | Panduan menjalankan, mengubah dan menerbitkan projek. |
| `tests/verify.cjs` | Ujian tingkah laku pelayar menggunakan Playwright sebagai alat pembangunan. |

`app.js` dibahagikan dengan komen bernombor. `NimbusState` menyimpan keadaan yang dikongsi; `CloudModel` mengira beban; `Clock` mengurus masa aktif. Fungsi `setupDashboard()` dan `setupFeatures()` memasang alat selepas markup tersedia.

## Interaksi

- **Dashboard langsung:** CPU, memori, trafik dan latensi berubah secara beransur. Carta mengekalkan 60 sampel dan menyokong penuding serta kekunci kiri/kanan, Home, End dan Esc.
- **Urutan deploy:** klon, bina, semak dan hantar ke tiga wilayah contoh. Kemajuan menggunakan 3.9 saat aktif, boleh dibatalkan, diulang dan dibuat asal. Kejayaan menambah satu baris pelayan serta lonjakan trafik sementara. URL `.example` sengaja menunjukkan keluaran contoh yang tidak dihoskan.
- **Cerita skrol:** empat peringkat keluaran dalam paparan melekat pada desktop; telefon dan gerakan minimum memaparkan urutan lengkap secara bertindan.
- **Penskalaan:** gelangsar trafik, lonjakan 10×, polisi hidup/mati, 20 sel instance, CPU, latensi, kos sejam dan log peristiwa berkongsi model dengan dashboard.
- **Rangkaian:** lapan wilayah boleh dipilih dengan tetikus, sentuhan, Tab, Enter, Space dan anak panah. Garisan menyambungkan wilayah terpilih dengan wilayah lain. Latensi ialah nilai rujukan setempat; tiada ping dihantar.
- **Harga:** kalkulator kos, cadangan pelan dan diskaun tahunan 20%. Pilihan pelan hanya mengubah keadaan halaman. Tetapan semula memerlukan pengesahan dan menawarkan Undo.
- **Command palette:** Cmd/Ctrl+K membuka carian kabur untuk navigasi, tema, bahasa, deploy dan GitHub. Kekunci anak panah, Home/End, Enter dan Esc disokong.
- **Terminal:** jejak deploy ditaip dalam kitaran lapan saat aktif. Butang jeda, ulang dan salin disediakan. Tiada arahan shell dijalankan.
- **Alat kecil:** senarai dasar keselamatan, rekod snapshot setempat, FAQ dan borang sokongan/emel yang disahkan tanpa menghantar data.

## Pengiraan

Semua tarif berada dalam `PRICING_CONFIG`; `calculatePrice(resources, billing)` ialah fungsi tulen.

| Komponen | Kadar contoh |
| --- | --- |
| Peruntukan percuma | 1 instance, 1 GB storan, 0.4 TB jalur lebar. |
| Instance tambahan | RM18 sebulan. |
| Storan tambahan | RM0.35 bagi setiap GB. |
| Jalur lebar tambahan | RM3 bagi setiap TB. |
| Sokongan | Komuniti RM0; keutamaan RM25; SLA RM150. |
| Minimum Pro | RM79 sebulan; perbezaan minimum dimasukkan dalam compute. |
| Tahunan | Setiap komponen didarab 0.8, dibundarkan kepada sen dan dijumlahkan. |

Nilai awal 3 instance, 100 GB, 3 TB dan sokongan keutamaan menghasilkan **RM103.45**, atau **RM82.76** dengan bil tahunan. Pro asas menjadi **RM63.20** sebulan untuk bil tahunan. Enterprise dipadankan apabila melebihi 10 instance, 100 GB, 10 TB atau memilih SLA; jumlah utama memaparkan “Hubungi kami” sambil pecahan kadar rujukan kekal tersedia.

Had input ialah 50 instance, 1,000 GB dan 50 TB. Pada semua nilai maksimum dengan SLA, pecahan rujukan ialah RM1,530.45 sebulan atau RM1,224.36 selepas diskaun tahunan.

`CLOUD_CONFIG` menetapkan kapasiti 100 permintaan/saat setiap instance dan kos contoh RM0.12 sejam setiap instance. Polisi menambah kapasiti apabila CPU melebihi 70% dan mengurangkannya apabila CPU di bawah 30%, dengan sela **empat saat aktif** antara perubahan. Bilangan instance dihadkan kepada 1–20. Masa tab tersembunyi atau bahagian di luar skrin tidak dikira. Dalam gerakan minimum, perubahan kawalan memaparkan hasil polisi secara terus tanpa gelung animasi.

## Tema, bahasa dan privasi

Tema asal ialah gelap. Bahasa awal mengikuti `navigator.language`: `ms` atau `id` memilih BM; bahasa lain memilih EN. Pilihan pengguna disimpan dengan `try/catch` menggunakan hanya `nimbus-theme` dan `nimbus-language` dalam `localStorage`.

Keadaan alat, snapshot dan senarai pelayan berada dalam memori halaman. Borang emel mengosongkan alamat selepas semakan. Borang sokongan dikosongkan apabila dialog ditutup. Tiada analitik, permintaan API, penyimpanan emel atau backend dipasang.

`Clock` menggunakan satu gelung `requestAnimationFrame` dengan `IntersectionObserver`, Page Visibility API dan `prefers-reduced-motion`. Ia tidak menggunakan `setInterval`. Carta, denyutan status dan aktiviti peta berhenti apabila tidak kelihatan. Gerakan minimum mengekalkan semua fungsi dan memaparkan keadaan lengkap.

## Mengubah nama, warna dan teks

1. Ubah nama NimbusCloud, pautan GitHub/portfolio dan metadata dalam `index.html` serta kamus `i18n` dalam `app.js`.
2. Ubah token warna dalam `:root`, tema cerah, `.inverse-band` dan blok lime dalam `styles.css`. Semak semula kontras kedua-dua tema. Logo dan favicon mempunyai warna sebaris yang perlu dikemas kini jika aksen berubah.
3. Ubah teks melalui kunci dalam `i18n.en` dan `i18n.ms`. Kredit **Created by Putera MY** sengaja kekal di luar kamus.

## Menambah terjemahan

Tambah kunci yang sama pada kedua-dua kamus:

```javascript
Object.assign(i18n.en, { 'example.message': '{count} active instances' });
Object.assign(i18n.ms, { 'example.message': '{count} instance aktif' });
```

Gunakan `data-i18n="example.message"` untuk teks statik, atau `bindText(element, 'example.message', { count: formatNumber(value) })` untuk teks berparameter. Gunakan atribut `data-i18n-placeholder`, `data-i18n-aria-label`, `data-i18n-content` atau `data-i18n-title` untuk atribut HTML. Letakkan teks dan ikon dalam elemen berasingan kerana terjemahan menggantikan kandungan elemen teks.

Modul yang mempunyai nilai berformat mendengar peristiwa `translated` untuk melukis semula parameter. `formatNumber`, `formatMoney` dan `Intl.DateTimeFormat(locale())` menggunakan locale semasa. Terjemahan dimasukkan sebagai nod teks; ia tidak diproses sebagai HTML.

Untuk bahasa ketiga, tambah kamus lengkap, butang, locale dan pilihan yang dibenarkan dalam skrip awal `index.html`, `NimbusState.update()` serta `setLanguage()`. Semak metadata Open Graph dan semua label dinamik selepas perubahan.

## Pengujian

Playwright hanya diperlukan untuk ujian pembangunan:

```sh
npm install --no-save --package-lock=false playwright
npx playwright install chromium
node tests/verify.cjs
```

Dependency ujian tidak dimuatkan oleh laman dan tidak diperlukan oleh Vercel. Pemboleh ubah `CHROMIUM_PATH` boleh memilih Chromium yang sudah dipasang.

Ujian mengesahkan input dan hasil sebenar, termasuk bahasa, kawalan papan kekunci, kalkulator, penskalaan, peta, dialog, deploy, pembatalan, Undo, borang dan jeda masa aktif. Ujian fungsi menyekat Google Fonts untuk hasil yang stabil; audit visual fon sebenar dan Lighthouse dilakukan secara berasingan. Skor audit bergantung pada peranti, rangkaian dan cara fon dihantar.

Audit akhir pada 6 November 2026 menggunakan Chromium mudah alih dengan sumber sejuk, penghantaran statik termampat dan fail fon sebenar Google yang dicache secara setempat:

| Tema | Performance | Accessibility | SEO | CLS | TBT |
| --- | --- | --- | --- | --- | --- |
| Gelap | 97 | 100 | 100 | 0 | 0 ms |
| Cerah | 97 | 100 | 100 | 0 | 0 ms |

Kependaman rangkaian Google Fonts luar tidak termasuk dalam ukuran tersebut. Semakan visual fon sebenar meliputi 360, 768, 1280 dan 1440px dalam kedua-dua bahasa serta tema; empat audit axe tidak menemui pelanggaran WCAG A/AA. Ujian fungsi penuh lulus tanpa ralat atau amaran konsol dan tanpa permintaan rangkaian yang tidak dijangka.

## GitHub dan Vercel

```sh
git add index.html styles.css app.js README.md tests/verify.cjs
git commit -m "Build interactive NimbusCloud portfolio"
git push origin main
```

Di Vercel, import repositori ini, pilih **Other** sebagai framework, biarkan **Build Command** dan **Install Command** kosong, dan gunakan direktori akar projek sebagai output. Tiada environment variable diperlukan. Projek yang sudah disambungkan kepada GitHub menerbitkan perubahan `main` secara automatik.

Jika menggunakan domain atau repositori sendiri, kemas kini `canonical`, `og:url` dan semua pautan sumber. Contoh alamat aplikasi pada dashboard serta URL `.example` ialah sebahagian daripada portfolio; ia bukan endpoint produksi.

## Penambahbaikan seterusnya

1. Sambungkan metrik kepada API sebenar dengan keadaan memuatkan, ralat dan data kosong yang jelas.
2. Tambah pemilihan masa carta dan eksport data CSV untuk pemeriksaan sampel.
3. Tambah ujian regresi tangkapan skrin untuk kedua-dua bahasa, tema dan saiz telefon.

Created by Putera MY
