'use client'

import { useState } from 'react';
import Image from 'next/image';
import { FaQuoteRight } from 'react-icons/fa';
import TestimonialsData from './TestimonialsData';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClickNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % TestimonialsData.length);
  };

  const handleClickPrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? TestimonialsData.length - 1 : prevSlide - 1
    );
  };

  const testimonial = TestimonialsData[currentSlide];

  return (
    <div className="flex items-center w-full">
      <div className="slider-container">
        <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {TestimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="slide">
              <Image
                className="h-5/6 md:h-96 w-52 md:w-80"
                src={testimonial.image}
                width={500}
                height={500}
              />
              <div className="space-y-1 md:space-y-6">
                <FaQuoteRight
                  className="border w-10 md:w-16 h-10 md:h-16 p-2 md:p-5 text-white bg-[#00215B]"
                  size={10}
                />
                <p className="text-sm md:text-xl">{testimonial.paragraph}</p>
                <div className="text-left">
                  <h1 className="font-semibold text-xl md:text-3xl">{testimonial.name}</h1>
                  <h2 className="text-[#00215B] text-sm md:text-2xl font-medium">
                    {testimonial.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="prev-button" onClick={handleClickPrev}>
        Prev
      </button>
      <button className="next-button" onClick={handleClickNext}>
        Next
      </button>
    </div>
  );
};

export default TestimonialSlider;
