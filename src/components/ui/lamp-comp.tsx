"use client";
import { motion } from "motion/react";
import { LampContainer } from "../ui/lamp";
import { Typewriter } from "react-simple-typewriter";


export function LampDemo() {
  return (
    <>
    <LampContainer className="h-max pt-30">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-20 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center font-medium tracking-tight width-max text-gray-300 "
      >
        <div className="text-4xl md:text-6xl leading-20 ">
            Accelerate you coding journey with {" "}
            <span className="text-orange-300 font-bold">
              <Typewriter
                words={['DSA Sheets', 'CP Sheets','Interview Prep' ]}
                loop={true}
                cursor
                cursorStyle=""
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1750}
              />
            </span>{" "} 
            <br/>Join the Top 1% of Coders Today
        </div>
        
      </motion.h1>
      
      <div className="text-2xl text-gray-400 text-center  md:text-0.5xl ">
            <p>Master Data Structures and Algorithms with our structured DSA Sheet, curated challenges, and expert mentorship. Build the skills that will set you apart in competitive programming and top tech interviews.</p>
        </div>
        <br/>
        <div>
            <a href="#resources">
            <button className="bg-red-900 hover:border-2 text-white font-semibold py-2 px-4 rounded-full shadow">
                Start For Free
            </button>
            </a>
        </div>
    </LampContainer>
    
    </>
  );
}


