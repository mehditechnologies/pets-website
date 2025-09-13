import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full bg-white px-6 sm:px-10 md:px-[40px] mt-12 mb-56">
      
    <img src="/Star.png" alt="" className="absolute hidden sm:block left-[580px] top-[170px] w-[39px] h-[39px]" />
    <img src="/Rings.png" alt="" className="absolute hidden sm:block left-[1304px] top-[430px] w-[118.88px] h-[115.58px] rotate-180" />
    <img src="/Paw.png" alt="" className="absolute hidden sm:block left-[653px] top-[580.96px] w-[70px] h-[70px]" />
    <img src="/Paw2.png" alt="" className="absolute hidden sm:block left-[132px] top-[560.67px] w-[120px] h-[120px]" />

      {/* FLEX CONTAINER */}
      <div className="flex flex-col lg:flex-row justify-start items-start w-full max-w-[1440px] mx-auto">

        {/* IMAGE SECTION */}
        <div className="relative flex-shrink-0 w-full lg:w-[552px] h-[300px] sm:h-[400px] lg:h-[461.14px] mb-10 lg:mb-0">
          <img
            src="/herocat.png"
            alt="Kitten"
            className="absolute right-4 sm:right-[45px] w-full lg:w-[552px] h-full object-cover rounded-[20px] lg:rounded-[29px]"
          />
          <img
            src="/herodog.jpg"
            alt="Poodle"
            className="absolute left-[150px] sm:left-[200px] lg:left-[279px] top-[180px] sm:top-[250px] lg:top-[291.13px] w-[200px] sm:w-[250px] lg:w-[299.48px] h-[160px] sm:h-[200px] lg:h-[241.24px] rounded-[20px] lg:rounded-[30px] border-[6px] lg:border-[8px] border-[#FFFAF5] object-cover"
          />
        </div>

        {/* TEXT SECTION */}
        <div className="flex flex-col justify-start lg:ml-[90px] mt-[20px] lg:mt-[70px] gap-6 px-2 sm:px-4">
          <h1 className="font-[Peralta] text-[32px] sm:text-[45px] lg:text-[55px] leading-tight font-medium text-gray-900 text-left max-w-full lg:w-[624px]">
            We take care of your pet and help them to grow
          </h1>
          <p className="font-[Poppins] mt-4 text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px] font-medium text-[#868794] max-w-full lg:w-[482px] text-left">
            Pets is chain of modern clinics to cater to all your pet needs such
            as wellness, consultations, grooming and nutrition.
          </p>
          <Link
            to="/services"
            className="mt-6 inline-block text-center w-[120px] sm:w-[142px] h-[50px] sm:h-[60px] py-[12px] sm:py-[16px] bg-[#ffd56e] hover:bg-amber-300 text-white rounded-[10px] text-[16px] sm:text-[18px] shadow-xl self-start"
          >
            Explore more
          </Link>

          {/* CARE SECTION BELOW TEXT */}
          <div className="mt-10 sm:mt-[54px] pr-4 sm:pr-[40px] ml-4 sm:ml-10">
            <h2 className="font-[Peralta] text-[18px] sm:text-[20px] font-semibold text-gray-800 max-w-full lg:w-[400px] text-left">
              How to take care
            </h2>
            <p className="font-[Poppins] mt-4 text-[16px] sm:text-[18px] text-gray-600 max-w-full lg:w-[400px] text-left">
              Perfect one you will like it. It’s our promise.
            </p>
          </div>
        </div>
      </div>

      {/* DECORATIVE ICONS — untouched */}
      
    </section>
  );
}
