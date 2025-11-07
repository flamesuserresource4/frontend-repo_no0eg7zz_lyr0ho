import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-400/30 selection:text-emerald-100">
      <Navbar />
      <main>
        <Hero />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
