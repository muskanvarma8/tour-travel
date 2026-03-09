import React from "react";
import "./Footer.css";

import loggo from "../../assets/logo-removebg-preview.png";
import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-col about">
       
          <img  src={loggo} alt="" />

          <p>
            Experience the cleanest, most comfortable, and well-maintained cabs
            in the city. Whether it's a short ride or a city wide journey,
            Manvik Tour & Travels ensures a smooth and happy journey every time.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col g">
          <h3>SERVICES</h3>
          <ul>
            <li>Local Taxi</li>
            <li>Outstation Taxi</li>
            <li>Airport Transfer</li>
            <li>Corporate</li>
            <li>Tour & Travels</li>
            <li>Bulk Taxi</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>CONTACT US!</h3>

          <p className="contact">
            <FaEnvelope /> rajujat10092003@gmail.com
          </p>

          <p className="contact">
            <FaMapMarkerAlt />
            NARAYAN VIHAR ROAD GANPATPURA, jaipur (Raj.) 302001
          </p>

          <p className="support">24x7 Support Center</p>

          <h2 className="phone">+91-7210806602</h2>

          <div className="social">
            <FaFacebookF  className="scl"/>
            <FaInstagram className="scl"/>
            <FaYoutube className="scl"/>
          </div>
        </div>

      </div>

      {/* bottom */}

      <div className="footer-bottom">
        <p>
          Copyright © 2026 –
          <span> Manvik Tour & Travels</span>.
          All Rights Reserved.
        </p>

        <p className="policy">
          Terms & Conditions | Privacy Policy
        </p>
      </div>

    </footer>
  );
};

export default Footer;