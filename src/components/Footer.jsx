import React from 'react';
import Footerlogo from '../assets/images/png/footerlogo.png';
import { Searchsvg, RightArrows, Telephone, Github, Linkdin, Tweeter, Facebook, Instagrm, Wikipedia } from '../components/iconsvg';

const Footer = () => {
    return (
        <div className='bg-black mt-40'>
            <div className=''>
                <div className='container xl:max-w-[1320px] mx-auto px-3 translate-y-[-132px]'>
                    <div className='rounded-[17px] bg-gradient-to-r flex flex-row flex-wrap sm:pt-6 sm:pl-10 sm:pb-10 sm:pr-12 p-5 from-[#5F21E9] via-[#5F21E9] to-[#FA00FF]'>
                        <div data-aos="fade-right" className='md:w-3/6 w-full'>
                            <h3 className='ff-konexy text-[48px] font-normal leading-none text-white'>Have you</h3>
                            <p className='ff-gilroy mt-2 text-[24px] font-semibold leading-[130%] text-white max-w-[638px]'>read our study about Speed and Performance in WordPress?</p>
                        </div>
                        <div data-aos="zoom-in" className='md:w-3/6 w-full mt-6 flex items-center lg:justify-end justify-center'>
                            <button className='ff_inter text-[16px] font-semibold leading-[150%] text-[#6022EA] hover:shadow-[0_0_20px_2px_#fff] transition-shadow duration-300 ease-linear py-[14.326px] px-[38.202px] rounded-[137.287px] bg-white'>Check It Out</button>
                        </div>
                    </div>
                </div>
                <div className='container xl:max-w-[1320px] mx-auto px-3 mt-[-15px]'>
                    <div className='flex md:flex-row flex-col flex-wrap justify-between'>
                        <div data-aos="fade-right" className='max-w-[176px]'>
                            <img src={Footerlogo} alt="Footerlogo" className='w-full' />
                        </div>
                        <div data-aos="fade-left" className='px-5 py-2 max-w-[381px] w-full rounded-[80px] md:mt-0 mt-6 bg-white flex items-center'>
                            <input type="text" placeholder='Search here....' className='bg-white w-full outline-none border-[0] placeholder:ff-gilroy placeholder:text-[16px] placeholder:font-normal ff-gilroy text-[16px] font-normal' />
                            <Searchsvg />
                        </div>
                    </div>
                    <div className='flex flex-row flex-wrap justify-center lg:mt-14 mt-10'>
                        <div data-aos="fade-down" className='lg:w-3/12 md:w-6/12 w-full flex'>
                            <ul>
                                <li className='ff-gilroy text-[16px] font-normal leading-[150%] text-white mb-4'>Services</li>
                                <li className='flex items-center gap-1 mb-2 group'>
                                    <RightArrows />
                                    <a href="" className='ff-gilroy text-[14px] group-hover:text-[#6022EA] transition-colors duration-300 ease-linear font-normal text-white'>
                                        WordPress Development
                                    </a>
                                </li>
                                <li className='flex  group items-center gap-1 mb-2'>
                                    <RightArrows />
                                    <a href="" className='ff-gilroy text-[14px] group-hover:text-[#6022EA] transition-colors duration-300 ease-linear font-normal text-white'>
                                        WooCommerce Development
                                    </a>
                                </li>
                                <li className='flex group items-center gap-1 mb-2'>
                                    <RightArrows />
                                    <a href="" className='ff-gilroy text-[14px] group-hover:text-[#6022EA] transition-colors duration-300 ease-linear font-normal text-white'>
                                        WordPress Maintenance
                                    </a>
                                </li>
                                <li className='flex group items-center gap-1 mb-2'>
                                    <RightArrows />
                                    <a href="" className='ff-gilroy text-[14px] group-hover:text-[#6022EA] transition-colors duration-300 ease-linear font-normal text-white'>
                                        Speed Optimization
                                    </a>
                                </li>
                                <li className='flex group items-center gap-1 mb-2'>
                                    <RightArrows />
                                    <a href="" className='ff-gilroy text-[14px] group-hover:text-[#6022EA] transition-colors duration-300 ease-linear font-normal text-white'>
                                        Dedicated WordPress Developer
                                    </a>
                                </li>
                                <li className='flex group items-center gap-1 mb-2'>
                                    <RightArrows />
                                    <a href="" className='ff-gilroy text-[14px] group-hover:text-[#6022EA] transition-colors duration-300 ease-linear font-normal text-white'>
                                        Headless WordPress Development
                                    </a>
                                </li>
                                <li className='flex group items-center gap-1'>
                                    <RightArrows />
                                    <a href="" className='ff-gilroy text-[14px] group-hover:text-[#6022EA] transition-colors duration-300 ease-linear font-normal text-white'>
                                        White Label Development
                                    </a>
                                </li>

                            </ul>
                        </div>
                        <div data-aos="fade-down" className='lg:w-3/12 md:w-6/12 w-full flex md:mt-0 mt-6'>
                            <ul>
                                <li className='ff-gilroy text-[16px] font-normal leading-[150%] text-white mb-4'>Services</li>
                                <li className='flex items-center gap-1 mb-2 group'>
                                    <RightArrows />
                                    <a href="" className='ff-gilroy text-[14px] group-hover:text-[#6022EA] transition-colors duration-300 ease-linear font-normal text-white'>
                                        WordPress Hosting
                                    </a>
                                </li>
                                <li className='flex items-center gap-1 mb-2 group'>
                                    <RightArrows />
                                    <a href="" className='ff-gilroy text-[14px] group-hover:text-[#6022EA] transition-colors duration-300 ease-linear font-normal text-white'>
                                        PSD, XD, Figma to WordPress Conversion
                                    </a>
                                </li>
                                <li className='flex items-center gap-1 mb-2 group'>
                                    <RightArrows />
                                    <a href="" className='ff-gilroy text-[14px] group-hover:text-[#6022EA] transition-colors duration-300 ease-linear font-normal text-white'>
                                        Custom WordPress Theme
                                    </a>
                                </li>
                                <li className='flex items-center gap-1 mb-2 group'>
                                    <RightArrows />
                                    <a href="" className='ff-gilroy text-[14px] group-hover:text-[#6022EA] transition-colors duration-300 ease-linear font-normal text-white'>
                                        Custom WordPress Plugins
                                    </a>
                                </li>
                                <li className='flex items-center gap-1 mb-2 group'>
                                    <RightArrows />
                                    <a href="" className='ff-gilroy text-[14px] group-hover:text-[#6022EA] transition-colors duration-300 ease-linear font-normal text-white'>
                                        CMS to WordPress
                                    </a>
                                </li>
                                <li className='flex items-center gap-1 group'>
                                    <RightArrows />
                                    <a href="" className='ff-gilroy text-[14px] group-hover:text-[#6022EA] transition-colors duration-300 ease-linear font-normal text-white'>
                                        WordPress Malware Removal
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-aos="fade-down" className='lg:w-3/12 md:w-6/12 w-full flex lg:pr-0 pr-6 lg:justify-center lg:mt-0 mt-6'>
                            <ul>
                                <li className='ff-gilroy text-[16px] font-normal leading-[150%] text-white mb-4 hover:text-[#6022EA] transition-colors duration-300 ease-linear'>Services</li>
                                <li className='ff-gilroy text-[14px] font-normal text-white mb-5 hover:text-[#6022EA] transition-colors duration-300 ease-linear'>7 WordPress Plugins to Create an Effective Newsletter 03.01.2022</li>
                                <li className='ff-gilroy text-[14px] font-normal text-white mb-5 hover:text-[#6022EA] transition-colors duration-300 ease-linear'>What’s the Perfect Blog Post Length for Your WordPress Site’s SEO?
                                    02.01.2022</li>
                                <li className='ff-gilroy text-[14px] font-normal text-white mb-5 hover:text-[#6022EA] transition-colors duration-300 ease-linear'>5 Reasons the Future of WordPress Is Headless 01.01.2022</li>
                                <li className='ff-gilroy text-[14px] font-normal text-white mb-5 hover:text-[#6022EA] transition-colors duration-300 ease-linear'>Viptor Says: Vipe Studio’s WordPress Developers Wrap Up the Amazingly Successful 2021 30.12.2021</li>
                            </ul>
                        </div>
                        <div data-aos="fade-down" className='lg:w-3/12 md:w-6/12 w-full flex lg:justify-end lg:mt-0 mt-6'>
                            <ul>
                                <li className='ff-gilroy text-[16px] font-normal leading-[150%] text-white mb-4'>Contact</li>
                                <li className='flex items-center ff-gilroy hover:text-[#6022EA] transition-colors duration-300 ease-linear text-[14px] font-normal text-white mb-5 gap-2'>
                                    <Telephone />
                                    EU: +359 988 993 128</li>
                                <li className='flex items-center ff-gilroy hover:text-[#6022EA] transition-colors duration-300 ease-linear text-[14px] font-normal text-white mb-5 gap-2'>
                                    <Telephone />
                                    US: +1 (1 888) 266-6917</li>
                                <li className='flex items-center ff-gilroy hover:text-[#6022EA] transition-colors duration-300 ease-linear text-[14px] font-normal text-white mb-5 gap-2'>
                                    <Telephone />
                                    office@vipestudio.com
                                </li>
                                <li className='flex items-center ff-gilroy hover:text-[#6022EA] transition-colors duration-300 ease-linear text-[14px] font-normal text-white mb-5 gap-2'>
                                    <Telephone />
                                    14 Srebarna, Sofia 1407, Bulgaria</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t-2 border-solid border-[#ffffff30] py-7 lg:mt-14 mt-10'>
                <div className='container xl:max-w-[1320px] mx-auto px-3'>
                    <div className='flex flex-row flex-wrap'>
                        <div className='md:w-3/6 w-full'>
                            <p className='ff-gilroy text-[14px] font-normal text-white'>© Vipe Studio 2016-2022</p>
                            <div className='flex gap-1 pt-3'>
                                <p className='ff-gilroy text-[14px] font-normal text-white'>Privacy</p>
                                <span className='ff-gilroy text-[14px] font-normal text-white'>|</span>
                                <p className='ff-gilroy text-[14px] font-normal text-white'>Careers</p>
                                <span className='ff-gilroy text-[14px] font-normal text-white'>|</span>
                                <p className='ff-gilroy text-[14px] font-normal text-white'>Media</p>
                                <span className='ff-gilroy text-[14px] font-normal text-white'>|</span>
                                <p className='ff-gilroy text-[14px] font-normal text-white'>Client Area</p>
                            </div>
                        </div>
                        <div className='md:w-3/6 w-full flex md:justify-end justify-start items-center md:mt-0 mt-6'>
                            <div className='flex flex-row flex-wrap gap-4'>
                                <Github />
                                <Linkdin />
                                <Tweeter />
                                <Facebook />
                                <Instagrm />
                                <Wikipedia />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;