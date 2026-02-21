import React from 'react'
import Slider from "react-slick";
import Heading from '../SectionHeading/Heading';

function MidSlider() {
    const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    cssEase: "linear",
    appendDots: dots => (
      <div >
        <ul className='flex gap-2 absolute -bottom-5  left-2/4 md:-bottom-10 md:left-2/4'> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className=' cursor-pointer w-1 h-1 md:w-2.5 md:h-2.5 bg-black rounded-full '></div>
    )
  };
  return (

       <section className='mt-30'>
        <div className="container">
          <Heading
          title="Top"
          highlight="Electronics Brands"
          afterwidth="after:w-61.5"/>

           <Slider {...settings} className='mt-10'>
        <div className='px-3'>
          <img src="/slider-1.png" alt="slider " className='w-full rounded-2xl' />
        </div>
        <div className='px-3'>
          <img src="/slider-2.png" alt="slider" className='w-full rounded-2xl' />
        </div>
        <div className='px-3'>
          <img src="/slider-3.png" alt="slider" className='w-full rounded-2xl'/>
        </div>
        <div className='px-3'>
          <img src="/slider-1.png" alt="slider" className='w-full rounded-2xl'/>
        </div>
        <div className='px-3'>
          <img src="/slider-2.png" alt="slider" className='w-full rounded-2xl' />
        </div>
        <div className='px-3'>
          <img src="/slider-3.png" alt="slider" className='w-full rounded-2xl' />
        </div>
      </Slider>
    
        </div>
       </section>
  )
}

export default MidSlider
