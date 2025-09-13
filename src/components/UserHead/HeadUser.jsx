import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Head() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white mx-5 mt-2.5 p-5 sm:mx-3 sm:p-4">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img src="/Headlogo.png" alt="Logo" className="h-11 sm:h-12 lg:h-14" />

        {/* Hamburger Menu (Mobile) */}
        <button
          className="sm:hidden text-gray-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 md:gap-8 text-gray-400 font-semibold text-sm sm:text-base">
          <li className="cursor-pointer hover:text-black"><Link to="/">Home</Link></li>
          <li className="cursor-pointer hover:text-black"><Link to="/about">About Us</Link></li>
          <li className="cursor-pointer hover:text-black"><Link to="/services">Services</Link></li>
          <li className="cursor-pointer hover:text-black"><Link to="/products">Products</Link></li>
          <li className="cursor-pointer hover:text-black"><Link to="/contact">Contact us</Link></li>
        </ul>

        {/* Icons */}
        <div className="flex gap-4 sm:gap-8 items-center relative">
          {/* Notification Bell */}
          <div className="relative group">
            <img
              src="/Notif.png"
              className="w-[35px] h-[40px] cursor-pointer"
              onClick={() => setOpen(!open)}
            />
           <div
  className={`absolute top-12 sm:right-0 right-[-80px] sm:top-12 sm:left-auto w-[260px] sm:w-[416px] h-[360px] sm:h-[542px] bg-white shadow-lg rounded-lg p-4 z-50 ${
    open ? "block" : "hidden"
  }`}
>

              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-3 bg-[#EDEDED70] p-3 my-3">
                  <img
                    src="/not.png"
                    alt="user"
                    className="w-[40px] sm:w-[70px] h-[40px] sm:h-[70px] rounded-full"
                  />
                  <p className="font-[Poppins] text-[11px] sm:text-[13px] text-gray-700">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                  </p>
                </div>
              ))}
            </div>
          </div>


          <Link to="/cart">
            <img src="/Cart.png" className="w-[35px] h-[40px]" />
          </Link>
          <Link to="/profile">
            <img src="/Contact.png" className="w-[35px] h-[40px]" />
          </Link>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <ul className="flex flex-col mt-4 gap-3 text-gray-400 font-semibold text-sm sm:hidden">
          <li className="cursor-pointer hover:text-black"><Link to="/">Home</Link></li>
          <li className="cursor-pointer hover:text-black"><Link to="/about">About Us</Link></li>
          <li className="cursor-pointer hover:text-black"><Link to="/services">Services</Link></li>
          <li className="cursor-pointer hover:text-black"><Link to="/products">Products</Link></li>
          <li className="cursor-pointer hover:text-black"><Link to="/contact">Contact us</Link></li>
        </ul>
      )}
    </div>
  );
}
