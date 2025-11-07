import { CreditCard, Shield, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur bg-slate-900/70">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-yellow-400 via-amber-500 to-rose-500" />
          <span className="font-extrabold tracking-tight text-white text-xl">
            777<span className="text-amber-400">topup</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
          <a href="#how" className="hover:text-white transition">How it works</a>
          <a href="#support" className="hover:text-white transition">Support</a>
          <a href="#secure" className="hover:text-white transition">Secure</a>
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden sm:flex items-center gap-1 text-xs text-slate-300"><Shield size={16}/> Secure</span>
          <a href="#support" className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-3 py-2 text-sm font-semibold hover:bg-slate-100 transition">
            <Phone size={16}/> Contact
          </a>
        </div>
      </div>
    </header>
  );
}
