export function PasswordForm({ onSwitch }) {
  return (
    <div className="font-[Poppins] flex-1 flex flex-col bg-white rounded-l-3xl p-4 text-center sm:p-6">
      {/* Language selector */}
      <div className="ml-auto w-40 text-center sm:w-32">
        <select className="w-full pl-6 sm:pl-4 py-2 text-gray-700 text-sm sm:text-base">
          <option>English(UK)</option>
          <option>English</option>
        </select>
      </div>

      <h4 className="font-bold text-3xl pt-28 sm:pt-16 text-center sm:text-2xl">
        Forget your Password
      </h4>

      <form className="w-full max-w-[400px] mx-auto mt-12 flex flex-col gap-7 px-4 sm:px-0">
        <input
          type="email"
          placeholder="Email Address"
          className="border-b border-gray-400 focus:outline-none focus:border-black placeholder-gray-400 pb-2 text-sm sm:text-base"
        />
      </form>

      <button className="bg-[#FFD56E] hover:bg-amber-300 text-white font-bold w-full max-w-[400px] h-[60px] mt-12 rounded text-sm sm:text-base mx-auto">
        Continue
      </button>

      <p className="text-[#AAAAAA] pt-6 text-sm sm:text-base">
        Remember your password?
        <button
          onClick={() => onSwitch('signin')}
          className="text-[#FFD56E] ml-1"
        >
          Sign In
        </button>
      </p>
    </div>
  );
}
