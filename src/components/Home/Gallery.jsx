export default function Gallery() {
  const images = [
    "/gallery1.png",
    "/gallery2.png",
    "/gallery3.png",
    "/gallery4.png",
    "/gallery5.png",
    "/gallery6.png"
  ];

  return (
    <div className="flex flex-col text-center justify-center gap-12 mt-32 px-4">
      {/* Heading */}
      <h2 className="flex-1 font-[Peralta] text-[45px] font-normal">
        Our Gallery
      </h2>
      <p className="flex-2 font-[Poppins] text-[22px] font-normal text-[#1C103B] max-w-[480px] mx-auto">
        Our Client Pets, as well as a Gallery with some nice pictures.
      </p>

      {/* Gallery Grid */}
      <div className="flex flex-wrap justify-center gap-7">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full sm:w-[411px] h-[300px] sm:h-[380px] overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={src}
              alt={`gallery-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
