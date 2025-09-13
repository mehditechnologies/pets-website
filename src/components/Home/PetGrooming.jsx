import { Link } from "react-router-dom";

export default function PetGrooming() {
  return (
    <section className="relative w-full min-h-screen bg-[url('/wave-bg.png')] bg-size-[auto_900px] bg-center bg-no-repeat my-44 py-56 px-4 sm:px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10 lg:right-32">
        
        {/* Left Image */}
        <div className="flex justify-center lg:block">
          <img
            src="/dog.png"
            alt="Dog grooming"
            className="rounded-2xl w-full max-w-[466px] h-auto lg:h-[504px] object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="max-w-2xl lg:pl-16 text-center lg:text-left">
          <h2 className="font-[Peralta] font-normal text-[32px] sm:text-[46px] text-[#1A1A1A] mb-6">
            Pet Grooming Service
          </h2>
          <ul className="font-[Poppins] space-y-3 text-[#444] text-[16px] sm:text-[18px]">
            <li>Bathing – wash and fluff dry</li>
            <li>Pawdicure – nail trimming and filing</li>
            <li>Breed specific styling, cutting and stripping</li>
            <li>De-matting and detangling</li>
          </ul>

          <Link
            to="/grooming"
            className="mt-8 bg-[#FFD56E] hover:bg-[#FFB800] text-white inline-block font-semibold px-6 py-3 rounded-lg shadow-md"
          >
            Our Services
          </Link>
        </div>
      </div>

      {/* Floating Cat Image */}
      <img
        src="/cat.png"
        alt="Cat"
        className="absolute top-4 right-4 sm:right-24 w-[180px] sm:w-[260px] h-[150px] sm:h-[210px] rounded-xl object-cover"
      />

      {/* Floating Vet Image */}
      <img
        src="/vet.png"
        alt="Vet with cat"
        className="absolute bottom-10 right-10 sm:right-60 w-[160px] sm:w-[220px] object-contain"
      />
    </section>
  );
}
