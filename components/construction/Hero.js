'use client'

import Button from "@components/reusable files/Button";
import Image from "next/image";


const Hero = () => {
  const handleClick = () => {
    console.log('Button clicked')
  }
  return (
    <section className="relative w-full h-screen space-y-20 md:space-y-28 mb-52 md:mb-72">
      <div>
        <Image className="z-[-2]" src='/assets/images/office-building.png' alt='/' layout='fill' objectFit='cover' priority />      
        <div className="pt-10 md:pt-44 bg-cover max-w-[400px] md:max-w-[1100px] m-auto">    
          <div className="space-y-3">
            <h1 className="text-[#00215B] text-4xl md:text-6xl font-semibold">Construction solution <br /> for everyone</h1>
            <p className="text-[#00215B]">In id enim odio. Nunc aliquet diam tortor, at venenatis urna sagittis non. Suspendisse sodales nulla <br className="hidden md:block" /> sit amet sem condimentum, ac euismod nibh elementum. Praesent eu urna at sem sodales venenatis. <br className="hidden md:block" /> Mauris efficitur dapibus enim in posuere</p>
            <Button onClick={handleClick}>Learn more</Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 max-w-[400px] md:max-w-[1000px] mx-auto">
        <div className="flex md:h-32">
          <h1 className="border bg-[#00215B] flex flex-col w-44 h-42 text-white text-5xl font-semibold p-7">147 <span className="text-xs w-">Completed Projects</span></h1>
          <h1 className="border bg-[#D2153D] flex flex-col w-44 h-42 text-white text-5xl font-semibold p-7">25+ <span className="text-xs w-">Years of Experience</span></h1> 
        </div>
        <div className="border border-t-4 border-t-[#00215B] bg-white py-4 px-6 space-y-2 md:space-y-6 md:w-2/5">
          <h1 className="text-[#00215B] text-2xl">We Construct and Manage Places and Infrastructures</h1>
          <ul>
            <li className="flex space-x-2">
              <Image src='/assets/images/hat.svg' alt='/' width={40} height={40} />
              <div>
                <h2 className="font-semibold text-[#00215B]">General Contract</h2>
                <p className="text-[#41444B]">Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum</p>
              </div>
            </li>
            <li className="flex space-x-2">
              <Image src='/assets/images/steel-rule.svg' alt='/' width={40} height={40} />
              <div>
                <h2 className="font-semibold text-[#00215B]">Project Planning</h2>
                <p className="text-[#41444B]">Nullam commodo tincidunt nisl, nec vehicula dui interdum nec</p>
              </div>
            </li>
            <li className="flex space-x-2">
              <Image src='/assets/images/measuring-tool.svg' alt='/' width={40} height={40} />
              <div>
                <h2 className="font-semibold text-[#00215B]">Refurbishment</h2>
                <p className="text-[#41444B]">Sed vitae aliquet ipsum, ut ornare lectus. Proin sed sem risus. Sed nunc</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </section>
  )
}

export default Hero;