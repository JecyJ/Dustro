import Button from "@components/reusable files/Button";
import Image from "next/image";
import Link from "next/link";


const About = () => {
  return (
    <section className='relative w-full h-auto mt-20 md:mt-52'>
        <div className='grid md:grid-cols-2 md:items-center max-w-[400px] md:max-w-[1100px] m-auto'>
            <Image className='' src='/assets/images/man.png' alt='/' width={500} height={500} />
            <div className="space-y-10 md:space-y-20">
              <div className="space-y-5 md:space-y-10">
                <h2 className='text-[#D2153D]'>ABOUT US</h2>              
                  <h1 className='text-3xl md:text-5xl font-semibold'>We're providing the best customer service</h1>
              </div>
              <div className="space-y-5 md:space-y-10">
                <p className='text-[#41444B] pb-3'>Dustro provides contruction designs at its peak and brign such designs to life. We also incoporate your designs and wishes to meet your needs.</p>
                <h4 className="font-semibold text-xl md:2xl">John Doe, <span className="font-medium">Ceo</span></h4>
              </div>
              <div>
                <Link href='/aboutus'>
                  <Button>Learn more</Button>
                </Link>  
              </div>             
            </div>
        </div>
    </section>
  )
}

export default About;