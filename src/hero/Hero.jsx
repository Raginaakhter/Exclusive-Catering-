import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js'; // Typed.js import korlam

const Hero = () => {
  // Animation-er jonno useRef use korlam
  const el = useRef(null);

  useEffect(() => {
    // Typed.js initialization
    const typed = new Typed(el.current, {
      strings: [
        'is Not only Exclusive', // Prothom line
        'is As a Matter of Fact,', // Ditio line
        'is very <span className="text-blue-500 font-bold">Exlusive</span>', // Tritio line (Highlight color shoho)
      ],
      typeSpeed: 60, // Type korar speed
      backSpeed: 30, // Delete korar speed
      backDelay: 1500, // Ekti line sesh hoye arekti suru hobar delay
      loop: true, // Animation-ti bar bar cholbe
      contentType: 'html', // HTML support (span-er color-er jonno)
    });

    // Component unmount hole destroy korbe jate memory leak na hoy
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background with Dark Gradient Overlay (for professional Black look) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Premium Catering" 
          className="w-full h-full object-cover opacity-70" // Image-ti ektu jhapsha kore dilam background filter hisebe
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/35"></div> 
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* Top Label (Blue accent) */}
          <span className="text-blue-400 font-semibold tracking-widest uppercase text-base md:text-lg mb-4 block">
            Premium Catering Service in Dhaka
          </span>
          
          {/* Main Slogan with Typing Animation */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8 min-h-[160px] md:min-h-[120px]">
            Life {/* Fixed part */}
            <span ref={el} className="text-white"></span> {/* Dynamic Animated part */}
          </h1>
          
          {/* Description (Grey for subtle contrast against Black) */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            Professional catering for weddings, corporate events, and private parties. We bring the restaurant experience to your doorstep.
          </p>

          {/* Buttons (Blue accented) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-900/50 w-full sm:w-auto">
              View Menu
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold rounded-lg transition-all duration-300 w-full sm:w-auto">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Floating Badge (Black & Blue theme) */}
      <div className="absolute bottom-10 right-10 hidden lg:block bg-gray-900 border border-gray-800 p-4 rounded-xl shadow-2xl animate-bounce">
        <p className="text-blue-600 font-bold text-sm">100+ Events <span className='text-blue-600'>Completed</span> </p>
      </div>
    </section>
  );
};

export default Hero;
