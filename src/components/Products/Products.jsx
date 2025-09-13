import Foot from '../Foot.jsx'
import { Link } from 'react-router-dom';
const products = [
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
export default function Products(){
    return(
        <>
        
        <section className="relative flex flex-wrap justify-center text-center gap-9 my-44">
            
            <div className='flex flex-nowrap flex-col justify-center items-center gap-4'>
            <img src="/Paw2.png" className="absolute w-[80px] h-[80px] top-[120px] left-[20%] translate-x-[-50%] sm:top-[5px] sm:left-[550px] sm:translate-x-0" />

            <h1 className="font-[Peralta]  font-normal text-[48px]">Products</h1>
            <p className="font-[Poppins] text-[#656689] font-normal text-[22px] max-px-[450px]">Pets Nutrients & Food , 25% of all products</p>
            </div>
            <div className="flex flex-wrap justify-center gap-10 my-11 ">
                {products.map((product, index) => (
                    <div key={index} className="flex flex-wrap my-28 justify-between items-start w-[380px] h-[388px] px-4">
                    {/* Image */}
                    <img src={product.image} alt={product.name} className="w-[380px] h-[332px] object-contain mb-4"/>

                    {/* Text */}
                    <div className="flex-1 flex flex-col  pl-12">
                        <h3 className="font-[Rubik] text-[28px] font-normal text-start text-[#222] w-[300px]">{product.name}</h3>
                        <p className="font-[Rubik] font-normal text-[22px] text-[#979697] text-start mt-2">{product.description}</p>
                        <p className="font-[Rubik] font-normal text-[22px] text-start">300 EGP &nbsp;&nbsp;<span className="text-[#FF4F4F] line-through">400 EGP</span></p>
                    {/* Button */}
                        <Link to="/cart" className="border-[3px] border-[#FFD56E] inline-block w-[187px] text-[#FFB800] text-[22px] font-medium px-6 py-2 rounded hover:bg-[#FFD56E] transition"> Add to cart </Link>
                    </div>

                    
                    </div>
            ))}
            </div>
         </section>
        <Foot/>
        </>
    )
}