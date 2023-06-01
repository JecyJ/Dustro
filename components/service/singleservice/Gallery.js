import Image from "next/image";

const Gallery = ({ images }) => {
  return (
    <section className="relative md:top-44 sm:top-12 w-full h-auto my-20">
      <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-[400px] sm:max-w-[600px] md:max-w-[1000px] mx-auto">
        {images.map((image, index) => (
          <Image
            key={index}
            className="w-full h-auto"
            src={image.src}
            width={image.width}
            height={image.height}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;