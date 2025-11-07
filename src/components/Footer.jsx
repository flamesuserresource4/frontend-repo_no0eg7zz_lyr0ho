export default function Footer(){
  return (
    <footer id="support" className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-extrabold text-white text-xl">777<span className="text-amber-400">topup</span></div>
            <p className="mt-3 text-sm">Top up Mico and Dazz with instant delivery and fair pricing. Not affiliated with Mico or Dazz.</p>
          </div>
          <div>
            <div className="text-white font-semibold">Support</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>WhatsApp: +00 0000 0000</li>
              <li>Email: help@777topup.com</li>
              <li>Hours: 24/7</li>
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
