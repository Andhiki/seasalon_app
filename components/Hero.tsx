import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className='flex flex-column'>
        <div className='absolute -z-10 w-full'>
            <Image 
                src="/hero-bg.jpg"
                alt='Hero Background'
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
            />
        </div>
        <div className="max-container padding-container flex flex-col py-10 pb-32">
            <Image src="/seasalon-logo-black.svg" alt="logo" width={500} height={29} />
            <p className='flex justify-center font-bold text-2xl'>
                Beauty and Elegance Redefined
            </p>
        </div>  
    </section>
  )
}

export default Hero