import { useEffect, useMemo, useState } from "react";
import { CreditCard, Wallet, Send } from "lucide-react";

const PRODUCTS = [
  { id: "mico_100", app: "Mico", amount: 100, bonus: 0, price: 1.99 },
  { id: "mico_550", app: "Mico", amount: 550, bonus: 50, price: 8.99 },
  { id: "mico_1200", app: "Mico", amount: 1200, bonus: 150, price: 17.99 },
  { id: "dazz_1000", app: "Dazz", amount: 1000, bonus: 0, price: 9.99 },
  { id: "dazz_2500", app: "Dazz", amount: 2500, bonus: 300, price: 22.99 },
  { id: "dazz_5000", app: "Dazz", amount: 5000, bonus: 700, price: 42.99 },
];

const PAYMENT_METHODS = [
  { id: "card", name: "Credit/Debit Card", icon: CreditCard },
  { id: "wallet", name: "E-Wallet", icon: Wallet },
];

export default function TopUpForm() {
  const [app, setApp] = useState("Mico");
  const [selected, setSelected] = useState(PRODUCTS[0].id);
  const [userId, setUserId] = useState("");
  const [payment, setPayment] = useState("card");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const options = useMemo(() => PRODUCTS.filter(p => p.app === app), [app]);
  const chosen = useMemo(() => PRODUCTS.find(p => p.id === selected), [selected]);

  useEffect(() => {
    if (!options.find(o => o.id === selected)) {
      setSelected(options[0]?.id ?? "");
    }
  }, [app]);

  const canSubmit = userId.trim().length > 0 && chosen;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitted(true);
    // In a future iteration, this will call the backend to process the order
    setTimeout(() => {
      setUserId("");
      setNote("");
      setSubmitted(false);
    }, 1200);
  };

  return (
    <section id="topup" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Top Up Now</h2>
        <p className="mt-2 text-slate-300">Select your app, package, and payment method. Delivery is instant after payment.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <label className="block text-sm text-slate-300 mb-2">Choose App</label>
              <div className="grid grid-cols-2 gap-3">
                {(["Mico","Dazz"]).map(a => (
                  <button
                    key={a}
                    type="button"
                    onClick={() => setApp(a)}
                    className={`rounded-lg px-4 py-3 font-semibold transition border ${app===a?"bg-amber-400 text-slate-900 border-transparent":"bg-transparent border-white/10 hover:bg-white/5"}`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <label className="block text-sm text-slate-300 mb-3">Select Package</label>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {options.map(p => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelected(p.id)}
                    className={`rounded-xl text-left p-4 border transition ${selected===p.id?"bg-amber-400 text-slate-900 border-transparent":"bg-slate-900/40 text-white border-white/10 hover:bg-white/5"}`}
                  >
                    <div className="text-sm opacity-80">{p.app}</div>
                    <div className="mt-1 text-2xl font-extrabold">{p.amount.toLocaleString()}</div>
                    {p.bonus>0 && <div className="mt-1 inline-flex text-xs font-semibold bg-white/20 text-slate-900/90 px-2 py-0.5 rounded">+{p.bonus} bonus</div>}
                    <div className="mt-2 text-sm opacity-80">${p.price.toFixed(2)}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <label className="block text-sm text-slate-300 mb-2">Mico/Dazz ID</label>
              <input
                value={userId}
                onChange={(e)=>setUserId(e.target.value)}
                placeholder="Enter your user ID or UID"
                className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:border-amber-400"
              />
              <p className="mt-1 text-xs text-slate-400">Make sure your ID is correct to receive the top up.</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <label className="block text-sm text-slate-300 mb-2">Note (optional)</label>
              <textarea
                value={note}
                onChange={(e)=>setNote(e.target.value)}
                rows={3}
                placeholder="Any special instruction for your order"
                className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-300">Selected</div>
                  <div className="text-xl font-bold">{chosen?`${chosen.app} ${chosen.amount}`:"—"}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-300">Total</div>
                  <div className="text-2xl font-extrabold">{chosen?`$${chosen.price.toFixed(2)}`:"$0.00"}</div>
                </div>
              </div>
              <div className="mt-4 grid gap-2">
                {PAYMENT_METHODS.map(m => (
                  <label key={m.id} className={`flex items-center gap-3 rounded-lg border p-3 cursor-pointer transition ${payment===m.id?"border-amber-400 bg-amber-400/10":"border-white/10 hover:bg-white/5"}`}>
                    <input type="radio" name="pm" className="hidden" checked={payment===m.id} onChange={()=>setPayment(m.id)} />
                    <m.icon size={18}/>
                    <span className="text-sm">{m.name}</span>
                  </label>
                ))}
              </div>
              <button
                type="submit"
                disabled={!canSubmit || submitted}
                className="mt-5 inline-flex items-center justify-center w-full gap-2 rounded-lg bg-amber-400 text-slate-900 px-5 py-3 font-semibold hover:bg-amber-300 disabled:opacity-60 disabled:cursor-not-allowed transition"
              >
                <Send size={18}/>
                {submitted?"Processing...":"Pay & Top Up"}
              </button>
              <p className="mt-3 text-xs text-slate-400">By continuing you agree to our terms and refund policy.</p>
            </div>
          </aside>
        </form>
      </div>
    </section>
  );
}
