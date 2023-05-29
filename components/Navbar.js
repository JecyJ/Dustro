'use client'

import {BsTwitter} from 'react-icons/bs'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
    const [nav, setNav] = useState()

    const handleNav = () => {
        return setNav(prevNav => !prevNav)
    }


  return (
    <section className='sticky z-[2] shadow-2xl w-full'>
        <div className='max-w-[400px] md:max-w-[1100px] m-auto md:space-y-2 py-3'>

            {/* desktop view */}
            <div className='hidden md:flex flex-row  justify-between border-b border-slate-500 text-slate-500 pb-1'>
                <div className='flex items-center md:w-2/6 justify-between'>
                    <Link href='/support'>
                        <h1>SUPPORT</h1>
                    </Link>
                    <Link href='/partners'>
                        <h1>PARTNERS</h1>
                    </Link>
                    <Link href='/careers'>
                        <h1>CAREERS</h1>
                    </Link>                    
                </div>
                <div className='flex items-center md:w-48 justify-between text-[#00215B]'>
                    <Link href='/twitter'>
                        <BsTwitter size={28} />
                    </Link>
                    <Link href='/facebook'>
                        <FaFacebookF size={28} />
                    </Link>
                    <Link href='/linkedin'>
                        <FaLinkedinIn size={28} />
                    </Link>
                    <Link href='/youtube'>
                        <BsYoutube size={28} />
                    </Link>
                </div>
            </div>
            <div className='flex flex-row justify-between'>
                <Link href='/'>
                    <h1 className='text-[#00215B] text-3xl font-semibold'>Dustro</h1>
                </Link>                
                <div className='hidden md:flex items-center md:w-2/4 justify-between text-[#00215B]'>
                    <Link href='/'>
                        <h1>Home</h1>
                    </Link>
                    <Link href='/aboutus'>
                        <h1>About Us</h1>
                    </Link>
                    <Link href='/pages'>
                        <h1>Pages</h1>
                    </Link>
                    <Link href='/news'>
                        <h1>News</h1>
                    </Link>
                    <Link href='/contacts'>
                        <h1>Contacts</h1>
                    </Link>
                </div>
                <div onClick={handleNav} className='md:hidden flex items-center'>
                    <HiOutlineMenuAlt1 size={24} />
                </div>         
            </div>


            {/* mobile view */}
            <div className={nav ? 'fixed md:hidden top-0 right-0 left-0 bottom-0 ease-in-out duration-500 bg-gradient-to-r from-[#00215B] via-[#41444B] to-[#D2153D]' : 'fixed md:hidden bottom-[-100%]  ease-in-out duration-500 bg-blue-400'}>
                <div className='max-w-[400px] m-auto py-3 flex justify-between items-center w-full'>
                    <Link href='/'>
                        <h1 className='text-slate-300 text-4xl font-semibold'>Dustro</h1>
                    </Link>     
                    <div onClick={handleNav} className='text-white'>
                    <AiOutlineClose size={24} />      
                    </div>
                </div>
                <div className='text-slate-300 text-5xl mt-8 max-w-[400px] m-auto'>
                    <Link href='/'>
                        <h1 onClick={handleNav}>Home</h1>
                    </Link>
                    <Link href='/aboutus'>
                        <h1 onClick={handleNav} className='my-7'>About Us</h1>
                    </Link>
                    <Link href='/pages'>
                        <h1 onClick={handleNav}>Pages</h1>
                    </Link>
                    <Link href='/news'>
                        <h1 onClick={handleNav} className='my-7'>News</h1>
                    </Link>
                    <Link href='/contacts'>
                        <h1 onClick={handleNav}>Contacts</h1>
                    </Link>
                </div>

                <div className='flex text-[#979ba3] mt-8 max-w-[400px] m-auto justify-between'>
                    <Link href='/support'>
                        <h1 onClick={handleNav}>SUPPORT</h1>
                    </Link>
                    <Link href='/partners'>
                        <h1 onClick={handleNav}>PARTNERS</h1>
                    </Link>
                    <Link href='/careers'>
                        <h1 onClick={handleNav}>CAREERS</h1>
                    </Link>                    
                </div>

                <div className='flex w-48 justify-between mt-8 max-w-[400px] m-auto text-[#706edd]'>
                    <Link href='/twitter'>
                        <BsTwitter onClick={handleNav} size={28} />
                    </Link>
                    <Link href='/facebook'>
                        <FaFacebookF onClick={handleNav} size={28} />
                    </Link>
                    <Link href='/linkedin'>
                        <FaLinkedinIn onClick={handleNav} size={28} />
                    </Link>
                    <Link href='/youtube'>
                        <BsYoutube onClick={handleNav} size={28} />
                    </Link>
                </div>
            </div>    
        </div>
    </section>
  )
}

export default Navbar;