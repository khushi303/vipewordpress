import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Ynews from '../assets/images/png/ynews.png';
import Yfinance from '../assets/images/png/yfinance.png';
import Trendignews from '../assets/images/png/trendingtopic.png';

const Featured = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className='bg-[#F6F6F6] lg:py-24 py-11'>
            <div className='container mx-auto lg:max-w-[1320px] px-4'>
                <h3 data-aos="fade-right" className='ff-konexy sm:text-[48px] text-[28px] font-normal text-black'>Featured on</h3>
                <div className=' mt-14'>
                    <Slider {...settings} className='flex items-center justify-center'>
                        <div className='xl:px-5 px-3'>
                            <div className='max-w-[171px] cursor-pointer'>
                                <img src={Ynews} alt="Ynews" className='w-full' />
                            </div>
                        </div>
                        <div className='xl:px-5 px-3'>
                            <div className='max-w-[171px] cursor-pointer'>
                                <img src={Yfinance} alt="Yfinance" className='w-full' />
                            </div>
                        </div>
                        <div className='xl:px-5 px-3'>
                            <div className='max-w-[171px] cursor-pointer'>
                                <img src={Ynews} alt="Ynews" className='w-full' />
                            </div>
                        </div>
                        <div className='xl:px-5 px-3'>
                            <div className='max-w-[171px] cursor-pointer'>
                                <img src={Trendignews} alt="Trendignews" className='w-full' />
                            </div>
                        </div>
                        <div className='xl:px-5 px-3'>
                            <div className='max-w-[171px] cursor-pointer'>
                                <img src={Ynews} alt="Ynews" className='w-full' />
                            </div>
                        </div>
                        <div className='xl:px-5 px-3'>
                            <div className='max-w-[171px] cursor-pointer'>
                                <img src={Trendignews} alt="Trendignews" className='w-full' />
                            </div>
                        </div>
                        <div className='xl:px-5 px-3'>
                            <div className='max-w-[171px] cursor-pointer'>
                                <img src={Trendignews} alt="Trendignews" className='w-full' />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Featured