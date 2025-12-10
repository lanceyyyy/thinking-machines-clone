import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CourseSection } from "@/components/CourseSection";
import { ConsultantsSection } from "@/components/ConsultantsSection";
import { InsightsSection } from "@/components/InsightsSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <CourseSection />
        <ConsultantsSection />
        <InsightsSection />
        <CapabilitiesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
