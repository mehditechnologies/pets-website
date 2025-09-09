export default function Services({ AboutButton = null, trianglesSrc = "" }) {
  const services = [
    {
      icon: "/vac.png",
      title: "Vaccination",
      desc: "Perfect one you will like it. It’s our promise.",
      bgColor: "#1C103B", // soft green
    },
    {
      icon: "/groom.png",
      title: "Pet Grooming",
      desc: "Perfect one you will like it. It’s our promise.",
      bgColor: "#00C27E", // light pink
    },
    {
      icon: "/surg.png",
      title: "Surgeries",
      desc: "Perfect one you will like it. It’s our promise.",
      bgColor: "#73BFFF", // pale blue
    },
    {
      icon: "/emerg.png",
      title: "Emergency care",
      desc: "Perfect one you will like it. It’s our promise.",
      bgColor: "#FABF3E", // warm yellow
    },
  ];

  return (
    <section className="bg-white mt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
        
        {/* Heading + Subheading */}
        <h2 className="font-[Peralta] text-[45px] font-medium uppercase text-black">
          OUR SERVICES
        </h2>
        <p className="mt-3 font-[Poppins] text-[#656689] text-[25px] font-normal h-[40px]">
          All Pet Care Services
        </p>

        {/* Grid */}
        <div className="mt-40 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
         {services.map((service, index) => (
            <div
              key={index}
              className={`group w-[250px] bg-[#FFFAF5] rounded-[44px] px-6 py-10 text-center 
                          shadow-[0_8px_68px_-4px_rgba(207,174,132,0.25)]
                          transition-all duration-300 ease-out
                          hover:-translate-y-3 hover:shadow-[0_12px_80px_-4px_rgba(207,174,132,0.35)]
                          ${index % 2 === 0 ? "-mt-14" : "mt-0"}`}
            >
              <div className="flex flex-col items-center">
                <div
                  className="flex h-[63px] w-[63px] items-center justify-center rounded-[15px]"
                  style={{ backgroundColor: service.bgColor }}
                >
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <h3 className="mt-6 font-[Peralta] text-[18px] leading-[1.2] text-black">
                  {service.title}
                </h3>
                <p className="mt-2 font-[Poppins] text-[14px] max-w-[178px] leading-[1.6] text-[#7C7BA3] group-hover:text-black transition-colors duration-200">
                  {service.desc}
                </p>
              </div>
            </div>
            ))}

        </div>

        {/* CTA + Triangles */}
        <div className="mt-10 flex flex-col items-center gap-6">
          <button className="bg-[#FFD56E] text-white w-[156px] h-[60px] rounded-[10px] shadow-[0_13px_26px_-8px_#FF5B2E6B] mt-8">
            Learn More
          </button>
          <div className="relative h-5 left-44 bottom-16">
            <img src="/Tri.png" alt="Navigation indicators" className="h-5 w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
