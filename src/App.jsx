import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import LoginInfo from "./components/LoginInfo";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <LoginInfo />
        <Highlights />
      </main>
      <Footer />
    </div>
  );
}

export default App;
