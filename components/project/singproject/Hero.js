import Image from "next/image";


const Hero = () => {
  return (
    <section className="relative w-full h-auto mb-10">
      <Image className="absolute" src='/assets/images/single-project.png' alt='/' width={1500} height={800} />
      <div className="relative left-20 md:left-52 top-5 md:top-24 text-white max-w-[300px] md:max-w-[400px]">
        <h1 className="text-3xl md:text-5xl font-semibold">Single Project</h1>
        <h3 className="text-xs md:text-lg">Home / Project / Single Project</h3>
      </div>
    </section>    
  )
}

export default Hero;