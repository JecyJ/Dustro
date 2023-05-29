import Button from "@components/reusable files/Button";
import Image from "next/image";


const Quote = () => {
  return (
    <section className="relative w-full h-auto md:h-screen my-20 md:my-0 md:mt-20">
        <Image className="absolute" src='/assets/images/london-bridge.png' alt="/" width={1500} height={800} />
        <div className="relative top-5 md:top-36 md:max-w-[800px] mx-auto text-center space-y-2">
            <h2 className="text-white text-base md:text-lg">Get a Quote</h2>
            <h1 className="text-white text-2xl md:text-3xl font-semibold">Build Your Future Today</h1>
            <p className="text-white text-xs md:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            <Button>Appointment</Button>
        </div>
        <div className="relative top-7 md:top-80 grid grid-cols-2 md:grid-cols-3 max-w-[1000px] m-auto">
            <div className="flex bg-white space-x-2 max-w-[280px]">
                <h1 className="text-white text-center w-14 h-14 font-semibold text-2xl bg-[#D2153D] p-3 ">01</h1>
                <div>
                    <h2 className="text-[#00215B] text-lg font-bold">Kind Consultation</h2>
                    <p className="text-sm md:text-base">Etiam ac leo at quam aliquet</p>
                </div>
            </div>
            <div className="flex bg-white space-x-2 max-w-[280px]">
                <h1 className="text-white text-center w-14 h-14 font-semibold text-2xl bg-[#D2153D] p-3 ">02</h1>
                <div>
                    <h2 className="text-[#00215B] text-lg font-bold">Kind Consultation</h2>
                    <p className="text-sm md:text-base">Etiam ac leo at quam aliquet</p>
                </div>
            </div>
            <div className="hidden md:flex bg-white space-x-2 max-w-[280px]">
                <h1 className="text-white text-center w-14 h-14 font-semibold text-2xl bg-[#D2153D] p-3 ">03</h1>
                <div>
                    <h2 className="text-[#00215B] text-lg font-bold">Kind Consultation</h2>
                    <p className="text-sm md:text-base">Etiam ac leo at quam aliquet</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Quote;