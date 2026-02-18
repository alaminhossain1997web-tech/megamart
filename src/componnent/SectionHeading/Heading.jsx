import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router'

const Heading = ( {title,highlight,afterwidth}) => {
  return (
    <div className={`flex justify-between items-center pb-4 border-b border-b-primary/20 relative after:absolute ${afterwidth} after:h-1 after:left-0 after:bottom-0 after:bg-brand`}>
      <h2 className=' heading flex items-center font-primary gap-1.5'>{title}
        <span className='text-brand'>{highlight}</span>
      </h2>

      <Link to="/" className='flex items-center gap-2.5 text-medium text-base'>View All <BiChevronRight className='text-brand text-2xl'/></Link>
    </div>
  )
}

export default Heading
