// src/components/panels/VerifyForm.jsx
import { useRef } from "react";

export function VerifyForm({ onSwitch }) {
  const inputs = useRef([]);

  const handleChange = (e, i) => {
    const val = e.target.value;
    if (val.length === 1 && i < inputs.current.length - 1) {
      inputs.current[i + 1].focus();
    }
  };
  const handleKeyDown = (e, i) => {
    if (e.key === "Backspace" && !e.target.value && i > 0) {
      inputs.current[i - 1].focus();
    }
  };

  return (
    <div className="font-[Poppins] flex-1 flex-col bg-white rounded-l-3xl p-4 text-center">
      <h4 className="font-bold text-3xl pt-28">Verify Account</h4>
      <p className="text-[#AAAAAA] mt-4">Enter the 6-digit code</p>

      <div className="flex justify-center gap-4 mt-12">
        {[...Array(6)].map((_, i) => (
          <input
            key={i}
            type="text"
            maxLength="1"
            ref={el => (inputs.current[i] = el)}
            onChange={e => handleChange(e, i)}
            onKeyDown={e => handleKeyDown(e, i)}
            className="w-[61.2px] h-[59px] text-center text-[39px] text-[#808080] border border-gray-200 focus:outline-none focus:border-[#FFD56E] shadow-[0px_4px_4px_0px_#00000040]"
          />
        ))}
      </div>

      <button className="bg-[#FFD56E] hover:bg-amber-300 text-white font-bold w-[400px] h-[60px] mt-12 rounded">
        Verify
      </button>

      <p className="text-[#AAAAAA] pt-6">
        Didn’t get a code?
        <button
          onClick={() => onSwitch('signin')}
          className="text-[#FFD56E] ml-1"
        >
          Go back
        </button>
      </p>
    </div>
  )
}
