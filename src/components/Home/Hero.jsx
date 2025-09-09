export default function Hero() {
  return (
    <section className="inherit w-full h-screen bg-white mb-36 top-[-139px]">

      {/* DECORATIVE ICONS */}
      <img
        src="/Star.png"
        alt=""
        className="absolute left-[569px] top-[363px] w-[39px] h-[39px]"
      />
      <img
        src="/Rings.png"
        alt=""
        className="absolute left-[1204px] top-[563px] w-[118.88px] h-[115.58px] rotate-180"
      />
      <img
        src="/Paw.png"
        alt=""
        className="absolute left-[653px] top-[720.96px] w-[70px] h-[70px]"
      />
      <img
        src="/Paw2.png"
        alt=""
        className="absolute left-[132px] top-[760.67px] w-[120px] h-[120px]"
      />

      {/* HERO IMAGES (absolute positions) */}
      <img
        src="/herocat.png"
        alt="Kitten"
        className="absolute left-[-16px] top-[139px] w-[552px] h-[461.14px] object-cover"
      />
      <img
        src="/herodog.jpg"
        alt="Poodle"
        className="absolute left-[279px] top-[451.13px] w-[299.48px] h-[241.24px] rounded-[30px] border-[8px] border-[#FFFAF5] object-cover"
      />

      {/* TEXT BLOCK (absolute for pixel-perfect placement) */}
      <div className="absolute right-[450px] top-[200px] w-[420px]">
        <h1 className=" font-[Peralta] text-[55px] leading-[55px] w-[624px] font-medium text-gray-900">
          We take care of your pet and help them to grow
        </h1>
        <p className="font-[Poppins] mt-[24px] text-[16px] w-[482px] leading-[28px] font-medium text-[#868794]">
          Pets is chain of modern clinics to cater to all your pet needs such
          as wellness, consultations, grooming and nutrition.
        </p>
        <button className="mt-[32px] px-[32px] py-[16px] bg-[#ffd56e] text-white rounded-[8px] text-[18px] shadow-xl">
          Explore more
        </button>
      </div>

      {/* HOW TO TAKE CARE BAR */}
      <div className="absolute right-[500px] bottom-[-50px] w-[300px] text-left">
        <h2 className="font-[Peralta] text-[32px] font-semibold text-gray-800 w-[400px]">
          How to take care
        </h2>
        <p className="font-[Poppins] mt-[16px] text-[18px] text-gray-600 w-[400px]">
          Perfect one you will like it. It’s our promise.
        </p>
      </div>
    </section>
  );
}
