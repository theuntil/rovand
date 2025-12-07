import { motion } from "framer-motion";

const HeroCTA = () => {
  return (
    <section className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img
        src="https://framerusercontent.com/images/qDv1ccUdbUe3UsphvLhkJguGHJI.jpg?scale-down-to=2048&width=2880&height=2048"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/80 pointer-events-none" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 max-w-xl"
      >
        <h1 className="text-white text-xl md:text-3xl font-light mb-1">
          Ready to boost your productivity?
        </h1>
        <p className="text-white/70 text-xs md:text-xs mb-4">
          Start your journey with Cadence today for a more organized, focused you.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-3 py-2 bg-blue-600 text-white rounded-md font-medium text-xs md:text-sm  hover:bg-blue-600 transition"
        >
          Take control now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroCTA;
