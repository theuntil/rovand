import { useState } from "react";
import PolicyModal, { type Policy } from "../components/PolicyModal";
import policiesData from "../data/policies.json";

const Policies = () => {
  const policies = policiesData as Policy[];
  const [openId, setOpenId] = useState<string | null>(null);

  const selectedPolicy = policies.find((p) => p.id === openId);

  return (
    <section className="w-full bg-black py-16 px-6 text-center">
      <h2 className="text-white text-2xl mt-40 mb-6">Policies</h2>

      {/* Buttons */}
      <div
        className="
          flex flex-wrap 
          justify-center 
          
          gap-3 
          max-w-[500px]
          mx-auto
        "
      >
        {policies.map((p) => (
          <button
            key={p.id}
            onClick={() => setOpenId(p.id)}
            className="
              w-1/2 md:w-auto
              px-5 py-2.5
              rounded-lg
              bg-black/10 border border-white/20 
              hover:bg-white/20 transition
              text-white text-sm
              text-left md:text-center
            "
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* Modal */}
      <PolicyModal
        open={openId !== null}
        onClose={() => setOpenId(null)}
        policy={selectedPolicy}
      />
    </section>
  );
};

export default Policies;
