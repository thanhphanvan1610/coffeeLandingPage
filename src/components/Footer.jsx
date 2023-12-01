import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] text-black rouned-t-3xl mt-8 md:mt-0'>
            <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
                <div className='w-full md:w-1/4'>
                    <h1 className='font-semibold text-xl pb-4'>CafePulse</h1>
                    <p className='text-sm'>Wellcome to our coffee haven! Exploreour aromatic brews, Savor, arttisanal flavors, and discover the perfect roas to elevate your daily ritual</p>
                </div>
                <div>
                    <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Links</h1>
                    <nav className='flex flex-col gap-2 '>
                        <a className='hover:text-backgroundColor transition-all cursor-pointer' href="/">Menu</a>
                        <a className='hover:text-backgroundColor transition-all cursor-pointer' href="about">About Us</a>
                        <a className='hover:text-backgroundColor transition-all cursor-pointer' href="products">Products</a>
                        <a className='hover:text-backgroundColor transition-all cursor-pointer' href="previews">Previews</a>
                    </nav>
                </div>
                <div>
                    <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Menu</h1>
                    <nav className='flex flex-col gap-2 '>
                        <a className='hover:text-backgroundColor transition-all cursor-pointer' href="/">Capuchino</a>
                        <a className='hover:text-backgroundColor transition-all cursor-pointer' href="/">Milktea</a>
                        <a className='hover:text-backgroundColor transition-all cursor-pointer' href="/">Bac xiu</a>

                    </nav>
                </div>
                <div>
                    <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Contact Us</h1>
                    <nav className='flex flex-col gap-2 '>
                        <a className='hover:text-backgroundColor transition-all cursor-pointer' href="/">CafePulse@gmail.com</a>
                        <a className='hover:text-backgroundColor transition-all cursor-pointer' href="/">+84 357 631 034</a>
                        <a className='hover:text-backgroundColor transition-all cursor-pointer' href="/">Social Media</a>

                    </nav>
                </div>


            </div>
            <div>
                <p className='text-center py-4'>@copyright developed by <span className='text-backgroundColor'>ThanhDev</span> All rights reservered</p>
            </div>
        </div>
    )
}

export default Footer
