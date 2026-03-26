import React from 'react'
import Heading from '../SectionHeading/Heading'
import { useGetProductsQuery } from '../../Services/api';
import { Link } from 'react-router';
import { MdAttachMoney, MdOutlineStarBorder } from 'react-icons/md';
import { IoCartOutline } from 'react-icons/io5';
import Card from './Card';
import Loding from './Loding';

const Gadget = () => {
   const { data, isError, isLoading } = useGetProductsQuery({
      limit: 6,
      category: "laptops",
    });
    console.log(data);
    
  return (
    <section className='py-20'>
      <div className="container">
        <Heading
          title=" Hot Electronics"
          highlight="Device"
          afterwidth="after:w-42" />

          {isLoading ? (
          <Loding />
        ) 
        :
        (
          <div className='grid grid-cols-2 sm:grid-cols-5 gap-6'>
            {data.products?.map((item) => (
              <Card key={item.id} product={item} />
            ))}
          </div>
        )}
      </div>

    </section>
  )
}

export default Gadget
