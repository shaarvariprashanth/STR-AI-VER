import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { supabase } from "@/lib/supabase";

import Navbar from "./components/Navbar";
import { ScratchToRevealDemo } from "./components/ui/scratch-to-reveal-comp";
import { LampDemo } from "./components/ui/lamp-comp";
import { CardHoverEffectDemo } from "./components/ui/card-hover-effect-comp";
import { MarqueeDemo } from "./components/ui/marquee-comp";
import Footer from "./components/Footer";

const Page2: React.FC = () => {
  const [showScratchCard, setShowScratchCard] = useState(true);
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    const storeUserInSupabase = async () => {
      if (!user || !isAuthenticated) return;

      const { email, name, sub } = user;

      console.log("👤 Auth0 User:", { email, name, sub });

      try {
        const { data: existingUser, error: fetchError } = await supabase
          .from("users")
          .select("*")
          .eq("email", email)
          .maybeSingle(); 

        if (fetchError) throw fetchError;

        if (existingUser) {
          console.log("✅ User already exists in Supabase:", existingUser);
          return;
        }

        const { error: insertError } = await supabase
          .from("users")
          .insert(
            [
              {
                id: sub,
                email,
                name,
              },
            ],
          );

        if (insertError) throw insertError;

        console.log("✅ New user inserted into Supabase");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.error("❌ Supabase error:", err.message || err);
      }
    };

    if (!isLoading) {
      storeUserInSupabase();
    }
  }, [user, isAuthenticated, isLoading]);

  return (
    <div className="bg-slate-950">
      <Navbar />

      {showScratchCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 h-screen">
          <ScratchToRevealDemo onComplete={() => setShowScratchCard(false)} />
        </div>
      )}

      <div className="h-screen">
        {!showScratchCard && <LampDemo />}
      </div>

      <div className="bg-slate-950" id="resources">
        <h1 className="text-center text-3xl md:text-6xl text-white font-serif">Resources</h1>
        <CardHoverEffectDemo />
      </div>

      <div className="bg-slate-950 mt-10">
        <h1 className="text-center text-3xl md:text-6xl text-white font-serif">
          Websites to Practice and Contest
        </h1>
        <br />
        <MarqueeDemo />
      </div>

      <div className="text-white h-max">
        <main />
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Page2;
