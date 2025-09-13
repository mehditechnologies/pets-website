import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="bg-[#FFD56E54] relative flex flex-col items-center py-16 z-0 mt-36 px-4 sm:px-8">
      {/* Heading */}
      <h2 className="font-[Peralta] font-normal text-[32px] sm:text-[45px] leading-[40px] text-center">
        About Us
      </h2>

      {/* Paragraph */}
      <p className="font-[Poppins] font-normal text-[16px] sm:text-[20px] md:text-[25px] leading-[28px] sm:leading-[36px] md:leading-[44px] max-w-[1283px] text-center mt-12 sm:mt-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie a dui eu volutpat.
        Proin ligula eros, viverra eget viverra at, elementum eget diam. Phasellus finibus odio risus,
        ac dictum tortor bibendum eu Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nulla molestie a dui eu volutpat. Proin ligula eros, viverra eget viverra at, elementum eget diam.
      </p>

      {/* Show More button */}
      <Link
        to="/about"
        className="bg-[#FFD56E] hover:bg-amber-300 text-white w-[140px] sm:w-[156px] h-[50px] sm:h-[60px] rounded-[10px] shadow-[0_13px_26px_-8px_#FF5B2E6B] mt-8 flex items-center justify-center text-[16px] sm:text-[18px]"
      >
        Show More
      </Link>

      {/* Decorative ring */}
      <img
        src="/Rings.png"
        alt="Decorative ring"
        className="absolute hidden sm:block left-[66px] top-[388px] w-[90px] sm:w-[118.88px] h-[90px] sm:h-[115.58px]"
      />

      {/* Decorative paw */}
      <img
        src="/Paw2.png"
        alt="Decorative paw"
        className="absolute hidden sm:block left-[1323px] top-[80px] w-[70px] sm:w-[90px] h-[70px] sm:h-[90px]"
      />

      {/* Decorative triangles row */}
      <img
        src="/Tri.png"
        alt="Decorative triangles"
        className="absolute hidden sm:block left-[891px] top-[460px] w-[100px] sm:w-[133px] h-[20px] sm:h-[25px]"
      />
    </section>
  );
}
