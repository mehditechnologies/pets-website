import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Head() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center justify-between p-5 mt-2.5 mx-5 sm:mx-3 sm:p-4 bg-white">
      {/* Logo + Hamburger */}
      <div className="w-full sm:w-auto flex justify-between items-center mb-4 sm:mb-0">
        <img src="/Headlogo.png" alt="Logo" className="h-11 sm:h-12 lg:h-14" />
        <button
          className="sm:hidden text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Desktop Nav */}
      <div className="w-full sm:w-auto hidden sm:block">
        <ul className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 md:gap-8 text-gray-400 font-semibold text-sm sm:text-base">
          <li className="cursor-pointer hover:text-black"><Link to="/">Home</Link></li>
          <li className="cursor-pointer hover:text-black"><Link to="/about">About Us</Link></li>
          <li className="cursor-pointer hover:text-black"><Link to="/services">Services</Link></li>
          <li className="cursor-pointer hover:text-black"><Link to="/products">Products</Link></li>
          <li className="cursor-pointer hover:text-black"><Link to="/contact">Contact us</Link></li>
        </ul>
      </div>

      {/* Desktop Buttons */}
      <div className="w-full sm:w-auto hidden sm:flex justify-center sm:justify-end gap-3 mt-4 sm:mt-0">
        <Link
          to="/register"
          className="px-4 py-2 bg-[#FFD56E] text-white rounded-lg hover:bg-amber-400 transition text-center text-sm sm:text-base"
        >
          Sign in
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 border border-[#FFD56E] text-[#FFD56E] rounded-lg hover:bg-[#FFD56E] hover:text-white transition text-center text-sm sm:text-base"
        >
          Register
        </Link>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="w-full mt-4 sm:hidden">
          <ul className="flex flex-col gap-3 text-gray-400 font-semibold text-sm">
            <li className="cursor-pointer hover:text-black"><Link to="/">Home</Link></li>
            <li className="cursor-pointer hover:text-black"><Link to="/about">About Us</Link></li>
            <li className="cursor-pointer hover:text-black"><Link to="/services">Services</Link></li>
            <li className="cursor-pointer hover:text-black"><Link to="/products">Products</Link></li>
            <li className="cursor-pointer hover:text-black"><Link to="/contact">Contact us</Link></li>
          </ul>
          <div className="flex flex-col gap-3 mt-4">
            <Link
              to="/register"
              className="px-4 py-2 bg-[#FFD56E] text-white rounded-lg hover:bg-amber-400 transition text-center text-sm"
            >
              Sign in
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 border border-[#FFD56E] text-[#FFD56E] rounded-lg hover:bg-[#FFD56E] hover:text-white transition text-center text-sm"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
