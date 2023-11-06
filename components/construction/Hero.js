'use client'

import Button from "@components/reusable files/Button";
import Image from "next/image";


const Hero = () => {
  const handleClick = () => {
    console.log('Button clicked')
  }
  return (
    <section className="relative w-full h-screen space-y-3 lg:space-y-20 mb-32 md:mb-56 lg:mb-20 px-4">
      <div>
        <Image className="absolute z-[-2] bg-cover" src='/assets/images/office-building.png' alt='/' layout="fill" priority />      
        <div className="pt-10 md:pt-4 bg-cover max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1200px] m-auto">    
          <div className="space-y-3">
            <h1 className="text-[#00215B] text-4xl md:text-6xl font-semibold">Construction solution <br /> for everyone</h1>
            <p className="text-[#00215B]">To continually exceed our customers' expectation by providing timely, efficient and smart services in the oil & Gas sector using highly motivated personnel and strategic technicalities. To render quality support Services to our client, enabling them to concentrate on core business operations.</p>
            <Button onClick={handleClick}>Learn more</Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1200px] m-auto mx-auto">
        <div className="flex md:h-32">
          <h1 className="border bg-[#00215B] flex flex-col w-44 h-42 text-white text-5xl font-semibold p-7">147 <span className="text-xs w-">Completed Projects</span></h1>
          <h1 className="border bg-[#D2153D] flex flex-col w-44 h-42 text-white text-5xl font-semibold p-7">25+ <span className="text-xs w-">Years of Experience</span></h1> 
        </div>
        <div className="border border-t-4 border-t-[#00215B] bg-white py-4 px-6 space-y-2 md:space-y-6 md:w-2/3">
          <h1 className="text-[#00215B] text-lg lg:text-2xl">We Construct and Manage Places and Infrastructures</h1>
          <ul className="text-base">
            <li className="flex space-x-2">
              <Image src='/assets/images/hat.svg' alt='/' width={30} height={30} />
              <div>
                <h2 className="font-semibold text-[#00215B]">General Contract</h2>
                <p className="text-[#41444B]">Earth work, Grading, Subgrade, Subbase, Asphalt binder and wearing</p>
              </div>
            </li>
            <li className="flex space-x-2">
              <Image src='/assets/images/steel-rule.svg' alt='/' width={30} height={30} />
              <div>
                <h2 className="font-semibold text-[#00215B]">Project Planning</h2>
                <p className="text-[#41444B]">We plan with you till the end..For a healthy tank</p>
              </div>
            </li>
            <li className="flex space-x-2">
              <Image src='/assets/images/measuring-tool.svg' alt='/' width={30} height={30} />
              <div>
                <h2 className="font-semibold text-[#00215B]">Refurbishment</h2>
                <p className="text-[#41444B]">We provide a lasting solution to your waste problem.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </section>
  )
}

export default Hero;