import { Link } from 'react-router-dom';
export default function Head() {
 
  return (
    <div className="flex items-center justify-between p-5 bg-white mt-2.5 mx-5">
      {/* Logo */}
      <div>
        <img src="/Headlogo.png" alt="Logo" className="h-11" />
      </div>

      {/* Navbar Links */}
      <div>
        <ul className="flex gap-8 text-gray-400 font-semibold">
          <li className="cursor-pointer hover:text-black"><Link to="/">Home</Link></li>
          <li className="cursor-pointer hover:text-black"><Link to="/about">About Us</Link></li>
          <li className="cursor-pointer hover:text-black"><Link to="/services">Services</Link></li>
          <li className="cursor-pointer hover:text-black"><Link to="/products">Products</Link></li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
  <Link
    to="/register"
    className="px-4 py-2 bg-[#FFD56E] text-white rounded-lg hover:bg-amber-400 transition text-center"
  >
    Sign in
  </Link>

  <Link
    to="/register"
    className="px-4 py-2 border border-[#FFD56E] text-[#FFD56E] rounded-lg hover:bg-[#FFD56E] hover:text-white transition text-center"
  >
    Register
  </Link>
</div>

    </div>
  );
}
