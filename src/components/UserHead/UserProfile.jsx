import React from 'react';
import Foot from '../Foot.jsx';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  return (
    <>
      <div className="relative flex flex-col justify-center text-center my-28 px-4 sm:px-0">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center mb-16 relative">
          <img
            src="/Paw2.png"
            className="absolute left-[15%] sm:left-[480px] top-[-5px] w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] transform -translate-x-1/2 sm:translate-x-0"
          />
          <h1 className="font-[Peralta] font-normal text-[32px] sm:text-[48px]">My Profile</h1>
          <img
            src="/gallery2.png"
            alt="Profile"
            className="w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full object-cover my-10 sm:my-20"
          />
        <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 w-full sm:w-auto">
            {/* Edit Button */}
            <Link
              to="/profup"
              className="bg-black text-white font-[Poppins] font-semibold text-[18px] sm:text-[28px] w-[140px] sm:w-[211px] h-[48px] sm:h-[62px] px-4 py-2 rounded hover:bg-gray-800 transition text-center"
            >
              Edit
            </Link>

            {/* Logout Button */}
            <button
              onClick={() => {
                localStorage.removeItem("isLoggedIn");
                window.location.href = "/";
              }}
              className="bg-black text-white font-[Poppins] font-semibold text-[18px] sm:text-[28px] w-[140px] sm:w-[211px] h-[48px] sm:h-[62px] px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              Logout
            </button>
          </div>

        </div>

        {/* Info Section */}
        <div className="space-y-8 text-left mx-4 sm:mx-24">
          {[
            { label: 'Username', value: 'Marwa Tarek' },
            { label: 'Email', value: 'xxxxxxxxxx@yahoo.com' },
            { label: 'Phone Number', value: '0000000000000' },
            { label: 'Password', value: '**************' },
          ].map((item, index) => (
            <div key={index}>
              <label className="font-[Poppins] text-[20px] sm:text-[32px] font-medium block text-black">
                {item.label}
              </label>
              <p className="font-[Poppins] text-[18px] sm:text-[28px] font-light py-2 text-[#00024B80] break-words">
                {item.value}
              </p>
              {index < 3 && (
                <hr className="border-[#00000038] h-[1px] w-full max-w-[1294px] mt-4" />
              )}
            </div>
          ))}
        </div>
      </div>
      <Foot />
    </>
  );
};

export default UserProfile;
