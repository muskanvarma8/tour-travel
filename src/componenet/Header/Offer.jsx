import React from 'react'
import offerCSS from './../Header/Offer.module.css';

import offerImg1 from './../../assets/tab-1.jpg'
import offerImg2 from './../../assets/tab-2.jpg'
import offerImg3 from './../../assets/tab-3.jpg'

function Offer() {
  return (
    <div className={`${offerCSS.offer_wrapper} section`} id='offer'>
        <div className={offerCSS.offer_title}>
            <small className='section_heading'>Amentites</small>
            <h2>Know What Amenities Do We Offer</h2>
            <p>"Luxurious, modern hotel with exceptional service. Noted for serene ambiance, Happiness And Great Pleasure Happiness And Great Pleasure"</p>
        </div>

        <div className={offerCSS.offer_cards}>
            <div className={offerCSS.offer_card}>
            <img src={offerImg1} alt="offer-image" />

             <div className={offerCSS.offer_details}>
                <span>.01</span>
                <h2>GYM Fitness Center</h2>
                </div>
            </div>

             <div className={offerCSS.offer_card}>
            <img src={offerImg2} alt="offer-image" />

             <div className={offerCSS.offer_details}>
                <span>.02</span>
                <h2>Steam Shower</h2>
                </div>
            </div>

             <div className={offerCSS.offer_card}>
            <img src={offerImg3} alt="offer-image" />

             <div className={offerCSS.offer_details}>
                <span>.03</span>
                <h2>Luxury Bed Rooms</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offer