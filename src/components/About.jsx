import React from 'react'
import Button from '../layout/Button'
const About = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor'>
            <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8'>About Us</h1>
            <div className='flex flex-col lg:flex-row items-center gap-5'>
                <div className='w-full lg:w-2/4 p-4 space-y-3'>
                    <img src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Coffee-PNG/Coffee_Decorative_Text_PNG_Vector_Clipart.png?m=1434276736" alt="" />
                </div>
                <div className='w-full lg:w-2/4 p-4 space-y-3'>
                    <h2 className='font-semibold text-3xl'>What Makes Our Coffee Special?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae tempore debitis, quibusdam aut molestias adipisci quas repudiandae, architecto quis excepturi rerum incidunt. Doloribus, obcaecati quasi! Laborum odit maxime asperiores ipsum.
                    </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda omnis quaerat, dolorem vel maiores quas nesciunt nihil error expedita quasi? Quis accusantium minima enim animi vitae corrupti pariatur, reiciendis excepturi.
                        Sed velit quo veritatis! Laborum delectus consequuntur quaerat officiis quidem voluptatum quisquam distinctio nemo incidunt voluptas? Sunt!</p>
                    <Button title="Learn More" />
                </div>

            </div>
        </div>
    )
}

export default About
