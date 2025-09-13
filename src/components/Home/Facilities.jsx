const FacilitiesSection = ({
  imageSrc = "/fac1.png",
  title = "Facilities we provides",
  intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  velit esse cillum dolore eu fugiat nulla pariatur.",
  leftItems = [
    { heading: "Feed Training", text: "Tempor incididunt ut labore et dolore magna aliqua." },
    { heading: "Health test", text: "Tempor incididunt ut labore et dolore magna aliqua." },
    { heading: "Vaccination", text: "Tempor incididunt ut labore et dolore magna aliqua." },
  ],
  rightItems = [
    { heading: "Overnight Care", text: "Tempor incididunt ut labore et dolore magna aliqua." },
    { heading: "Medical Care", text: "Tempor incididunt ut labore et dolore magna aliqua." },
    { heading: "Training Facility", text: "Tempor incididunt ut labore et dolore magna aliqua." },
  ],
}) => {
  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-20 mt-36 relative">
      {/* Heading */}
      <div className="max-w-[650px] mx-auto text-center mb-36">
        <h2 className="font-[Peralta] text-[45px] md:text-4xl font-normal text-gray-900 mb-4">
          {title}
        </h2>
        <p className="font-[Poppins] text-[16px] font-normal text-[#656689]">
          {intro}
        </p>
      </div>

      {/* Decorative images — hidden on small screens */}
      <img src="/line.png" className="absolute hidden md:block top-[500px] left-[160px]" />
      <img src="/line.png" className="absolute hidden md:block top-[720px] left-[160px]" />
      <img src="/line.png" className="absolute hidden md:block top-[500px] right-[220px]" />
      <img src="/line.png" className="absolute hidden md:block top-[720px] right-[220px]" />

      <img src="/1.png" className="absolute hidden md:block top-[485px] left-[490px]" />
      <img src="/2.png" className="absolute hidden md:block top-[490px] left-[496px] z-10" />
      <img src="/1.png" className="absolute hidden md:block top-[705px] left-[490px]" />
      <img src="/2.png" className="absolute hidden md:block top-[710px] left-[496px] z-10" />

      <img src="/1.png" className="absolute hidden md:block top-[485px] right-[550px]" />
      <img src="/2.png" className="absolute hidden md:block top-[490px] right-[556px] z-10" />
      <img src="/1.png" className="absolute hidden md:block top-[705px] right-[550px]" />
      <img src="/2.png" className="absolute hidden md:block top-[710px] right-[556px] z-10" />

      {/* Desktop / tablet layout */}
      <div className="mx-auto max-w-[1280px] hidden md:flex items-start justify-between gap-10">
        {/* Left column */}
        <div className="w-[360px] h-[656px] mr-[6px] flex flex-col gap-40 pt-1 pl-10">
          {leftItems.map((item, idx) => (
            <div key={idx} className="flex items-center">
              <div className="max-w-[240px] text-left">
                <h3 className="text-[18px] font-[Peralta] font-normal text-gray-900 mb-1">
                  {item.heading}
                </h3>
                <p className="font-[Poppins] text-sm text-[#656689] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Center framed image */}
        <div className="relative pt-11">
          <div className="w-[333px] h-[550px] mx-[-80px] rounded-[300.5px] outline-[#FFEFDE] outline-4 outline-offset-[50px] overflow-hidden bg-[#FFB800]">
            <img
              src={imageSrc}
              alt="Dog standing on orange background"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right column */}
        <div className="w-[360px] h-[656px] ml-[65px] flex flex-col gap-40 pt-1 pl-10">
          {rightItems.map((item, idx) => (
            <div key={idx} className="flex items-center">
              <div className="max-w-[240px] text-left">
                <h3 className="font-[Peralta] text-[18px] font-normal text-gray-900 mb-1">
                  {item.heading}
                </h3>
                <p className="font-[Poppins] text-sm text-[#656689] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden">
        <div className="w-full max-w-[420px] mx-auto">
          <div className="rounded-[24px] overflow-hidden border-[5px] border-[#FFEFDE] bg-[#FFB800]">
            <img
              src={imageSrc}
              alt="Dog standing on orange background"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8">
          <div className="space-y-5">
            {leftItems.map((item, idx) => (
              <div key={idx}>
                <h3 className="text-[18px] font-semibold text-gray-900" style={{ fontFamily: "'Peralta', serif" }}>
                  {item.heading}
                </h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="space-y-5">
            {rightItems.map((item, idx) => (
              <div key={idx}>
                <h3 className="text-[18px] font-semibold text-gray-900" style={{ fontFamily: "'Peralta', serif" }}>
                  {item.heading}
                </h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
