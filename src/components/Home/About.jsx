export default function AboutUs() {
  return (
    <section className="bg-[#FFD56E54] relative flex flex-col items-center py-16 z-0">
      {/* Heading */}
      <h2
        className="
          font-[Peralta] font-normal
          text-[45px] leading-[19px]
          w-[235px] h-[19px]
          text-center
        "
      >
        About Us
      </h2>

      {/* Paragraph */}
      <p
        className="
          font-[Poppins] font-normal
          text-[25px] leading-[44px]
          w-[1283px] max-w-full h-[220px]
          text-center mt-28
        "
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie a dui eu volutpat.
        Proin ligula eros, viverra eget viverra at, elementum eget diam. Phasellus finibus odio risus,
        ac dictum tortor bibendum eu Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nulla molestie a dui eu volutpat. Proin ligula eros, viverra eget viverra at, elementum eget diam.
      </p>

      {/* Show More button */}
      <button
        className="
          bg-[#FFD56E] text-white
          w-[156px] h-[60px]
          rounded-[10px]
          shadow-[0_13px_26px_-8px_#FF5B2E6B]
          mt-8
        "
      >
        Show More
      </button>

      {/* Decorative ring */}
      <img
        src="/Rings.png"
        alt="Decorative ring"
        className="
          absolute
          left-[66px] top-[388px]
          w-[118.88px] h-[115.58px]
        
        "
      />

      {/* Decorative paw */}
      <img
        src="/Paw2.png"
        alt="Decorative paw"
        className="
          absolute
          left-[1323px] top-[80px]
          w-[90px] h-[90px]
        "
      />

      {/* Decorative triangles row */}
      <img
        src="/Tri.png"
        alt="Decorative triangles"
        className="
          absolute
          left-[891px] top-[460px]
          w-[133px] h-[25px]
        "
      />
    </section>
  );
}
