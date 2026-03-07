import React, { useState } from 'react'
import roomCSS from './../Header/Room.module.css';
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

import { FaTaxi } from "react-icons/fa";
import car2 from './../../assets/car2.webp'
import car3 from './../../assets/car3.webp'
import car4 from './../../assets/car4.webp'
import car5 from './../../assets/car5.webp'
import car6 from './../../assets/car6.webp'
import car from './../../assets/car.webp'

import img2 from "../../assets/img-2.webp";

import { FaCheck, FaMagic, FaDollarSign, FaClock, FaMap, FaUsers } from "react-icons/fa";

function Room() {

        const cars = [
{
name:"Swift Dzire",
price:"₹ 10 - 11/km",
desc:"A reliable and comfortable sedan ideal for local rides, outstation travel, and airport transfers. Perfect for small families and business travelers.",
image:car
},
{
name:"Hyundai Aura",
price:"₹ 11 - 12/km",
desc:"A premium sedan offering smooth performance, excellent mileage, and spacious seating. Best suited for city travel and long routes.",
image:car2
},
{
name:"Nexa XL6",
price:"₹ 14 - 16/km",
desc:"A stylish and comfortable 6-seater with captain seats, great for family trips, Rajasthan tours, and premium travel needs.",
image:car3
},
{
name:"Maruti Ertiga",
price:"₹ 10 - 11/km",
desc:"A popular 7-seater MPV designed for group travel, family tours, and outstation journeys with ample luggage space.",
image:car4
},
{
name:"Toyota Innova Crysta ",
price:"₹ 10 - 11/km",
desc:"A luxury MPV offering unmatched comfort for long-distance travel. Ideal for corporate trips, family vacations, and premium Rajasthan tours.",
image:car5
},
{
name:"Force Traveller",
price:"₹ 10 - 11/km",
desc:"Spacious and comfortable seating options for 12–17 passengers. Perfect for weddings, corporate groups, pilgrimages, school trips, and Rajasthan tour packages.",
image:car6
},
{
name:"Swift D",
price:"₹ 10 - 11/km",
desc:"A reliable and comfortable sedan ideal for local rides, outstation travel, and airport transfers. Perfect for small families and business travelers.",
image:car
}

];

     const [active,setActive] = useState(0);


  return (
    <div className={`${roomCSS.Room_wrapper} section`} id='rooms' >
        <div className={roomCSS.Room_title}>
            <h4>Tours</h4>
            <h2>Popular Routes</h2>
            <p className= {roomCSS.Room_p}>Travel comfortably across Rajasthan and nearby cities with our reliable <b>Manvik Tour & Travels cab services.</b>  Taksh Tour & Travels offers fixed pricing, professional drivers, and clean vehicles for all major routes.</p>
        </div>

        <div className={roomCSS.Room_cards}>
            <div className={roomCSS.Room_card}>
                <div className={roomCSS.RoomImage}>
                    <img src={staff_image_1} alt="Room-image" />
                </div>

                <div className={roomCSS.Room_card_info}>
                     <h2>Alwar to Jaipur Taxi Service</h2>
                    <p>Book a safe and affordable cab from Alwar to Jaipur for airport transfers, business meetings, or sightseeing. </p>
                   
                </div>
                    {/* <p className={roomCSS.price}> $45/Night</p> */}
            </div>

             <div className={roomCSS.Room_card}>
                <div className={roomCSS.RoomImage}>
                    <img src={staff_image_2} alt="Room-image" />
                </div>

                <div className={roomCSS.Room_card_info}>
                  <h2>Alwar to Jaipur Taxi Service</h2>
                    <p>Fast and punctual airport transfer service to Jaipur Airport with reliable pickup times and clean vehicles.</p>
                    
                </div>
                    {/* <p className={roomCSS.price}> $59/Night</p> */}
            </div>
            <div className={roomCSS.Room_card}>
                <div className={roomCSS.RoomImage}>
                    <img src={staff_image_3} alt="Room-image" />
                </div>

                <div className={roomCSS.Room_card_info}>
                      <h2>Alwar to Jaipur Taxi Service</h2>
                    <p>Comfortable long-distance travel to Delhi with professional, experienced drivers. Perfect for airport drops, work travel, and family trips. </p>
                    
                </div>
                    {/* <p className={roomCSS.price}> $45/Night</p> */}
            </div>

             <div className={roomCSS.Room_card}>
                <div className={roomCSS.RoomImage}>
                    <img src={staff_image_4} alt="Room-image" />
                </div>

                <div className={roomCSS.Room_card_info}>
                      <h2>Alwar to Jaipur Taxi Service</h2>
                    <p>On-time airport pickup and drop service with fixed and transparent pricing for IGI Airport, New Delhi. </p>
                    
                </div>
                    {/* <p className={roomCSS.price}> $45/Night</p> */}
            </div>
            <div className={roomCSS.Room_card}>
                <div className={roomCSS.RoomImage}>
                    <img src={staff_image_5} alt="Room-image" />
                </div>

                <div className={roomCSS.Room_card_info}>
                      <h2>Alwar to Jaipur Taxi Service</h2>
                    <p>Quick and comfortable rides for business travelers, tourists, and corporate meetings. </p>
                    
                </div>
                    {/* <p className={roomCSS.price}> $45/Night</p> */}
            </div>

            

             <div className={roomCSS.Room_card}>
                <div className={roomCSS.RoomImage}>
                    <img src={staff_image_6} alt="Room-image" />
                </div>

                <div className={roomCSS.Room_card_info}>
                      <h2>Alwar to Jaipur Taxi Service</h2>
                    <p>Convenient taxi service for Bharatpur Bird Sanctuary, park visits, and day trips. </p>
                    
                </div>
                    {/* <p className={roomCSS.price}> $45/Night</p> */}
            </div>
              <div className={roomCSS.Room_card}>
                <div className={roomCSS.RoomImage}>
                    <img src={staff_image_7} alt="Room-image" />
                </div>

                <div className={roomCSS.Room_card_info}>
                      <h2>Alwar to Jaipur Taxi Service</h2>
                    <p>Book a comfortable outstation cab from Alwar to Jodhpur for family trips, business travel, or Rajasthan tourism.</p>
                    
                </div>
                    {/* <p className={roomCSS.price}> $59/Night</p> */}
            </div>
              <div className={roomCSS.Room_card}>
                <div className={roomCSS.RoomImage}>
                    <img src={staff_image_8} alt="Room-image" />
                </div>

                <div className={roomCSS.Room_card_info}>
                      <h2>Alwar to Jaipur Taxi Service</h2>
                    <p>Travel hassle-free to the Golden City with our reliable Alwar to Jaisalmer cab service. </p>
                  
                </div>
                    {/* <p className={roomCSS.price}> $59/Night</p> */}
            </div>
              <div className={roomCSS.Room_card}>
                <div className={roomCSS.RoomImage}>
                    <img src={staff_image_9} alt="Room-image" />
                </div>

                <div className={roomCSS.Room_card_info}>
                      <h2>Alwar to Jaipur Taxi Service</h2>
                    <p>Enjoy a smooth journey to Agra to visit the Taj Mahal or explore historical sites with our flexible one-way and round-trip options. </p>
                    
                </div>
                    {/* <p className={roomCSS.price}> $59/Night</p> */}
            </div>
             <div className={roomCSS.Room_card}>
                <div className={roomCSS.RoomImage}>
                    <img src={staff_image_10} alt="Room-image" />
                </div>

                <div className={roomCSS.Room_card_info}>
                      <h2>Alwar to Jaipur Taxi Service</h2>
                    <p>Suitable for Char Dham travelers, pilgrims, and families visiting Har Ki Pauri and nearby holy sites. </p>
                    
                </div>
                    {/* <p className={roomCSS.price}> $45/Night</p> */}
            </div>

             <div className={roomCSS.Room_card}>
                <div className={roomCSS.RoomImage}>
                    <img src={staff_image_11} alt="Room-image" />
                </div>

                <div className={roomCSS.Room_card_info}>
                      <h2>Alwar to Jaipur Taxi Service</h2>
                    <p>Comfortable and affordable taxi service from Alwar to Ujjain for temple visits, Mahakal Darshan, and family trips. </p>
                    
                </div>
                    {/* <p className={roomCSS.price}> $45/Night</p> */}
            </div>
            <div className={roomCSS.Room_card}>
                <div className={roomCSS.RoomImage}>
                    <img src={staff_image_12} alt="Room-image" />
                </div>

                <div className={roomCSS.Room_card_info}>
                      <h2>Alwar to Jaipur Taxi Service</h2>
                    <p>Plan your trip to the City of Lakes with our safe and affordable Alwar to Udaipur taxi service. </p>
                    
                </div>
                    {/* <p className={roomCSS.price}> $45/Night</p> */}
            </div>
        </div>
         <button>Book Taxi</button>

          <div className={roomCSS.taxi}>

      <div className= {roomCSS.taxi_box}>

        <div className= {roomCSS.taxi_left}>
          <p className={roomCSS.taxi_small}>Need a Taxi in Alwar?</p>

          <h2 className={roomCSS.taxi_title}>
            Book Your Taxi, Now!
          </h2>

          <p className={roomCSS.taxi_desc}>
            Safe Drivers. Clean Cars. Best Prices Guaranteed. Local,
            Outstation, Airport & Corporate Travel Available 24×7.
          </p>
        </div>

        <div className={roomCSS.taxi_right}>
          <button className={roomCSS.taxi_btn}>
            Book A Taxi <FaTaxi />
          </button>
        </div>

      </div>

    </div>

    <div className={roomCSS.Room_title}>
            <h4>Fleets</h4>
            <h2>Our Vehicles</h2>
            <p className= {roomCSS.Room_p}>we offer a wide range of well-maintained vehicles to ensure a safe and comfortable travel experience for every journey. From daily rides to long-distance trips, our fleet is perfect for families, tourists, and corporate clients.</p>
        </div>


            <div className={roomCSS.cars_section}>

<div className={roomCSS.car_tabs}>

{cars.map((car,index)=>(
<button
key={index}
className={active === index ? "tab active":"tab"}
onClick={()=>setActive(index)}
>
{car.name}
</button>
))}

</div>


<div className={roomCSS.car_content}>

<div className={roomCSS.car_info}>

<h2>{cars[active].name}</h2>

<h4>{cars[active].price}</h4>

<p>{cars[active].desc}</p>

</div>

<div className={roomCSS.car_image}>

<img src={cars[active].image} alt="" />

</div>

</div>

</div>
<button>Book a Taxi</button>



 <section className={roomCSS.choose_section}>

      {/* LEFT IMAGE */}
      <div className={roomCSS.choose_img}>

        <img src={img2} alt="taxi" />

       

      </div>


      {/* RIGHT CONTENT */}
      <div className={roomCSS.choose_content}>

        <h2>Why Choose Us?</h2>

        <h4>Best Taxi Service in jaipur City</h4>

        <p>
          At <b>Manvik Tour & Travels</b>, we focus on delivering a safe,
          reliable, and comfortable travel experience for every customer.
          Whether it's a short ride in Alwar or a long-distance trip across
          Rajasthan.
        </p>


        <ul className={roomCSS.choose_list}>

          <li><FaCheck/> Verified & Professional Drivers</li>

          <li><FaMagic/> Clean & Well-Maintained Vehicles</li>

          <li><FaDollarSign/> Affordable & Transparent Pricing</li>

          <li><FaClock/> 24×7 Taxi Service in jaipur</li>

          <li><FaMap/> Wide Range of Travel Options</li>

          <li><FaUsers/> Trusted by Families & Businesses</li>

        </ul>


        <div className={roomCSS.choose_btns}>

          <button className={roomCSS.btn_outline}>
            Know More
          </button>

          <button className={roomCSS.btn_fill}>
            Book Taxi
          </button>

        </div>

      </div>

    </section>

    </div>
  )
}

export default Room