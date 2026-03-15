import React from 'react'
import Heading from '../SectionHeading/Heading'

const DailyEssentials = () => {
  return (
    <section className='py'>
      <div className="container">
        <Heading
          title="Daily"
          highlight="Essentials"
          afterwidth="after:w-42" />

        <div className='grid grid-cols-2 sm:grid-cols-6 items-center text-center'>
          <div className='m-auto'>
         <div className='mb-5 mt-10 max-w-46.75 p-3.5 items-center'>
          <img src="/dailyessential.png" alt="dailyessential" className='w-full' />
         </div>
         <div className='text-center items-center'>
          <h4 className='font-semibold text-base '>Daily Essentials</h4>
          <p className='font-bold text-[20px]'>UP to 50% OFF</p>
         </div>
        </div>

         <div className='m-auto'>
         <div className='mb-5 mt-10 max-w-46.75 p-3.5 items-center'>
          <img src="/vegitable.png" alt="vegitable" className='w-full' />
         </div>
         <div className='text-center items-center'>
          <h4 className='font-semibold text-base '>Fruites</h4>
          <p className='font-bold text-[20px]'>UP to 50% OFF</p>
         </div>
        </div>

        <div className='m-auto'>
         <div className='mb-5 mt-10 max-w-46.75 p-3.5 items-center'>
          <img src="/fruites.png" alt="fruites" className='w-full' />
         </div>
         <div className='text-center items-center'>
          <h4 className='font-semibold text-base '>Fruites</h4>
          <p className='font-bold text-[20px]'>UP to 50% OFF</p>
         </div>
        </div>

        <div className='m-auto'>
         <div className='mb-5 mt-10 max-w-46.75 p-3.5 items-center'>
          <img src="/strawberry.png" alt="strawberry" className='w-full' />
         </div>
         <div className='text-center items-center'>
          <h4 className='font-semibold text-base '>Strawberry</h4>
          <p className='font-bold text-[20px]'>UP to 50% OFF</p>
         </div>
        </div>

        <div className='m-auto'>
         <div className='mb-5 mt-10 max-w-46.75 p-3.5 items-center'>
          <img src="/mango.png" alt="mango" className='w-full' />
         </div>
         <div className='text-center items-center'>
          <h4 className='font-semibold text-base '>Mango</h4>
          <p className='font-bold text-[20px]'>UP to 50% OFF</p>
         </div>
        </div>
        
        <div className='m-auto'>
         <div className='mb-5 mt-10 max-w-46.75 p-3.5 items-center'>
          <img src="/cherry.png" alt="cherry" className='w-full' />
         </div>
         <div className='text-center items-center'>
          <h4 className='font-semibold text-base '>Cherry</h4>
          <p className='font-bold text-[20px]'>UP to 50% OFF</p>
         </div>
        </div>

        </div>

      </div>

    </section>
  )
}

export default DailyEssentials
