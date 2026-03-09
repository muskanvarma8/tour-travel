import React from "react";
import "./Services.css";
import { FaMapMarkerAlt, FaTaxi, FaPlaneDeparture, FaBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="services" id="services">

      <button className="services-tag">Services</button>

      <h2>Featured Services</h2>

      <p className="services-desc">
        We offer reliable and affordable travel services across
        <b> jaipur, Rajasthan</b>, designed to meet the needs of individuals,
        families, tourists, and corporate clients. With professional drivers,
        clean vehicles, and 24×7 availability, we ensure a smooth and
        comfortable journey every time.
      </p>

      <div className="services-grid">

        <div className="service-card">
          <FaMapMarkerAlt className="icon" />
          <h3>LOCAL TAXI</h3>
          <p>
            Fast, safe, and convenient taxi service for city rides,
            market visits, office travel, and daily commuting within Jaipur.
          </p>
        </div>

        <div className="service-card">
          <FaTaxi className="icon" />
          <h3>OUTSTATION TAXI</h3>
          <p>
            Plan your trips to Jaipur, Delhi, Agra, Jaipur Airport,
            or anywhere across Rajasthan with comfortable cabs.
          </p>
        </div>

        <div className="service-card">
          <FaPlaneDeparture className="icon" />
          <h3>AIRPORT PICKUP & DROP</h3>
          <p>
            Reliable and punctual airport transfers to Jaipur Airport
            and Delhi Airport with fixed pricing.
          </p>
        </div>

        <div className="service-card">
          <FaBuilding className="icon" />
          <h3>CORPORATE TRAVEL</h3>
          <p>
            Professional transportation services for companies,
            staff commuting, meetings, and corporate events.
          </p>
        </div>

      </div> <br />

      <Link to="/contact"> <button>Book a Taxi</button></Link>

    </section>
  );
};

export default Services;