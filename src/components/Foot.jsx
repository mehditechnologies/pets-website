export default function Footer() {
  return (
    <footer className="bg-[#FFF4EA] text-[#9494A5] py-16 mt-40">
      {/* Main Footer */}
      <div className="max-w-7xl mx-28 py-11 flex flex-col md:flex-row justify-between gap-10">
        
        {/* Logo + About */}
        <div className="flex-1">
          <img src="/Headlogo.png" alt="Logo" className="h-12 mb-4" />
          <p className=" font-[Poppins] text-base mb-10 w-[400px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow cursor-pointer">
                <img src="/fb.png" alt="Facebook" className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow cursor-pointer">
                <img src="/x.png" alt="Twitter/X" className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow cursor-pointer">
                <img src="/lin.png" alt="LinkedIn" className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow cursor-pointer">
                <img src="/insta.png" alt="Instagram" className="w-5 h-5" />
            </div>
            </div>

        </div>

        {/* Useful Links */}
        <div className="flex-1 justify-end ml-56">
          <p className="font-[Peralta] text-black text-lg mb-3">Useful Links</p>
          <ul className="font-[Poppins] flex flex-col gap-3 text-sm pt-5">
            <li><a href="#" className="hover:text-[#FFD56E]">FAQs</a></li>
            <li><a href="#" className="hover:text-[#FFD56E]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#FFD56E]">Terms of Use</a></li>
            <li><a href="#" className="hover:text-[#FFD56E]">Site Map</a></li>
          </ul>
        </div>

        {/* Explore */}
        <div className="flex-1 justify-end">
          <p className="font-[Peralta] text-black text-lg mb-3">Explore</p>
          <ul className="font-[Poppins] flex flex-col gap-3 text-sm pt-5">
            <li><a href="#" className="hover:text-[#FFD56E]">About Us</a></li>
            <li><a href="#" className="hover:text-[#FFD56E]">Services</a></li>
            <li><a href="#" className="hover:text-[#FFD56E]">Products</a></li>
            <li><a href="#" className="hover:text-[#FFD56E]">Our Team</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1 justify-end">
          <p className="font-[Peralta] text-black text-lg mb-3">Contact Info</p>
          <ul className="font-[Poppins] flex flex-col gap-3 text-sm pt-5">
            <li><a href="tel:3617775681" className="hover:text-[#FFD56E]">361-777-5681</a></li>
            <li><a href="#" className="hover:text-[#FFD56E]">654 White Avenue</a></li>
            <li><a href="#" className="hover:text-[#FFD56E]">Portland, TX 78374</a></li>
          </ul>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="font-[Poppins] border-t-2 border-[#FFB800] py-4 text-sm mx-28">
        Copyright 2022 | Uitaskca
      </div>
    </footer>
  );
}
