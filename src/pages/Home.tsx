
import Hero from "../components/Hero";
import H1 from "../components/rcom";
import Fet from "../components/cards";
import Fot from "../components/fot.tsx";


import FAQ from "../components/FAQ";
import Loop from "../components/Loop";

export default function Home() {
  return (
    <div className="bg-black">
      
      <Hero />

       <Loop />
     

      <H1/>
         <Fet />
     
      
      <FAQ />
            <Fot />
    </div>
  );
}
