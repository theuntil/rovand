import { Briefcase, Rocket, Users, Target, Globe2 } from "lucide-react";

const About = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white px-6 py-24 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col gap-24">

        {/* -------------------------------------------------
                HERO — Large Intro
        -------------------------------------------------- */}
        <div className="text-center flex flex-col items-center mt-20 gap-6">
          <h1 className="text-3xl md:text-3xl  tracking-tight">
            About Rovand
          </h1>

          <p className="text-white/60 text-xs max-w-2xl leading-relaxed">
          Rovand is a global technology company focused on empowering businesses 
through intelligent automation, AI-driven tools, modern software solutions, 
and advanced e-commerce operations. 

We create products that simplify decision-making, enhance digital workflows, 
optimize operational performance, and bring scalable transformation to every 
industry we touch — from artificial intelligence to automated commerce.

          </p>
        </div>

        {/* -------------------------------------------------
                MISSION + VISION CARDS
        -------------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="bg-black border border-white/10 p-8 rounded-2xl backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-green-400" />
              <h2 className="text-xl font-semibold">Our Mission</h2>
            </div>
            <p className="text-white/60 text-sm">
              To enable individuals and businesses to achieve more through 
              powerful, intuitive, and accessible technology — blending automation,
              AI, and creativity into everyday workflows.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-black border border-white/10 p-8 rounded-2xl backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold">Our Vision</h2>
            </div>
            <p className="text-white/60 text-sm">
              To become a leading global innovator that bridges the gap between 
              artificial intelligence and real-world business challenges.
            </p>
          </div>
        </div>

        {/* -------------------------------------------------
                WHAT WE DO — Feature Blocks
        -------------------------------------------------- */}
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl font-semibold">What We Do</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="p-7 bg-black border border-white/10 rounded-2xl backdrop-blur-xl hover:bg-white/10 transition">
              <Briefcase className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-semibold mb-2">Business Automation</h3>
              <p className="text-white/60 text-sm">
                Smart tools that remove repetitive tasks and accelerate growth.
              </p>
            </div>

            <div className="p-7 bg-black border border-white/10 rounded-2xl backdrop-blur-xl hover:bg-white/10 transition">
              <Users className="w-8 h-8 text-yellow-300 mb-4" />
              <h3 className="font-semibold mb-2">AI-Powered Assistants</h3>
              <p className="text-white/60 text-sm">
                Intelligent assistants that empower teams and improve decision-making.
              </p>
            </div>

            <div className="p-7 bg-black border border-white/10 rounded-2xl backdrop-blur-xl hover:bg-white/10 transition">
              <Globe2 className="w-8 h-8 text-green-300 mb-4" />
              <h3 className="font-semibold mb-2">Global Solutions</h3>
              <p className="text-white/60 text-sm">
                Scalable platforms designed for international businesses and sellers.
              </p>
            </div>

          </div>
        </div>

        {/* -------------------------------------------------
                TIMELINE — Modern Minimal
        -------------------------------------------------- */}
        <div className="flex flex-col gap-10 mt-4">
          <h2 className="text-3xl font-semibold">Our Journey</h2>

          <div className="border-l border-white/10 pl-6 flex flex-col gap-10">

            <div className="relative">
              <span className="absolute -left-[13px] w-3 h-3 bg-green-400 rounded-full"></span>
              <p className="text-white/40 text-xs">2025</p>
              <h3 className="text-lg font-semibold">Rovand Was Born</h3>
              <p className="text-white/60 text-sm">
                The foundation of Rovand began with a vision to simplify business operations.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[13px] w-3 h-3 bg-blue-400 rounded-full"></span>
              <p className="text-white/40 text-xs">2025</p>
              <h3 className="text-lg font-semibold">Expansion & New Products</h3>
              <p className="text-white/60 text-sm">
                Tools like CallAI, Terra solutions joined the Rovand ecosystem.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[13px] w-3 h-3 bg-purple-400 rounded-full"></span>
              <p className="text-white/40 text-xs">Future</p>
              <h3 className="text-lg font-semibold">AI-Driven Future</h3>
              <p className="text-white/60 text-sm">
                Our goal is to become a leader in global AI transformation.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
