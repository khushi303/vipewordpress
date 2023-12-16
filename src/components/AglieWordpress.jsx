import React from 'react';
import Twoimg from '../assets/images/png/twomanimg.png'

const AglieWordpress = () => {
    return (
        <div className='lg:pt-14 lg:pb-28 pt-10 pb-11 '>
            <div className='container xl:max-w-[1320px] mx-auto px-4'>
                <div className='flex justify-center flex-row lg:flex-wrap flex-wrap-reverse'>
                    <div data-aos="fade-up" className='lg:w-5/12 w-full flex items-center justify-center lg:mt-0 mt-10'>
                        <div className='max-w-[550px]'>
                            <img src={Twoimg} alt="Twoimg" className='w-full' />
                        </div>
                    </div>
                    <div data-aos="fade-left" className='lg:w-7/12 flex items-center justify-end lg:mt-0 mt-10'>
                        <div>
                            <h3 className='ff-konexy sm:text-[48px] text-[28px] font-normal text-black leading-none max-w-[670px]'><span className='text-[#6022EA]'>Agile WordPress</span> Development Project management</h3>
                            <p className=' ff-gilroy text-[16px] font-normal leading-[150%] opacity-70 max-w-[572px] text-black mt-2 mb-9'>Suspendisse consequat egestas arcu et et. Viverra quis euismod neque luctus bibendum. Fringilla in nibh fringilla vulputate in. Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus tortor sollicitudin risus eget euismod in bibendum turpis. </p>
                            <button className='bg-[#6022EA] hover:shadow-[0_0_20px_2px_#6022EA] transition-shadow duration-300 ease-linear py-2 px-6 ff-gilroy text-[16px] font-semibold leading-[150%] text-white rounded-[80px] shadow-[0px_4px_20px_0px_rgba(96,34,234,0.20)]'>Explore</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AglieWordpress