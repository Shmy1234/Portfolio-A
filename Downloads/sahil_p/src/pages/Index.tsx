import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { AwardsSection } from "@/components/AwardsSection";
import { ContactSection } from "@/components/ContactSection";
import { FallingLeaves } from "@/components/FallingLeaves";
import { FallingRain } from "@/components/FallingRain";
import { FallingSnow } from "@/components/FallingSnow";
import { IntroAnimation } from "@/components/IntroAnimation";
import { useTheme } from "@/contexts/ThemeContext";
import canvasTexture from "@/assets/canvas-texture.jpg";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const { theme } = useTheme();

  // Static background style - no theme changes
  const backgroundStyle = {
    backgroundImage: `url(${canvasTexture})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
  };

  const renderParticles = () => {
    switch (theme) {
      case "night":
        return <FallingRain />;
      case "winter":
        return <FallingSnow />;
      default:
        return <FallingLeaves />;
    }
  };

  return (
    <>
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      
      <motion.div 
        className="min-h-screen relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Background layer */}
        <div 
          className="absolute inset-0"
          style={backgroundStyle}
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 pointer-events-none bg-background/70" />
        
        {/* 3D Particle Animation */}
        {renderParticles()}
        
        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          
          <main>
            <HeroSection />
            <ProjectsSection />
            <ExperienceSection />
            <AwardsSection />
            <ContactSection />
          </main>
        </div>
      </motion.div>
    </>
  );
};

export default Index;
