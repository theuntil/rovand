import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import PolicyModal, { type Policy } from "../components/PolicyModal";
import policiesData from "../data/policies.json";

const Footer = () => {
  const policies = policiesData as Policy[];

  const [openPolicyId, setOpenPolicyId] = useState<string | null>(null);
  const selectedPolicy = policies.find((p) => p.id === openPolicyId);

  return (
    <footer className="w-full bg-black pt-20 pb-12 px-6 border-t border-white/10">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">

        {/* ----------------------------------------------------------
            1) LEFT COLUMN — LOGO + COMPANY INFO
        ---------------------------------------------------------- */}
        <div className="flex flex-col gap-6">

          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img
              src="/rovand_logo.png"
              className="h-5 object-contain opacity-90"
            />
          </div>

          {/* COMPANY INFO */}
          <p className="text-white/50 text-xs leading-relaxed flex items-center gap-2">
            <a
              href="https://find-and-update.company-information.service.gov.uk/company/16724239"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-white hover:text-blue-300 transition flex items-center gap-1"
            >
              16724239
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span>Registered in England.</span>
          </p>
        </div>

        {/* ----------------------------------------------------------
            2) CENTER COLUMN — COMPANY LINKS + POLICIES
        ---------------------------------------------------------- */}
        <div className="flex justify-between md:justify-start md:gap-24">

          {/* COMPANY LINKS */}
         

          {/* POLICIES (MODAL TRIGGER) */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-sm font-semibold tracking-wide">
              POLICIES
            </h4>

            <ul className="flex flex-col gap-2 text-white/60 text-sm">
              {policies.map((p) => (
                <li
                  key={p.id}
                  onClick={() => setOpenPolicyId(p.id)}
                  className="hover:text-white transition cursor-pointer"
                >
                  {p.title}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ----------------------------------------------------------
            3) RIGHT COLUMN — APP STORE / PLAY STORE / GALLERY
        ---------------------------------------------------------- */}
        <div className="flex flex-col gap-4">

          <h4 className="text-white text-sm font-semibold tracking-wide mb-2">
            DOWNLOAD OUR APPS
          </h4>

          <div className="flex flex-col gap-4">

            {/* APP STORE */}
            <a
              href="#"
              className="w-52 bg-white rounded-2xl flex items-center gap-3 py-3 pl-4 shadow-md hover:opacity-90 transition"
            >
              <img src="/appstore.png" className="w-7" />
              <div className="flex flex-col leading-tight text-left">
                <span className="text-[10px] text-black/70">Download on the</span>
                <span className="text-[14px] font-semibold text-black">App Store</span>
              </div>
            </a>

            {/* GOOGLE PLAY */}
            <a
              href="#"
              className="w-52 bg-white rounded-2xl flex items-center gap-3 py-3 pl-4 shadow-md hover:opacity-90 transition"
            >
              <img src="/googleplay.webp" className="w-7" />
              <div className="flex flex-col leading-tight text-left">
                <span className="text-[10px] text-black/70">GET IT ON</span>
                <span className="text-[14px] font-semibold text-black">Google Play</span>
              </div>
            </a>

            {/* APP GALLERY */}
            <a
              href="#"
              className="w-52 bg-white rounded-2xl flex items-center gap-3 py-3 pl-4 shadow-md hover:opacity-90 transition"
            >
              <img src="/appgallery.png" className="w-7" />
              <div className="flex flex-col leading-tight text-left">
                <span className="text-[10px] text-black/70">Explore it on</span>
                <span className="text-[14px] font-semibold text-black">AppGallery</span>
              </div>
            </a>

          </div>
        </div>
      </div>

      {/* ------------------ COPYRIGHT ------------------ */}
      <div className="mt-16 text-center text-white/40 text-xs">
        © {new Date().getFullYear()} Rovand Limited. All rights reserved.
      </div>

      {/* ------------------ MODAL ------------------ */}
      <PolicyModal
        open={openPolicyId !== null}
        onClose={() => setOpenPolicyId(null)}
        policy={selectedPolicy}
      />

    </footer>
  );
};

export default Footer;
