import { Shield, Phone } from "lucide-react";

const WA_NUMBER = "6282121712227"; // +62 821-2171-2227 without symbols for wa.me
const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Halo 777topup, saya ingin top up Mico/Dazz."
)}`;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur bg-slate-900/70">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-emerald-400 via-cyan-400 to-amber-400" />
          <span className="font-extrabold tracking-tight text-white text-xl">
            777<span className="text-emerald-300">topup</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
          <a href="#topup" className="hover:text-white transition">Paket</a>
          <a href="#why" className="hover:text-white transition">Kenapa kami</a>
          <a href="#support" className="hover:text-white transition">Dukungan</a>
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden sm:flex items-center gap-1 text-xs text-slate-300"><Shield size={16}/> Aman</span>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 text-slate-900 px-3 py-2 text-sm font-semibold hover:bg-emerald-300 transition"
          >
            <Phone size={16}/> WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
