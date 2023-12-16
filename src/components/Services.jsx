import React from 'react';
import { Bluetick, Singletick } from './iconsvg';
import Smilingwomenimg from '../assets/images/png/Smilingwomen.png';

const Services = () => {
    return (
        <div className='bg-black lg:py-20 py-10'>
            <div className='container xl:max-w-[1320px] mx-auto px-3'>
                <div className='flex flex-row flex-wrap justify-center w-full mt-6'>
                    <div className='lg:w-2/6 w-full'>
                        <h3 data-aos="fade-right" className=' ff-konexy text-[40px] font-normal text-white lg:text-start text-center'>All Vipe Studio WordPress services	include:</h3>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1500" className='lg:w-2/6 sm:w-3/6 w-full flex items-center sm:justify-center justify-start lg:mt-0 mt-9'>
                        <div>
                            <p className=' ff-gilroy text-[24px] font-semibold text-white leading-[130%]'>By Industry</p>
                            <div className='flex gap-2 items-center mt-5'>
                                <Bluetick />
                                <p className=' ff-gilroy text-[16px] font-normal text-white leading-[150%]'>Lorem in elementum pellentesque</p>
                            </div>
                            <div className='flex gap-2 items-center mt-2'>
                                <Bluetick />
                                <p className=' ff-gilroy text-[16px] font-normal text-white leading-[150%]'>Molestie cursus praesent mi</p>
                            </div>
                            <div className='flex gap-2 items-center mt-2'>
                                <Bluetick />
                                <p className=' ff-gilroy text-[16px] font-normal text-white leading-[150%]'>Leo sed viverra cras</p>
                            </div>
                            <div className='flex gap-2 items-center mt-2'>
                                <Bluetick />
                                <p className=' ff-gilroy text-[16px] font-normal text-white leading-[150%]'>Laoreet feugiat ut at</p>
                            </div>
                            <div className='flex gap-2 items-center mt-2'>
                                <Bluetick />
                                <p className=' ff-gilroy text-[16px] font-normal text-white leading-[150%]'>Risus aliquam molestie viverra</p>
                            </div>
                            <div className='flex gap-2 items-center mt-2'>
                                <Bluetick />
                                <p className=' ff-gilroy text-[16px] font-normal text-white leading-[150%]'>Diam enim pulvinar velit</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000" className='lg:w-2/6 sm:w-3/6 w-full flex items-center sm:justify-center justify-start lg:mt-0 mt-9'>
                        <div>
                            <p className=' ff-gilroy text-[24px] font-semibold text-white leading-[130%]'>By Services</p>
                            <div className='flex gap-2 items-center mt-5'>
                                <Bluetick />
                                <p className=' ff-gilroy text-[16px] font-normal text-white leading-[150%]'>Accumsan, dui a semper</p>
                            </div>
                            <div className='flex gap-2 items-center mt-2'>
                                <Bluetick />
                                <p className=' ff-gilroy text-[16px] font-normal text-white leading-[150%]'>Interdum malesuada vulputate neque</p>
                            </div>
                            <div className='flex gap-2 items-center mt-2'>
                                <Bluetick />
                                <p className=' ff-gilroy text-[16px] font-normal text-white leading-[150%]'>Nullam non a, morbi</p>
                            </div>
                            <div className='flex gap-2 items-center mt-2'>
                                <Bluetick />
                                <p className=' ff-gilroy text-[16px] font-normal text-white leading-[150%]'>Arcu morbi leo eu</p>
                            </div>
                            <div className='flex gap-2 items-center mt-2'>
                                <Bluetick />
                                <p className=' ff-gilroy text-[16px] font-normal text-white leading-[150%]'>Viverra venenatis, in ornare</p>
                            </div>
                            <div className='flex gap-2 items-center mt-2'>
                                <Bluetick />
                                <p className=' ff-gilroy text-[16px] font-normal text-white leading-[150%]'>Erat id aliquam habitant</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row flex-wrap justify-center w-full lg:mt-24 mt-10 rounded-[25.938px] bg-black lg:py-7 lg:px-8 p-4'>
                    <div data-aos="fade-right" className='lg:w-2/6 md:w-3/6 w-full'>
                        <div className='flex lg:justify-start justify-center flex-col md:items-start items-center gap-10'>
                            <h3 className=' ff-konexy text-[35px] font-normal text-white leading-none md:text-start text-center md:max-w-[334px]'>Not Sure which service you need yet?</h3>
                            <button className=' py-2 px-6 bg-[#6022EA] ff-gilroy text-[16px] font-semibold leading-[150%] border-0 rounded-[80px] text-white text-center hover:shadow-[0_0_20px_2px_#6022EA] transition-shadow duration-300 ease-linear'>Schedule An Appointment</button>
                        </div>
                    </div>
                    <div data-aos="fade-left" className='lg:w-2/6 md:w-3/6 w-full flex md:justify-center justify-start items-start md:mt-0 mt-9'>
                        <div>
                            <h3 className=' ff-gilroy text-[24px] font-bold leading-[130%] text-white mb-6 max-w-[386px]'>20-m free consultation that will help us identifyif  you need</h3>
                            <div className='flex gap-2 items-center mt-5'>
                                <Singletick />
                                <p className=' ff-gilroy text-[16px] font-normal leading-[150%] text-white'>Technical Description & Discovery</p>
                            </div>
                            <div className='flex gap-2 items-center mt-3'>
                                <Singletick />
                                <p className=' ff-gilroy text-[16px] font-normal leading-[150%] text-white'>Custom WordPress Development</p>
                            </div>
                            <div className='flex gap-2 items-center mt-3'>
                                <Singletick />
                                <p className=' ff-gilroy text-[16px] font-normal leading-[150%] text-white'>Support & Maintenance</p>
                            </div>
                            <div className='flex gap-2 items-center mt-3'>
                                <Singletick />
                                <p className=' ff-gilroy text-[16px] font-normal leading-[150%] text-white'>Other WordPress Service	</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-out" className='lg:w-2/6 w-full flex items-center sm:justify-center justify-start lg:mt-0 mt-9'>
                        <img src={Smilingwomenimg} alt="Smilingwomenimg" className='rounded-[24.2px] w-full' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services;