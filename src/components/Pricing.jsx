import { Check, Send } from "lucide-react";

const WA_NUMBER = "6282121712227";

// Pricelist disesuaikan menyerupai struktur pada referensi
// Mico (Gold) dan Dazz (Stars) dengan beberapa tier umum
const PACKS = {
  "Mico (Gold)": [
    { id: "mico_70", label: "70 Gold", price: 15000 },
    { id: "mico_350", label: "350 Gold", price: 65000 },
    { id: "mico_700", label: "700 Gold", price: 120000 },
    { id: "mico_1400", label: "1400 Gold", price: 230000 },
    { id: "mico_3500", label: "3500 Gold", price: 560000 },
  ],
  "Dazz (Stars)": [
    { id: "dazz_210", label: "210 Stars", price: 30000 },
    { id: "dazz_525", label: "525 Stars", price: 70000 },
    { id: "dazz_1050", label: "1050 Stars", price: 130000 },
    { id: "dazz_2100", label: "2100 Stars", price: 250000 },
    { id: "dazz_5250", label: "5250 Stars", price: 600000 },
  ],
};

function formatIDR(n){
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
}

export default function Pricing(){
  const makeWa = (app, pack) => {
    const text = `Halo, saya ingin top up ${app} - ${pack.label} (${formatIDR(pack.price)}).\n` +
      `Tanpa perlu daftar/login di website.\n` +
      `Data akun: UID/ID atau Username: `;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="topup" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Paket & Harga</h2>
            <p className="mt-2 text-slate-300">Pilih paket sesuai kebutuhan. Pemesanan via WhatsApp — tanpa perlu daftar/login.</p>
          </div>
          <div className="shrink-0 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
            Tidak perlu akun 777topup
          </div>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          {Object.entries(PACKS).map(([app, items]) => (
            <div key={app} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold">{app}</div>
                <div className="text-xs text-slate-300 flex items-center gap-1">
                  <Check size={14}/> Ready stock • Proses cepat
                </div>
              </div>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {items.map(p => (
                  <div key={p.id} className="rounded-xl bg-slate-900/40 border border-white/10 p-4 flex flex-col">
                    <div className="text-sm text-slate-300">{app}</div>
                    <div className="mt-1 text-xl font-extrabold">{p.label}</div>
                    <div className="mt-1 text-sm text-slate-300">{formatIDR(p.price)}</div>
                    <a
                      href={makeWa(app, p)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-400 text-slate-900 px-4 py-2 font-semibold hover:bg-emerald-300 transition"
                    >
                      <Send size={16}/> Pesan via WhatsApp
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
