import { motion } from "framer-motion";
import BlurText from "./BlurText";
import { ArrowUpRight } from "lucide-react";

import HeroInfoRotator from "./HeroInfoRotator";
import Dither from "./Dither"; // ⭐ DITHER IMPORT
const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">

      {/* ⭐ DITHER BACKGROUND (FULLSCREEN) ⭐ */}
     <div className="absolute inset-0 z-10">
  <div className="absolute inset-0">
    <Dither
      waveColor={[0.5, 0.5, 0.5]}
      disableAnimation={false}
      enableMouseInteraction={true}
      mouseRadius={0.3}
      colorNum={4}
      waveAmplitude={0.3}
      waveFrequency={3}
      waveSpeed={0.05}
    />
  </div>

  {/* ⭐ Aşağıdan yukarı gradient shadow overlay ⭐ */}
  <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent pointer-events-none"></div>
</div>


      {/* İstersen bu eski background efektini silebilirsin */}
      <div className="background absolute inset-0 -z-10">
        {[...Array(31)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      {/* TEXT */}
      <BlurText
        text="Always embrace change"
        delay={500}
        animateBy="words"
        direction="top"
        className="text-4xl md:text-6xl font-semibold text-center text-white tracking-tight mb-2 px-4 relative z-10"
      />

      <motion.p
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.9 }}
  className="
    text-white/60 text-sm md:text-base 
    max-w-[500px] text-center relative z-10
    px-4 mx-auto mt-2
  "
>
  Rovand Limited is a company that provides services helping users embrace change across all sectors.
</motion.p>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.9 }}
        className="flex items-center justify-center gap-4 mt-8 relative z-10"
      >
       <a href="/about">
  <button className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition shadow-lg flex items-center gap-2">
    About US
    <ArrowUpRight className="w-4 h-4" />
  </button>
</a>

<a href="/contact">
  <button className="px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-sm font-medium hover:bg-white/20 transition shadow-lg">
    Contact
  </button>
</a>

      </motion.div>

      {/* CARD */}
      <HeroInfoRotator />

      
    </section>
  );
};

export default Hero;
