import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const brands = ["Terra", "CallAI", "Seller (Amazon)", "Seller (Shopify)", "Other"];

const subjects = [
  "Partnership Inquiry",
  "Customer Support",
  "Investor / Partnership",
  "Technical Support",
  "Billing & Payments",
  "Other",
];

const Contact = () => {
  const [form, setForm] = useState({
    brand: "",
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors: any = {};

    if (!form.name.trim()) newErrors.name = "Full name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    if (!form.topic.trim()) newErrors.topic = "Please select a topic.";
    if (!form.message.trim()) newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccessPopup(true);
        setForm({ brand: "", name: "", email: "", topic: "", message: "" });
        setErrors({});
        setTimeout(() => setSuccessPopup(false), 3000);
      } else {
        alert("An error occurred while sending your message.");
      }
    } catch (error) {
      alert("Network error.");
    }

    setLoading(false);
  };

  return (
    <section className="w-full min-h-screen bg-black px-6 py-24 flex justify-center">

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* -----------------------------------------------------
              LEFT SIDE — CONTACT INFO
        ------------------------------------------------------ */}
        <div className="flex flex-col gap-6 text-white">

          <h1 className="text-3xl md:text-4xl mt-20  tracking-tight">
            Contact & Support
          </h1>

          <p className="text-white/60 text-sm leading-relaxed max-w-sm">
            Need help or want to collaborate with us?  
            Our support team is here to assist you across all Rovand brands.
          </p>

          <div className="mt-4 flex flex-col gap-4 text-sm">

            <div>
              <p className="text-white/40 text-xs mb-1">Email</p>
              <p className="text-white font-medium">contact@rovand.limited</p>
              <p className="text-white font-medium">ozenshopping.com@gmail.com</p>
            </div>
             <div>
              <p className="text-white/40 text-xs mb-1">Phone</p>
              <p className="text-white font-medium">+90 533 443 49 78</p>
            </div>

            <div>
              <p className="text-white/40 text-xs mb-1">Office Address</p>
              <p className="text-white font-medium">
                71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ
              </p>
            </div>

            <div>
              <p className="text-white/40 text-xs mb-1">Support Hours</p>
              <p className="text-white font-medium">Mon – Fri, 09:00–18:00 (GMT)</p>
            </div>

          </div>
        </div>

        {/* -----------------------------------------------------
                    RIGHT SIDE — FORM
        ----------------------------------- ------------------- */}
        <form
          onSubmit={submitForm}
          className="bg-black border mt-10 border-white/8 backdrop-blur-xl
                     rounded-2xl p-8 shadow-xl flex flex-col gap-6"
        >
          {/* BRAND SELECT (optional) */}
          <div>
            <label className="text-white/80 text-sm">Brand (Optional)</label>
            <select
              name="brand"
              value={form.brand}
              onChange={handleChange}
              className="mt-2 w-full bg-black/20 border border-white/20 text-white rounded-xl px-4 py-3 text-sm outline-none"
            >
              <option value="">Choose brand</option>
              {brands.map((b) => (
                <option key={b} value={b} className="text-black">
                  {b}
                </option>
              ))}
            </select>
          </div>

          {/* NAME */}
          <div>
            <label className="text-white/80 text-sm">Full Name *</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="mt-2 w-full bg-black/20 border border-white/20 text-white rounded-xl px-4 py-3 text-sm outline-none"
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.name}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-white/80 text-sm">Email *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="mt-2 w-full bg-black/20 border border-white/20 text-white rounded-xl px-4 py-3 text-sm outline-none"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.email}
              </p>
            )}
          </div>

          {/* TOPIC */}
          <div>
            <label className="text-white/80 text-sm">Topic *</label>
            <select
              name="topic"
              value={form.topic}
              onChange={handleChange}
              className="mt-2 w-full bg-black/20 border border-white/20 text-white rounded-xl px-4 py-3 text-sm outline-none"
            >
              <option value="">Choose a topic</option>
              {subjects.map((s) => (
                <option key={s} value={s} className="text-black">
                  {s}
                </option>
              ))}
            </select>
            {errors.topic && (
              <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.topic}
              </p>
            )}
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-white/80 text-sm">Message *</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us how we can help..."
              className="mt-2 w-full min-h-[130px] bg-black/20 border border-white/20 text-white rounded-xl px-4 py-3 text-sm outline-none"
            />
            {errors.message && (
              <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.message}
              </p>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="
              bg-white text-black font-medium text-sm rounded-full
              py-3 px-6 hover:bg-white/90 transition
              flex items-center justify-center gap-2 relative
            "
          >
            {loading ? (
              <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                Send Message <Send className="w-4 h-4" />
              </>
            )}
          </button>

        </form>
      </div>

      {/* -----------------------------------------------------
                    SUCCESS POPUP (AUTO-HIDE)
      ------------------------------------------------------ */}
      {successPopup && (
        <div
          className="
            fixed bottom-10 right-10 bg-white text-black px-6 py-4 
            rounded-xl shadow-2xl flex items-center gap-3 animate-slide-in
          "
        >
          <CheckCircle2 className="w-6 h-6 text-green-600" />
          <p className="text-sm font-medium">Your message has been sent!</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
