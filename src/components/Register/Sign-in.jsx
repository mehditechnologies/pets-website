export function SignInForm({ onSwitch }) {
  return (
    <div className="font-[Poppins] flex-1 flex flex-col bg-white rounded-l-3xl p-4 text-center sm:p-6">
      {/* Language selector */}
      <div className="ml-auto w-40 text-center sm:w-32">
        <select className="w-full pl-6 sm:pl-4 py-2 text-gray-700 text-sm sm:text-base">
          <option>English(UK)</option>
          <option>English</option>
        </select>
      </div>

      <h4 className="font-bold text-3xl pt-28 sm:pt-16 text-center sm:text-2xl">Sign In</h4>

      {/* Social buttons */}
      <div className="flex flex-wrap justify-center gap-6 py-10 sm:py-6">
        <button className="flex items-center bg-transparent text-gray-800 px-4 py-2 rounded-lg border border-gray-400 hover:bg-gray-200 text-xs sm:text-sm">
          <img src="/google.svg" alt="Google" className="w-5 h-5" />
          <span className="ml-2">Sign in with Google</span>
        </button>
        <button className="flex items-center bg-transparent text-gray-800 px-4 py-2 rounded-lg border border-gray-400 hover:bg-blue-700 text-xs sm:text-sm">
          <img src="/facebook.png" alt="Facebook" className="w-5 h-5" />
          <span className="ml-2">Sign in with Facebook</span>
        </button>
      </div>

      <p className="text-[#AAAAAA] text-sm sm:text-base">-OR-</p>

      {/* Email / Password */}
      <form className="w-full max-w-[400px] mx-auto mt-8 flex flex-col gap-7 px-4 sm:px-0">
        <input
          type="email"
          placeholder="Email Address"
          className="border-b border-gray-400 focus:outline-none focus:border-black placeholder-gray-400 pb-2 text-sm sm:text-base"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-b border-gray-400 focus:outline-none focus:border-black placeholder-gray-400 pb-2 text-sm sm:text-base"
        />
      </form>

      <button className="bg-[#FFD56E] hover:bg-amber-300 text-white font-bold w-full max-w-[400px] h-[60px] mt-12 rounded text-sm sm:text-base mx-auto">
        Sign in
      </button>

      <p className="text-[#AAAAAA] pt-6 text-sm sm:text-base">
        Don’t have an account?
        <button
          onClick={() => onSwitch('signup')}
          className="text-[#FFD56E] ml-1"
        >
          Sign up
        </button>
      </p>
    </div>
  );
}
