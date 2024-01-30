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
        <div className=" flex items-center justify-center">
            <div className="  p-8 rounded-md shadow-md text-center">
                <h1 className="text-3xl font-bold mb-6">Start Your Hair Growth Journey in 3 Simple Steps</h1>
                <div className="flex justify-center space-x-4 mb-4">
                    {imageData.map((data, index) => (
                        <div key={index} className="max-w-xs flex flex-col justify-center items-center overflow-hidden bg-white rounded-lg shadow-md p-6 mx-2 my-4">
                            <Image src={data.img} alt={`Step ${index + 1}`} width={150} height={150} className="w-max" />
                            <h3 className="text-lg font-semibold mt-4">{data.heading}</h3>
                            <p className="text-gray-600 mt-2">{data.paragraph}</p>
                        </div>

                    ))}
                </div>
                <ButtonOne buttonName="TAKE FREE HAIR TEST" />
            </div>
        </div>
    );
};

export default HairGrowthJourney;
