import React from 'react'
import staffsCSS from './../Header/Staffs.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import staff_image_1 from './../../assets/slide1.webp'
import staff_image_2 from './../../assets/slide2.webp'

import staff_image_3 from './../../assets/slide3.webp'
import staff_image_4 from './../../assets/slide4.webp'
import staff_image_5 from './../../assets/slide5.webp'
import staff_image_6 from './../../assets/slide6.webp'
import staff_image_7 from './../../assets/slide7.webp'
import staff_image_8 from './../../assets/slide8.webp'
import staff_image_9 from './../../assets/slide9.webp'
import staff_image_10 from './../../assets/slide10.webp'
import staff_image_11 from './../../assets/slide11.webp'
import staff_image_12 from './../../assets/slide12.webp'


function Staffs() {
  return (
    <div className={`${staffsCSS.Staff_wrapper}`} id='blog'>
        <div className={staffsCSS.staff_title}>
                    <h4>Gallery</h4>
                    <h2>Our Memories</h2>
                    <p className= {staffsCSS.staff_p}>Explore the moments that define <b>Manvik Tour & Travels-</b> 
                    from our well-maintained fleet to the beautiful destinations we cover across Rajasthan and North India. Every picture reflects our commitment to safety, comfort, and professional travel service.</p>
                </div>

        <div className={staffsCSS.staff}>
            <Swiper 
                    slidesPerView={5}
                  spaceBetween={20}
                    speed={1500}
                    loop={true}
                    autoplay={ {
                            delay: 2000,
                        } } 
                        breakpoints={{
                            0: {
                                slidesPerView:1,
                                spaceBetween:40
                            },
                              668: {
                                slidesPerView:2
                            },
                              769: {
                                slidesPerView:3
                            },
                             900: {
                                slidesPerView:4
                            },
                            989: {
                                slidesPerView:5
                            },
                        }}
                        modules={[Autoplay]}
                        
                        >

                <SwiperSlide>
                    <div className={staffsCSS.staff_card}>
                        <img src={staff_image_1} alt="staff-image" />

                        <div className={staffsCSS.staff_details}>
                            <h3>Ujjain</h3>
                           
                        </div>
                    </div>
                </SwiperSlide>
                 <SwiperSlide>
                    <div className={staffsCSS.staff_card}>
                        <img src={staff_image_2} alt="staff-image" />

                        <div className={staffsCSS.staff_details}>
                            <h3>Udaipur</h3>
                          
                        </div>
                    </div>
                </SwiperSlide>  
                <SwiperSlide>
                    <div className={staffsCSS.staff_card}>
                        <img src={staff_image_3} alt="staff-image" />

                        <div className={staffsCSS.staff_details}>
                            <h3>Neemrana</h3>
                          
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className={staffsCSS.staff_card}>
                        <img src={staff_image_4} alt="staff-image" />

                        <div className={staffsCSS.staff_details}>
                            <h3>Jodhpur</h3>
                            
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={staffsCSS.staff_card}>
                        <img src={staff_image_5} alt="staff-image" />

                        <div className={staffsCSS.staff_details}>
                            <h3>Jaisalmer</h3>
                          
                        </div>
                    </div>
                </SwiperSlide>
                
               
                 <SwiperSlide>
                    <div className={staffsCSS.staff_card}>
                        <img src={staff_image_6} alt="staff-image" />

                        <div className={staffsCSS.staff_details}>
                            <h3>Jaipur</h3>
                            
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={staffsCSS.staff_card}>
                        <img src={staff_image_7} alt="staff-image" />

                        <div className={staffsCSS.staff_details}>
                            <h3>Jaipur</h3>
                          
                        </div>
                    </div>
                </SwiperSlide>
                 <SwiperSlide>
                    <div className={staffsCSS.staff_card}>
                        <img src={staff_image_8} alt="staff-image" />

                        <div className={staffsCSS.staff_details}>
                            <h3>Haridwar</h3>
                           
                        </div>
                    </div>
                </SwiperSlide>  
                <SwiperSlide>
                    <div className={staffsCSS.staff_card}>
                        <img src={staff_image_9} alt="staff-image" />

                        <div className={staffsCSS.staff_details}>
                            <h3>Delhi</h3>
                           
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className={staffsCSS.staff_card}>
                        <img src={staff_image_10} alt="staff-image" />

                        <div className={staffsCSS.staff_details}>
                            <h3>Sikkim</h3>
                            
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={staffsCSS.staff_card}>
                        <img src={staff_image_11} alt="staff-image" />

                        <div className={staffsCSS.staff_details}>
                            <h3>Bharatpur</h3>
                           
                        </div>
                    </div>
                </SwiperSlide>
                
               
                 <SwiperSlide>
                    <div className={staffsCSS.staff_card}>
                        <img src={staff_image_12} alt="staff-image" />

                        <div className={staffsCSS.staff_details}>
                            <h3>agra</h3>
                            
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

    </div>
  )
}

export default Staffs