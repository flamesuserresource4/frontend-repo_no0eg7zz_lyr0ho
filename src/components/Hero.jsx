import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 -z-0 opacity-30 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.25),rgba(15,23,42,0.1))]" />
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-amber-200 text-xs mb-4">
              <Sparkles size={14}/> Fast, safe, 24/7
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Top up Mico & Dazz Diamonds in seconds
            </h1>
            <p className="mt-4 text-slate-300 text-lg">
              777topup is the easiest way to recharge your live streaming accounts at the best rates. Instant delivery. Global payment options.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#topup" className="inline-flex items-center justify-center rounded-lg bg-amber-400 text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-amber-500/30 hover:bg-amber-300 transition">
                Start Top Up
              </a>
              <a href="#how" className="inline-flex items-center justify-center rounded-lg border border-white/10 px-5 py-3 font-semibold hover:bg-white/5 transition">
                How it works
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-800/60 p-4">
                  <div className="text-sm text-slate-300">Mico</div>
                  <div className="mt-2 text-3xl font-bold">1000</div>
                  <div className="text-xs text-slate-400">Diamonds</div>
                </div>
                <div className="rounded-xl bg-slate-800/60 p-4">
                  <div className="text-sm text-slate-300">Dazz</div>
                  <div className="mt-2 text-3xl font-bold">2000</div>
                  <div className="text-xs text-slate-400">Stars</div>
                </div>
                <div className="col-span-2 rounded-xl bg-gradient-to-br from-amber-400 to-rose-500 p-4 text-slate-900">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm">Special Deal</div>
                      <div className="text-2xl font-extrabold">+15% Bonus</div>
                    </div>
                    <div className="text-sm font-semibold bg-white/30 rounded px-2 py-1">Today</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-400/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
