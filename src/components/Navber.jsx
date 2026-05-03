
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const activeClass = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-semibold"
      : "text-black hover:text-blue-500 font-semibold";

  // toggle dropdown
  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (


    
    <nav className="w-full bg-white text-white sticky top-0 z-50 shadow-md">

      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 md:px-10 h-16">

        {/* LOGO */}
        <Link to="/" className="text-4xl font-bold text-black">
          IMRUL <span className="text-blue-500">Corporation</span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-lg text-black">

          <li className="">
            <NavLink to="/" className={activeClass}>Home</NavLink>
          </li>

          <li className="">
            <NavLink to="/about" className={activeClass}>About</NavLink>
          </li>

          {/* SERVICES DROPDOWN */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown("services")}
              className="text-black hover:text-blue-500 font-semibold"
            >
              Services ▾
            </button>

            <div
              className={`absolute left-0 mt-3 w-44 bg-white rounded-md  overflow-hidden transition-all duration-300 origin-top
              ${dropdown === "services" ? "scale-100 opacity-100 visible" : "scale-95 opacity-0 invisible"}`}
            >
              <Link to="/services/menu" className="block px-4 py-2 hover:bg-blue-300">
                Menu
              </Link>
              <Link to="/services/package" className="block px-4 py-2 hover:bg-blue-300">
                Package
              </Link>
              <Link to="/services/book" className="block px-4 py-2 hover:bg-blue-300">
                Book Events
              </Link>
            </div>
          </li>

          {/* BLOG DROPDOWN */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown("blog")}
              className="text-black hover:text-blue-500 font-semibold"
            >
              Blog ▾
            </button>

            <div
              className={`absolute left-0 mt-3 w-40 bg-white rounded-md  rounded-2xloverflow-hidden transition-all duration-300 origin-top
              ${dropdown === "blog" ? "scale-100 opacity-100 visible" : "scale-95 opacity-0 invisible"}`}
            >
              <Link to="/blog/posts" className="block px-4 py-2 hover:bg-blue-300">
                Posts
              </Link>
              <Link to="/blog/gallery" className="block px-4 py-2 hover:bg-blue-300">
                Gallery
              </Link>
            </div>
          </li>

          <li className="text-black hover:text-blue-500 font-semibold">
            <NavLink to="/contact" className={activeClass}>Contact</NavLink>
          </li>

        </ul>

        {/* BUTTON */}
        <button className="hidden md:block bg-blue-600 px-5 py-2 rounded-full hover:bg-blue-400 transition">
          Book Event
        </button>

        {/* MOBILE */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#0e0b0b] ${
          mobileOpen ? "max-h-[500px] py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-4 gap-3">

          <li><NavLink to="/" onClick={() => setMobileOpen(false)}>Home</NavLink></li>
          <li clas><NavLink to="/about" onClick={() => setMobileOpen(false)}>About</NavLink></li>

          {/* MOBILE SERVICES */}
          <li>
            <button onClick={() => toggleDropdown("services")} className="text-white">
              Services ▾
            </button>

            <div className={`pl-4 flex flex-col gap-2 transition-all duration-300 overflow-hidden
              ${dropdown === "services" ? "max-h-40 mt-2" : "max-h-0"}`}>
              <Link to="/services/menu" onClick={() => setMobileOpen(false)}>Menu</Link>
              <Link to="/services/package" onClick={() => setMobileOpen(false)}>Package</Link>
              <Link to="/services/book" onClick={() => setMobileOpen(false)}>Book Events</Link>
            </div>
          </li>

          {/* MOBILE BLOG */}
          <li>
            <button onClick={() => toggleDropdown("blog")} className="text-white">
              Blog ▾
            </button>

            <div className={`pl-4 flex flex-col gap-2 transition-all duration-300 overflow-hidden
              ${dropdown === "blog" ? "max-h-32 mt-2" : "max-h-0"}`}>
              <Link to="/blog/posts" onClick={() => setMobileOpen(false)}>Posts</Link>
              <Link to="/blog/gallery" onClick={() => setMobileOpen(false)}>Gallery</Link>
            </div>
          </li>

          <li><NavLink to="/contact" onClick={() => setMobileOpen(false)}>Contact</NavLink></li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;










// import { Link, NavLink } from "react-router-dom";
// import { useState } from "react";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const activeClass = ({ isActive }) =>
//     isActive
//       ? "text-white border-b-2 border-blue-600 pb-1"
//       : "text-gray-300 hover:text-white";

//   const navLinks = (
//     <>
//       <li><NavLink className={activeClass} to="/">Home</NavLink></li>
//       <li><NavLink className={activeClass} to="/userprofile">About</NavLink></li>
//       <li><NavLink className={activeClass} to="/contact">Services</NavLink></li>
//       <li><NavLink className={activeClass} to="/comments">Blog</NavLink></li>
//       <li><NavLink className={activeClass} to="/properties">Venue</NavLink></li>
//     </>
//   );

//   return (
//     <nav className="w-screen sticky top-0 left-0 z-50 bg-[#0e0b0b] shadow-md">
      
//       {/* Top Bar */}
//       <div className="w-full px-4 sm:px-6 lg:px-16 h-[70px] lg:h-[80px] flex items-center justify-between">

//         {/* Logo */}
//         <Link to="/" className="text-xl lg:text-2xl font-bold text-white">
//           IMRUL <span className="text-blue-600">Corporation</span>
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex items-center gap-8 text-sm">
//           {navLinks}
//         </ul>

//         {/* Desktop Button */}
//         <div className="hidden lg:block">
//           <button className="px-5 py-2 bg-blue-600 text-white rounded-full text-md hover:bg-green-600 transition">
//              Book An Events
//           </button>
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="lg:hidden text-white text-2xl"
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`lg:hidden overflow-hidden transition-all duration-300 ${
//           open ? "max-h-[400px]" : "max-h-0"
//         }`}
//       >
//         <ul className="flex flex-col px-6 pb-4 gap-3 text-gray-300">
//           {navLinks}
//         </ul>

//         <div className="px-6 pb-4">
//           <button className="w-full py-2 bg-green-500 text-white rounded-full">
//              Book an Events
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;