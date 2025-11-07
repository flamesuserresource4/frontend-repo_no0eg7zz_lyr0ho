import { Check, Send } from "lucide-react";

const WA_NUMBER = "6282121712227";

const PACKS = {
  Mico: [
    { id: "mico_100", label: "100 Diamonds", price: 20000 },
    { id: "mico_550", label: "550 Diamonds", price: 95000 },
    { id: "mico_1200", label: "1200 Diamonds", price: 180000 },
  ],
  Dazz: [
    { id: "dazz_1000", label: "1000 Stars", price: 155000 },
    { id: "dazz_2500", label: "2500 Stars", price: 350000 },
    { id: "dazz_5000", label: "5000 Stars", price: 650000 },
  ],
};

function formatIDR(n){
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
}

export default function Pricing(){
  const makeWa = (app, pack) => {
    const text = `Halo, saya ingin top up ${app} - ${pack.label} (${formatIDR(pack.price)}). Mohon prosesnya. UID/ID: `;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="topup" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Paket & Harga</h2>
        <p className="mt-2 text-slate-300">Pilih paket favoritmu lalu chat kami di WhatsApp untuk transaksi.</p>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          {Object.entries(PACKS).map(([app, items]) => (
            <div key={app} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold">{app}</div>
                <div className="text-xs text-slate-300 flex items-center gap-1">
                  <Check size={14}/> Ready stock
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
