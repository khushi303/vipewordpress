import React from 'react'
import Robotimg from '../assets/images/png/robotimg.png';
import Ppcimg from '../assets/images/png/ppcimg.png';

const SuccessGuide = () => {
    return (
        <div className='lg:pt-20 lg:pb-16 py-10'>
            <div className='container mx-auto xl:max-w-[1320px] px-3'>
                <div className='flex flex-row flex-wrap w-full'>
                    <div data-aos="zoom-in" className='lg:w-4/12 w-full flex items-center justify-center'>
                        <div className='md:max-w-[413px]'>
                            <img src={Robotimg} alt="Robotimg" className='w-full' />
                        </div>
                    </div>
                    <div className='lg:w-8/12 w-full lg:mt-0 mt-7'>
                        <p data-aos="fade-left" className='ff-gilroy text-[16px] font-normal text-black'>HAVE YOU SEEN OUR MASCOT?</p>
                        <h2 data-aos="fade-left" className='ff-konexy sm:text-[48px] text-[32px] font-normal text-black'>Success Guides</h2>
                        <div data-aos="zoom-in" className='flex flex-wrap flex-row gap-3 mt-5'>
                            <button className=' ff-gilroy text-[16px] font-semibold hover:text-white text-[#6022EA] leading-[150%] py-2 px-4 rounded-[80px] bg-transparent border border-solid border-[#6022EA] transition-colors duration-300 ease-linear hover:bg-[#6022EA]'>Category-1</button>
                            <button className=' ff-gilroy text-[16px] font-semibold hover:text-white text-[#6022EA] leading-[150%] py-2 px-4 rounded-[80px] bg-transparent border border-solid border-[#6022EA] transition-colors duration-300 ease-linear hover:bg-[#6022EA]'>Category-2</button>
                            <button className=' ff-gilroy text-[16px] font-semibold hover:text-white text-[#6022EA] leading-[150%] py-2 px-4 rounded-[80px] bg-transparent border border-solid border-[#6022EA] transition-colors duration-300 ease-linear hover:bg-[#6022EA]'>Category-3</button>
                            <button className=' ff-gilroy text-[16px] font-semibold hover:text-white text-[#6022EA] leading-[150%] py-2 px-4 rounded-[80px] bg-transparent border border-solid border-[#6022EA] transition-colors duration-300 ease-linear hover:bg-[#6022EA]'>Category-4</button>
                        </div>
                        <div className='flex flex-row flex-wrap justify-center mt-8'>
                            <div data-aos="fade-down" className='md:w-2/6 sm:w-3/6 w-full px-2 flex justify-center'>
                                <div className='w-full pt-[15px] pl-4 pr-[14px] pb-[14px] rounded-[16px] border border-solid border-[#00000012] bg-white shadow-[12.114px_48.457px_60.571px_0px_rgba(229,233,246,0.40)] hover:shadow-[0px_20px_60px_0px_#E5E9F6] transition-shadow duration-300 ease-linear'>
                                    <img src={Ppcimg} alt="Ppcimg" className='w-full rounded-[16px]' />
                                    <h3 className='ff-gilroy text-[24px] font-semibold leading-[130%] text-black mt-4 '>Sit diam metus</h3>
                                    <p className='ff-gilroy text-[16px] font-normal leading-[150%] text-black opacity-70 mt-2'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                    <a href="#" className=' ff-gilroy text-[16px] font-semibold leading-[150%] text-[#6022EA] mt-1'>Read More....</a>
                                </div>
                            </div>
                            <div data-aos="fade-down" className='md:w-2/6 px-2 sm:w-3/6 w-full sm:mt-0 mt-5 flex justify-center'>
                                <div className='w-full pt-[15px] pl-4 pr-[14px] pb-[14px] rounded-[16px] border border-solid border-[#00000012] bg-white shadow-[12.114px_48.457px_60.571px_0px_rgba(229,233,246,0.40)] hover:shadow-[0px_20px_60px_0px_#E5E9F6] transition-shadow duration-300 ease-linear'>
                                    <img src={Ppcimg} alt="Ppcimg" className='w-full rounded-[16px]' />
                                    <h3 className='ff-gilroy text-[24px] font-semibold leading-[130%] text-black mt-4 '>Sit diam metus</h3>
                                    <p className='ff-gilroy text-[16px] font-normal leading-[150%] text-black opacity-70 mt-2'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                    <a href="#" className=' ff-gilroy text-[16px] font-semibold leading-[150%] text-[#6022EA] mt-1'>Read More....</a>
                                </div>
                            </div>
                            <div data-aos="fade-down" className='md:w-2/6 px-2 sm:w-3/6 w-full md:mt-0 mt-5 flex justify-center'>
                                <div className='w-full pt-[15px] pl-4 pr-[14px] pb-[14px] rounded-[16px] border border-solid border-[#00000012] bg-white shadow-[12.114px_48.457px_60.571px_0px_rgba(229,233,246,0.40)] hover:shadow-[0px_20px_60px_0px_#E5E9F6] transition-shadow duration-300 ease-linear'>
                                    <img src={Ppcimg} alt="Ppcimg" className='w-full rounded-[16px]' />
                                    <h3 className='ff-gilroy text-[24px] font-semibold leading-[130%] text-black mt-4 '>Sit diam metus</h3>
                                    <p className='ff-gilroy text-[16px] font-normal leading-[150%] text-black opacity-70 mt-2'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                    <a href="#" className=' ff-gilroy text-[16px] font-semibold leading-[150%] text-[#6022EA] mt-1'>Read More....</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessGuide