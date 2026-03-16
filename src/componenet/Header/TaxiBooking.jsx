import React, { useState } from "react";
import "./TaxiBooking.css";
import emailjs from "@emailjs/browser";
import Header from "./Header";


const TaxiBooking = () => {
  const [faqOpen, setFaqOpen] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    pickup: "",
    drop: "",
    date: "",
    time: "",
    vehicle: "",
    trip: "",
    passengers: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // VALIDATION FUNCTION
  const validate = () => {

  if (formData.name.trim().length < 3) {
    alert("Please enter valid name (min 3 characters)");
    return false;
  }

  if (!/^[0-9]{10}$/.test(formData.mobile)) {
    alert("Please enter valid 10 digit mobile number");
    return false;
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
    alert("Please enter valid email address");
    return false;
  }

  if (formData.pickup.trim().length < 3) {
    alert("Enter valid pickup location");
    return false;
  }

  if (formData.drop.trim().length < 3) {
    alert("Enter valid drop location");
    return false;
  }

  if (!formData.date) {
    alert("Please select travel date");
    return false;
  }

  if (!formData.time) {
    alert("Please select pickup time");
    return false;
  }

  if (!formData.vehicle) {
    alert("Please select vehicle type");
    return false;
  }

  if (!formData.trip) {
    alert("Please select trip type");
    return false;
  }

  if (!formData.passengers || formData.passengers <= 0) {
    alert("Enter number of passengers");
    return false;
  }

  if (formData.message.trim().length < 5) {
    alert("Please write your message");
    return false;
  }

  return true;
};

  //  FORM SUBMIT //

 const handleSubmit = (e) => {
  e.preventDefault();

  if (!validate()) return;

  emailjs
    .send(
     
      formData,
     
    )
    .then(() => {

      alert("Booking request sent successfully!");

      setSubmitted(true);

      setFormData({
        name: "",
        mobile: "",
        email: "",
        pickup: "",
        drop: "",
        date: "",
        time: "",
        vehicle: "",
        trip: "",
        passengers: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    })
    .catch(() => {
      alert("Email sending failed");
    });
};
  return (
   <>
   
   <Header/>
    <section className="taxi-book">
      <div className="taxi-container">
        {/* LEFT SECTION */}

        <div className="left-box">
          <h1>Book Taxi in Jaipur – Fast, Safe & Reliable Cab Service</h1>

          <p className="subtext">
            Instant booking for local travel, outstation trips, airport pickup &
            drop, corporate travel, and Rajasthan tour packages.
          </p>

          <div className="features">
            <span>✔ 24×7 Service</span>
            <span>✔ Verified Drivers</span>
            <span>✔ Clean Vehicles</span>
            <span>✔ Transparent Pricing</span>
          </div>

          <h3>Why Book with Manvik Tour & Travels?</h3>

          <ul className="points">
            <li>Professional & verified drivers</li>
            <li>Clean, well-maintained vehicles</li>
            <li>Affordable per-km pricing</li>
            <li>On-time pickup & drop</li>
            <li>Local experts for Rajasthan routes</li>
            <li>Instant WhatsApp confirmation</li>
          </ul>

          <h3>Need Immediate Pickup?</h3>

          <p>
            For urgent taxi booking, airport drop, or last-minute travel,
            contact us directly.
          </p>

          {/* CALL BOX */}

          <div className="contact-box">
            <div className="call-box">
              <div className="call-icon">📞</div>

              <div className="call-text">
                <span>Call Us Now!</span>
                <p>+91-9529565656</p>
              </div>
            </div>

            <button className="whatsapp-btn">WhatsApp Us</button>
          </div>

          {/* FAQ */}

          <h3 className="faq-title">Booking FAQs</h3>

          <div className="faq-item">
            <div className="faq-head" onClick={() => setFaqOpen(1)}>
              How will my booking be confirmed?
            </div>

            {faqOpen === 1 && (
              <p>After submitting the form, our team will contact you soon.</p>
            )}
          </div>

          <div className="faq-item">
            <div className="faq-head" onClick={() => setFaqOpen(2)}>
              Can I book one-way taxi?
            </div>

            {faqOpen === 2 && <p>Yes, one-way taxi booking is available.</p>}
          </div>

          <div className="faq-item">
            <div className="faq-head" onClick={() => setFaqOpen(3)}>
              Which vehicles are available?
            </div>

            {faqOpen === 3 && <p>Sedan, SUV, Innova, Tempo Traveller.</p>}
          </div>
        </div>





        {/* RIGHT FORM */}

        <div className="form-box">
          <h2>Quick Taxi Booking Form</h2>

          <p className="form-sub">
            Fill in the details below and our team will contact you shortly.
          </p>

          {submitted && (
            <div className="success-msg">
              ✅ Your booking request has been submitted!
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter Your Name"
                onChange={handleChange}
              />
            </div>

            <div className="grid2">
              <div className="form-group">
                <label>Mobile Number *</label>
                <input
type="tel"
name="mobile"
value={formData.mobile}
maxLength="10"
placeholder="Mobile Number"
onChange={handleChange}
/>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email Address"
                  onChange={handleChange}
                />
              </div>
            </div>


            <div className="grid2">
              <div className="form-group">
                <label>Pickup Location *</label>
                <input
                  type="text"
                  name="pickup"
                  value={formData.pickup}
                  placeholder="Enter Pickup Location"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Drop Location *</label>
                <input
                  type="text"
                  name="drop"
                  value={formData.drop}
                  placeholder="Enter Drop Location"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid3">
              <div className="form-group">
                <label>Travel Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Pickup Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Vehicle Type</label>
                <select
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                >
                  <option value="">Select Vehicle Type</option>
                  <option>Sedan</option>
                  <option>SUV</option>
                  <option>Innova</option>
                </select>
              </div>
            </div>

            <div className="grid2">
              <div className="form-group">
                <label>Trip Type</label>
                <select
                  name="trip"
                  value={formData.trip}
                  onChange={handleChange}
                >
                  <option value="">Select Your Trip</option>
                  <option>One Way</option>
                  <option>Round Trip</option>
                </select>
              </div>

              <div className="form-group">
                <label>No. of Passengers</label>
                <input
type="number"
name="passengers"
min="1"
value={formData.passengers}
placeholder="Enter Number"
onChange={handleChange}
/>
              </div>
            </div>

            <div className="form-group">
              <label>Message / Special Requirement</label>
              <textarea
                name="message"
                value={formData.message}
                placeholder="Enter here..."
                onChange={handleChange}
              ></textarea>
            </div>

            <button className="quote-btn">Get Quote</button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default TaxiBooking;
