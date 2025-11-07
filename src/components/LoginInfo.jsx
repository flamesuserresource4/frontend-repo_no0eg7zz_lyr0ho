export default function LoginInfo(){
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-2xl font-extrabold tracking-tight">Transaksi Tanpa Daftar/Login</h3>
          <p className="mt-2 text-slate-300">
            Kamu tidak perlu membuat akun atau login untuk melakukan pembelian. Semua pemesanan diproses langsung melalui WhatsApp resmi kami.
          </p>
          <ul className="mt-4 list-disc list-inside text-slate-300 space-y-1 text-sm">
            <li>Pilih paket, tekan tombol "Pesan via WhatsApp".</li>
            <li>Kirim data yang diminta (UID/ID atau Username) dan bukti pembayaran.</li>
            <li>Pesanan diproses cepat setelah pembayaran terkonfirmasi.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
