import Image from 'next/image';
import React from 'react'

const Contact = () => {
  return (
    <section className='w-full h-auto my-10'>
        <div className='relative w-full h-full'>
            <Image className='absolute' src='/assets/images/map.png' width={1500} height={800} />
            <div className='relative top-24 md:top-96 flex justify-center items-end md:max-w-[1000px] mx-auto space-x-4 pb-20'>
                <div className='border border-t-4 border-t-[#d2153d] text-[#00215B] bg-white shadow-2xl p-6 w-56 md:w-2/6 space-y-4'>
                    <h3 className='text-xs md:text-base'>COMPANY ADDRESS</h3>
                    <h2 className='text-base md:text-lg font-semibold'>Themeforest, Envato HQ 24 Fifth st., Los Angeles, USA</h2>
                </div>
                <div className='flex flex-col md:flex-row space-y-2 md:space-x-4'>
                    <div className='flex space-x-2'>
                        <Image src='/assets/images/iconcall.svg' alt='/' width={90} height={90} />
                        <div className='text-[#00215B] w-full'>
                            <h2 className='text-xs md:text-base'>COMPANY PHONES</h2>
                            <p className='text-base md:text-lg font-semibold'>+ 1 234 5678 098</p>
                            <p className='text-base md:text-lg font-semibold'>+ 1 634 7638 654</p>
                        </div>
                    </div>
                    <div className='flex space-x-2'>
                        <Image src='/assets/images/iconemail.svg' alt='/' width={80} height={80} />
                        <div className='text-[#00215B]'>
                            <h2 className='text-xs md:text-base'>DUSTRO EMAILS</h2>
                            <p className='text-base md:text-lg font-semibold'>dustro@gmail.com</p>
                            <p className='text-base md:text-lg font-semibold'>dustro.info@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact;