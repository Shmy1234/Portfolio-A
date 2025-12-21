import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";

const Index = () => {
  return (
    <>
      <SEO />
      <div className="relative min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <ProjectsSection />
          <ExperienceSection />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </>
  );
};

export default Index;
