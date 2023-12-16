import './App.css';
import React from 'react';
import Header from './components/Header';
import Featured from './components/Featured';
import Integer from './components/Integer';
import Services from './components/Services';
import TermPartner from './components/TermPartner';
import AglieWordpress from './components/AglieWordpress';
import FullStars from './components/FullStars';
import SuccessGuide from './components/SuccessGuide';
import Footer from './components/Footer';
import Backtotop from './assets/images/png/Back-to-topbtn.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect, useState } from 'react';
import PreLoader from './components/PreLoader';

function App() {
  // ----------back-to-top----------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // ----------aos----------
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 2300
      }
    );
    Aos.refresh()
  });
  // -------------PreLoader----------
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 3900);
  }, []);
  return (

    <div className='overflow-x-hidden'>
      {screenLoading ? (
        <PreLoader />
      ) : (
        <div className=''>
          <Header />
          <Featured />
          <Integer />
          <Services />
          <TermPartner />
          <AglieWordpress />
          <FullStars />
          <SuccessGuide />
          <Footer />
          <div className='fixed bottom-4 right-4'>
            <div className={backToTop ? 'w-[60px] h-[60px] rounded-[60px] bg-[#6022EA]' : 'hidden'} onClick={() => top()}>
              <img src={Backtotop} alt="Backtotop" className=' w-full' />
            </div>
          </div>
        </div>
      )
      }
    </div >
  );
}

export default App;
