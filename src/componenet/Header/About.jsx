import React from 'react'
import aboutCSS from './../Header/About.module.css';
import aboutImg1 from './../../assets/img1.webp';
import { FaPhoneAlt } from "react-icons/fa";


function About() {
  return (
 <div className={`${aboutCSS.About_wrapper} section`} id='about'>


           <div className={aboutCSS.About_content}>
             <h3 className={aboutCSS.About_h}><i>Welcome</i></h3>
            <h2>  <span>Manvik Tour & Travels </span>  </h2>
            <h3 className={aboutCSS.About_h}><i>Book Safe & Reliable Taxi in Alwar – 24×7 Availability </i></h3>

            <p className= {aboutCSS.About_p}>Manvik Tour & Travels  is a trusted travel and taxi service provider in jaipur, Rajasthan, offering reliable local, outstation, airport, and corporate cab services.
               With professional drivers, well-maintained vehicles, and transparent pricing, we ensure a safe and comfortable travel experience every time. <br /><br />

               Whether it’s a city ride, Rajasthan tour, or business travel requirement, we deliver punctual, premium, and hassle-free service—making us one of the most preferred travel partners in jaipur. <br /><br />

               With a customer-first approach and deep local expertise, we continue to serve residents, tourists, and businesses with unmatched reliability—helping you travel smarter, safer, and in complete comfort.</p>
           
            <div className={aboutCSS.About_cll}>
           <button className={aboutCSS.About_b}>Know More</button>
            <button>Book Taxi</button>

            <div className={aboutCSS.call_box}>
      <div className={aboutCSS.call_icon}>
        <FaPhoneAlt/>
      </div>

      <div className={aboutCSS.call_text}>
        <p>Call Us Now!</p>
        <h4>+91-9529565656</h4>
      </div>
      </div>

           </div>
         </div>
           <div className={aboutCSS.About_cards}>
           <img src={aboutImg1} alt="" />
           </div>

    </div>
  )
}

export default About