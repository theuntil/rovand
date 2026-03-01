import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [lightReady, setLightReady] = useState(false);

  const handleMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPos({ x, y });
  };

  return (
    <section className="relative w-full bg-black overflow-hidden py-28 px-6">

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 max-w-4xl mx-auto text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="
            text-[50px]
            lg:text-[70px]
            leading-[1.1]
            bg-gradient-to-b
            from-white
            via-neutral-200
            to-neutral-400
            bg-clip-text
            text-transparent
          "
          style={{ fontFamily: "CTAItalic" }}
        >
          Build something people
          <br />
          actually want.
        </motion.h2>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-10 flex flex-row gap-4 justify-center"
        >
          <a
            href="/contact"
            className="px-6 py-3 rounded-full bg-white text-black text-sm hover:bg-neutral-200 transition"
          >
            Contact Us
          </a>

          <a
            href="/about"
            className="px-6 py-3 rounded-full  text-white text-sm hover:scale-105 transition"
          >
            About Us
          </a>
        </motion.div>
      </motion.div>

      {/* LOGO AREA */}
      <motion.div
        ref={containerRef}
        onMouseMove={handleMove}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.6,
          duration: 1,
        }}
        onAnimationComplete={() => setLightReady(true)}
        className="relative mt-24 w-full flex justify-center items-center"
      >
        {/* LOGO */}
        <img
          src="/j.png"
          alt="logo"
          className="w-[115%]
           sm:w-[90%]
            max-w-none
            opacity-10
            select-none
            pointer-events-none
          "
        />

        {/* ✅ SPOTLIGHT FIXED */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: lightReady ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(
              260px circle at ${pos.x}% ${pos.y}%,
              rgba(255,255,255,0.28),
              transparent 70%
            )`,
            mixBlendMode: "overlay",
          }}
        />
      </motion.div>
    </section>
  );
}