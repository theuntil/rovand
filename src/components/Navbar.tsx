import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LogoImg from "../assets/rovand_logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: "Home", href: "#" },
    { name: "Our Brands", href: "#" },
    { name: "About Us", href: "#" },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* -------------------- NAV WRAPPER (OVERLAY) -------------------- */}
      <div className="fixed top-0 left-0 w-full z-9999 pointer-events-none">
        <header
          className={`transition-all duration-300 ${
            isScrolled ? "py-4" : "py-8"
          }`}
        >
          <div
            className={`max-w-7xl mx-auto transition-all duration-300 ${
              isScrolled ? "px-8 md:px-28" : "px-4 md:px-6"
            }`}
          >
            {/* REAL NAVBOX */}
            <nav className="pointer-events-auto border border-white/3 rounded-full bg-black/30 backdrop-blur-md px-4 md:px-5 py-4 flex items-center justify-between gap-4 ">

              {/* LOGO LEFT */}
              <div className="flex items-center">
                <img
                  src={LogoImg}
                  alt="Logo"
                  className="h-4 ml-5 w-auto object-contain"
                />
              </div>

              {/* DESKTOP NAVIGATION */}
              <ul className="hidden md:flex items-center gap-8">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      className="text-sm text-white/70 hover:text-white transition cursor-pointer"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* DESKTOP BUTTON */}
              <div className="hidden md:flex items-center">
                <button className="rounded-full bg-white text-black font-medium hover:bg-white/90 px-4 py-1.5 text-sm shadow">
                  Contact Us
                </button>
              </div>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-white/5 rounded-md transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 text-white" />
                ) : (
                  <Menu className="h-5 w-5 text-white" />
                )}
              </button>
            </nav>
          </div>
        </header>
      </div>

      {/* -------------------- MOBILE MENU -------------------- */}
      {isMenuOpen && (
        <div className="fixed top-[110px] left-0 right-0 z-9998 px-8 md:hidden mobile-menu-container">
          <div className="rounded-2xl bg-black/40 backdrop-blur-2xl shadow-2xl 
                          animate-in slide-in-from-top-2 duration-300 
                          max-w-xs w-full ml-auto border border-white/4">
            <div className="p-6">

              {/* MOBILE NAV LINKS */}
              <nav className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2.5 rounded-lg transition-all text-xs font-medium 
                               text-white/70 hover:text-white hover:bg-white/10 cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              <hr className="my-4 border-white/10" />

              {/* MOBILE CTA BUTTON */}
              <button className="rounded-xl bg-white text-black hover:bg-white/90 
                                 px-4 py-2.5 text-xs font-semibold w-full">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
