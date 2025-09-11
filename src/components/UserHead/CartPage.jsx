import Head from "../Head";
import { Link } from "react-router-dom";
import Foot from "../Foot";
const cart = [
  {
    name: "Drools | 3KG",
    description: "Adult chicken and egg Egg. Chicken 3 kg Dry Adult Dog Food.",
    image: "/Drool.png",
    blobColor: "bg-pink-200",
  },
  {
    name: "Canine Creek 4 KG",
    description: "Adult chicken and egg Egg. Chicken 3 kg Dry Adult Dog Food.",
    image: "/Canine.png",
    blobColor: "bg-yellow-200",
  },
  {
    name: "Biscrok Biscuits",
    description: "Adult chicken and egg Egg. Chicken 3 kg Dry Adult Dog Food.",
    image: "/Biscrok.png",
    blobColor: "bg-blue-200",
  },
];
export default function Contact(){
    return(
        <>
        <Head/>
        <section className="relative flex flex-wrap justify-center text-center gap-9 my-44">
            
            <img src="/Paw2.png" className="absolute left-[480px] top-[-5px] w-[80px] h-[80px] "/>
            <h1 className="font-[Peralta]  font-normal text-[48px]">Shopping Cart</h1>
            <p className="font-[Poppins] text-[#656689] font-normal text-[22px] px-[450px]">You have 3 items in your cart</p>
          <div className="flex gap-20">
            <div className="flex flex-col gap-5 my-28 ">
                {cart.map((product, index) => (
                    <div key={index} className="flex flex-wrap pt-7 shadow rounded-lg justify-between items-start w-[754px] h-[257px] px-4">
                    {/* Image */}
                    <img src={product.image} alt={product.name} className="w-[177px] h-[192px] object-contain mb-4"/>

                    {/* Text */}
                    <div className="flex-1 flex flex-col  pl-12">
                        <h3 className="font-[Rubik] text-[28px] font-normal text-start text-[#222] w-[300px]">{product.name}</h3>
                        <p className="font-[Rubik] font-normal text-[22px] text-[#979697] text-start mt-2 w-[300px]">{product.description}</p>
                        <div className="flex justify-between">
                        <p className="font-[Rubik] font-normal text-[22px] text-start">300 EGP &nbsp;&nbsp;<span className="text-[#FF4F4F] line-through">400 EGP</span></p>
                        <div>
                          <img src="/Trash.png" className="w-[30px] h-[30px]"/>
                        
                        </div>
                        </div>
                    </div>

                    
                    </div>
            ))}
            </div>
            <div className="flex flex-col text-white justify-start text-start w-[512px] h-[660px] bg-[#FFB800C4] px-6 pt-11  mt-28 rounded-lg">
                <h2 className="font-[Poppins] font-bold text-[25px] ">Card Details</h2>
                <p className="font-[Nunito] font-semibold text-[18px] text-white">Card Type</p>
                <div className="flex flex-wrap gap-4 my-5">
                    <img src="/MAC.png" className="w-[100px] h-[73px]"/>
                    <img src="/VISA.png" className="w-[100px] h-[73px]"/>
                </div>
                <form className="flex flex-col gap-3.5">
                    <label className="font-[Poppins] font-bold text-[16px]">Name on card</label>
                    <input class="shadow appearance-none bg-[#0000001C] rounded w-full py-2 px-3 text-white leading-tight " id="cardname" type="text" placeholder="Name"/>
                    <label className="font-[Poppins] font-bold text-[16px]">Card Number</label>
                    <input class="shadow appearance-none bg-[#0000001C] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="cardname" type="number" placeholder="111 222 222 333 212"/>
                    <div className="flex flex-wrap gap-3">
                    <div className="flex flex-col gap-3.5">
                    <label className="font-[Poppins] font-bold text-[16px]">Expiration Date</label>
                    <input class="shadow appearance-none bg-[#0000001C] rounded py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline  " id="cardname" type="date" placeholder="Date"/></div>
                    <div className="flex flex-col gap-3.5">
                    <label className="font-[Poppins] font-bold text-[16px]">CVV</label>
                    <input class="shadow appearance-none bg-[#0000001C] rounded py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="cardname" type="number" placeholder="369"/></div>
                    </div>
                    <hr className="border-2 border-white rounded-full mt-6"/>
                   <button className="shadow appearance-none bg-[#0000001C] font-[Poppins] font-bold text-[16px] rounded py-3 px-5 text-white mt-12 w-full flex items-center justify-between">
                      <span>1000 EGP</span>
                      <span>Checkout →</span>
                    </button>

                </form>

            </div>
         </div>
         </section>
         <Foot/>
        </>
    )
}