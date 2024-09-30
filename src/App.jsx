import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AskChatGPT from "./components/AskChatGPT";
import KeyFeatures from "./components/KeyFeatures";
import PricingPlans from "./components/PricingPlans";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="text-sm text-neutral-300 antialiased">
      <Navbar />
      <HeroSection />
      <AskChatGPT />
      <KeyFeatures />
      <PricingPlans />
      <Footer />
    </main>
  );
};

//

export default App;
