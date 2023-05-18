import React from 'react'

function Hero() {
  return (
    <div className='flex text-green-800 rounded-sm bg-red-100 items-center justify-evenly'>
        <div className='m-4 flex flex-col gap-4'>
        <h1 className='text-3xl lg:text-6xl text-bold'>Grab Upto 50% Off On Selected Headphone</h1>
        <button className='bg-green-800 p-3 text-white w-32 rounded-full'>Buy Now</button>
        </div>
        <div >
            <img 
            className='hidden lg:block'
            src="hero.png"
            />
        </div>
    </div>
  )
}

export default Hero