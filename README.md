# NimbusCloud

Portfolio front-end interaktif oleh **Putera MY**. NimbusCloud ialah platform awan fiksyen. Metrik dashboard, harga dan keluaran deploy ialah data contoh yang dikira dalam pelayar; bahagian status penyedia membaca API awam rasmi Vercel, GitHub dan Cloudflare. Tiada sumber awan, akaun, pembayaran atau mesej sokongan diwujudkan.

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
| `tests/visual.cjs` | Perbandingan piksel tangkapan skrin dengan PNG rujukan yang disemak. |
| `tests/visual-baselines/system/` | PNG baseline dan manifest persekitaran ujian visual. |

`app.js` dibahagikan dengan komen bernombor. `NimbusState` menyimpan keadaan yang dikongsi; `CloudModel` mengira beban; `Clock` mengurus masa aktif. Fungsi `setupDashboard()` dan `setupFeatures()` memasang alat selepas markup tersedia.

## Interaksi

- **Dashboard langsung:** CPU, memori, trafik dan latensi berubah secara beransur. Carta mengekalkan 60 sampel dan menyokong penuding serta kekunci kiri/kanan, Home, End dan Esc.
- **Jeda dan eksport CSV:** jeda kemas kini automatik sambil memeriksa carta atau mengeksport sampel yang sedang dipaparkan. Fail CSV mengandungi maksimum 60 rekod, pengepala BM/EN, BOM UTF-8, CRLF dan tiga tempat perpuluhan. Jarak sampel ialah bilangan rekod sebelum sampel terkini; ia tidak mendakwa masa sebenar antara rekod. URL muat turun sementara dibersihkan selepas digunakan.
- **Status penyedia sebenar:** tiga API rasmi dibaca apabila panel kelihatan. Setiap sumber memaparkan status, masa semakan pada peranti dan masa kemas kini yang diberikan penyedia. Respons gagal atau lama dilabel dengan jelas dan tidak digantikan dengan status sihat.
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

Keadaan alat, snapshot dan senarai pelayan berada dalam memori halaman. Borang emel mengosongkan alamat selepas semakan. Borang sokongan dikosongkan apabila dialog ditutup. Tiada analitik, penyimpanan emel atau backend dipasang. Panel status membuat permintaan GET tanpa kelayakan akses kepada tiga API awam yang disenaraikan di bawah; tiada token rahsia diperlukan.

## Sumber API sebenar

| Penyedia | Endpoint | Dokumentasi rasmi |
| --- | --- | --- |
| Vercel | `https://www.vercel-status.com/api/v2/status.json` | https://www.vercel-status.com/api/v2 |
| GitHub | `https://www.githubstatus.com/api/v2/status.json` | https://www.githubstatus.com/api |
| Cloudflare | `https://www.cloudflarestatus.com/api/v2/status.json` | https://www.cloudflarestatus.com/api |

Ketiga-tiga endpoint diuji dengan respons HTTP 200 dan CORS pelayar sebenar. Permintaan menggunakan `credentials: 'omit'`, pembatalan selepas lapan saat dan sela semakan 60 saat semasa panel serta tab kelihatan. Sela ini ialah pilihan aplikasi, bukan dakwaan had kadar rasmi penyedia. Respons disimpan dalam memori selama 60 saat; butang segar semula membolehkan semakan manual. Tab tersembunyi atau panel di luar skrin membatalkan permintaan yang masih berjalan.

`parseProviderStatus()` hanya menerima penunjuk `none`, `minor`, `major` atau `critical`. Data luaran dipaparkan sebagai teks; URL sumber datang daripada konfigurasi tetap. Masa “disemak” ialah masa respons diterima pada peranti. Masa kemas kini penyedia dipaparkan berasingan kerana `page.updated_at` boleh jauh lebih lama daripada respons HTTP terkini. Jika semakan gagal, hasil terakhir dilabel sebagai data terakhir atau status tidak dapat disahkan.

API ini melaporkan kesihatan perkhidmatan penyedia. CPU, memori dan trafik NimbusCloud masih menggunakan model contoh; tiada API ini membekalkan metrik pelayan milik NimbusCloud.

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
node tests/visual.cjs
```

Dependency ujian tidak dimuatkan oleh laman dan tidak diperlukan oleh Vercel. Pemboleh ubah `CHROMIUM_PATH` boleh memilih Chromium yang sudah dipasang.

Ujian visual membandingkan sembilan PNG semasa dengan baseline yang dikomit; ia tidak menerima perubahan secara automatik. Kes ujian merangkumi hero telefon/desktop, dashboard, harga, penskalaan dan status penyedia. Respons API dan jam UTC ditetapkan dalam fixture supaya perubahan status dunia sebenar tidak menyebabkan kegagalan piksel palsu. Perbandingan menggunakan canvas pelayar tanpa dependency penyahkod PNG tambahan. Manifest merekod versi utama Chromium, OS dan mod fon. Gunakan persekitaran yang sama untuk hasil stabil. Selepas perubahan UI atau persekitaran yang memang disengajakan dan telah disemak, jalankan `node tests/visual.cjs --update`, semak PNG baharu, kemudian jalankan semula `node tests/visual.cjs`. Output ujian berada dalam `tests/visual-artifacts/` dan diabaikan oleh Git. `NIMBUS_FONT_CACHE` boleh memilih cache Google Fonts untuk mod baseline berasingan.

Ujian mengesahkan input dan hasil sebenar, termasuk bahasa, kawalan papan kekunci, kalkulator, penskalaan, peta, dialog, deploy, pembatalan, Undo, borang, CSV yang dimuat turun, jeda pengguna dan jeda masa aktif. API status menggunakan fixture deterministik dalam ujian regresi; sambungan HTTP/CORS rasmi diuji berasingan. Ujian fungsi menyekat Google Fonts untuk hasil yang stabil; audit visual fon sebenar dan Lighthouse dilakukan secara berasingan. Skor audit bergantung pada peranti, rangkaian dan cara fon dihantar.

Audit versi awal pada 6 November 2026 menggunakan Chromium mudah alih dengan sumber sejuk, penghantaran statik termampat dan fail fon sebenar Google yang dicache secara setempat:

| Tema | Performance | Accessibility | SEO | CLS | TBT |
| --- | --- | --- | --- | --- | --- |
| Gelap | 97 | 100 | 100 | 0 | 0 ms |
| Cerah | 97 | 100 | 100 | 0 | 0 ms |

Kependaman rangkaian Google Fonts luar tidak termasuk dalam ukuran tersebut. Semakan visual fon sebenar meliputi 360, 768, 1280 dan 1440px dalam kedua-dua bahasa serta tema; empat audit axe tidak menemui pelanggaran WCAG A/AA. Ujian fungsi penuh lulus tanpa ralat atau amaran konsol dan tanpa permintaan rangkaian yang tidak dijangka.

Audit kemas kini UI dan API pada 7 November 2026 menggunakan kaedah yang sama: Performance **96 tema gelap / 97 tema cerah**, Accessibility **100**, SEO **100** dan CLS **0**. Semua 16 susun atur fon sebenar serta empat audit axe, termasuk padanan label kelihatan, lulus. API tidak diminta pada pemuatan awal dan hanya dimuatkan apabila panelnya kelihatan. Ujian pelayar berasingan dengan respons rangkaian sebenar mengesahkan ketiga-tiga endpoint, pemaparan status, cap masa semakan dan ketiadaan token/cookie. Ujian kegagalan merangkumi timeout, JSON tidak sah, hasil terakhir dan pembatalan apabila tersembunyi.

## GitHub dan Vercel

```sh
git add index.html styles.css app.js README.md tests/verify.cjs
git commit -m "Build interactive NimbusCloud portfolio"
git push origin main
```

Di Vercel, import repositori ini, pilih **Other** sebagai framework, biarkan **Build Command** dan **Install Command** kosong, dan gunakan direktori akar projek sebagai output. Tiada environment variable diperlukan. Projek yang sudah disambungkan kepada GitHub menerbitkan perubahan `main` secara automatik.

Jika menggunakan domain atau repositori sendiri, kemas kini `canonical`, `og:url` dan semua pautan sumber. Contoh alamat aplikasi pada dashboard serta URL `.example` ialah sebahagian daripada portfolio; ia bukan endpoint produksi.

## Penambahbaikan seterusnya

1. Sambungkan CPU, memori dan trafik kepada API pelayan milik sendiri apabila pelayan sebenar tersedia.
2. Tambah penapisan julat sampel dan pilihan metrik pada carta.
3. Jalankan ujian fungsi serta visual secara automatik dalam CI dengan versi Chromium yang dipin.

Created by Putera MY
