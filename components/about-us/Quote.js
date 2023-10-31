import Button from "@components/reusable files/Button";
import Image from "next/image";


const Quote = () => {
  return (
    <section className="relative w-full h-auto md:h-screen my-20 md:my-0 md:mt-20">
        <Image className="absolute" src='/assets/images/london-bridge.png' alt="/" width={1500} height={1200} />
        <div className="relative top-2 md:top-20 lg:top-40 md:max-w-[800px] mx-auto text-center space-y-2">
            <h2 className="text-white text-base md:text-lg">Get a Quote</h2>
            <h1 className="text-white text-2xl md:text-3xl font-semibold">Build Your Future Today</h1>
            <p className="text-white text-xs md:text-base">Our Vision is to build a better Structure to satisfy your needs.</p>
            <Button>Appointment</Button>
        </div>
        <div className="relative top-7 md:top-36 lg:top-[380px] grid grid-cols-2 md:grid-cols-3 max-w-[1000px] m-auto px-3 md:px-5">
            <div className="flex bg-white space-x-2 max-w-[220px]">
                <h1 className="text-white text-center w-14 h-14 font-semibold text-2xl bg-[#D2153D] p-3 ">01</h1>
                <div>
                    <h2 className="text-[#00215B] font-bold">Kind Consultation</h2>
                    <p className="text-xs sm:text-sm lg:text-base">Contact loren Doe</p>
                </div>
            </div>
            <div className="flex bg-white space-x-2 max-w-[220px]">
                <h1 className="text-white text-center w-14 h-14 font-semibold text-2xl bg-[#D2153D] p-3 ">02</h1>
                <div>
                    <h2 className="text-[#00215B] font-bold">Kind Consultation</h2>
                    <p className="text-xs sm:text-sm lg:text-base">Contact ben Doe</p>
                </div>
            </div>
            <div className="hidden md:flex bg-white space-x-2 max-w-[280px]">
                <h1 className="text-white text-center w-14 h-14 font-semibold text-2xl bg-[#D2153D] p-3 ">03</h1>
                <div>
                    <h2 className="text-[#00215B] font-bold">Kind Consultation</h2>
                    <p className="text-sm sm:text-sm lg:text-base">Contact Hannah Doe</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Quote;