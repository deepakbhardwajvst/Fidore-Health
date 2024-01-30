// HairCareComponent.jsx

import React from 'react';
import ButtonOne from '@/Components/Button/ButtonOne';

const HairCareComponent = ({ features }) => {
    return (
        <div className="container">
            <div className=" mx-auto p-8  rounded-lg shadow-md flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold mb-6">Why choose Pattrn for healthy hair?</h2>
                <div className="flex flex-wrap justify-between">
                    {features.map((feature, index) => (
                        <div key={index} className="w-[22%]  h-[350px]  bg2 rounded-lg p-4 mb-6 relative ">
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className=" mb-4">{feature.description}</p>
                            <img src={feature.img} alt={feature.title} className="w-auto h-[200px] rounded-lg shadow-md object-cover absolute right-0 bottom-0" />
                        </div>
                    ))}
                </div>
                <div className="mt-8">
                    <ButtonOne buttonName="TAKE FREE HAIR TEST" />
                </div>
            </div></div>
    );
};

export default HairCareComponent;
