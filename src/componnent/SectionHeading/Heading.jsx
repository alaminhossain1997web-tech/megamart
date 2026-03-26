import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
const Heading = ({ title, highlight, afterwidth, onViewAll, buttonText }) => {
  return (
    <div
      className={`flex justify-between items-center 
      gap-2 pb-4 border-b border-b-primary/20 relative 
      after:absolute ${afterwidth} after:h-1 after:left-0 after:bottom-0 after:bg-brand`}
    >
      <h2 className="heading flex items-center gap-1 text-sm sm:text-lg md:text-xl lg:text-2xl font-primary">
        {title}
        <span className="text-brand whitespace-nowrap">
          {highlight}
        </span>
      </h2>

      <button
        onClick={onViewAll}
        className="flex items-center gap-1 text-xs sm:text-sm md:text-base font-medium whitespace-nowrap"
      >
        {buttonText}
        <BiChevronRight className="text-brand text-lg sm:text-xl md:text-2xl" />
      </button>
    </div>
  )
}

export default Heading;
