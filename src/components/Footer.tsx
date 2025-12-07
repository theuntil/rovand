import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black pt-20 pb-10 px-6">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row gap-16">

        {/* ----------------- LEFT SIDE — 35% (MOBILDE ALTA INER) ----------------- */}
        <div className="flex flex-col gap-6 md:w-[35%] order-2 md:order-0">

          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img
              src="/src/assets/rovand_logo.png"
              className="h-5 object-contain"
            />
          </div>

          {/* COMPANY INFO */}
<p className="text-white/50 text-xs -mt-4 leading-relaxed flex items-center gap-1">
  <a
    href="https://find-and-update.company-information.service.gov.uk/company/16724239"
    target="_blank"
    rel="noopener noreferrer"
    className="text-xs font-medium text-white hover:text-blue-300 transition  flex items-center gap-1"
  >
    16724239
    <ArrowUpRight className="w-4 h-4" />
  </a>

  <span>Registered in England.</span>
</p>

          {/* ----------------- STORE BADGES ----------------- */}
          <div className="flex flex-col gap-3 mt-2">

            {/* APP STORE */}
            <a
              href="#"
              className="w-52 bg-white text-black rounded-3xl flex items-start gap-3 py-3 pl-4 shadow-md hover:opacity-90 transition"
            >
              <img src="/src/assets/appstore.png" className="w-7" />
              <div className="flex flex-col leading-tight text-left">
                <span className="text-[10px] text-black/70">Download on the</span>
                <span className="text-[14px] font-semibold">App Store</span>
              </div>
            </a>

            {/* GOOGLE PLAY */}
            <a
              href="#"
              className="w-52 bg-white text-black rounded-3xl flex items-start gap-3 py-3 pl-4 shadow-md hover:opacity-90 transition"
            >
              <img src="/src/assets/googleplay.webp" className="w-7" />
              <div className="flex flex-col leading-tight text-left">
                <span className="text-[10px] text-black/70">GET IT ON</span>
                <span className="text-[14px] font-semibold">Google Play</span>
              </div>
            </a>

            {/* APP GALLERY */}
            <a
              href="#"
              className="w-52 bg-white text-black rounded-3xl flex items-start gap-3 py-3 pl-4 shadow-md hover:opacity-90 transition"
            >
              <img src="/src/assets/appgallery.png" className="w-7" />
              <div className="flex flex-col leading-tight text-left">
                <span className="text-[10px] text-black/70">Explore it on</span>
                <span className="text-[14px] font-semibold">AppGallery</span>
              </div>
            </a>

          </div>
        </div>

        {/* ----------------- RIGHT SIDE — 65% (DESKTOPTA SAGDA, MOBILDE EN ÜSTTE) ----------------- */}
        <div className="flex flex-col md:flex-row justify-center md:justify-start md:w-[65%] 
                        text-center md:text-left gap-20 md:gap-32 mx-auto order-1 md:order-0">

          {/* NAVIGATION */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h4 className="text-white text-lg">COMPANY</h4>
            <ul className="flex flex-col gap-2 text-white/60 text-sm">
            
              <li className="hover:text-white transition cursor-pointer">Our Brands</li>
              <li className="hover:text-white transition cursor-pointer">Contact</li>
              <li className="hover:text-white transition cursor-pointer">Support</li>
              <li className="hover:text-white transition cursor-pointer">FAQ</li>
              <li className="hover:text-white transition cursor-pointer"></li>
            </ul>
          </div>

          {/* SOCIALS */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h4 className="text-white text-lg">SOCİALS</h4>
            <ul className="flex flex-col gap-2 text-white/60 text-sm">
              <li className="hover:text-white transition cursor-pointer">Twitter (X)</li>
              <li className="hover:text-white transition cursor-pointer">Instagram</li>
              <li className="hover:text-white transition cursor-pointer">Facebook</li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
