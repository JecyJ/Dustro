import Image from "next/image";


const Hero = () => {
  return (
    <section className="relative">
        <div className="w-full h-auto mb-10">
            <Image className="absolute" src='/assets/images/construction-site.png' alt="/" width={1500} height={800} />
            <div className="relative left-20 md:left-52 top-5 md:top-24 text-white">
                <h1 className="text-3xl md:text-5xl font-semibold">Contacts</h1>
                <h3 className="text-xs md:text-lg">Home / Contacts</h3>
            </div>
        </div>
    </section>
  )
}

export default Hero;