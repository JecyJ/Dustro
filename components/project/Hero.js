import Image from "next/image";


const Hero = () => {
  return (
    <section className="relative w-full h-auto mb-10">
      <Image className="absolute" src='/assets/images/skyscrapers.png' alt='/' layout="responsive" width={1500} height={800} />
      <div className="relative left-16 md:left-28 lg:left-52 top-1 md:top-10 lg:top-24 text-white max-w-[200px] md:max-w-[400px]">
        <h1 className="text-3xl md:text-5xl font-semibold">Portfolio Archive</h1>
        <h3 className="text-xs md:text-lg">Home / Portfolio Archive</h3>
      </div>
      <div className="relative w-48 md:w-72 p-3 top-1 sm:top-12 md:top-28 lg:top-48 left-56 sm:left-2/4 md:left-2/3 lg:left-2/3 bg-white border shadow-2xl border-t-4 border-t-[#D2153D]">
        <h3 className="text-xs md:text-base">CALL US TODAY</h3>
        <h1 className="text-xl md:text-3xl font-semibold text-[#00215B]">+1 123 4567 789</h1>
      </div>
    </section>    
  )
}

export default Hero;