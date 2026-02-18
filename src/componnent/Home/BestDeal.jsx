import React from 'react'
import Heading from '../SectionHeading/Heading'
import Card from '../ui/Card'
import Slider from 'react-slick'


const BestDeal = () => {
    return (
        <section className='py'>
            <div className="container">
                <Heading
                    title="Grab the best deal on"
                    highlight="Smartphones"
                    afterwidth="after:w-96"/>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 mt-10'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>

            </div>
        </section>
    )
}

export default BestDeal
