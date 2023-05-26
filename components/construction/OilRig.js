'use client'

import React, { useRef } from 'react'

const OilRig = () => {
    const videoRef = useRef()
  return (
    <section className='relative w-full h-auto my-20'>
        <video ref={videoRef} autoPlay muted loop>
          <source src="https://www.youtube.com/watch?v=iHzPfFu6IdE" type="video/mp4" />
        </video>
    </section>
  )
}

export default OilRig;