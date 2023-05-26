'use client'

import Link from 'next/link';
import {BsTwitter} from 'react-icons/bs'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'
import { useState } from 'react';


const Footer = () => {
    const [footer, setFooter] = useState()

    const handleFooter = () => {
        return setFooter(prevFooter => !prevFooter)
    }


  return (
    <section className='w-full h-auto my-20'>
        <div className='flex md:flex-row flex-col w-full'>
            <div className='text-white text-center p-10 space-y-4 bg-[#D2153D]'>
                <Link href='/'>
                    <h1 className='text-4xl font-semibold'>Dustro</h1>
                </Link>
                <div>
                    <h2 className='text-sm md:text-base font-normal'>CALL US TODAY</h2>
                    <p className='text-2xl md:text-3xl font-semibold'>+ 1 634 7638 654</p>
                </div>
                <div className='flex justify-between max-w-[250px] m-auto text-[#706edd]'>
                    <Link href='/twitter'>
                        <BsTwitter className='border rounded-full w-8 h-8 p-1 bg-white' onClick={handleFooter} size={20} />
                    </Link>
                    <Link href='/facebook'>
                        <FaFacebookF className='border rounded-full w-8 h-8 p-1 bg-white' onClick={handleFooter} size={20} />
                    </Link>
                    <Link href='/linkedin'>
                        <FaLinkedinIn className='border rounded-full w-8 h-8 p-1 bg-white' onClick={handleFooter} size={20} />
                    </Link>
                    <Link href='/youtube'>
                        <BsYoutube className='border rounded-full w-8 h-8 p-1 bg-white' onClick={handleFooter} size={20} />
                    </Link>
                </div>
                <p>Fusce eu magna quis velit efficitur rhoncus. Vivamus vehicula, neque a velit</p>
            </div>
            <div className='flex items-center justify-center bg-[#00215B] text-white w-full space-y-5 md:space-x-8'>
                <div className=''>
                    <h1 className='text-lg'>Quick Links</h1>
                    <ul className='text-xs'>
                        <Link href='/company'>
                            <li>About Company</li>
                        </Link>
                        <Link href='/services'>
                            <li>Our Services</li>
                        </Link>
                        <Link href='/projects'>
                            <li>Our Projects</li>
                        </Link>
                        <Link href='/pricings'>
                            <li>Pricings</li>
                        </Link>
                        <Link href='/contacts'>
                            <li>Contacts</li>
                        </Link>     
                    </ul>
                </div>

                <div className=''>
                    <h1 className='text-lg'>Clinets Support</h1>
                    <ul className='text-xs'>
                        <Link href='/career'>
                            <li>careers</li>
                        </Link>
                        <Link href='/process'>
                            <li>Our Process</li>
                        </Link>
                        <Link href='/faqs'>
                            <li>FAQs</li>
                        </Link>
                        <Link href='/testimonials'>
                            <li>Clients Testimonials</li>
                        </Link>
                        <Link href='/blog'>
                            <li>Our Blog</li>
                        </Link>     
                    </ul>
                </div>

                <div>
                    <h1 className='text-lg'>Our News</h1>
                    <ul>
                        <li>
                            <h3 className='text-sm'>Agile Construction <br /> Management Building</h3>
                            <div className='flex space-x-4 text-xs'>
                                <p>20 Nov 2020</p>
                                <p>by merkulove</p>
                            </div>
                        </li> 
                        <li>
                            <h3 className='text-sm'>Top Sass Construction <br /> Products Information</h3>
                            <div className='flex space-x-4 text-xs'>
                                <p>29 Nov 2020</p>
                                <p>by merkulove</p>
                            </div>
                        </li> 
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer;