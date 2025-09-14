export default function Page() {
return (
<section>
<h2>Selamat datang — Demo Metadata</h2>
<p>
Ini halaman demo. Coba ganti token verifikasi di <code>app/layout.tsx</code> lalu jalankan
aplikasi.
</p>
<p>
Jika kamu ingin menambahkan meta khusus untuk halaman ini saja, kamu bisa juga mengekspor
`export const metadata` di `app/page.tsx`.
</p>
</section>
)
}
