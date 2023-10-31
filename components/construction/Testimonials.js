'use client'

import Image from 'next/image';
import {FaQuoteRight} from 'react-icons/fa'
// import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'
// import { useRef, useState } from 'react';
import TestimonialsData from './TestimonialsData';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const Testimonials = () => {
  // const sliderRef = useRef(null);
  // const [sliderPosition, setSliderPosition] = useState(0);

  // const handlePrev = () => {
  //   const slideWidth = sliderRef.current.offsetWidth;
  //   const newPosition = Math.min(sliderPosition + slideWidth, 0);
  //   setSliderPosition(newPosition);
  // };

  // const handleNext = () => {
  //   const slideWidth = sliderRef.current.offsetWidth;
  //   const numItems = TestimonialsData.length;
  //   const sliderWidth = slideWidth * numItems;
  //   const newPosition = Math.max(sliderPosition - slideWidth, -sliderWidth);
  //   setSliderPosition(newPosition);

  //   // setCurrentItemIndex((prevIndex) => prevIndex + 1);
  // };


  return (
    <section className='w-full h-auto my-28 md:mt-96'>
        <div className='max-w-[450px] md:max-w-[1000px] mx-auto text-center space-y-5 md:space-y-7'>
          <h2 className='text-[#D2153D]'>TESTIMONIALS</h2>
          <h1 className='text-3xl md:text-5xl font-semibold'>Our Clients Say</h1>
          <Splide options={{
            perPage:1,
            arrows:true,
            pagination: false,
            drag:"free",
          }}
            className="transition-transform duration-500 ease-in"                
          >
            {TestimonialsData.map((item) => (
              <SplideSlide key={item.id} className="w-full px-12">
                <div className="flex items-center w-full">
                  <Image
                    className="h-5/6 md:h-96 w-52 md:w-80"
                    src={item.image}
                    width={500}
                    height={500}
                  />
                  <div className="space-y-1 md:space-y-6 text-left">
                    <FaQuoteRight
                      className="border w-10 md:w-16 h-10 md:h-16 p-2 md:p-5 text-white bg-[#00215B]"
                      size={10}
                    />
                    <p className="text-sm md:text-xl">{item.paragraph}</p>
                    <div>
                      <h1 className="font-semibold text-xl md:text-3xl">{item.name}</h1>
                      <h2 className="text-[#00215B] text-sm md:text-2xl font-medium">{item.title}</h2>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>          
        </div>
    </section>    
  )
}

export default Testimonials;

// <button 
//   onClick={handlePrev} 
//   className="absolute z-[2] top-1/2 text-[#00215B] transform -translate-y-1/2 left-0"
//   disabled={sliderPosition >= 0}
// >
//   <BsArrowLeftCircle size={30} />
// </button>


// <button 
// onClick={handleNext} 
// className="absolute z-[2] top-1/2 text-[#00215B] transform -translate-y-1/2 right-0"
// // disabled={currentItemIndex === TestimonialsData.length - 1}
// >
// <BsArrowRightCircle size={30} />
// </button>

// style={{ transform: `translateX(${sliderPosition}px)` }}
//                 ref={sliderRef}


// <div className='relative flex flex-col'>
//             <div className="relative w-full overflow-hidden">
              
//             </div>        



//           </div>