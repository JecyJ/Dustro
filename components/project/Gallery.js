import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {BsPlusSquare} from 'react-icons/bs'

const Gallery = () => {
  return (
    <section className='relative w-full h-auto my-20 md:mt-64'>
        <div className='grid grid-cols-3 grid-rows-3 gap-2 md:gap-4 max-w-[400px] md:max-w-[1000px] mx-auto'>
            <Image className="w-full h-auto" src='/assets/images/crane2.png' width={500} height={500} />
            <Image className="w-full h-auto" src='/assets/images/bulldozer.png' width={500} height={500} />
            <Image className="w-full h-auto" src='/assets/images/workers.png' width={500} height={500} />
            <Image className="w-full h-auto" src='/assets/images/crane-groundview2.png' width={500} height={500} />
            <div className='relative w-full h-auto'>
                <Image className="absolute w-full h-auto" src='/assets/images/streetview.png' width={500} height={500} />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#D2153D]/70" />
                <div className='relative w-full h-full top-7 md:top-20 text-white space-y-5 p-3 md:p-10'>
                    <h2 className='text-xs text-center p-5 md:p-0'>COMMERCIAL</h2>
                    <h1 className='hidden md:block text-sm md:text-center md:text-2xl pb-1 md:pb-10'>Benoit Architecture</h1>
                    <Link href='/projects'>
                        <BsPlusSquare className='w-full mx-auto' size={30} />
                    </Link>                        
                </div>
            </div>
            <Image className="w-full h-auto" src='/assets/images/crane-groundview.png' width={500} height={500} />
            <Image className="w-full h-auto" src='/assets/images/constructionsite.png' width={500} height={500} />
            <Image className="w-full h-auto" src='/assets/images/crane-groundview3.png' width={500} height={500} />
            <Image className="w-full h-auto" src='/assets/images/iron-rods.png' width={500} height={500} />
        </div>
    </section>
  )
}

export default Gallery;