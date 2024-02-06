import React from 'react'
import Carousel from './Carousel/Carousel'

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
    const features = [
        { title: 'Customised plans for every customer', description: 'Our plans are tailored to meet the unique needs of each customer.', img: "/homeImg/care1.png" },
        { title: 'Gut First Approach', description: 'Our unique approach to regrowing hair by boosting gut health ensures the best results.', img: "/homeImg/care2.png" },
        { title: 'Personal Hair Coach', description: 'Our coach will work with you regularly to get the best results for your hair.', img: "/homeImg/care3.png" },
        { title: 'Clinically Supported', description: 'Our doctors prescribe and follow up monthly for the best results.', img: "/homeImg/care4.png" },
    ];
    const HairCareFeatures = [
        {
            title: 'Gut support therapy',
            description: 'Boosts nutrient absorption through probiotics in the gut.',
            image: '/homeImg/formula1.png',
        },
        {
            title: 'Minoxidil 5% Solution',
            description: 'Increases blood supply on the scalp to deliver vitamins to hair.',
            image: '/homeImg/formula2.png',
        },
        {
            title: 'DHT Blocker Shampoo',
            description: 'Maintains scalp health by blocking excessive DHT to hair follicles.',
            image: '/homeImg/formula3.png',
        },
        {
            title: 'Rotational VT',
            description: 'Boosts body with vital nutrients for faster hair growth.',
            image: '/homeImg/formula4.png',
        },
    ];

    return (
        <div className='bg1'>
            <Carousel />

            <ResultsVideo />
            <HairGrowthJourney />

        </div>
    )
}

export default HomePage