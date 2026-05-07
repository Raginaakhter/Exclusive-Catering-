
// import { Link, NavLink } from "react-router-dom";
// import { useState } from "react";

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [dropdown, setDropdown] = useState(null);

//   const activeClass = ({ isActive }) =>
//     isActive
//       ? "text-blue-500 font-semibold"
//       : "text-black hover:text-blue-500 font-semibold";

//   // toggle dropdown
//   const toggleDropdown = (menu) => {
//     setDropdown(dropdown === menu ? null : menu);
//   };

//   return (


    
//     <nav className="w-full text-white sticky top-0 z-50 ">

//       {/* TOP BAR */}
//          <div className="flex items-center justify-between px-4 md:px-10 h-16">

//         {/* LOGO */}
//         <Link to="/" className="text-4xl font-bold text-black">
//           IMRUL <span className="text-blue-500 text-2xl">Exclusive Catering</span>
//         </Link>

//         {/* DESKTOP MENU */}
//         <ul className="hidden md:flex items-center gap-8 text-lg text-black">

//           <li className="">
//             <NavLink to="/" className={activeClass}>Home</NavLink>
//           </li>

//           <li className="">
//             <NavLink to="/about" className={activeClass}>About</NavLink>
//           </li>

//           {/* SERVICES DROPDOWN */}
//           <li className="relative">
//             <button
//               onClick={() => toggleDropdown("services")}
//               className="text-black hover:text-blue-500 font-semibold"
//             >
//               Services ▾
//             </button>

//             <div
//               className={`absolute left-0 mt-3 w-44 bg-white rounded-md  overflow-hidden transition-all duration-300 origin-top
//               ${dropdown === "services" ? "scale-100 opacity-100 visible" : "scale-95 opacity-0 invisible"}`}
//             >
//               <Link to="/services/menu" className="block px-4 py-2 hover:bg-blue-300">
//                 Menu
//               </Link>
//               <Link to="/services/package" className="block px-4 py-2 hover:bg-blue-300">
//                 Package
//               </Link>
//               <Link to="/services/book" className="block px-4 py-2 hover:bg-blue-300">
//                 Book Events
//               </Link>
//             </div>
//           </li>

//           {/* BLOG DROPDOWN */}
//           <li className="relative">
//             <button
//               onClick={() => toggleDropdown("blog")}
//               className="text-black hover:text-blue-500 font-semibold"
//             >
//               Blog ▾
//             </button>

//             <div
//               className={`absolute left-0 mt-3 w-40 bg-white rounded-md  rounded-2xloverflow-hidden transition-all duration-300 origin-top
//               ${dropdown === "blog" ? "scale-100 opacity-100 visible" : "scale-95 opacity-0 invisible"}`}
//             >
//               <Link to="/blog/posts" className="block px-4 py-2 hover:bg-blue-300">
//                 Posts
//               </Link>
//               <Link to="/blog/gallery" className="block px-4 py-2 hover:bg-blue-300">
//                 Gallery
//               </Link>
//             </div>
//           </li>

//           <li className="text-black hover:text-blue-500 font-semibold">
//             <NavLink to="/contact" className={activeClass}>Contact</NavLink>
//           </li>

//         </ul>

//         {/* BUTTON */}
//         <button className="hidden md:block bg-blue-600 px-5 py-2 rounded-full hover:bg-blue-400 transition">
//           Book Event
//         </button>

//         {/* MOBILE */}
//         <button
//           onClick={() => setMobileOpen(!mobileOpen)}
//           className="md:hidden text-2xl"
//         >
//           ☰
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-300 bg-[#0e0b0b] ${
//           mobileOpen ? "max-h-[500px] py-4" : "max-h-0"
//         }`}
//       >
//         <ul className="flex flex-col px-4 gap-3">

//           <li><NavLink to="/" onClick={() => setMobileOpen(false)}>Home</NavLink></li>
//           <li clas><NavLink to="/about" onClick={() => setMobileOpen(false)}>About</NavLink></li>

//           {/* MOBILE SERVICES */}
//           <li>
//             <button onClick={() => toggleDropdown("services")} className="text-white">
//               Services ▾
//             </button>

//             <div className={`pl-4 flex flex-col gap-2 transition-all duration-300 overflow-hidden
//               ${dropdown === "services" ? "max-h-40 mt-2" : "max-h-0"}`}>
//               <Link to="/services/menu" onClick={() => setMobileOpen(false)}>Menu</Link>
//               <Link to="/services/package" onClick={() => setMobileOpen(false)}>Package</Link>
//               <Link to="/services/book" onClick={() => setMobileOpen(false)}>Book Events</Link>
//             </div>
//           </li>

//           {/* MOBILE BLOG */}
//           <li>
//             <button onClick={() => toggleDropdown("blog")} className="text-white">
//               Blog ▾
//             </button>

//             <div className={`pl-4 flex flex-col gap-2 transition-all duration-300 overflow-hidden
//               ${dropdown === "blog" ? "max-h-32 mt-2" : "max-h-0"}`}>
//               <Link to="/blog/posts" onClick={() => setMobileOpen(false)}>Posts</Link>
//               <Link to="/blog/gallery" onClick={() => setMobileOpen(false)}>Gallery</Link>
//             </div>
//           </li>

//           <li><NavLink to="/contact" onClick={() => setMobileOpen(false)}>Contact</NavLink></li>

//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 50px scroll korle background asbe, naile transparent thakbe
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'py-5' : 'py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white tracking-tighter">
          EXCLUSIVE<span className="text-blue-600">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white font-medium text-sm uppercase tracking-widest">
          <a href="#" className="hover:text-blue-500 transition">Home</a>
          <a href="#" className="hover:text-blue-500 transition">Menu</a>
          <a href="#" className="hover:text-blue-500 transition">Services</a>
          <a href="#" className="hover:text-blue-500 transition">Contact</a>
        </div>

        {/* Contact Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition">
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;



