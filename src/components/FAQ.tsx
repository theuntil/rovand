import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

// 9 adet soru — hepsi tek listede
const faqs: FAQ[] = [
  // Hero SSS 1
  {
    question: "Is the app free to use?",
    answer:
      "Yes! Our app includes a free plan with essential tools. You can upgrade anytime for AI insights, analytics, and premium features.",
  },
  {
    question: "Do you support iOS and Android?",
    answer:
      "Absolutely — the app is available on both App Store and Google Play, fully optimized for all device types.",
  },
  {
    question: "Can I sync my data across devices?",
    answer:
      "Yes. Your data automatically syncs securely across any device logged into your account.",
  },

  // E-commerce SSS 2
  {
    question: "Which payment methods do you accept?",
    answer:
      "We accept Visa, MasterCard, PayPal, Apple Pay, Google Pay, and several region-specific payment options.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Orders are processed within 24 hours. Delivery typically takes between 3–7 business days.",
  },
  {
    question: "Can I return a product?",
    answer:
      "Yes — returns are accepted within 14 days of delivery as long as items remain unused and in original packaging.",
  },

  // Yazılım Geliştirme Ajansı SSS 3
  {
    question: "What services does your development team offer?",
    answer:
      "We provide mobile development, web development, UI/UX, branding, AI integrations, and enterprise software solutions.",
  },
  {
    question: "Do you work on long-term custom software projects?",
    answer:
      "Yes — we work with startups and enterprises for both short-term and multi-year development cycles.",
  },
  {
    question: "Do you offer maintenance after launch?",
    answer:
      "Absolutely. Every project includes a support window, with extended maintenance packages available.",
  },
];

// Smooth height animation component
const FAQItem = ({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  // Height hesaplama
  useEffect(() => {
    if (ref.current) {
      setHeight(isOpen ? `${ref.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div
      className="
        bg-[#00000]
        border border-white/10
        rounded-xl
        p-4
        cursor-pointer
        transition
      "
      onClick={onToggle}
    >
      {/* Question Row */}
      <div className="flex items-center justify-between">
        <span className="text-white text-[12px] text-light ">{q}</span>

        <ChevronDown
          size={20}
          className={`text-white/70 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Smooth expandable content */}
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ height }}
      >
        <div ref={ref} className="mt-3 text-white/60 text-[11px] leading-relaxed pb-2">
          {a}
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-black py-24 px-6">
      {/* TITLE */}
      <div className="max-w-[700px] mx-auto text-center">
        <h2 className="text-white text-3xl font-light">
          Frequently Asked Questions
        </h2>
        <p className="text-white/80 mt-2 text-[13px]">
          Find everything you need to know.
        </p>
      </div>

      {/* FAQ LIST */}
      <div className="mt-12 flex flex-col gap-4 max-w-[700px] mx-auto">
        {faqs.map((item, i) => (
          <FAQItem
            key={i}
            q={item.question}
            a={item.answer}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
