import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 top-0 left-0 bg-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Left Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li>
            <a className="relative group px-4 py-1 hover:text-teal-500 transition-colors" href="#">
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-500 transition-all group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a className="relative group px-4 py-1 hover:text-teal-500 transition-colors" href="#">
              Company
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-500 transition-all group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a className="relative group px-4 py-1 hover:text-teal-500 transition-colors" href="#">
              Team
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-500 transition-all group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        {/* Logo in the center */}
        <a href="#" className="flex items-center space-x-3">
          <img src={logo} className="h-8" alt="Circle Logo" />
          <span className="text-xl font-bold text-gray-900">Circle</span>
        </a>

        {/* Right Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-8 font-medium text-gray-700">
            <li>
              <a className="relative group px-4 py-1 hover:text-teal-500 transition-colors" href="#">
                Features
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-500 transition-all group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a className="relative group px-4 py-1 hover:text-teal-500 transition-colors" href="#">
                Pricing
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-500 transition-all group-hover:w-full"></span>
              </a>
            </li>
          </ul>

          <a
            href="#"
            className="px-6 py-2 border-2 border-teal-500 text-teal-500 font-medium rounded-lg hover:bg-teal-500 hover:text-white transition-all"
          >
            Login
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col px-4 py-4 space-y-2 font-medium text-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 rounded hover:bg-teal-50 hover:text-teal-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 rounded hover:bg-teal-50 hover:text-teal-500 transition">
                Company
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 rounded hover:bg-teal-50 hover:text-teal-500 transition">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 rounded hover:bg-teal-50 hover:text-teal-500 transition">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 mt-2 border-2 border-teal-500 text-teal-500 font-medium rounded-lg text-center hover:bg-teal-500 hover:text-white transition">
                Login
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
