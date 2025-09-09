export function PasswordForm({ onSwitch }) {
  return (
    <div className="font-[Poppins] flex-1 flex-col bg-white rounded-l-3xl p-4 text-center">
      {/* Language selector */}
      <div className="ml-auto w-40 text-center">
        <select className="w-full pl-10 py-2 text-gray-700">
          <option>English(UK)</option>
          <option>English</option>
        </select>
      </div>

      <h4 className="font-bold text-3xl pt-28">Forget your Password</h4>

      <form className="w-140 mx-auto mt-12 flex flex-col gap-7">
        <input
          type="email"
          placeholder="Email Address"
          className="border-b border-gray-400 focus:outline-none focus:border-black placeholder-gray-400 pb-2"
        />
      </form>

      <button className="bg-[#FFD56E] hover:bg-amber-300 text-white font-bold w-[400px] h-[60px] mt-12 rounded">
        Continue
      </button>

      <p className="text-[#AAAAAA] pt-6">
        Remember your password?
        <button
          onClick={() => onSwitch('signin')}
          className="text-[#FFD56E] ml-1"
        >
          Sign In
        </button>
      </p>
    </div>
  )
}
