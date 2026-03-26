import React from 'react'
import Banner from './Banner'
import BestDeal from '../componnent/Home/BestDeal'
import MidSlider from '../componnent/ui/MidSlider'
import DailyEssentials from '../componnent/ui/DailyEssentials'
import Catagories from '../componnent/Home/Catagories'
import Footer from '../componnent/Layout/footer'
import Gadget from '../componnent/ui/Gadget'


const Home = () => {
  return (
    <>
    <Banner/>
    <BestDeal/>
    <Catagories/>
    <MidSlider/>
    <DailyEssentials/>
    <Gadget/>
    <Footer/>
    </>
  )
}

export default Home
