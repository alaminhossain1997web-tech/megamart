
import React, { useState } from 'react'
import Heading from '../SectionHeading/Heading'
import { useGetcategorylistQuery } from '../../Services/api';

const Catagories = () => {
  const { data } = useGetcategorylistQuery();
  const [showAll, setShowAll] = useState(false);
  const visibleData = showAll ? data : data?.slice(0, 7);

  return (
    <section className='py-20'>
      <div className="container">

        <Heading 
          title="Shop From" 
          highlight="Top Categories"
          onViewAll={() => setShowAll(!showAll)}
          buttonText={showAll ? "Show Less" : "View All"}
        />

        <div className='grid gap-x-2 grid-cols-3 md:grid-cols-5 lg:grid-cols-7'>
          {
            visibleData?.map((items) => (
              <div key={items} className='mt-10 flex flex-col items-center'>
                
                <div className='bg-theme flex justify-center items-center w-28 h-28 sm:w-32 sm:h-32 rounded-full hover:shadow-2xl hover:border-2 hover:border-brand'>
                  <img 
                    src="/samsung.png" 
                    alt="category" 
                    className='w-auto h-auto max-w-4/5 max-h-4/5'
                  />
                </div>

                <div className='mt-5 text-base font-medium font-primary'>
                  <h3>{items}</h3>
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

