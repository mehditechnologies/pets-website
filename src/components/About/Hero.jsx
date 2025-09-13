export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row gap-2.5 my-32 px-6 sm:px-12">
      {/* Left Content */}
      <div className="flex-1 justify-start flex-col max-w-[714px] pt-16 sm:pt-28">
        <h1 className="flex-1 font-[Peralta] font-normal text-[36px] sm:text-[48px] mb-10">
          ~ WHO WE ARE
        </h1>
        <p className="flex-1 font-[Poppins] font-normal text-[18px]/[32px] sm:text-[22px]/[44px] mb-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie a dui eu volutpat.
          Proin ligula eros, viverra eget viverra at, elementum eget diam. Phasellus finibus odio risus,
          ac dictum tortor bibendum eu.<br />
        </p>
        <p className="flex-1 font-[Poppins] font-normal text-[18px]/[32px] sm:text-[22px]/[44px] mb-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie a dui eu volutpat.
          Proin ligula eros, viverra eget viverra at, elementum eget diam. Phasellus finibus odio risus,
          ac dictum tortor bibendum eu.<br />
        </p>
        <p className="flex-1 font-[Poppins] font-normal text-[18px]/[32px] sm:text-[22px]/[44px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie a dui eu volutpat.
          Proin ligula eros, viverra eget viverra at, elementum eget diam. Phasellus finibus odio risus,
          ac dictum tortor bibendum eu.<br />
        </p>
      </div>

      {/* Right Image */}
      <div className="flex justify-center lg:block mt-12 lg:mt-0">
        <img
          src="/Ab-Hero.png"
          className="w-full max-w-[672px] h-auto lg:h-[727px] object-cover"
        />
      </div>
    </section>
  );
}
