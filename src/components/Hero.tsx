import { motion } from "framer-motion";
import BlurText from "./BlurText";
import { ArrowUpRight } from "lucide-react";
import LogoLoop from "./LogoLoop";
import HeroInfoRotator from "./HeroInfoRotator";
// 🔥 TÜM LOGOLAR favicon.png kullanıyor
const techLogos = [
  { src: "/favicon.png", alt: "logo1", href: "#" },
  { src: "/favicon.png", alt: "logo2", href: "#" },
  { src: "/favicon.png", alt: "logo3", href: "#" },
  { src: "/favicon.png", alt: "logo4", href: "#" },
  { src: "/favicon.png", alt: "logo5", href: "#" },
  { src: "/favicon.png", alt: "logo6", href: "#" },
];

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">

      {/* BACKGROUND */}
      <div className="background absolute inset-0 -z-10">
        {[...Array(31)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      {/* TEXT */}
      <BlurText
        text="Elevating Brands with Revolution"
        delay={500}
        animateBy="words"
        direction="top"
        className="text-4xl md:text-6xl font-semibold text-center text-white tracking-tight mb-2 px-4 relative z-10"
      />

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.9 }}
        className="text-white/70 text-sm md:text-base mt-3 max-w-xl text-center relative z-10"
      >
        Rovand Limited — A global creative agency shaping brands with design,
        strategy, and technology.
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.9 }}
        className="flex items-center justify-center gap-4 mt-8 relative z-10"
      >
        <button className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition shadow-lg flex items-center gap-2">
          Start a Project
          <ArrowUpRight className="w-4 h-4" />
        </button>

        <button className="px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-sm font-medium hover:bg-white/20 transition shadow-lg">
          Our Brands
        </button>
      </motion.div>

      {/* CARD */}
       <HeroInfoRotator />


      {/* ⭐ LOGO LOOP (FAVICON) ⭐ */}
      <div className="relative z-10 mt-16 w-full flex justify-center px-4">
        <div className="w-full md:w-[60%] flex flex-col items-center">

          <h3 className="text-white/70 text-sm mb-4 tracking-wide uppercase">
            OUR BRANDS
          </h3>

          <div className="w-full h-80px relative overflow-hidden">
            <LogoLoop
              logos={techLogos}
              speed={90}
              direction="left"
              logoHeight={42}
              gap={35}
              hoverSpeed={0}
              fadeOut
              fadeOutColor="#000"
              ariaLabel="Brand logos"
            />
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
