import React from 'react'
import ReviewCard from '../layout/ReviewCard'

const Reviews = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor'>
            <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-24'>Customer's Reviews</h1>
            <div className='flex flex-col lg:flex-row gap-5 justify-center py-4 my-8'>
                <ReviewCard img="https://www.shutterstock.com/image-photo/headshot-satisfied-cheerful-handsome-man-260nw-793117360.jpg" title="Phan Van Thanh" />
                <ReviewCard img="https://lh3.googleusercontent.com/a/ACg8ocJW7bNJ8sjkhoEUc5qkLseAzs8aj7TZDaJgDtW0XEG9N3Y=s288-c-no" title="Phan Van Thanh" />
                <ReviewCard img="https://lh3.googleusercontent.com/a/ACg8ocJW7bNJ8sjkhoEUc5qkLseAzs8aj7TZDaJgDtW0XEG9N3Y=s288-c-no" title="Phan Van Thanh" />
            </div>
        </div>
    )
}

export default Reviews
