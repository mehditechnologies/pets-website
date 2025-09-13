import React from 'react';
import Foot from '../Foot.jsx';

const UserProfile = () => {
  return (
    <>
      <div className="relative flex flex-col justify-center text-center my-28 px-4 sm:px-0">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center mb-16 relative">
          <img
            src="/Paw2.png"
            className="absolute left-[7%] sm:left-[480px] top-[-5px] w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] transform -translate-x-1/2 sm:translate-x-0"
          />
          <h1 className="font-[Peralta] font-normal text-[32px] sm:text-[48px]">Update Profile</h1>
          <img
            src="/gallery2.png"
            alt="Profile"
            className="w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full object-cover my-10 sm:my-20"
          />
        </div>

        {/* Form Section */}
        <div className="space-y-8 text-center sm:text-left text-left mx-4 sm:mx-24">
          <form className="space-y-8">
            {[
              { label: 'Username', type: 'text', id: 'edname', placeholder: 'username' },
              { label: 'Email', type: 'email', id: 'edemail', placeholder: 'xxxxxxxxxx@yahoo.com' },
              { label: 'Phone Number', type: 'text', id: 'edno', placeholder: '0000000000000' },
              { label: 'Password', type: 'password', id: 'edpass', placeholder: '**************' },
            ].map((field, index) => (
              <div key={index}>
                <label className="font-[Poppins] text-[24px] sm:text-[32px] font-semibold block text-black">
                  {field.label}
                </label>
                <input
                  className="font-[Poppins] rounded-lg text-[20px] sm:text-[26px] bg-[#D9D9D954] w-full sm:w-[1064px] h-[70px] sm:h-[97px] font-light px-4 sm:px-5 py-2 text-[#00024B80] mt-3"
                  type={field.type}
                  id={field.id}
                  placeholder={field.placeholder}
                />
              </div>
            ))}
          </form>

          {/* Update Button */}
          <button className="bg-black text-white font-[Poppins] font-semibold text-[20px] sm:text-[28px] w-full sm:w-[1064px] h-[52px] sm:h-[62px] px-4 py-2 rounded hover:bg-gray-800 transition">
            Update
          </button>
        </div>
      </div>
      <Foot />
    </>
  );
};

export default UserProfile;
