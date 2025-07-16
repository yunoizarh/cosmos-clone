import { main } from "motion/react-client";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import ScrollingBrands from "./components/ScrollingBrands";
import ScaleSection from "./components/ScaleSection";
import CosmosSDKShowcase from "./components/CosmosSDKShowcase";
function App() {
  return (
    <>
      <main>
        <div className="min-h-screen bg-cosmosBg bg-no-repeat bg-cover bg-center">
          <div className="absolute inset-0 bg-black/55 z-0" />

          <div className="relative z-10">
            <Navbar />
            <Hero />
          </div>
        </div>

        <ScrollingBrands />
        <ScaleSection />
        <CosmosSDKShowcase />
      </main>
    </>
  );
}

export default App;
