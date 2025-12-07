// components/BrandsSection.tsx
import LogoLoop from "./LogoLoop";

export default function BrandsSection() {
  const techLogos = [
    { src: "/favicon.png", alt: "logo1", href: "#" },
    { src: "/favicon.png", alt: "logo2", href: "#" },
    { src: "/favicon.png", alt: "logo3", href: "#" },
    { src: "/favicon.png", alt: "logo4", href: "#" },
    { src: "/favicon.png", alt: "logo5", href: "#" },
    { src: "/favicon.png", alt: "logo6", href: "#" },
  ];

  return (
    <div className="w-full flex justify-center mb-20">
      <div className="w-full md:w-[60%] flex flex-col items-center">
        <h3 className="text-white/70 text-xs mb-4 tracking-wide uppercase">
          OUR BRANDS
        </h3>

        {/* YÜKSEKLİK EKLEMİYOR — sadece içerik kadar alan kaplıyor */}
        <div className="w-full relative overflow-hidden">
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
  );
}
