import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const activeClass = ({ isActive }) =>
    isActive
      ? "text-white border-b-2 border-blue-600 pb-1"
      : "text-gray-300 hover:text-white";

  const navLinks = (
    <>
      <li><NavLink className={activeClass} to="/">Home</NavLink></li>
      <li><NavLink className={activeClass} to="/userprofile">User Profile</NavLink></li>
      <li><NavLink className={activeClass} to="/contact">Contact</NavLink></li>
      <li><NavLink className={activeClass} to="/comments">Comments</NavLink></li>
      <li><NavLink className={activeClass} to="/properties">Properties</NavLink></li>
    </>
  );

  return (
    <nav className="w-screen sticky top-0 left-0 z-50 bg-[#0e0b0b] shadow-md">
      
      {/* Top Bar */}
      <div className="w-full px-4 sm:px-6 lg:px-16 h-[70px] lg:h-[80px] flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-xl lg:text-2xl font-bold text-white">
          IMRUL <span className="text-blue-600">Corporation</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-sm">
          {navLinks}
        </ul>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <button className="px-5 py-2 bg-green-500 text-white rounded-full text-sm hover:bg-green-600 transition">
            Login
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 pb-4 gap-3 text-gray-300">
          {navLinks}
        </ul>

        <div className="px-6 pb-4">
          <button className="w-full py-2 bg-green-500 text-white rounded-full">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;