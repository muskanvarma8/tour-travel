import react from 'react'

import Header from './componenet/Header/Header'
import About from './componenet/Header/About'
import Room from './componenet/Header/Room'
import BookTable from './componenet/Header/BookTable'
// import Offer from './componenet/Header/Offer'
import Staffs from './componenet/Header/Staffs'
import Testimonial from './componenet/Header/Testimonial'
import Contact from './componenet/Header/Contact'
import Footer from './componenet/Header/Footer'
import Nav from './componenet/Nav'
import Services from './componenet/Header/Services'


function App() {
  

  return (
    <>
    <Nav/>
      <Header/>
      <About/>
      <Services/>
      <Room/>
        
   
      {/* <Offer/> */}
       
      <Staffs/>
    
      <Testimonial/>
     
       <BookTable/>
        <Contact/>
      <Footer/>
    </>
  )
}

export default App
