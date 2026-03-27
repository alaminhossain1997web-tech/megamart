import React from 'react'
import Heading from '../SectionHeading/Heading'
import { useGetProductsQuery } from '../../Services/api';
import Card from './Card';
import Loding from './Loding';

const Gadget = () => {
   const { data, isError, isLoading } = useGetProductsQuery({
      limit: 6,
      category: "laptops",
    });
  const products = data?.products ?? [];
    
  return (
    <section className='py-20'>
      <div className="container">
        <Heading
          title=" Hot Electronics"
          highlight="Device"
          afterwidth="after:w-42" />

          {isLoading ? (
          <Loding />
        ) : isError ? (
          <p className='mt-8 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600'>
            Electronics could not be loaded right now.
          </p>
        ) : (
          <div className='grid grid-cols-2 sm:grid-cols-5 gap-6'>
            {products.map((item) => (
              <Card key={item.id} product={item} />
            ))}
          </div>
        )}
      </div>

    </section>
  )
}

export default Gadget
