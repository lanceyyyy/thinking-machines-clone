import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PartnersSection } from "@/components/PartnersSection";
import { CourseSection } from "@/components/CourseSection";
import { ServicesSection } from "@/components/ServicesSection";
import { StoriesSection } from "@/components/StoriesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <PartnersSection />
        <CourseSection />
        <ServicesSection />
        <StoriesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
