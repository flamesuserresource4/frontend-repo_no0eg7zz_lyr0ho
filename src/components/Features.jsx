import { Shield, Zap, Globe, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure payments",
    desc: "Encrypted checkout and verified suppliers keep your account safe.",
  },
  {
    icon: Zap,
    title: "Instant delivery",
    desc: "Most orders complete within seconds after successful payment.",
  },
  {
    icon: Globe,
    title: "Global methods",
    desc: "Pay with cards and e-wallets across regions and currencies.",
  },
  {
    icon: Headphones,
    title: "Live support",
    desc: "We’re here 24/7 to help with any order or account question.",
  },
];

export default function Features() {
  return (
    <section id="how" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Why 777topup</h2>
        <p className="mt-2 text-slate-300">A modern experience designed for streamers and fans.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <f.icon className="text-amber-400" />
              <div className="mt-3 text-lg font-semibold">{f.title}</div>
              <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
