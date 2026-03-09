import React from "react";
import testCSS from "./../Header/Testimonial.module.css";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
     <section className={`${testCSS.test_wrapper} section`}>

      <div className={testCSS.test_head}>

        <span className={testCSS.badge}>Testimonials</span>

        <h2>What Our Customers Say?</h2>

        <p>
          Our commitment to safe, comfortable, and reliable travel has made
          <b> Manvik Tour & Travels </b>
          one of the most trusted taxi services in A jaipur.
        </p>

      </div>


      {/* SLIDER */}

      <div className={testCSS.test_slider}>

        <div className={testCSS.test_card}>

          <p>
            Very professional and punctual service. The driver was polite,
            the cab was clean, and the overall journey from jaipur to
            Delhi Airport was smooth. Highly recommended!
          </p>

          <h4>Riya Sharma</h4>
          <span>Jaipur</span>

        </div>


        <div className={testCSS.test_card}>

          <p>
            We booked an Innova Crysta for a family trip to Udaipur.
            The car was in excellent condition and the driver knew
            all the best routes.
          </p>

          <h4>Amit Bhardwaj</h4>
          <span>Delhi</span>

        </div>


        <div className={testCSS.test_card}>

          <p>
            Excellent taxi service in Alwar. Affordable pricing and
            very professional drivers. Booking process was very easy.
          </p>

          <h4>Rahul Verma</h4>
          <span>Gurgaon</span>

        </div>


        <div className={testCSS.test_card}>

          <p>
            Clean cars, polite driver and on-time pickup. Best
            travel experience we had in Rajasthan.
          </p>

          <h4>Pooja Mehta</h4>
          <span>Mumbai</span>

        </div>

      </div>


      {/* BUTTON */}

      {/* <div className={testCSS.btn_box}>
        <button className={testCSS.book_btn}>
          Book Taxi →
        </button>
      </div> */}
                   <Link to="/contact"> <button>Book a Taxi</button></Link>

    </section>
  );
};

export default Testimonials;