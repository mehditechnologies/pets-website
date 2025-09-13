export default function AuthSidebar() {
  return (
    <div className="flex items-center justify-center bg-[#FFD56E] h-full px-6 py-10">
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full">
        <img src="/logo.png" className="h-12 sm:h-10 mb-6" />
        <h1 className="font-[Pangolin] text-white text-[32px] sm:text-[55px] leading-tight my-10 sm:my-20 sm:ml-28">
          Taking care <br /> of your Pet&nbsp;!
        </h1>
        <img src="/Pet.png" className="w-[250px] sm:w-auto" />
      </div>
    </div>
  );
}
