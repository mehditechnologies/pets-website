export function SignInForm({ onSwitch }) {
  return (
    <div className="font-[Poppins] flex-1 flex-col bg-white rounded-l-3xl p-4 text-center">
      {/* Language selector */}
      <div className="ml-auto w-40 text-center">
        <select className="w-full pl-10 py-2 text-gray-700">
          <option>English(UK)</option>
          <option>English</option>
        </select>
      </div>

      <h4 className="font-bold text-3xl pt-28">Sign In</h4>

      {/* Social buttons */}
      <div className="flex justify-center gap-8 py-10">
        <button className="flex items-center bg-transparent text-gray-800 px-4 py-2 rounded-lg border border-gray-400 hover:bg-gray-200">
          <img src="/google.svg" alt="Google" className="w-5 h-5"/>
          <span className="text-[12px] ml-2">Sign in with Google</span>
        </button>
        <button className="flex items-center bg-transparent text-gray-800 px-4 py-2 rounded-lg border border-gray-400 hover:bg-blue-700">
          <img src="/facebook.png" alt="Facebook" className="w-5 h-5"/>
          <span className="text-[12px] ml-2">Sign in with Facebook</span>
        </button>
      </div>

      <p className="text-[#AAAAAA]">-OR-</p>

      {/* Email / Password */}
      <form className="w-140 mx-auto mt-8 flex flex-col gap-7">
        <input
          type="email"
          placeholder="Email Address"
          className="border-b border-gray-400 focus:outline-none focus:border-black placeholder-gray-400 pb-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-b border-gray-400 focus:outline-none focus:border-black placeholder-gray-400 pb-2"
        />
      </form>

      <button className="bg-[#FFD56E] hover:bg-amber-300 text-white font-bold w-[400px] h-[60px] mt-12 rounded">
        Sign in
      </button>

      <p className="text-[#AAAAAA] pt-6">
        Don’t have an account?
        <button
          onClick={() => onSwitch('signup')}
          className="text-[#FFD56E] ml-1"
        >
          Sign up
        </button>
      </p>
    </div>
  )
}
