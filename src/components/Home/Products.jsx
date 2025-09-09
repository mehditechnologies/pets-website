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
];

export default function PetFoodPromo() {
  return (
    <section className="bg-white py-12 px-6 md:px-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-10 px-36">
        <div>
          <h2 className="font-[Peralta] text-[28px] font-normal text-[#1A1A1A] relative inline-block">
            Pets Nutrients & Food
            <span className="absolute left-0 -bottom-2 w-12 h-[3px] bg-yellow-400 rounded"></span>
          </h2>
          <p className="font-[Peralta] text-[40px] font-bold mt-3">
            25 %{" "}
            <span className="text-black">OFF all Products</span>
          </p>
        </div>

        {/* View More Button */}
        <button className="bg-[#FFD56E] hover:bg-[#FFB800] text-white font-medium px-5 py-2 rounded-md flex items-center gap-2">
          View more <span className="text-lg">→</span>
        </button>
      </div>

      {/* Products */}
     <div className="flex flex-wrap justify-center gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-center w-[333px] h-[388px] p-4"
            >
              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-[333px] h-[388px] object-contain mb-4"
              />

              {/* Text */}
              <div className="flex-1 flex flex-col justify-start text-left w-[200px]">
                <h3 className="font-[Poppins] text-[18px] font-semibold text-[#222]">{product.name}</h3>
                <p className="font-[Poppins] text-[14px] text-[#555] mt-2">{product.description}</p>
              {/* Button */}
              <button className="border border-[#FFD56E] w-32 text-[#FFB800] text-[14px] font-medium px-6 py-2 rounded hover:bg-[#FFD56E] transition">
              Buy Now
              </button>
              </div>

              
            </div>
          ))}
        </div>

    </section>
  );
}
