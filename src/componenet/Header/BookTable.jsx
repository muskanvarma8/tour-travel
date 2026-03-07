import React from 'react'
import bookTableCSS from './../Header/BookTable.module.css';

import TestimonialImg from "./../../assets/home-1-testimonial-1.jpg";
// import Card_Img_1 from "../../assets/Amenities-image-box-1.png";
// import Card_Img_2 from "../../assets/Amenities-image-box-2.png";

function BookTable() {
  return (
    <div className={`${bookTableCSS.BookTable_wrapper} section`} id='bookingTable'>
        <div className={bookTableCSS.Testimonial}>
            <div className={bookTableCSS.Testimonial_wrapper}>
                <p>"Travel comfortably across Rajasthan and nearby cities with our reliable jaipur taxi and outstation cab services."</p>

                <div className={bookTableCSS.Profile}>
                    <img src={TestimonialImg} alt="user-image" />
                    <h2>MANVIK TOUR & TRAVELS </h2>
                </div>

                <i className="ri-double-quotes-i"></i>

            </div>
        </div>

        <div className={bookTableCSS.bookTable_Container}>
            <small>Let's Enjoy</small>
            <h2>Book Your Taxi</h2>
            <p>Travel comfortably across Rajasthan and nearby cities with our reliable jaipur</p>

            <div className={bookTableCSS.Cards}>

                <div className={bookTableCSS.Card}>
                    {/* <img src={Card_Img_1} alt="card-image" /> */}

                    <div className={bookTableCSS.card_content}>
                        <h3> NARAYAN VIHARROAD GANPATPURA, jaipur (Raj.) 301001</h3>
                        <p>Travel comfortably across Rajasthan and nearby cities with our reliable jaipur taxi and outstation cab services. </p>
                        <a href="#">Book a Taxi</a>
                    </div>
                </div>

                <div className={bookTableCSS.Card}>
                    {/* <img src={Card_Img_2} alt="card-image" /> */}

                    <div className={bookTableCSS.card_content}>
                        <h3>+91-7210806602 - rajujat10092003@gmail.com</h3>
                        <p>Travel comfortably across Rajasthan and nearby cities with our reliable jaipur taxi and outstation cab services.</p>
                        <a href="#">Book a Taxi</a>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default BookTable