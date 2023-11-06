import Button from '@components/reusable files/Button';
import Image from 'next/image';
import Link from 'next/link';

const Aboutus = () => {
  return (
    <section className='relative w-full h-auto md:mt-34'>
        <div className='grid md:grid-cols-2 md:items-center max-w-[400px] md:max-w-[1100px] m-auto px-4'>
            <Image className='md:order-2' src='/assets/images/building.png' alt='/' width={800} height={500} />
            <div className="space-y-5">
                <h2 className='text-[#D2153D]'>ABOUT US</h2>              
                <h1 className='text-3xl md:text-5xl text-[#16213E] font-semibold'>With our knowledge we guarantee success</h1>
                <h3 className='text-[#00215B] font-semibold'>We aim to find new and better ways of doing things.</h3>
                <p className='text-[#41444B] pb-6'>To innovate, grow and adapt to the dynamics of a changing industry and global economy leveraging on advancement in logistics, technology and grounded in professionalism.</p>
                <Link href='/aboutus'>
                    <Button>Learn More</Button>
                </Link>               
            </div>
        </div>
    </section>
  )
}

export default Aboutus;