"use client"
import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image';
import "./Carousel.css"
import "@/app/globals.css"
const Carousel = () => {
    const carouselData = [
        {
            imgSrc: "/slide1.png",
            title: "",
            afterBr: "",
            description: "",
        },
        {
            imgSrc: "/slide1.png",
            title: "",
            afterBr: "",
            description: "",
        },
        {
            imgSrc: "/slide1.png",
            title: "",
            afterBr: "",
            description: "",
        },
        {
            imgSrc: "/slide1.png",
            title: "",
            afterBr: "",
            description: "",
        },
        {
            imgSrc: "/slide1.png",
            title: "",
            afterBr: "",
            description: "",
        },
        {
            imgSrc: "/slide1.png",
            title: "",
            afterBr: "",
            description: "",
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
                        className="carousel-img w-[100%] h-[70vh]"
                        alt="carousel image"
                        height={1080}
                        width={1080}
                        priority={true}
                    />
                    <div className="img-info absolute top-[15%] left-[7%] z-10 ">
                        <h2 className="mb-4 text-[60px] font-bold text-[#000000b3] ">
                            {item.title} <br />
                            {item.afterBr}
                        </h2>
                        <p className="text-[30px] font-medium text-[#797878]">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </Slider></div>
    )
}

export default Carousel