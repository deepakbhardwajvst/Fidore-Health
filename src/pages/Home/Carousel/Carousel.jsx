"use client"
import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image';
import "./Carousel.css"
import "@/app/globals.css"
import ButtonOne from './../../../Components/Button/ButtonOne';
const Carousel = () => {
    const carouselData = [
        {
            imgSrc: "/slide1.png",
            title: "Doctor Recommended Hair loss Treatment",
            afterBr: "Know The Root Cause Of Your Hair Loss",
            description: "93% saw results* in 5 months",
        },
        {
            imgSrc: "/slide1.png",
            title: "Doctor Recommended Hair loss Treatment",
            afterBr: "Know The Root Cause Of Your Hair Loss",
            description: "93% saw results* in 5 months",
        },
        {
            imgSrc: "/slide1.png",
            title: "Doctor Recommended Hair loss Treatment",
            afterBr: "Know The Root Cause Of Your Hair Loss",
            description: "93% saw results* in 5 months",
        },
        {
            imgSrc: "/slide1.png",
            title: "Doctor Recommended Hair loss Treatment",
            afterBr: "Know The Root Cause Of Your Hair Loss",
            description: "93% saw results* in 5 months",
        },
        {
            imgSrc: "/slide1.png",
            title: "Doctor Recommended Hair loss Treatment",
            afterBr: "Know The Root Cause Of Your Hair Loss",
            description: "93% saw results* in 5 months",
        },


    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "Home-carousel-main",
        fade: false,
        arrows: true,
        autoplay: false,
    };
    return (
        <div><Slider {...settings} className="Home-carousel-main">
            {carouselData.map((item, index) => (
                <div key={index} className="carousel-item relative full-overlay">
                    <Image
                        src={item.imgSrc}
                        className="carousel-img w-[100%] h-[auto]"
                        alt="carousel image"
                        height={1080}
                        width={1080}
                        priority={true}
                    />
                    <div className="img-info absolute top-[28%] left-[7%] z-10 w-[68vw] flex flex-col">
                        <h2 className="mb-4 textsize1 font-bold p-dark ">
                            {item.title}
                        </h2>
                        <h3 className='font-medium textsize2 p-dark w-[50vw]'>{item.afterBr}</h3>
                        <p className="textsize1 font-medium p">
                            {item.description}
                        </p>
                        <ButtonOne buttonName="TAKE FREE HAIR TEST" />
                    </div>
                </div>
            ))}
        </Slider></div>
    )
}

export default Carousel