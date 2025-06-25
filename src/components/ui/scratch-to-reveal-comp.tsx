import { ScratchToReveal } from "@/components/ui/scratch-to-reveal";


interface ScratchToRevealDemoProps {
  onComplete: () => void;
}

export const ScratchToRevealDemo: React.FC<ScratchToRevealDemoProps> = ({ onComplete }) => {
  
  

  return (
    <>
    <div className="flexbox flex-wrap">
    <ScratchToReveal
      width={250}
      height={250}
      minScratchPercentage={70}
      className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
      gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
      onComplete={onComplete}
    >
        <div>
            <h1 className="text-4xl font-extrabold text-black text-center">HURRAY!!!</h1><br/>
        <p className="text-2xl text-black leading-relaxed text-center">
         DSA journey <br /> unlocked!
        </p><br/>
        <div className="text-center">
            <span className="text-4xl ">🏆</span>
        </div>
        
        </div>
      
    </ScratchToReveal>
    <div>
        <p className="text-white text-center">Scratch to reveal</p>
    </div>
    </div>
    </>
  );
}
