import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TopUpForm from "./components/TopUpForm";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        <Hero />
        <TopUpForm />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
