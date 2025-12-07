import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LogoImg from "../assets/rovand_logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Our Brands", href: "/brands" },
    { name: "About Us", href: "/about-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isDesktop = window.innerWidth >= 768;

      if (isDesktop) {
        // 🔥 Scroll shrink ONLY on desktop
        setIsScrolled(window.scrollY > 50);
      } else {
        // 🔥 Mobile ALWAYS stays expanded
        setIsScrolled(false);
      }
    };

    handleScroll(); // initial check

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      {/* NAVBAR WRAPPER */}
      <div className="fixed top-0 left-0 w-full z-9999 pointer-events-none">
        <header
          className={`transition-all duration-300 ${
            isScrolled ? "py-4" : "py-7"
          }`}
        >
          <div
            className={`transition-all duration-300 ${
              isScrolled ? "max-w-5xl mx-auto px-8" : "max-w-7xl mx-auto px-6"
            }`}
          >
            <nav className="pointer-events-auto border border-white/10 rounded-full
                            bg-black/30 backdrop-blur-md px-4 md:px-5 py-4
                            flex items-center justify-between gap-4">

              {/* LOGO */}
              <img
                src={LogoImg}
                alt="Logo"
                className="h-4 ml-5 w-auto object-contain"
              />

              {/* DESKTOP LINKS */}
              <ul className="hidden md:flex items-center gap-8">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-white/70 hover:text-white transition"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* DESKTOP CTA */}
              <a
                href="/contact"
                className="hidden md:flex rounded-full bg-white text-black
                           hover:bg-white/90 px-4 py-1.5 text-sm shadow"
              >
                Contact Us
              </a>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-white/5 rounded-md"
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

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed top-[110px] left-0 right-0 z-9998 px-8 md:hidden">
          <div className="rounded-2xl bg-black/40 backdrop-blur-2xl shadow-xl
                          animate-in slide-in-from-top-2 duration-300 
                          max-w-xs w-full ml-auto border border-white/10">
            <div className="p-6">

              <nav className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2.5 rounded-lg text-xs font-medium 
                               text-white/70 hover:text-white hover:bg-white/10"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              <hr className="my-4 border-white/10" />

              <a
                href="/contact"
                className="rounded-xl bg-white text-black hover:bg-white/90 
                           px-4 py-2.5 text-xs font-semibold w-full block text-center"
              >
                Contact Us
              </a>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
