import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional: You can also use simple icons

const Navbar: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: `${window.location.origin}/` } });
  };

  return (
    <nav className="w-full bg-black flex items-center justify-between px-8 py-3 relative">
      <a href="/" className="text-white font-semibold text-lg hover:underline">
        STR-AI-VER
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 border border-gray-500 rounded-full px-4 py-1">
        <li>
          <a href="#resources" className="text-gray-300 hover:text-white">
            Resources
          </a>
        </li>
        <li>
          <a href="https://takeuforward.org/interview/" target="_blank" className="text-gray-300 hover:text-white">
            Interview
          </a>
        </li>
        <li>
          <a href="https://takeuforward.org/blogs" target="_blank" className="text-gray-300 hover:text-white">
            Blog
          </a>
        </li>
        <li>
          <a href="/pricing" className="text-gray-300 hover:text-white">
            Subscription
          </a>
        </li>
      </ul>

      {/* Hamburger Icon (Mobile Only) */}
      <button
        className="text-white text-3xl md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-8 bg-black border border-gray-500 rounded-lg w-48 p-4 space-y-4 flex flex-col md:hidden z-50">
          <a href="#resources" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>
            Resources
          </a>
          <a href="https://takeuforward.org/interview/" target="_blank" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>
            Interview
          </a>
          
          <a href="https://takeuforward.org/blogs" target="_blank" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>
            Blog
          </a>
          <a href="/docs" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>
            Subscription
          </a>

          {/* Mobile Profile Options */}
          {isAuthenticated && (
            <>
              <button
                onClick={() => {
                  navigate("/profile");
                  setMenuOpen(false);
                }}
                className="text-gray-300 hover:text-white text-left"
              >
                My Profile
              </button>

              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="text-red-500 hover:text-white text-left"
              >
                Sign Out
              </button>
            </>
          )}
        </div>
      )}

      {/* Desktop Profile Dropdown */}
      {isAuthenticated && user && (
        <div className="relative group hidden md:block">
          <img
            src={user.picture}
            alt={user.name}
            className="w-10 h-10 rounded-full cursor-pointer border-2 border-green-400"
          />
          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 ease-in-out z-50">
            <button
              onClick={() => navigate("/profile")}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              My Profile
            </button>

            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
