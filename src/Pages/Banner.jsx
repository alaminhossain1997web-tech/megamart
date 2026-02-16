import React from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { NextArrow, PrevArrow } from '../componnent/ui/SliderArrow';

const Banner = () => {


 {/*====================
    slider settings start
    ===================*/}
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div >
        <ul className='flex gap-2 absolute bottom-5  left-10 md:bottom-10 md:left-24'> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className=' cursor-pointer w-1 h-1 md:w-2.5 md:h-2.5 bg-black rounded-full '></div>
    )
  };
   {/*====================
    slider settings end
    ===================*/}
    
  return (
   <section>
    <div className="container">
       <Slider {...settings}>
        <div>
         <img src="/beauty.png" alt="beauty-banner" />
        </div>
        <div>
         <img src="/fashion.png" alt="fashion-banner" />
        </div>
        <div>
         <img src="/cosmetics.png" alt="cosmetics-banner" />
        </div>
        <div>
         <img src="/gadget.png" alt="gadget-banner" />
        </div>
        <div>
         <img src="/smartwatchbanner.webp" alt="smartwatchbanner-banner" />
        </div>
        <div>
         <img src="/Mobilebanner.webp" alt="Mobilebanner" />
        </div>
        
      </Slider>
    </div>
   </section>
  )
}

export default Banner
