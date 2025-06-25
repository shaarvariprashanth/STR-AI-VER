// import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

const handleLogin = () => {
    loginWithRedirect({
      appState: { returnTo: '/page2' }, 
      authorizationParams: { prompt: 'login' }
    });
  };


  return (
    <div>
    <InteractiveHoverButton
      className="bg-amber-950 text-white hover:bg-black"
      onClick={handleLogin}

    >
      Start Now
    </InteractiveHoverButton>
    </div>
  );
};

export default LoginButton;


