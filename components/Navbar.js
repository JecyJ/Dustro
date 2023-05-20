import React from 'react'
import {BsTwitter} from 'react-icons/bs'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'
import Image from 'next/image'

const Navbar = () => {
  return (
    <section className='w-full h-screen'>
        <div className='max-w-[400px] md:max-w-[1170px] m-auto'>
            <div className='flex flex-row justify-between'>
                <div className='flex items-center'>
                    <h1>SUPPORT</h1>
                    <h1>PARTNERS</h1>
                    <h1>CAREERS</h1>
                </div>
                <div className='flex items-center'>
                    <BsTwitter />
                    <FaFacebookF />
                    <FaLinkedinIn />
                    <BsYoutube />
                </div>
            </div>
            <div>
                <Image src='/assets/images/dustro.png' alt='/' width={100} height={100} />
                <h1>Home</h1>
                <h1>Services</h1>
                <h1>Pages</h1>
                <h1>News</h1>
                <h1>contacts</h1>
            </div>
        </div>
    </section>
  )
}

export default Navbar;