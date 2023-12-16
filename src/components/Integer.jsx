import React from 'react';
import { Noteprofile, Smallboxes, Womenspeaking } from './iconsvg';

const Integer = () => {
    return (
        <div>
            <div className='container xl:max-w-[1320px] px-3 mx-auto pt-14 pb-20'>
                <h3 data-aos="fade-right" className='ff-konexy text-[48px] font-normal text-black'>Integer et nisl non</h3>
                <div className='flex flex-row flex-wrap justify-center items-center w-full mt-10'>
                    <div data-aos="fade-right" className='lg:w-2/6 sm:w-3/6 w-full px-3'>
                        <div className='md:pt-14 md:pb-9 md:px-9 p-6 flex items-center justify-center flex-col rounded-[16px] border border-solid border-[#00000013] hover:border-[#fff] transition-shadow hover:shadow-[0px_20px_60px_0px_#E5E9F6]'>
                            <Noteprofile />
                            <p className=' ff_inter text-[24px] font-semibold leading-[130%] text-black text-center mt-8'>Enterprise WordPress Solutions</p>
                            <p className=' ff-gilroy text-[16px] font-normal leading-[150%] mt-4 opacity-70 text-black text-center'>Pretium, a et sapien non nunc libero. Id dolor sed quis convallis turpis purus feugiat nibh eu. Auctor cras hac ac, sociis diam montes, turpis commodo elit.</p>
                            <a href="" className=' ff-gilroy font-normal text-[16px] text-center leading-[150%] text-[#6022EA] mt-5'>Learn More</a>
                        </div>
                    </div>
                    <div data-aos="fade-down" className='lg:w-2/6 sm:w-3/6 w-full px-3 sm:mt-0 mt-7'>
                        <div className='md:pt-14 md:pb-9 md:px-9 p-6 flex items-center justify-center flex-col rounded-[16px] border border-solid border-[#00000013] hover:border-[#fff] transition-shadow hover:shadow-[0px_20px_60px_0px_#E5E9F6]'>
                            <Smallboxes />
                            <p className=' ff_inter text-[24px] font-semibold leading-[130%] text-black text-center mt-8'>Enterprise WordPress Solutions</p>
                            <p className=' ff-gilroy text-[16px] font-normal leading-[150%] mt-4 opacity-70 text-black text-center'>Et nunc fermentum id amet tempus, elementum. Eget ac ultrices tortor, mattis amet blandit aenean amet. Massa diam lacus, aliquam neque.</p>
                            <a href="" className=' ff-gilroy font-normal text-[16px] text-center leading-[150%] text-[#6022EA] mt-5'>Learn More</a>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='lg:w-2/6 sm:w-3/6 w-full px-3 lg:mt-0 mt-7'>
                        <div className='md:pt-14 md:pb-9 md:px-9 p-6 flex items-center justify-center flex-col rounded-[16px] border border-solid border-[#00000013] hover:border-[#fff] transition-shadow hover:shadow-[0px_20px_60px_0px_#E5E9F6]'>
                            <Womenspeaking />
                            <p className=' ff_inter text-[24px] font-semibold leading-[130%] text-black text-center mt-8'>Enterprise WordPress Solutions</p>
                            <p className=' ff-gilroy text-[16px] font-normal leading-[150%] mt-4 opacity-70 text-black text-center'>Et nunc fermentum id amet tempus, elementum. Eget ac ultrices tortor, mattis amet blandit aenean amet. Massa diam lacus, aliquam neque.</p>
                            <a href="" className=' ff-gilroy font-normal text-[16px] text-center leading-[150%] text-[#6022EA] mt-5'>Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Integer