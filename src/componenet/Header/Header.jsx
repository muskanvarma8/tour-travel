import React from 'react'
import headerCSS from './../Header/Header.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import muskanImg1 from './../../assets/cab2.webp';
import muskanImg2 from './../../assets/cab.webp';
import muskanImg3 from './../../assets/cab5.webp';
import { Link } from "react-router-dom";


import { Autoplay } from 'swiper/modules';

function Header() {
  return (
    <div className={headerCSS.header_wrapper} id='home'>
        <div className={headerCSS.Swiper_Slider_wrapper}>
     
    <Swiper 
          slidesPerView={1}
          loop={true}
          autoplay={
            {delay: 1000}
          }
          speed={3000} 
          modules={[Autoplay]}
          >
          

            <SwiperSlide><img src={muskanImg2} alt="header-slider-image" />
              <div className={headerCSS.slide_content}>
    <h3 className={headerCSS.Swiper_Slider_h}>Travel With Comfort</h3>
     <p>Our support team is ready to assist you 24/7 with anything from rental questions to account setup. </p>
      <Link to="/contact"> <button>Book a Taxi</button></Link>
       </div>
            </SwiperSlide>
           

            <SwiperSlide><img src={muskanImg3} alt="header-slider-image" />
                  <div className={headerCSS.slide_content}>
    <h3 className={headerCSS.Swiper_Slider_h}>Travel With Comfort</h3>
     <p>Our support team is ready to assist you 24/7 with anything from rental questions to account setup. </p>
  
     <Link to="/contact"> <button>Book a Taxi</button></Link>
       </div>
            </SwiperSlide>

            <SwiperSlide><img src={muskanImg1} alt="header-slider-image" />
                <div className={headerCSS.slide_content}>
    <h3 className={headerCSS.Swiper_Slider_h}>Travel With Comfort</h3>
     <p>Our support team is ready to assist you 24/7 with anything from rental questions to account setup. </p>
 
     <Link to="/contact"> <button>Book a Taxi</button></Link>
       </div>
            </SwiperSlide>

        
            
       </Swiper>
     </div>

    
    </div>
  );
}

export default Header