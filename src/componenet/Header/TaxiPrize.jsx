import React from "react";
import "./TaxiPrize.css";

const cars = [
  {
    name: "Sedan",
    icon: "🚗",
    round: "₹11 / KM",
    routes: [
      ["Old Route","Jaipur → Delhi","₹3500"],
      ["New Highway","Jaipur → Delhi","₹4500"],
      ["New Highway","Jaipur → Ajmer","₹1900"],
      ["New Highway","Jaipur → Agra","₹3500"],
      ["New Highway","Jaipur → Udaipur","₹5000"],
      ["New Highway","Jaipur → Jodhpur","₹4200"],
      ["New Highway","Jaipur → Panjab","₹8500"],
      ["New Highway","Jaipur → Bikaner","₹4500"],
      ["New Highway","Jaipur → Bhilwara","₹3200"]
    ]
  },

  {
    name: "XUV",
    icon: "🚙",
    round: "₹15 / KM",
    routes: [
      ["Old Route","Jaipur → Delhi","₹4500"],
      ["New Highway","Jaipur → Delhi","₹5500"],
      ["New Highway","Jaipur → Ajmer","₹2800"],
      ["New Highway","Jaipur → Agra","₹4500"],
      ["New Highway","Jaipur → Udaipur","₹6500"],
      ["New Highway","Jaipur → Jodhpur","₹6000"],
      ["New Highway","Jaipur → Panjab","₹11000"],
      ["New Highway","Jaipur → Bikaner","₹6500"],
      ["New Highway","Jaipur → Bhilwara","₹5500"]
    ]
  },

  {
    name: "Innova Crysta",
    icon: "🚐",
    round: "₹18 / KM",
    routes: [
      ["Old Route","Jaipur → Delhi","₹5500"],
      ["New Highway","Jaipur → Delhi","₹6500"],
      ["New Highway","Jaipur → Ajmer","₹3700"],
      ["New Highway","Jaipur → Agra","₹5500"],
      ["New Highway","Jaipur → Udaipur","₹7500"],
      ["New Highway","Jaipur → Jodhpur","₹7000"],
      ["New Highway","Jaipur → Panjab","₹12000"],
      ["New Highway","Jaipur → Bikaner","₹7500"],
      ["New Highway","Jaipur → Bhilwara","₹6500"]
    ]
  }
];

function TaxiPrize() {

  return (

    <div className="pricing-container">

      {cars.map((car,index)=>(
        
        <div className="card" key={index}>

          <h2 className="card-title">
            <span>{car.icon}</span> {car.name}
          </h2>

          <div className="table-head">
            <span>Route Type</span>
            <span>Route</span>
            <span>Price</span>
          </div>

          {car.routes.map((route,i)=>(
            <div className="table-row" key={i}>
              <span>{route[0]}</span>
              <span>{route[1]}</span>
              <span>{route[2]}</span>
            </div>
          ))}

          <div className="round">
            Round Trip: {car.round}
          </div>

        </div>

      ))}

    </div>

  );
}

export default TaxiPrize;