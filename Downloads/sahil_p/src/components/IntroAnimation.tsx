import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Palette } from "lucide-react";

interface IntroAnimationProps {
  onComplete: () => void;
}

// Handwritten-style SVG path for "Sahil"
function PaintedName() {
  return (
    <svg
      viewBox="0 0 300 80"
      className="w-64 md:w-80 h-20 md:h-24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* S - Fixed orientation: starts top-right, curves left, then right */}
      <motion.path
        d="M45 22 C30 22, 18 30, 20 40 C22 50, 40 50, 45 55 C50 62, 40 72, 20 70"
        stroke="hsl(var(--paint-sienna))"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
      />
      {/* a */}
      <motion.path
        d="M70 45 C85 40, 95 45, 90 55 C85 65, 70 65, 65 55 C60 45, 75 40, 90 45 L90 68"
        stroke="hsl(var(--paint-gold))"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 0.7, ease: "easeInOut" }}
      />
      {/* h */}
      <motion.path
        d="M110 25 L110 68 M110 50 C115 42, 130 42, 135 50 L135 68"
        stroke="hsl(var(--accent))"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 1.0, ease: "easeInOut" }}
      />
      {/* i */}
      <motion.path
        d="M155 45 L155 68"
        stroke="hsl(var(--paint-sienna))"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.2, delay: 1.3, ease: "easeInOut" }}
      />
      {/* i dot */}
      <motion.circle
        cx="155"
        cy="35"
        r="3"
        fill="hsl(var(--paint-sienna))"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.15, delay: 1.45, ease: "easeOut" }}
      />
      {/* l */}
      <motion.path
        d="M180 25 L180 68"
        stroke="hsl(var(--paint-gold))"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 1.5, ease: "easeInOut" }}
      />
      
      {/* Paint brush stroke decoration */}
      <motion.path
        d="M15 75 C80 78, 150 72, 195 76"
        stroke="hsl(var(--accent))"
        strokeWidth="2"
        strokeLinecap="round"
        opacity={0.5}
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 1.8, ease: "easeInOut" }}
      />
    </svg>
  );
}

// Typing animation component
function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay + currentIndex * 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return (
    <span>
      {displayedText}
      <motion.span
        className="inline-block w-0.5 h-6 md:h-8 bg-accent ml-1 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  );
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState<"painting" | "text" | "fadeOut">("painting");

  useEffect(() => {
    const paintingTimer = setTimeout(() => setPhase("text"), 2200);
    const textTimer = setTimeout(() => setPhase("fadeOut"), 4500);
    const completeTimer = setTimeout(() => onComplete(), 5300);

    return () => {
      clearTimeout(paintingTimer);
      clearTimeout(textTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "fadeOut" ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center justify-center gap-10">
            {/* Logo/Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.1,
              }}
              className="relative"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-paint-sienna via-paint-gold to-accent flex items-center justify-center shadow-2xl">
                <Palette className="w-12 h-12 text-background" />
              </div>
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 w-24 h-24 rounded-full bg-paint-gold/30 blur-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.5, opacity: [0, 0.6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>

            {/* Painted Name Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <PaintedName />
            </motion.div>

            {/* Subtitle Text with Typing Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: phase === "text" ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="text-center h-10"
            >
              {phase === "text" && (
                <p className="font-body text-paint-gold text-xl md:text-2xl font-medium">
                  <TypingText text="ML Engineer & Software Developer" delay={100} />
                </p>
              )}
            </motion.div>

            {/* Loading dots */}
            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-accent"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="fixed inset-0 z-[100] bg-background"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      )}
    </AnimatePresence>
  );
}
