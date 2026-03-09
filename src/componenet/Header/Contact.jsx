import React, { useState } from 'react'
import contactCSS from './../Header/Contact.module.css';

import element from './../../assets/contact-el.png'

function Contact() {

const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    
    const [phone, setPhone] = useState("");
    
 
    

    function handleSubmit(e) {
            e.preventDefault();

      if (name.trim().length < 4) {
    alert("Please enter your name");
  } 

   else if (email.trim() === "") {
    alert("Please enter your email");
  } 
   
  else if (phone.length !== 10) {
    alert("Phone number must be 10 digits");
  } 
  else {
    alert("Msg send successful");
  }
    }


  return (
    <>
    <div className={`${contactCSS.contact_wrapper} section`} id='contact'>
        <div className={contactCSS.Reservation}>
            <img src={element} alt="element-contact" />
            <h2>Discover The World Of Your Choice</h2>
            <button>Register Now</button>
        </div>
        <div className={contactCSS.form}>
          <h3>Reach Us</h3>
          <h2>Send Us a Message & We’ll Respond Soon</h2>
          <p>Our support team is ready to assist you 24/7 with anything from rental questions to account setup. </p>

           <form onSubmit={handleSubmit}>
        
            <div className={contactCSS.input_container}>
                <div className={contactCSS.input_wrapper}>
                    <input type="text" placeholder='Enter your Name' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                  <div className={contactCSS.input_wrapper}>
                    <input type="text" placeholder='Subject' required/>
                </div>
            </div>
             <div className={contactCSS.input_container}>
                <div className={contactCSS.input_wrapper}>
                    <input type="text" placeholder='Enter Email :' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                  <div className={contactCSS.input_wrapper}>
                    <input type="text" placeholder='Enter Phone Number :' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
            </div>
             <textarea placeholder='Message :' required></textarea>
                <button  >Submit</button>
             </form>

        </div>


    </div>

            {/* MAP SECTION */}
<div className={contactCSS.mapSection}>

  <div className={contactCSS.mapContainer}>
    <iframe
      title="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.60474714734!2d75.72605437523411!3d26.852521076683114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db52e6552fe89%3A0x448e039f71b5bacd!2sNarayan%20Vihar%20Rd%2C%20Rajasthan%20302020%2C%20India!5e0!3m2!1sen!2sus!4v1773042305093!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>

  <div className={contactCSS.addressBox}>
    <div className={contactCSS.locationIcon}>
      📍
    </div>

    <h4>VISIT US</h4>

    <p>
     NARAYAN VIHAR ROAD, GANPATPURA, jaipur (Rajasthan)
    </p>

    <button> Direction →</button>
  </div>

</div>
</>
  )
}

export default Contact