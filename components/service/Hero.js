import Image from "next/image";


const Hero = () => {
  return (
    <section className="relative w-full h-auto mb-10">
      <Image className="absolute" src='/assets/images/service-background.jpg' alt='/' width={1500} height={800} />
      <div className="relative left-20 md:left-52 top-5 md:top-24 text-white max-w-[300px] md:max-w-[400px]">
        <h1 className="text-3xl md:text-5xl font-semibold">Services Archive</h1>
        <h3 className="text-xs md:text-lg">Home / Services Archive</h3>
      </div>
      <div className="relative w-48 md:w-72 p-3 top-7 md:top-48 left-56 md:left-2/3 bg-white border shadow-2xl border-t-4 border-t-[#D2153D]">
        <h3 className="text-xs md:text-base">CALL US TODAY</h3>
        <h1 className="text-xl md:text-3xl font-semibold text-[#00215B]">+1 123 4567 789</h1>
      </div>
    </section>    
  )
}

export default Hero;