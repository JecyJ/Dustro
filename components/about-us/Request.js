'use client'

import Button from '@components/reusable files/Button';
import Image from 'next/image';
import React, { useState } from 'react'

const Request = () => {
    const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };


  return (
    <section className='relative w-full h-auto px-4'>
        <div className='grid md:grid-cols-2 max-w-[400px] md:max-w-[1000px] mx-auto space-y-5 md:space-y-0 md:space-x-8'>
            <form className="max-w-[400px] md:max-w-[1000px] mx-auto space-y-3">
                <h2 className='text-sm md:text-base text-[#D2153D]'>APPOINTMENT</h2>
                <h1 className='text-3xl md:text-5xl font-semibold text-[#00215B]'>Request a Quote</h1>
                <div className="grid grid-cols-2 grid-row-5 gap-3">
                    <input className="shadow-2xl rounded-2xl h-8 p-5 border border-slate-200" type="fullname" placeholder="Full Name" name="fullname" />
                    <input className="shadow-2xl rounded-2xl h-8 p-5 border border-slate-200" type="email" placeholder="E - mail" name="email" />
                    <input className="shadow-2xl rounded-2xl h-8 p-5 border border-slate-200" type="tel" placeholder="Phone Number" name="phone" />
                    <select className="shadow-2xl rounded-2xl px-5 border-slate-200 text-slate-400" id="selectInput" value={selectedOption} onChange={handleSelectChange}>
                        <option value="" >
                        -- Select --
                        </option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        <option value="option3">Option 4</option>
                        <option value="option3">Option 5</option>
                    </select>
                    <textarea className="col-span-2 row-span-2 shadow-2xl rounded-2xl p-5 border border-slate-200" type="textarea" rows={5} cols={33} placeholder="Enter Your Message Here" name="message" />
                </div>
                <Button>Appointment</Button>
            </form>
            <div className='space-y-5 md:space-y-14 md:py-12'>
                <div className='flex space-x-3'>
                    <Image src='/assets/images/hardhat.svg' alt='/' width={50} height={50} />
                    <div>
                        <h3 className='font-semibold'>High Quality Build</h3>
                        <p className='text-sm md:text-base'>Dustro is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className='flex space-x-3'>
                    <Image src='/assets/images/paint-brush.svg' alt='/' width={50} height={50} />
                    <div>
                        <h3 className='font-semibold'>High Quality Build</h3>
                        <p className='text-sm md:text-base'>Dustro is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className='flex space-x-3'>
                    <Image src='/assets/images/screw-drivers.svg' alt='/' width={50} height={50} />
                    <div>
                        <h3 className='font-semibold'>High Quality Build</h3>
                        <p className='text-sm md:text-base'>Dustro is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Request;

