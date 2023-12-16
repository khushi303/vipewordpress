import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Propyimg from '../assets/images/png/propyimg.png';
import Cieliaimg from '../assets/images/png/cieliaimg.png';
import Revuleleimg from '../assets/images/png/revuleleimg.png';
import Sparkimg from '../assets/images/png/sparkimg.png'

const TermPartner = () => {
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
        <div className='bg-[#F6F6F6] lg:py-24 py-12'>
            <div className='container mx-auto lg:max-w-[1320px] px-4'>
                <h3 data-aos="fade-right" className='ff-konexy sm:text-[48px] text-[32px] font-normal text-black lg:text-start text-center max-w-[631px]'>Long Term WordPress Partner</h3>
                <p data-aos="fade-right" data-aos-duration="3000" className='ff-gilroy text-[16px] font-normal text-black max-w-[693px] opacity-80 leading-[150%]'>Our motto is the long-term partnership – we will not only develop your perfect website, but will be behind you through the whole process. They already trusted us:</p>
                <div className='mt-14'>
                    <Slider {...settings} className='flex items-center justify-center'>
                        <div className='xl:px-5 px-3'>
                            <div className='max-w-[171px] '>
                                <img src={Propyimg} alt="Propyimg" className='w-full' />
                            </div>
                        </div>
                        <div className='xl:px-5 px-3'>
                            <div className='max-w-[171px]'>
                                <img src={Cieliaimg} alt="Cieliaimg" className='w-full' />
                            </div>
                        </div>
                        <div className='xl:px-5 px-3'>
                            <div className='max-w-[171px] '>
                                <img src={Revuleleimg} alt="Revuleleimg" className='w-full' />
                            </div>
                        </div>
                        <div className='xl:px-5 px-3'>
                            <div className='max-w-[171px] '>
                                <img src={Propyimg} alt="Trendignews" className='w-full' />
                            </div>
                        </div>
                        <div className='xl:px-5 px-3'>
                            <div className='max-w-[171px] '>
                                <img src={Sparkimg} alt="Ynews" className='w-full' />
                            </div>
                        </div>
                        <div className='xl:px-5 px-3'>
                            <div className='max-w-[171px] '>
                                <img src={Propyimg} alt="Trendignews" className='w-full' />
                            </div>
                        </div>
                        <div className='xl:px-5 px-3'>
                            <div className='max-w-[171px] '>
                                <img src={Sparkimg} alt="Trendignews" className='w-full' />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default TermPartner;