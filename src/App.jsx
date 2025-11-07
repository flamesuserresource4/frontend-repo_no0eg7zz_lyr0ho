import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <Highlights />
      </main>
      <Footer />
    </div>
  );
}

export default App;
