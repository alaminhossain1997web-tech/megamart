import React from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { MdAttachMoney, MdOutlineStarBorder } from 'react-icons/md'
import { data, Link } from 'react-router'

const Card = ({product}) => {
    return (
        <div className='w-full border border-primary/20 rounded-2xl overflow-hidden hover:shadow-xl relative'>
            <Link to={`/shop/productdetails/${product?.id}`} className='flex justify-center bg-secondary py-3.5 '>
                <img src={product?.thumbnail} alt="phone" className='w-auto max-w-full' />
            </Link>
            <div className='p-3'>
                <h3 className='text-nowrap'>{product?.title}</h3>
                <div className='flex gap-2.5 pb-2 border-b border-primary/20'>
                    <p className='font-bold text-base flex items-center'><MdAttachMoney className='text-lg' />{product?.price}</p>
                    <p className=' line-through flex items-center'><MdAttachMoney className='text-lg' />{Math.floor(product?.discountPercentage +20)}</p>
                </div>
                <div className='space-y-2 m-auto sm:flex sm:justify-between sm:items-center sm:pt-3'>
                    <p className=' font-semibold text-base text-[#249B3E] flex items-center gap-1.5 text-amber-500'>Rating: <span className='flex items-center gap-1.5'><MdOutlineStarBorder className='text-amber-500'/> {product?.rating}</span> </p>
                    

                </div>
                <button to="/" className='flex items-center gap-1.5 bg-brand text-theme font-semibold p-1.5 rounded-2xl hover:bg-brand/20 hover:text-black mt-2'>
                    <IoCartOutline className='text-lg font-medium sm:font-semibold sm:text-2xl'/> 
                    Add to Cart</button>
                {
                    product?.discountPercentage
                    &&
                    <div className='bg-brand rounded-tr-2xl w-fit rounded-bl-2xl  text-theme p-3 absolute w-16 top-0 right-0'>
                    <p>{product?.discountPercentage}%off</p>
                </div>
                }
                
            </div>

        </div>
    )
}

export default Card
