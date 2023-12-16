import React from 'react';
import Logo from '../assets/images/png/logo.png';
import { Droparrow, Globe, Playbtn, Searchicon, Roundsvg } from '../components/iconsvg';
import { useState } from 'react';
import Groupimg from '../assets/images/png/groupphoto.png';
import Trustimg from '../assets/images/png/trustimg.png';
import Truststar from '../assets/images/png/truststar.png';

const Header = () => {
  const [show, setshow] = useState(true)
  return (
    <div className='bg-black pb-16'>
      <div className='container lg:max-w-[1320px] mx-auto flex items-center justify-between px-4'>
        <div className='flex items-center gap-10 py-5'>
          <div className='max-w-[175px]'>
            <img src={Logo} alt="Logo" className='w-full' />
          </div>
          <ul className={`${show ? 'flex xl:flex-row items-center flex-col justify-center gap-4 max-xl:min-h-screen transition-all duration-300 ease-linear max-xl:fixed top-0 bottom-0 max-xl:h-full left-[-100%] max-xl:w-full z-[5] max-xl:bg-black' : 'flex transition-all duration-300 ease-linear flex-row max-xl:flex-col items-center gap-7 justify-center max-xl:min-h-screen max-xl:fixed top-0 bottom-0 max-xl:h-full left-0 max-xl:w-full z-[5] max-xl:bg-black'}`}>
            <div className="relative group cursor-pointer">
              <li className='flex items-center text-white ff-gilroy text-[16px] font-normal'>WordPress Solution <Droparrow /></li>
              <div className='absolute hidden cursor-none group-hover:cursor-pointer group-hover:flex items-center transition-all duration-300 ease-linear justify-center left-0 right-0 top-[35px]'>
                <div className='flex flex-col gap-2 border rounded-sm px-2 py-2'>
                  <a href="" className='text-white ff-gilroy text-[16px] text-center font-normal'>Home</a>
                </div>
              </div>
            </div>
            <div className='relative group cursor-pointer inline-block text-left'>
              <li className='flex items-center text-white ff-gilroy text-[16px] font-normal'>Services <Droparrow /></li>
              <div className='absolute hidden cursor-none group-hover:cursor-pointer group-hover:flex items-center transition-all duration-300 ease-linear justify-center left-0 right-0 top-[35px]'>
                <div className='flex flex-col gap-2 border rounded-sm px-2 py-2'>
                  <a href="" className='text-white ff-gilroy text-[16px] text-center font-normal'>Home</a>                </div>
              </div>
            </div>
            <li className='ff-gilroy text-[16px] font-normal text-[white] cursor-pointer'>Portfolio</li>
            <div className='relative group cursor-pointer inline-block text-left'>
              <li className='flex items-center text-white ff-gilroy text-[16px] font-normal'>About <Droparrow /></li>
              <div className='absolute hidden cursor-none group-hover:cursor-pointer group-hover:flex items-center transition-all duration-300 ease-linear justify-center left-0 right-0 top-[35px]'>
                <div className='flex flex-col gap-2 border rounded-sm px-2 py-2'>
                  <a href="" className='text-white ff-gilroy text-[16px] text-center font-normal'>Home</a>
                </div>
              </div>
            </div>
            <li className='ff-gilroy text-[16px] font-normal text-[white] cursor-pointer'>Blog</li>
          </ul>
        </div>
        <div className='hidden lg:flex items-center gap-7'>
          <a href="#" className='text-white ff-gilroy text-[16px] font-normal leading-[150%]'>1 888 266-6917 (eu?)</a>
          <button className='text-white ff-gilroy text-[18px] font-normal py-2 px-6 bg-[#6022EA] border-[0] rounded-[80px] hover:shadow-[0_0_20px_2px_#6022EA] transition-shadow duration-300 ease-linear'>Contact Us</button>
          <div>
            <div className='flex relative group cursor-pointer items-center gap-[5px]'>
              <Globe />
              <p className='text-white ff-gilroy text-[16px] font-normal'>Eng</p>
              <Droparrow />
              <div className='absolute hidden cursor-none group-hover:cursor-pointer group-hover:flex items-center transition-all duration-300 ease-linear justify-center left-0 right-0 top-[35px]'>
                <div className='flex flex-col gap-2 border rounded-sm px-2 py-2'>
                  <p className='text-white ff-gilroy text-[16px] text-center font-normal'>Eng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div onClick={() => setshow(!show)} className='xl:hidden w-[37px] h-[32px] relative z-[6] flex justify-between flex-col'>
          <span className={`${show ? 'bg-white h-[4px] w-full duration-300 ease-linear transition-all' : "bg-white transition-all duration-300 ease-linear h-[4px] w-full rotate-[50deg] translate-y-[25px]"}`}></span>
          <span className={`${show ? 'bg-white h-[4px] w-full duration-300 ease-linear transition-all' : "duration-300 ease-linear transition-all hidden"}`}></span>
          <span className={`${show ? 'bg-white h-[4px] w-full duration-300 ease-linear transition-all' : "bg-white transition-all duration-300 ease-linear h-[4px] w-full rotate-[-50deg] translate-y-[-50%]"}`}></span>
        </div>
      </div>
      <div className='container lg:max-w-[1320px] mx-auto px-4 xl:px-4 xl::mt-24 mt-11'>
        <div className='flex flex-row flex-wrap items-end'>
          <div data-aos="fade-right" className='xl:w-1/2 w-full pr-4 flex flex-col xl:items-start xl:justify-start items-center justify-center'>
            <h2 className='ff-konexy max-xl:text-[72px] max-sm:text-[39px] xl:text-[50px] 2xl:text-[72px] xl:text-start text-center font-normal text-white leading-[106%] relative before:absolute before:w-0 lg:before:w-[5px] before:top-0 before:bottom-0 before:left-[-20px] before:bg-[#6022EA] max-w-[646px]'>WordPress Development Agency</h2>
            <p className='ff-gilroy text-[24px] font-bold leading-[121%] text-white mt-7 xl:text-start text-center'>for Enterprise + Friendly Team	</p>
            <div className='flex xl:justify-start justify-center'>
              <p className='ff-gilroy max-w-[592px] text-[16px] font-normal text-white leading-[150%] mt-5 opacity-[0.7] xl:text-start text-center'>Vipe Studio is a WordPress Agency for development - a long-term partner for any WordPress service. Websites and,online shops development, maintenance and customization is what we do best.</p>
            </div>
            <div className='flex sm:gap-16 gap-3 items-center mt-7'>
              <button className='bg-[#6022EA] whitespace-nowrap rounded-[80px] py-3 sm:px-10 px-7 ff-gilroy text-[16px] font-normal text-white leading-[150%] hover:shadow-[0_0_20px_2px_#6022EA] transition-shadow duration-300 ease-linear'>Get Started</button>
              <a href="#" className='flex items-center sm:gap-2'>
                <Playbtn />
                <p className='ff-gilroy whitespace-nowrap text-[16px] font-normal text-white leading-[150%] opacity-[0.7]'>What is Vipe? (1min)</p>
              </a>
            </div>
          </div>
          <div data-aos="fade-left" className='xl:w-1/2 w-full xl:mt-0 mt-9 flex xl:justify-end justify-center lg:items-end items-center'>
            <div className='2xl:h-[500px] rounded-[20px] 2xl:translate-x-[80px] max-w-[761px] relative'>
              <img src={Groupimg} alt="Groupimg" className='h-full w-full rounded-[20px]' />
              <div className='rounded-[15px] cursor-pointer max-w-[228px] w-full bg-[#00000051] backdrop-blur  absolute bottom-[4%] left-[4%]  pt-2 pl-[18px] pb-3'>
                <img src={Trustimg} alt="Trustimg" className='max-w-[107.518px] w-full' />
                <img src={Truststar} alt="Truststar" className='max-w-[179.597px] w-full mt-2' />
                <p className='mt-2 ff-jost text-[16px] font-normal text-white leading-[150%]'>Rated 5.0 Excellent</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row flex-wrap lg:mt-40 mt-14'>
          <div data-aos="fade-down" className='lg:w-1/2 lg:pr-4 w-full'>
            <h3 className='ff-konexy text-[36px] font-normal text-white lg:text-start text-center'>Tell us more....</h3>
            <div className='flex lg:justify-start justify-center'>
              <p className='max-w-[573px] ff-gilroy text-[16px] font-normal text-white mt-4 lg:text-start text-center'>Lectus vitae est ultrices sed. Sit aliquam commodo hac donec augue in quis. Magna vel orci sem neque fringilla et lectus laoreet.</p>
            </div>
          </div>
          <div data-aos="fade-up" className='lg:w-1/2 w-full lg:mt-0 mt-7 flex flex-col items-center justify-end'>
            <div className='flex rounded-[80px] cursor-pointer max-w-[537px] w-full justify-center items-center py-5 px-8 border border-solid border-[#ffffff24] bg-[#ffffff24]'>
              <input type="text" placeholder='What do you need assistance with?' className='w-full bg-transparent outline-none border-0 placeholder:text-[16px] placeholder:font-normal placeholder:text-white placeholder:opacity-70 placeholder:ff-gilroy ff-gilroy text-[16px] font-normal text-white opacity-70' />
              <Searchicon />
            </div>
            <div className='max-w-[537px] w-full flex justify-between items-center mt-4'>
              <p className='flex gap-2 ff-gilroy text-[16px] font-normal text-white items-center leading-[150%]'><Roundsvg /> or send us an inquire?</p>
              <a href="" className=' ff-gilroy text-[16px] font-normal text-white leading-[150%]'>Learn more about...</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;