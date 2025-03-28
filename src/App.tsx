import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors";
// import Team from "./components/Team";
// import Tournaments from "./components/Tournaments";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Sponsors />
        {/* <Team /> */}
        {/* <Tournaments /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
