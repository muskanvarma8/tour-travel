import React from 'react'
import headerCSS from './../Header/Header.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import muskanImg1 from './../../assets/cab2.webp';
import muskanImg2 from './../../assets/cab.webp';
import muskanImg3 from './../../assets/cab5.webp';


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
    <button>Book a Taxi</button>
       </div>
            </SwiperSlide>
           

            <SwiperSlide><img src={muskanImg3} alt="header-slider-image" />
                  <div className={headerCSS.slide_content}>
    <h3 className={headerCSS.Swiper_Slider_h}>Travel With Comfort</h3>
     <p>Our support team is ready to assist you 24/7 with anything from rental questions to account setup. </p>
    <button className={headerCSS.slide_btn}>Book a Taxi</button>
       </div>
            </SwiperSlide>

            <SwiperSlide><img src={muskanImg1} alt="header-slider-image" />
                <div className={headerCSS.slide_content}>
    <h3 className={headerCSS.Swiper_Slider_h}>Travel With Comfort</h3>
     <p>Our support team is ready to assist you 24/7 with anything from rental questions to account setup. </p>
    <button className={headerCSS.slide_btn}>Book a Taxi</button>
       </div>
            </SwiperSlide>

        
            
       </Swiper>
     </div>

     {/* <div className={headerCSS.header_content}>
      <small>Luxury</small>
      <h2>Find Your Luxury Room <br /> & Enjoy Your Vacation</h2>

      <div className={headerCSS.rating_container}>
        <img src={muskanImg4} alt="rating-image" />
        <span>4.9 Google Rating <br />Around Globe</span>
      </div>

      <div className={headerCSS.Booking_container}>
        <div className={headerCSS.input_wrapper}>
          <label> Check In : -</label>
          <input type="date" />
        </div>
        <div className={headerCSS.input_wrapper}>
          <label> Check Out : -</label>
          <input type="date" />
        </div>
        <div className={headerCSS.input_wrapper}>
          <label> Adults :-</label>
          <input type="text" />
        </div>
        <div className={headerCSS.input_wrapper}>
          <label> Children :-</label>
          <input type="text" />
        </div>
        <button>Check Avaliability</button>
      </div>

     </div> */}
    </div>
  );
}

export default Header