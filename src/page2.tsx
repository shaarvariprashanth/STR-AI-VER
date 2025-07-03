import Navbar from "./components/Navbar";
import React, { useState } from "react";
import { ScratchToRevealDemo } from "./components/ui/scratch-to-reveal-comp";
import { LampDemo } from "./components/ui/lamp-comp";
import { CardHoverEffectDemo } from "./components/ui/card-hover-effect-comp";
import { MarqueeDemo } from "./components/ui/marquee-comp";
import Footer from "./components/Footer";







const Page2: React.FC = () => {
   const [showScratchCard, setShowScratchCard] = useState(true);
  return (
      <>
      <div className="bg-slate-950 ">
        <div>
        <Navbar/>
      </div>
      

      {showScratchCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 h-screen">
          <ScratchToRevealDemo onComplete={() => setShowScratchCard(false)}/>
        </div>
      )}
      <div className="h-screen">
        {!showScratchCard &&(
        
        <LampDemo/>
        
      )}
      </div>

      <div className="bg-slate-950" id="resources" >
        <h1 className="text-center text-3xl md:text-6xl text-white font-serif">Resources</h1>
        <CardHoverEffectDemo/>
      </div>
      <div className="bg-slate-950 mt-10">
        <h1 className="text-center text-3xl md:text-6xl text-white font-serif">Websites to Practice and Contest</h1><br/>
        <MarqueeDemo/>
      </div>
      <div className="text-white h-max">
        <main/>
      </div>
       
      
      
      <div className="mt-20">
        <Footer/>
      </div>
      </div>
    
      </>
  );
};

export default Page2;