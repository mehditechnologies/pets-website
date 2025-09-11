export default function Cart(){
    return(
        <section className="relative flex flex-col  text-center gap-9 my-44">
            
            <img src="/Paw2.png" className="absolute left-[530px] top-[-5px] w-[80px] h-[80px] "/>
            <h1 className="font-[Peralta]  font-normal text-[48px]">Contact Us</h1>
            <p className="font-[Poppins] text-[#656689] font-normal text-[22px] px-[380px]">The experienced veterinarians provide comprehensive veterinary care for cats, dogs, and exotic pets including reptiles.</p>
          <div className="flex gap-5 pl-36 my-40">
            <div className="flex flex-col justify-start text-start gap-10">
                <form className="flex flex-col gap-3.5">
                    <label className="font-[Poppins] font-light text-[32px] text-[#00024B80]">Full Name</label>
                     <input
                        type="text"
                        className="bg-[#D9D9D954] w-[563px] h-[97px] rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                     />
                      <label className="font-[Poppins] font-light text-[32px] text-[#00024B80]">Email</label>
                     <input
                        type="text"
                        className="bg-[#D9D9D954] w-[563px] h-[97px] rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                     />
                      <label className="font-[Poppins] font-light text-[32px] text-[#00024B80]">Message</label>
                     <input
                        type="text"
                        className="bg-[#D9D9D954] w-[563px] h-[256px] rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                     />
                </form>
                <button className="w-[375px] h-[77px] bg-black text-white text-[24px] text-center font-semibold font-[Poppins]  rounded-lg">Contact us</button>
                <div className="flex flex-wrap gap-32">
                    <div className="flex flex-col gap-2">
                        <h2 className="font-[Poppins] font-semibold text-[32px] ">Contact</h2>
                        <p className="font-[Poppins] font-light text-[32px] ">xxxxx@yahoo.com</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-[Poppins] font-semibold text-[32px] ">Based in</h2>
                        <p className="font-[Poppins] font-light text-[32px] ">Cairo, Egypt</p>
                    </div>
                </div>
                <div className="flex gap-16 mt-11">
                    <img src="/fbb.png"/>
                    <img src="/instab.png"/>
                    <img src="/xb.png"/>
                </div>
            </div>
          </div>
           <img src="/Map.png" className="absolute right-[70px] top-[370px]  w-[638px] h-[819px] z-20"/>
           <img src="/map2.png" className="absolute right-[580px] top-[360px] z-30 opacity-85" />
            <div className="right-[20px] top-80 absolute w-[419px] h-[912px] bg-[#FFB800] z-10"></div>
         </section>
    )
}