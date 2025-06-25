import React from 'react';
import { HeroParallaxDemo } from './components/ui/hero-parallax-components';
import { Routes, Route } from 'react-router-dom';
import Page2 from './page2'
import Profile from './components/Profile';


const App: React.FC = () => {
  return (
      <Routes>
      <Route
        path="/"
        element={
          <div className="flex items-center justify-center min-h-screen bg-neutral-950">
            <HeroParallaxDemo />
          </div>
        }
      />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;

