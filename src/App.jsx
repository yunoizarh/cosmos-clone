import { main } from "motion/react-client";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import ScrollingBrands from "./components/ScrollingBrands";
import ScaleSection from "./components/ScaleSection";
import CosmosSDKShowcase from "./components/CosmosSDKShowcase";
import NeutronsSection from "./components/NeutronsSection";
import IBCSection from "./components/IbcSection";
import FeatureSection from "./components/FeaturesSection";
import TestimonialSection from "./components/TestimonialSection";
import CommunitySection from "./components/CommunitySection";
import CosmosSlider from "./components/CosmosSlider";
import BuildingInterchainSection from "./components/BuildingInterchainSection";
import ContactUsSection from "./components/ContactUsSection";
import CosmosFooter from "./components/Footer";
import FooterBottom from "./components/FooterBottom";
function App() {
  return (
    <>
      <main>
        <div className="min-h-screen bg-cosmosBg bg-no-repeat bg-cover bg-center ">
          <div className="absolute inset-0 bg-black/55 z-0" />

          <div className="relative z-10">
            <Navbar />
            <Hero />
          </div>
        </div>

        <ScrollingBrands />
        <ScaleSection />
        <CosmosSDKShowcase />
        <NeutronsSection />
        <IBCSection />
        <FeatureSection />
        <TestimonialSection />
        <CommunitySection />
        <CosmosSlider />
        <BuildingInterchainSection />
        <ContactUsSection />
        <CosmosFooter />
        <FooterBottom />
      </main>
    </>
  );
}

export default App;
