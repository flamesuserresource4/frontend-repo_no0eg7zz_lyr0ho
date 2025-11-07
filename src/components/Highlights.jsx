import { ShieldCheck, Zap, Wallet, Headphones } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Aman & Terpercaya", desc: "Transaksi melalui WhatsApp dengan bukti dan verifikasi." },
  { icon: Zap, title: "Super Cepat", desc: "Proses instan setelah pembayaran terkonfirmasi." },
  { icon: Wallet, title: "Pembayaran Fleksibel", desc: "Dukungan kartu dan e-wallet populer." },
  { icon: Headphones, title: "Support 24/7", desc: "Bantuan ramah kapan pun kamu butuh." },
];

export default function Highlights(){
  return (
    <section id="why" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Kenapa pilih 777topup</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i) => (
            <div key={i.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <i.icon className="text-emerald-400" />
              <div className="mt-3 text-lg font-semibold">{i.title}</div>
              <p className="mt-1 text-sm text-slate-300">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
