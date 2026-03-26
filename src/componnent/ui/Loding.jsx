import React from 'react'

const Loding = () => {
  return (
    <div className='w-full border border-primary/20 rounded-2xl overflow-hidden animate-pulse'>
  <div className='flex justify-center bg-gray-300 h-40'></div>
  <div className='p-3 space-y-3'>
    <div className='h-4 bg-gray-300 rounded w-3/4'></div>
    <div className='flex gap-2'>
      <div className='h-4 bg-gray-300 rounded w-20'></div>
      <div className='h-4 bg-gray-300 rounded w-16'></div>
    </div>

  </div>
</div>
  )
}

export default Loding
