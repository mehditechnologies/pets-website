import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Head() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-5 bg-white mt-2.5 mx-5 relative">
      {/* Logo */}
      <div>
        <img src="/Headlogo.png" alt="Logo" className="h-11" />
      </div>

      {/* Navbar Links */}
      <div className="w-full sm:w-auto">
        <ul className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 md:gap-8 text-gray-400 font-semibold text-sm sm:text-base">
          <li className="cursor-pointer hover:text-black">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-black">
            <Link to="/about">About Us</Link>
          </li>
          <li className="cursor-pointer hover:text-black">
            <Link to="/services">Services</Link>
          </li>
          <li className="cursor-pointer hover:text-black">
            <Link to="/products">Products</Link>
          </li>
          <li className="cursor-pointer hover:text-black">
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex gap-8 relative items-center">
        {/* Notification Bell */}
        <div className="relative group">
          <img
            src="/Notif.png"
            className="w-[35px] h-[40px] cursor-pointer"
            onClick={() => setOpen(!open)}
          ></img>

          {/* Popup */}
          <div
            className={`absolute right-0 top-12 w-[416px] h-[542px] bg-white shadow-lg rounded-lg p-4 z-50 
              ${open ? "block" : "hidden"} 
              group-hover:block`}
          >
            <div className="flex items-center gap-3 bg-[#EDEDED70] p-3 my-3">
              <img src="/not.png" alt="user" className="w-[70px] h-[70px] rounded-full" />
              <p className="font-[Poppins] font-normal text-[13px] text-gray-700">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
              </p>
            </div>
            <div className="flex items-center gap-3 bg-[#EDEDED70] p-3 my-3">
              <img src="/not.png" alt="user" className="w-[70px] h-[70px] rounded-full" />
              <p className="font-[Poppins] font-normal text-[13px] text-gray-700">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
              </p>
            </div>
            <div className="flex items-center gap-3 bg-[#EDEDED70] p-3 my-3">
              <img src="/not.png" alt="user" className="w-[70px] h-[70px] rounded-full" />
              <p className="font-[Poppins] font-normal text-[13px] text-gray-700">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
              </p>
            </div>
            <div className="flex items-center gap-3 bg-[#EDEDED70] p-3">
              <img src="/not.png" alt="user" className="w-[70px] h-[70px] rounded-full" />
              <p className="font-[Poppins] font-normal text-[13px] text-gray-700">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
              </p>
            </div>
          </div>
        </div>

        <Link to="/cart">
          <img src="/Cart.png" className="w-[40px] h-[40px]" />
        </Link>
        <Link to="/profile">
          <img src="/Contact.png" className="w-[40px] h-[40px]" />
        </Link>
      </div>
    </div>
  );
}
