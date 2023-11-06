import Image from "next/image";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'


const Services = () => {
  return (
    <section className="w-full my-10">
        <div className="grid grid-rows-2 grid-cols-3 md:grid-rows-1 md:grid-cols-5 w-full">
            <Image className="col-span-3 md:col-span-2 h-full md:h-full w-full md:w-full" src='/assets/images/steel-bars.png' alt='/' width={500} height={500} />
            <div className="relative w-full h-full md:h-full text-white">
                <Image className="absolute" src='/assets/images/landscape-building-crane.png' alt='/'  fill />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00215B]/70" />
                <div className="relative top-0 w-full p-4 md:p-6">
                    <h1 className="text-xl md:text-3xl">Research & Analysis</h1>
                    <p className="text-xs md:text-sm mt-5">we are passionate about what we do and act promptly to achieve our goals.</p>
                    <div className="w-full text-right">
                        <button className="p-1 md:p-2 bg-[#D2153D] mt-24 "><HiOutlineArrowNarrowRight /></button>
                    </div>                    
                </div>
            </div>
            <div className="relative w-full h-auto md:h-full text-white">
                <Image className="absolute" src='/assets/images/crane-and-building-construction.png' alt='/'  fill />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#D2153D]/70" />
                <div className="relative top-0 w-full p-4 md:p-6">
                    <h1 className="text-xl md:text-3xl">Industrial Development</h1>
                    <p className="text-xs md:text-sm mt-5">Commitment to quality and safety An unshakeable respect for budgets and projects timeline</p>
                    <div className="w-full text-right">
                        <button className="p-1 md:p-2 bg-[#00215B] mt-24 "><HiOutlineArrowNarrowRight /></button>
                    </div> 
                </div>
            </div>
            <div className="relative w-full h-auto md:h-full text-white">
                <Image className="absolute" src='/assets/images/new-build-houses.png' alt='/'  fill />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00215B]/70" />
                <div className="relative top-0 w-full p-4 md:p-6">
                    <h1 className="text-xl md:text-3xl">Production Launch</h1>
                    <p className="text-xs md:text-sm mt-5">Philosophy of continuous improvement.</p>
                    <div className="w-full text-right">
                        <button className="p-1 md:p-2 bg-[#D2153D] mt-24 "><HiOutlineArrowNarrowRight /></button>
                    </div>   
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services;