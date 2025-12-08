import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const messages = [
  { emoji: "🌍", text: "We reached over 10 million people worldwide." },
  { emoji: "🚀", text: "Expanded from Europe into Asia and the Americas in 2026." },
  { emoji: "🤝", text: "Partnered with more than 5 global brands." },
  { emoji: "🏆", text: "Operating across 10+ diverse industry sectors." }
];

const HeroInfoRotator = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="
        mt-8
        mx-auto
        w-[70%] md:w-full
        max-w-md md:max-w-lg
        rounded-xl
        bg-white/5 backdrop-blur-xl
        border border-white/10
        p-2 md:p-3
        shadow-xl
        text-center
        relative z-10
        h-40px md:h-[50px]
        flex items-center justify-center
      "
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.45 }}
          className="flex items-center justify-center gap-2 text-white/90 text-[11px] md:text-[14px] font-light"
        >
          <span className="text-base md:text-lg">{messages[index].emoji}</span>
          <p>{messages[index].text}</p>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default HeroInfoRotator;
