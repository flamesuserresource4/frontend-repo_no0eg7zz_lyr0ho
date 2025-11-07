const WA_NUMBER_DISPLAY = "+62 821-2171-2227";
const WA_NUMBER = "6282121712227";

export default function Footer(){
  return (
    <footer id="support" className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-extrabold text-white text-xl">777<span className="text-emerald-300">topup</span></div>
            <p className="mt-3 text-sm">Landing page resmi untuk top up Mico & Dazz. Tidak terkait langsung dengan platform terkait.</p>
          </div>
          <div>
            <div className="text-white font-semibold">Kontak</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>WhatsApp: <a className="text-white hover:underline" href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer">{WA_NUMBER_DISPLAY}</a></li>
              <li>Email: help@777topup.com</li>
              <li>24/7 Layanan</li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold">Legal</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-400">© {new Date().getFullYear()} 777topup. All rights reserved.</div>
      </div>
    </footer>
  );
}
