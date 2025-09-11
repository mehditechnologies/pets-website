import React from 'react';

const UserProfile = () => {
  return (
    <div className="relative flex flex-col justify-center text-center my-28">
      <div className="flex flex-col justify-center items-center mb-16 relative">
       <img src="/Paw2.png" className="absolute left-[480px] top-[-5px] w-[80px] h-[80px] "/>
        <h1 className="font-[Peralta]  font-normal text-[48px]">Update Profile</h1>
        <img src="/gallery2.png" alt="Profile" className="w-[300px] h-[300px] rounded-full object-cover my-20"/>
      </div>
      
      <div className="space-y-4 text-left mx-24">
        <form>
        <div>
          <label className="font-[Poppins] text-[32px] font-semibold block text-sm text-black">Username</label>
          <input className="font-[Poppins] rounded-lg text-[26px] bg-[#D9D9D954] w-[1064px] h-[97px] font-light px-5 py-2 text-[#00024B80] mt-3" type="text" id="edname" placeholder='username'></input>
          
        </div>
        <div>
          <label className="font-[Poppins] text-[32px] font-semibold block text-sm text-black mt-12">Email</label>
          <input className="font-[Poppins] rounded-lg text-[26px] bg-[#D9D9D954] w-[1064px] h-[97px] font-light px-5 py-2 text-[#00024B80] mt-3" type="email" id="edemail" placeholder='xxxxxxxxxx@yahoo.com'></input>
          
        </div>
        <div>
          <label className="font-[Poppins] text-[32px] font-semibold block text-sm text-black mt-12">Phone Number</label>
          <input className="font-[Poppins] rounded-lg text-[26px] bg-[#D9D9D954] w-[1064px] h-[97px] font-light px-5 py-2 text-[#00024B80] mt-3" type="" id="edno" placeholder='0000000000000'></input>
          
        </div>
        <div>
          <label className="font-[Poppins] text-[32px] font-semibold block text-sm text-black mt-12">Password</label>
          <input className="font-[Poppins] rounded-lg text-[26px] bg-[#D9D9D954] w-[1064px] h-[97px] font-light px-5 py-2 text-[#00024B80] mt-3"type="password" id="edpass" placeholder='**************'></input>
        </div>
        </form>  
        <button className="bg-black text-white font-[Poppins] font-semibold text-[28px] w-[1064px] h-[62px] px-4 py-2 rounded hover:bg-gray-800 transition">
          Update
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
