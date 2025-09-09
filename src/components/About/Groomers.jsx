const staff=[
        {
            image:"/groom1.png",
            name: "Adam Smith",
            title: "Veterinarian"
        },
        {
            image:"/groom2.png",
            name: "Morgan Mark",
            title: "Veterinarian"
        },
        {
            image:"/groom3.png",
            name: "Ana Fargun",
            title: "Care Taker"
        },
        {
            image:"/groom4.png",
            name: "Moran Maz",
            title: "Care Taker"
        }
    ];
export default function Groomers(){
    
    return(
        <section className="flex flex-col justify-center my-28 gap-52 px-48"> 
            <div className="flex  justify-between ">
                <img src="/twink.png" className="w-[59px] h-[54px]"/>
                <h1 className="font-[Peralta] font-normal text-[52px]">Our Groomers</h1>
                <img src="/Rings.png" className="w-[80.58px] h-[77.58px]"/>
            </div>

            {/* Staff */}
            <div className="flex gap-5 justify-center">
            {staff.map((staff,index)=>(
                <div key={index} className=" relative flex flex-col items-center bg-[#FFD56E] rounded-3xl  w-[272px] h-[298px] p-4">
                    <img src={staff.image} alt={staff.name} className="absolute top-[-100px] w-[210px] h-[270px] rounded-[200px] border-8 border-[#FFB8008C] "/>
                    <div className="pt-44 text-center">
                        <h1 className="text-white font-[Poppins] font-semibold text-[20px]">{staff.name}</h1>
                        <p className="text-white font-[Poppins] font-normal text-[16px]">{staff.title}</p>
                    </div>
                </div>

            ))}
            </div>
        </section>
    )
}