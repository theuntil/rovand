// components/BrandsSection.tsx
import LogoLoop from "./LogoLoop";

export default function BrandsSection() {
  const techLogos = [
    { src: "/terra.png", alt: "logo1", href: "https://terrasoftware.co" },
    { src: "/callai.png", alt: "logo2", href: "https://callai.com.tr" },
    { src: "/kayserimedya.png", alt: "logo3", href: "#" },
    { src: "/kuzeybati.png", alt: "logo4", href: "https://kuzeybatihaber.com.tr" },
    { src: "/amazon.png", alt: "logo5", href: "#" },
    
  ];

  return (
    <div className="w-full flex justify-center mb-20">
      <div className="w-full md:w-[60%] flex flex-col items-center">
        <h3 className="text-white/70 text-xs mb-4 tracking-wide">
          Our Brands
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
