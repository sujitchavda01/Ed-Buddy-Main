
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import DemoSection from "@/components/DemoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-yellow-50 font-poppins">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ContactSection />
      <DemoSection />
      <Footer />
    </div>
  );
};

export default Index;
