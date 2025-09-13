import Foot from './Foot';

export default function Contact() {
  return (
    <>
      <section className="relative flex flex-col text-center gap-9 my-44 overflow-x-hidden px-4 sm:px-0">
        
        {/* Paw Image */}
        <img
          src="/Paw2.png"
          className="w-[80px] h-[80px] sm:absolute sm:left-[530px] sm:top-[-5px] mx-auto sm:mx-0 mt-4 sm:mt-0"
        />

        {/* Heading */}
        <h1 className="font-[Peralta] font-normal text-[36px] sm:text-[48px]">Contact Us</h1>

        {/* Paragraph */}
        <p className="font-[Poppins] text-[#656689] font-normal text-[18px] sm:text-[22px] px-4 sm:px-[380px]">
          The experienced veterinarians provide comprehensive veterinary care for cats, dogs, and exotic pets including reptiles.
        </p>

        {/* Form + Info Section */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-5 sm:pl-36 my-50 items-center sm:items-start text-start overlap-hidden z-20">
          <div className="flex flex-col justify-start gap-10 w-full sm:w-auto">
            <form className="flex flex-col gap-3.5">
              <label className="font-[Poppins] font-light text-[24px] sm:text-[32px] text-[#00024B80]">Full Name</label>
              <input
                type="text"
                className="bg-[#D9D9D954] w-full sm:w-[563px] h-[70px] sm:h-[97px] rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="font-[Poppins] font-light text-[24px] sm:text-[32px] text-[#00024B80]">Email</label>
              <input
                type="text"
                className="bg-[#D9D9D954] w-full sm:w-[563px] h-[70px] sm:h-[97px] rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="font-[Poppins] font-light text-[24px] sm:text-[32px] text-[#00024B80]">Message</label>
              <textarea
                className="bg-[#D9D9D954] w-full sm:w-[563px] h-[180px] sm:h-[256px] rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </form>

            <button className="w-full sm:w-[375px] h-[60px] sm:h-[77px] bg-black text-white text-[20px] sm:text-[24px] font-semibold font-[Poppins] rounded-lg">
              Contact us
            </button>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-10 sm:gap-32">
              <div className="flex flex-col gap-2">
                <h2 className="font-[Poppins] font-semibold text-[24px] sm:text-[32px]">Contact</h2>
                <p className="font-[Poppins] font-light text-[20px] sm:text-[32px]">xxxxx@yahoo.com</p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-[Poppins] font-semibold text-[24px] sm:text-[32px]">Based in</h2>
                <p className="font-[Poppins] font-light text-[20px] sm:text-[32px]">Cairo, Egypt</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-8 sm:gap-16 mt-11 justify-center sm:justify-start">
              <a href="#"><img src="/fbb.png" className="w-[40px] h-[40px]" /></a>
              <a href="#"><img src="/instab.png" className="w-[40px] h-[40px]" /></a>
              <a href="#"><img src="/xb.png" className="w-[40px] h-[40px]" /></a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="relative w-full mt-20 sm:static">
          {/* Yellow Background — PRESERVED */}
          <div className="hidden sm:block absolute right-[20px] top-80 w-full sm:w-[419px] h-[300px] sm:h-[912px] bg-[#FFB800] z-10"></div>


          {/* Overlay Image */}
          <img
            src="/map2.png"
            className="w-full sm:w-auto sm:absolute sm:right-[580px] sm:top-[360px] z-30 opacity-85 mt-4 sm:mt-0"
          />

          {/* Main Map Image */}
          <img
            src="/Map.png"
            className="w-full sm:w-[638px] sm:h-[819px] sm:absolute sm:right-[70px] sm:top-[370px] z-20 mt-4 sm:mt-0"
          />
        </div>
      </section>
      <Foot />
    </>
  );
}
