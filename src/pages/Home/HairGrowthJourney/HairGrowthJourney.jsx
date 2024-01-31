import React from 'react';
import Image from 'next/image';
import ButtonOne from '@/Components/Button/ButtonOne';

const HairGrowthJourney = () => {
    const imageData = [
        {
            img: '/homeImg/step1.png',
            heading: "Take the Hair Test",
            paragraph: "Discover your unique hair profile and get a personalized plan in just 2 minutes.",
        },
        {
            img: '/homeImg/step2.png',
            heading: "Book a Virtual Consult",
            paragraph: "Connect with our expert doctors from home and receive personalized advice.",
        },
        {
            img: '/homeImg/step3.png',
            heading: "Get Your Treatment Plan",
            paragraph: "Start your journey to healthy hair regrowth with a customized treatment plan.",
        }
    ];

    return (
        <div className="">
            <div className="container  p-8 rounded-md shadow-md text-center flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-3">Start Your Hair Growth Journey in 3 Simple Steps</h1>
                <div className="flex justify-center space-x-4 mb-4">
                    {imageData.map((data, index) => (
                        <div key={index} className="w-33% flex  justify-center items-center overflow-hidden bg-white rounded-lg shadow-md p-6 mx-2 mt-4">
                            <Image src={data.img} alt={`Step ${index + 1}`} width={150} height={150} className="w-max" />
                            <div className="flex flex-col ">
                                <h3 className="text-lg text-start font-semibold mt-4">{data.heading}</h3>
                                <p className=" mt-2 text-start">{data.paragraph}</p></div>
                        </div>

                    ))}
                </div>
                <ButtonOne buttonName="TAKE FREE HAIR TEST" />
            </div>
            <hr />
        </div>
    );
};

export default HairGrowthJourney;
