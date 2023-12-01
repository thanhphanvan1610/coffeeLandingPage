import React from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import {BsStarFill, BsStarHalf} from 'react-icons/bs'
const ReviewCard = ({ img, title }) => {
    return (
        <div className='flex flex-col w-full lg:w-2/6 bg-white p-3 rounded-lg gap-5'>
            <div className='flex flex-row items-center lg:justify-start justify-center'>
                <div className='w-1/4'>
                    <img className='rounded-full' src={img} alt="img" />
                </div>
                <div className='mx-3'>
                    <h2 className='font-sembold text-lg'>{title}</h2>
                    <div className='flex flex-row gap-1'>
                        <BsStarFill className='text-brightColor' />
                        <BsStarFill className='text-brightColor' />
                        <BsStarFill className='text-brightColor' />
                        <BsStarFill className='text-brightColor' />
                        <BsStarHalf className='text-brightColor' />
                    </div>
                </div>
                <span className='ml-16'>
                    <FaQuoteRight className='text-backgroundColor' size={42} />
                </span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsum vero officiis ducimus. Aperiam voluptates blanditiis nobis eligendi alias iure
            </p>
        </div>
    )
}

export default ReviewCard
