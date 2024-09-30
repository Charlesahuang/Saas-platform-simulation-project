import { useState } from "react";
import logo from "../assets/logo.png";
import { RiCloseFill, RiMenu3Line } from "@remixicon/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="top-4 left-0 right-0 z-50 m-2">
      <div
        className="text-black bg-white max-w-7xl
      mx-auto px-4 py-3 flex justify-between items-center"
      >
        {/* left:logo */}
        <img src={logo} alt="logo" width={120} height={24} />

        {/* center:links(hidden on mobile) */}
        <div className="hidden md:flex space-x-6">
          <a href="#chatgpt" className="hover:text-neutral-700">
            ChatGPT
          </a>
          <a href="#features" className="hover:text-neutral-700">
            Features
          </a>
          <a href="#pricing" className="hover:text-neutral-700">
            Pricing
          </a>
        </div>

        {/* right:menu*/}
        <div className="hidden md:flex space-x-4 items-center">
          <a
            href="#"
            className="border border-neutral-700 py-2 px-4 rounded-lg hover:bg-neutral-700 transition"
          >
            Login
          </a>
          <a
            href="#"
            className="border border-black bg-black text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition"
          >
            Start Free Trial
          </a>
        </div>

        {/* Hamburger icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden text-black bg-white backdrop-blur-md border-black px-2 py-4 rounded-xl mt-2 border">
          <div className="flex flex-col space-y-4">
            <a href="#chatgpt" className="hover:text-neutral-700">
              ChatGPT
            </a>
            <a href="#features" className="hover:text-neutral-700">
              Features
            </a>
            <a href="#pricing" className="hover:text-neutral-700">
              Pricing
            </a>
            <a
              href="#"
              className="border border-neutral-700 py-2 px-4 rounded-lg hover:bg-neutral-700 transition"
            >
              Login
            </a>
            <a
              href="#"
              className="border border-black bg-black text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
