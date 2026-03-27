import React, { useState } from "react";
import Card from "./ui/Card";
import { useGetProductsQuery } from "../Services/api";
import Loding from "./ui/Loding";
import { useSearchParams } from "react-router";

const Productlist = () => {
  const [SearchParams] = useSearchParams()
  const category = SearchParams.get("category")
   const [skip,setSkip] = useState(0);
  const [limit,setLimit] = useState(20)
  const { data, isError, isLoading } = useGetProductsQuery({limit,skip,category});
  const products = data?.products ?? [];

  return (
    <section className='py-25'>
      <div className='container'>
        <div className='mb-5 flex justify-between'>
          <p>
            Showing: <span className='font-bold'>{data?.limit}</span>
          </p>
          <div className='flex gap-5 items-center'>
            <p>Dispalying {skip}-{skip + parseInt(limit)} of {data?.total} </p>
            <select onChange={(e)=>setLimit(e.target.value)} value={limit} className='px-3 py-1.5 rounded-2xl focuse-brand border border-brand'>
              <option value='20'>20</option>
              <option value='30'>30</option>
              <option value='40'>40</option>
              <option value='50'>50</option>
            </select>
          </div>
        </div>
        {isLoading ? (
          <Loding />
        ) : isError ? (
          <p className='rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600'>
            Products could not be loaded right now.
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
  );
};

export default Productlist;
