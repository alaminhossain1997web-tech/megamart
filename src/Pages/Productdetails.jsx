import React, { useState, useEffect, useRef } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import Slider from "react-slick";
import { useGetproductdetailsQuery } from "../Services/api";
import { Link, useParams } from "react-router";
import { IoCartOutline } from "react-icons/io5";
import Loding from "../componnent/ui/Loding";
import { useCart } from "../Services/cart.jsx";

const Productdetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetproductdetailsQuery(id);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
  };

  const [count, setCount] = useState(1);

  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  if (isLoading) {
    return <Loding />;
  }

  if (isError || !data) {
    return (
      <section className='py-10'>
        <div className='container'>
          <div className='rounded-3xl bg-red-50 px-6 py-5 text-red-600'>
            Product details could not be loaded right now.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className='py-10'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
          {/* left slider */}
          <div className='border bordr-primary/30 rounded-2xl'>
            <div className='bg-secondary flex justify-center items center border border-primary/30 rounded-2xl'>{/*first slider div*/}
              <Slider
                {...settings}
                asNavFor={nav2}
                ref={(slider) => (sliderRef1 = slider)}
                className='w-full h-full max-w-3/5 overflow-hidden'>
                {data?.images?.map((img, index) => (
                  <div key={index}>
                    <img src={img} alt='' className='w-full h-full' />
                  </div>
                ))}
              </Slider>
            </div>
            {/* second slider*/}
            <div className='p-2 '>
              <Slider
                {...settings}
                asNavFor={nav1}
                ref={(slider) => (sliderRef2 = slider)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}>
                {data?.images?.map((img, index) => (
                  <div
                    key={index}
                    className='border border-primary/30 w-fit flex justify-center items-center cursor-pointer rounded-2xl'>
                    <img src={img} alt='' className='w-4/5' />
                  </div>
                ))}
              </Slider>
            </div>
          </div>{/*slider main div*/}

          {/* product discription col */}
          <div className='p-5'>{/*main div*/}
            <h1 className='text-2xl lg:text-3xl font-semibold text-gray-900 '>
              {data.title}
            </h1>
            <div className='grid grid-cols-1 gap-2 sm:grid-cols-3 w-full my-3'>
              <p className='font-semibold flex items-center gap-1'>
                <TbCurrencyTaka className='text-xl' /> {data.price}
                <span className='font-normal text-base text-primary/50'>
                  (Cash price)
                </span>
              </p>
              <p className='font-semibold '>
                Availability:{" "}
                <span className='text-base font-normal'> {data.stock}</span>
              </p>
              <p className='font-semibold'>
                Brand: <span className='text-base font-normal'>{data.brand}</span>
              </p>
            </div>
            <p className='text-base leading-7 text-gray-600'>{data.description}</p>
            <div className='border border-primary/30 p-4 rounded-2xl w-full my-5'>
              <p className='font-medium'>Verient:</p>
              <div className='sm:flex sm:items-center sm:flex-cols-3 gap-5'>
                <button className='w-fit duration-300 rounded-quarter border py-1.5 px-3 flex items-center gap-2 font-semibold border-orange-500 rounded-3xl my-2'>
                  <div className='w-4 h-4 rounded-full bg-black'></div>
                  <span className='cursor-pointer text-sm font-medium text-gray-700'>
                    Black
                  </span>
                </button>
                <button className='w-fit duration-300 rounded-quarter border py-1.5 px-3 flex items-center gap-2 font-semibold border-orange-500 rounded-3xl my-2'>
                  <div className='w-4 h-4 rounded-full bg-orange-500'></div>
                  <span className='cursor-pointer text-sm font-medium text-gray-700'>
                    orange
                  </span>
                </button>
                <button className='w-fit duration-300 rounded-quarter border py-1.5 px-3 flex items-center gap-2 font-semibold border-orange-500 rounded-3xl my-2'>
                  <div className='w-4 h-4 rounded-full bg-red-700'></div>
                  <span className='cursor-pointer text-sm font-medium text-gray-700'>
                    red
                  </span>
                </button>
                <button className='w-fit duration-300 rounded-quarter border py-1.5 px-3 flex items-center gap-2 font-semibold border-orange-500 rounded-3xl my-2'>
                  <div className='w-4 h-4 rounded-full bg-white'></div>
                  <span className='cursor-pointer text-sm font-medium text-gray-700'>
                    white
                  </span>
                </button>
              </div>
              <div className='flex justify-center items-center gap-5 w-fit border border-primary/30 rounded-3xl px-2 py-1'>
                <button
                  className='w-7.5 h-7.5 bg-[#e0e0e0] rounded-full text-base font-semibold cursor-pointer'
                  onClick={decrease}>
                  -
                </button>
                <p>{count}</p>

                <button
                  className='w-7.5 h-7.5 bg-[#e0e0e0] rounded-full text-base font-semibold cursor-pointer'
                  onClick={increase}>
                  +
                </button>
              </div>
              <div className='mt-5 flex flex-col gap-3 sm:flex-row'>
                <button
                  type='button'
                  onClick={() => addItem(data, count)}
                  className='inline-flex items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand/85'>
                  <IoCartOutline className='text-xl' />
                  Add {count} to Cart
                </button>
                <Link
                  to='/sopingcart'
                  className='inline-flex items-center justify-center rounded-2xl border border-brand px-6 py-3 font-semibold text-brand transition hover:bg-brand hover:text-white'>
                  View Cart
                </Link>
              </div>
            </div>
          </div>{/* 2nd col main div*/}
        </div>
        <div className='py-10'>
          <h2 className='text-2xl lg:text-3xl font-semibold text-gray-900 my-5'>
            Specification
          </h2>

          <div className='overflow-hidden rounded-xl border border-gray-300'>
            <table className='w-full border border-gray-300 border-collapse'>
              <tbody>
                <tr>
                  <td className='w-1/3 border border-gray-300 px-4 py-2'>
                    Catagory: {data?.category}
                  </td>
                </tr>
                <tr>
                  <td className='w-1/3 border border-gray-300 px-4 py-2'>
                    Brand: {data?.brand}
                  </td>
                </tr>
                <tr>
                  <td className='w-1/3 border border-gray-300 px-4 py-2'>
                    Rting: {data?.rating}
                  </td>
                </tr>

                <tr>
                  <td className='w-1/3 border border-gray-300 px-4 py-2'>
                    {data?.shippingInformation}
                  </td>
                </tr>
                <tr>
                  <td className='w-1/3 border border-gray-300 px-4 py-2'>
                    weight: {data?.weight}
                  </td>
                </tr>
                <tr>
                  <td className='w-1/3 border border-gray-300 px-4 py-2'>
                    warranty: {data?.warrantyInformation}
                  </td>
                </tr>
                <tr>
                  <td className='w-1/3 border border-gray-300 px-4 py-2'>
                    SKU Number: {data?.sku}
                  </td>
                </tr>
                <tr>
                  <td className='w-1/3 border border-gray-300 px-4 py-2'>
                    Return Policy: {data?.returnPolicy}
                  </td>
                </tr>                
              </tbody>
            </table>
          </div>
        </div>
      </div> {/* container */}
    </section>
  );
};

export default Productdetails;
