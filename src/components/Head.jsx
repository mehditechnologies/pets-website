import { Link } from 'react-router-dom';

export default function Head() {
  return (
    <div className="flex flex-wrap items-center justify-between p-5 mt-2.5 mx-5 sm:mx-3 sm:p-4 bg-white">

      {/* Logo */}
      <div className="w-full sm:w-auto flex justify-center sm:justify-start mb-4 sm:mb-0">
        <img src="/Headlogo.png" alt="Logo" className="h-11 sm:h-12 lg:h-14" />
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
        </ul>
      </div>

      {/* Buttons */}
      <div className="w-full sm:w-auto flex justify-center sm:justify-end gap-3 mt-4 sm:mt-0">
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
    </div>
  );
}
