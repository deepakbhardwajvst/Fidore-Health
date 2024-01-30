import React from 'react'
import Carousel from './Carousel/Carousel'
import WeProvide from './WeProvide/WeProvide';
import ResultsVideo from './ResultsVideo/ResultsVideo';
import HairGrowthJourney from './HairGrowthJourney/HairGrowthJourney';
const HomePage = () => {
    const servicesData = [
        {
            title: 'FDA Approved Treatments',
            imageSrc: '/homeImg/FDA.png',
            description: 'Explore the FDA-approved treatments for hair care.',
        },
        {
            title: 'Doctor Prescribed',
            imageSrc: '/homeImg/doctor1.png',
            description: 'Consult with a doctor to get personalized treatments.',
        },
        {
            title: 'Personal Hair Coach',
            imageSrc: '/homeImg/doctor2.png',
            description: 'Get guidance from a personal hair coach for effective solutions.',
        },
    ];

    return (
        <div className='bg-[#f0b4b4]'>
            <Carousel />
            <WeProvide services={servicesData} />
            <ResultsVideo />
            <HairGrowthJourney />
        </div>
    )
}

export default HomePage