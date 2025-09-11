import React from 'react';

const UserProfile = () => {
  return (
    <div className="relative flex flex-col justify-center text-center my-28">
      <div className="flex flex-col justify-center items-center mb-16 relative">
       <img src="/Paw2.png" className="absolute left-[480px] top-[-5px] w-[80px] h-[80px] "/>
        <h1 className="font-[Peralta]  font-normal text-[48px]">My Profile</h1>
        <img src="/gallery2.png" alt="Profile" className="w-[300px] h-[300px] rounded-full object-cover my-20"/>
        <button className="bg-black text-white font-[Poppins] font-semibold text-[28px] w-[211px] h-[62px] px-4 py-2 rounded hover:bg-gray-800 transition">
          Edit
        </button>
      </div>
      
      <div className="space-y-4 text-left mx-24">
        <div>
          <label className="font-[Poppins] text-[32px] font-medium block text-sm text-black">Username</label>
          <p className="font-[Poppins] text-[28px] font-light py-2 text-[#00024B80]">Marwa Tarek</p>
          <hr className='border-[#00000038] h-1 w-[1294px] mt-4'/>
        </div>
        <div>
          <label className="font-[Poppins] text-[32px] font-medium block text-sm text-black">Email</label>
          <p className="font-[Poppins] text-[28px] font-light py-2 text-[#00024B80]">xxxxxxxxxx@yahoo.com</p>
          <hr className='border-[#00000038] h-1 w-[1294px] mt-4'/>
        </div>
        <div>
          <label className="font-[Poppins] text-[32px] font-medium block text-sm text-black">Phone Number</label>
          <p className=" font-[Poppins] text-[28px] font-light py-2 text-[#00024B80]">0000000000000</p>
          <hr className='border-[#00000038] h-1 w-[1294px] mt-4'/>
        </div>
        <div>
          <label className="font-[Poppins] text-[32px] font-medium block text-sm text-black">Password</label>
          <p className=" font-[Poppins] text-[28px] font-light py-2 text-[#00024B80]">**************</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
