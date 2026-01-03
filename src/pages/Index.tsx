import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
