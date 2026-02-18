import React from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { Link } from 'react-router'

const Card = () => {
    return (
        <div className='w-full border border-primary/20 rounded-2xl overflow-hidden hover:shadow-xl relative'>
            <Link to="/" className='flex justify-center bg-secondary py-3.5 '>
                <img src="/samsung.png" alt="phone" className='w-auto max-w-full' />
            </Link>
            <div className='p-3'>
                <h3>Galaxy S22 Ultra</h3>
                <div className='flex gap-2.5 pb-2 border-b border-primary/20'>
                    <p className='font-bold text-base'>₹32999</p>
                    <p className=' line-through'>₹74999</p>
                </div>
                <div className='flex justify-between items-center pt-3'>
                    <p className=' font-semibold text-base text-[#249B3E]'>Save - ₹32999</p>
                    <Link to="/" className='flex items-center gap-1.5 bg-brand text-theme font-semibold p-1.5 rounded-2xl hover:bg-brand/20 hover:text-black'>
                    <IoCartOutline className='font-semibold text-2xl'/> 
                    Add to Cart</Link>

                </div>
                <div className='bg-brand rounded-tr-2xl rounded-bl-2xl  text-theme p-3 absolute w-14 top-0 right-0'>
                    <p>56% OFF</p>
                </div>
            </div>

        </div>
    )
}

export default Card
