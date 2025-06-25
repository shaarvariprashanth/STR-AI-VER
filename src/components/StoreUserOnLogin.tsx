import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function StoreUserOnLogin() {
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    const saveUser = async () => {
      if (!user || !isAuthenticated) return;

      const { email, name, picture, sub } = user;

      // Upsert user data into Supabase
      const { error } = await supabase.from("users").upsert(
        {
          id: sub, // Auth0 ID
          email,
          name,
          picture,
        },
        { onConflict: "id" }
      );

      if (error) console.error("Error saving user to Supabase:", error);
      else console.log("User saved to Supabase ✅");
    };

    saveUser();
  }, [user, isAuthenticated]);

  return null;
}
