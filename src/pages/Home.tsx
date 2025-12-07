
import Hero from "../components/Hero";
import Services from "../components/Services";
import Reviews from "../components/Testimonials";
import Title from "../components/SectionTitle";
import FAQ from "../components/FAQ";


export default function Home() {
  return (
    <div className="bg-black">
      
      <Hero />
      <Services />
      <Reviews />
      
      <FAQ />
      <Title />
    </div>
  );
}
