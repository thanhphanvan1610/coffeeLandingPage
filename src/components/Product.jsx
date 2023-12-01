import React from 'react'
import ProductCard from '../layout/ProductCard'

const Product = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor'>
      <h1 className='font-semibold text-4xl text-center lg:mt-14 mt-24 mb-8'>Our products</h1>
      <div className='flex flex-col lg:flex-row gap-12 justify-center'>
        <ProductCard img="https://www.pngitem.com/pimgs/m/456-4564836_coffee-cup-drink-free-photo-transparent-background-vector.png" title="Nespresso" />
        <ProductCard img="https://www.pngitem.com/pimgs/m/456-4564836_coffee-cup-drink-free-photo-transparent-background-vector.png" title="Nespresso" />
        <ProductCard img="https://www.pngitem.com/pimgs/m/456-4564836_coffee-cup-drink-free-photo-transparent-background-vector.png" title="Nespresso" />
        
      </div>
    </div>
  )
}

export default Product
