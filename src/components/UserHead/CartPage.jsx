import { useState } from "react";
import { Link } from "react-router-dom";
import Foot from "../Foot";

export default function Contact() {
  const [cartItems, setCartItems] = useState([
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
  ]);

  const handleDelete = (indexToDelete) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== indexToDelete));
  };

  return (
    <>
      <section className="relative flex flex-col text-center gap-9 my-44 overflow-x-hidden px-4 sm:px-0">
        <img src="/Paw2.png" className="absolute left-[480px] top-[-5px] w-[80px] h-[80px]" />
        <h1 className="font-[Peralta] font-normal text-[36px] sm:text-[48px]">Shopping Cart</h1>
        <p className="font-[Poppins] text-[#656689] font-normal text-[18px] sm:text-[22px] px-4 sm:px-[450px]">
          You have {cartItems.length} items in your cart
        </p>

        {/* Cart + Card Section */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 justify-center items-start px-4 sm:px-0">
          {/* Cart Items */}
          <div className="flex flex-col gap-5 my-10 w-full sm:w-[754px]">
            {cartItems.map((product, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row pt-7 shadow rounded-lg justify-between items-start w-full h-auto sm:h-[257px]  pb-2 px-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[177px] h-[192px] object-contain mb-4 sm:mb-0"
                />
                <div className="flex-1 flex flex-col sm:pl-12">
                  <h3 className="font-[Rubik] text-[22px] sm:text-[28px] font-normal text-start text-[#222] w-full sm:w-[300px]">
                    {product.name}
                  </h3>
                  <p className="font-[Rubik] font-normal text-[16px] sm:text-[22px] text-[#979697] text-start mt-2 w-full sm:w-[300px]">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="font-[Rubik] font-normal text-[16px] sm:text-[22px] text-start">
                      300 EGP &nbsp;&nbsp;
                      <span className="text-[#FF4F4F] line-through">400 EGP</span>
                    </p>
                    <div onClick={() => handleDelete(index)} className="cursor-pointer">
                      <img src="/Trash.png" className="w-[30px] h-[30px]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Card Details */}
          <div className="flex flex-col text-white justify-start text-start w-full sm:w-[512px] h-auto sm:h-[660px] bg-[#FFB800C4] px-6 pt-11 pb-5 mt-10 sm:mt-28 rounded-lg">
            <h2 className="font-[Poppins] font-bold text-[20px] sm:text-[25px]">Card Details</h2>
            <p className="font-[Nunito] font-semibold text-[16px] sm:text-[18px] text-white mt-2">Card Type</p>
            <div className="flex flex-wrap gap-4 my-5">
              <img src="/MAC.png" className="w-[80px] sm:w-[100px] h-[60px] sm:h-[73px]" />
              <img src="/VISA.png" className="w-[80px] sm:w-[100px] h-[60px] sm:h-[73px]" />
            </div>
            <form className="flex flex-col gap-3.5">
              <label className="font-[Poppins] font-bold text-[14px] sm:text-[16px]">Name on card</label>
              <input
                className="shadow appearance-none bg-[#0000001C] rounded w-full py-2 px-3 text-white leading-tight"
                type="text"
                placeholder="Name"
              />
              <label className="font-[Poppins] font-bold text-[14px] sm:text-[16px]">Card Number</label>
              <input
                className="shadow appearance-none bg-[#0000001C] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="111 222 222 333 212"
              />
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex flex-col gap-3.5 w-full">
                  <label className="font-[Poppins] font-bold text-[14px] sm:text-[16px]">Expiration Date</label>
                  <input
                    className="shadow appearance-none bg-[#0000001C] rounded py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline w-full"
                    type="date"
                  />
                </div>
                <div className="flex flex-col gap-3.5 w-full">
                  <label className="font-[Poppins] font-bold text-[14px] sm:text-[16px]">CVV</label>
                  <input
                    className="shadow appearance-none bg-[#0000001C] rounded py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline w-full"
                    type="number"
                    placeholder="369"
                  />
                </div>
              </div>
              <hr className="border-2 border-white rounded-full mt-6" />
              <button className="shadow appearance-none bg-[#0000001C] font-[Poppins] font-bold text-[16px] rounded py-3 px-5 text-white sm:mt-12 mt-9 w-full flex items-center justify-between">
                <span>1000 EGP</span>
                <span>Checkout →</span>
              </button>
            </form>
          </div>
        </div>
      </section>
      <Foot />
    </>
  );
}
