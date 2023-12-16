import React from 'react'
import Colleguesimg from '../assets/images/png/collegues.png';

const FullStars = () => {
    return (
        <div className='bg-[#F6F6F6] pt-11 mb-20'>
            <div className='container mx-auto xl:max-w-[1320px] px-4'>
                <div className='flex flex-row flex-wrap'>
                    <div data-aos="fade-right" className='lg:w-1/2 w-full flex items-center'>
                        <div className=' lg:pb-10'>
                            <h3 className='ff-konexy sm:text-[48px] text-[28px] font-normal text-black'>Team Full of Stars</h3>
                            <p className='ff-gilroy text-[16px] font-normal text-black max-w-[476px] mb-7'>Suspendisse consequat egestas arcu et et. Viverra quis euismod neque luctus bibendum. Fringilla in nibh fringilla vulputate in. Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus tortor sollicitudin risus eget euismod in bibendum turpis. </p>
                            <button className='hover:shadow-[0_0_20px_2px_#6022EA] transition-shadow duration-300 ease-linear ff-gilroy text-[16px] font-semibold leading-[150%] py-2 px-6 text-white rounded-[80px] bg-[#6022EA]'>Explore</button>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className='lg:w-1/2'>
                        <div className='rounded-[32px] max-w-[686px] max-lg:translate-y-14 xl:translate-y-14'>
                            <img src={Colleguesimg} alt="Colleguesimg" className='rounded-[32px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullStars