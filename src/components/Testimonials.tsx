import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    text: `"Cadence completely changed how I work. I get more done in less time without feeling overwhelmed."`,
    name: "Emily R.",
    title: "Freelance Designer",
    img: "/user21.jpg",
  },
  {
    text: `"I used to waste hours figuring out what to do next. Now, Cadence keeps me on track effortlessly."`,
    name: "Mark L.",
    title: "Startup Founder",
    img: "/user21.jpg",
  },
  {
    text: `"The AI-powered insights helped me identify and fix my biggest productivity bottlenecks."`,
    name: "Sarah T.",
    title: "Remote Consultant",
    img: "/user21.jpg",
  },
  {
    text: `"The AI-powered insights helped me identify and fix my biggest productivity bottlenecks."`,
    name: "Sarah T.",
    title: "Remote Consultant",
    img: "/user21.jpg",
  },
  {
    text: `"Exactly what I needed to launch my AI productivity tool. The template feels premium, and I barely had to touch a line of code."`,
    name: "Jules Renner",
    title: "Indie Hacker",
    img: "/user21.jpg",
  },
  {
    text: `"Cadence helped me bring my solo SaaS idea to life in record time. The structure is clean, the flow is intuitive, and the messaging just works."`,
    name: "Mina K.",
    title: "Founder at Taskpilot",
    img: "/user21.jpg",
  },
];

const Testimonials = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Aktif slide tespiti
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const onScroll = () => {
      const scrollLeft = slider.scrollLeft;
      const width = slider.clientWidth;

      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    };

    slider.addEventListener("scroll", onScroll);
    return () => slider.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="w-full bg-black py-24 px-6">
      <div className="max-w-[1100px] mx-auto">

        {/* ------------ TOP TITLE SECTION ------------ */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-white text-3xl font-normal mb-1">
              What Users Are Saying
            </h2>
            <p className="text-white/60 text-sm">Real results from real people.</p>
          </div>

          <a href="#" className="text-blue-400 text-sm hover:text-blue-300">
            Join others
          </a>
        </div>

        {/* ------------ DESKTOP GRID (3 columns) ------------ */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                bg-[#070707] border border-white/10 rounded-2xl p-6 h-[180px]
                flex flex-col justify-between shadow-[0_0_40px_rgba(0,0,0,0.3)]
              "
            >
              <p className="text-white/90 text-[13px] leading-relaxed">{t.text}</p>

              <div className="flex items-center gap-3 mt-4">
                <img src="https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_1280.png" className="w-6 h-6 rounded-full object-cover" />
                <div className="flex flex-col">
                  <span className="text-white text-[12px]">{t.name}</span>
                  <span className="text-white/50 text-[10px]">{t.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ------------ MOBILE: SNAP SLIDER (1 item görünür) ------------ */}
        <div
          ref={sliderRef}
          className="
            md:hidden flex overflow-x-auto snap-x snap-mandatory
            gap-4 pb-6 scrollbar-hide
          "
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                min-w-[85%] snap-center bg-[#070707]
                border border-white/10 rounded-2xl p-6 h-240px
                flex flex-col justify-between shadow-[0_0_40px_rgba(0,0,0,0.3)]
              "
            >
              <p className="text-white/90 text-[14px] leading-relaxed">{t.text}</p>

              <div className="flex items-center gap-3 mt-4">
                <img src="https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_1280.png" className="w-8 h-8 rounded-full object-cover" />
                <div className="flex flex-col">
                  <span className="text-white text-[13px]">{t.name}</span>
                  <span className="text-white/50 text-[11px]">{t.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ------------ MOBILE DOTS ------------ */}
        <div className="md:hidden flex justify-center mt-3 gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`
                w-3 h-3 rounded-full transition
                ${activeIndex === i ? "bg-white" : "bg-white/30"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
