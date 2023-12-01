import React from 'react'
import MenuCard from '../layout/MenuCard'
import milktea from '../assets/milktea.png'
const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor'>
      <h1 className='font-semibold text-center text-4xl mt-24 mb-8'>Our Menu</h1>
      <div className='flex flex-wrap pb-8 gap-8 justify-center'>
        <MenuCard img="https://i.pinimg.com/originals/6c/3e/99/6c3e998509b901b99286c526a57ca949.jpg" title="Espresso" />
        <MenuCard img="https://i.pinimg.com/originals/6c/3e/99/6c3e998509b901b99286c526a57ca949.jpg" title="Espresso" />
        <MenuCard img="https://i.pinimg.com/originals/6c/3e/99/6c3e998509b901b99286c526a57ca949.jpg" title="Espresso" />
        <MenuCard img="https://i.pinimg.com/originals/6c/3e/99/6c3e998509b901b99286c526a57ca949.jpg" title="Espresso" />
        <MenuCard img="https://i.pinimg.com/originals/6c/3e/99/6c3e998509b901b99286c526a57ca949.jpg" title="Espresso" />
        <MenuCard img="https://i.pinimg.com/originals/6c/3e/99/6c3e998509b901b99286c526a57ca949.jpg" title="Espresso" />
      </div>
    </div>
  )
}

export default Menu
