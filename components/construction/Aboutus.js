import Button from '@components/reusable files/Button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Aboutus = () => {
  return (
    <section className='relative w-full h-auto'>
        <div className='grid md:grid-cols-2 md:items-center max-w-[400px] md:max-w-[1100px] m-auto'>
            <Image className='md:order-2' src='/assets/images/building.png' alt='/' width={800} height={500} />
            <div className="space-y-5">
                <h2 className='text-[#D2153D]'>ABOUT US</h2>              
                <h1 className='text-3xl md:text-5xl text-[#16213E] font-semibold'>With our knowledge we guarantee success</h1>
                <h3 className='text-[#00215B] font-semibold'> Fusce id hendrerit lectus. Morbi vitae tortor sed turpis feugiat congue</h3>
                <p className='text-[#41444B] pb-6'>Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur accumsan. Vivamus viverra ante turpis, dignissim condimentum elit egestas sit amet. Phasellus faucibus pellentesque</p>
                <Link href='/aboutus'>
                    <Button>Learn More</Button>
                </Link>               
            </div>
        </div>
    </section>
  )
}

export default Aboutus;