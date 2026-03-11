import React from 'react'
import Heading from '../SectionHeading/Heading'

const Catagories = () => {
    const catagory = [
        {
            title:"Mobile",
            src:"/samsung.png"
        },
        {
            title:"Cosmetics",
            src:"/samsung.png"
        },
        {
            title:"Electronics",
            src:"/samsung.png"
        },
        {
            title:"Furniture",
            src:"/samsung.png"
        },
        {
            title:"Watches",
            src:"/samsung.png"
        },
        {
            title:"Decor",
            src:"/samsung.png"
        },
        {
            title:"Accessories",
            src:"/samsung.png"
        },
        
    ]
  return (
    <section>
      <div className="container">
        <Heading title="Shop From" highlight="Top Categories"/>
        <div className='grid gap-x-2.5 grid-cols-3 md:grid-cols-5 lg:grid-cols-7'>
            {
               catagory.map((items)=>(
                <div key={items.title} className='mt-10 flex flex-col items-center'>
            <div className='bg-theme flex justify-center items-center w-28 h-28 sm:w-32 sm:h-32 rounded-full hover:shadow-2xl hover:border-2 hover:border-brand'>
                <img src={items.src} alt="phone" className='w-auto h-auto max-w-4/5 max-h-4/5'/>
            </div>
            <div className='mt-5 text-base font-medium font-primary'>
                <h3>{items.title}</h3>
            </div>
        </div>
               ))
            }
        </div>
      </div>
    </section>
  )
}

export default Catagories
