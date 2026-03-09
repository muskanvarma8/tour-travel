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
                    <input type="text" placeholder='Address' required/>
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
  )
}

export default Contact