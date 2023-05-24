import Image from 'next/image';
import Link from 'next/link';
import {BsPlusSquare} from 'react-icons/bs'

const Portfolio = () => {
  return (
    <section className='w-full h-auto my-10'>
        <div className='max-w-[400px] md:max-w-[1000px] mx-auto text-center space-y-5 md:space-y-7'>
            <h2 className='text-[#D2153D]'>OUR WORKS</h2>
            <h1 className='text-3xl md:text-5xl font-semibold'>Our Special Projects</h1>
            <div className='grid grid-cols-3 grid-rows-2 gap-x-2 w-full'>
                <Image className="row-span-2" src='/assets/images/landscape-building-crane.png' width={500} height={500} />
                <Image className="w-full h-auto" src='/assets/images/crane.png' width={500} height={500} />
                <Image className="w-full h-auto" src='/assets/images/construct.png' width={500} height={500} />
                <div className='relative w-full h-auto'>
                    <Image className="absolute w-full h-auto" src='/assets/images/architecture.png' width={500} height={500} />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00215B]/70" />
                    <div className='relative w-full h-full top-0 text-white space-y-5 p-3 md:p-10'>
                        <h2 className='text-xs'>COMMERCIAL</h2>
                        <h1 className='hidden md:block text-sm md:text-2xl pb-1 md:pb-10'>Benoit Architecture</h1>
                        <Link href='/portfolio'>
                            <BsPlusSquare className='w-full mx-auto' size={30} />
                        </Link>
                        
                    </div>
                </div>                
                <Image className="w-full h-auto" src='/assets/images/city.png' width={500} height={500} />
            </div>
        </div>
    </section>
  )
}

export default Portfolio;

{/* <div className='relative w-full h-auto p-20'>
                    
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00215B]/70" />
                    <div className='relative top-0 text-white space-y-5'>
                        <h2>COMMERCIAL</h2>
                        <h1 className='text-xl md:text-2xl'>Benoit Architecture</h1>
                        <BsPlusSquare className='' size={20} />
                    </div>
                </div> */}