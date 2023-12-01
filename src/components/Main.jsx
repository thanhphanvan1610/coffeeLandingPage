import React from 'react'
import Button from '../layout/Button'

const Main = () => {
  return (
    <>
    <div className='min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E]'>
        <div className='w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0'>
            <h1 className='mt-6 font-semibold text-5xl text-center lg:text-start leading-tight'>Start your day with a steaming cup of coffee</h1>
            <p>Boost your producivity and build your mood with a glass of coffee in the morning</p>
            <div className='flex flex-row gap-6'>
            <Button title="ADD TO CART" />
            <Button title="MORE MENU" />
        </div>
        </div>
        
        <div className='relative'>
            <img className='w-700' src="https://phindelicafe.com.vn/wp-content/uploads/2021/05/CAPPUCINO-3.png" alt="img" />
            <div className='absolute bg-white px-8 py-2 top-5 right-0 rounded-full shadow-[0_20px_50px_rgba(8, _112, _184,_0.7)]'>
                <h2>14K</h2>
            </div>
            <div className='absolute bg-white px-8 py-2 bottom-0 -left-10 rounded-full'>
                <h2>Cappuchino</h2>
            </div>
        </div>
    </div>
    </>
  )
}

export default Main
