'use client'

import Button from "@components/reusable files/Button";
import Image from "next/image";


const Hero = () => {
  const handleClick = () => {
    console.log('Button clicked')
  }
  return (
    <section className="w-full h-screen">
      <Image src='/assets/images/office-building.png' alt='/' width={1500} height={1500} priority />
      <div className="bg-cover max-w-[400px] md:max-w-[1100px] m-auto">    
        <div>
          <h1>Construction solution for everyone</h1>
          <p>In id enim odio. Nunc aliquet diam tortor, at venenatis urna sagittis non. Suspendisse sodales nulla sit amet sem condimentum, ac euismod nibh elementum. Praesent eu urna at sem sodales venenatis. Mauris efficitur dapibus enim in posuere</p>
          <Button onClick={handleClick}>Learn more</Button>
        </div>
      </div>
    </section>
  )
}

export default Hero;