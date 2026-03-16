import react from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './componenet/Header/Header'
import About from './componenet/Header/About'
import Room from './componenet/Header/Room'
import BookTable from './componenet/Header/BookTable'

import Staffs from './componenet/Header/Staffs'
import Testimonial from './componenet/Header/Testimonial'
import Contact from './componenet/Header/Contact'
import Footer from './componenet/Header/Footer'
import Nav from './componenet/Nav'
import Services from './componenet/Header/Services'
import TaxiBooking from './componenet/Header/TaxiBooking';




function Home() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Room />
      
      <Staffs />
      <Testimonial />
      <BookTable />
      <Contact />
    
    </>
  );
}

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<TaxiBooking/>} />
      </Routes>

      <Footer />
    </>
  );
}



export default App
