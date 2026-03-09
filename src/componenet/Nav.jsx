import React, { useRef } from 'react';
import navCSS from './Nav.module.css';
// import hhh from './../assets/combination-number-letter-d-becomes-u-logo-227791298.jpg'
import loggo from './../assets/logo-removebg-preview.png'
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube} from "react-icons/fa6";




function Nav() {

    const menu = useRef();
      const navbar = useRef();
    const menuHandler =()=>{
        menu.current.classList.toggle(navCSS.showMenu);
    }
    window.addEventListener('scroll' , function (){
        if (window.scrollY > 100) {
            navbar.current.classList.add(navCSS.ScrollNav)

        }
        else{
            navbar.current.classList.remove(navCSS.ScrollNav)


        }
    })

  return (
    <div className={navCSS.nav_wrapper} ref={navbar}>
        <div className={navCSS.topNav}>
            <div className={navCSS.left_side}>
                <span>+91-7210806602</span>
                <span>rajujat10092003@gmail.com</span>
            </div>
            <div className={navCSS.right_side}>
                 <FaInstagram  className={navCSS.right_icon}/>
                 <FaFacebook className={navCSS.right_icon}/>
                <FaYoutube className={navCSS.right_icon}/>
               
            </div>
        </div>
        
        <div className={navCSS.bottom_nav} >
               <img src={loggo} alt="" />
            <div className={navCSS.logo}>
            
               

              

            </div>
            <ul ref={menu}>
                <li><a href="/#home">Home</a></li>
                <li><a href="/#about">About US</a></li>
                <li><a href="/#services">Services</a> </li>
                <li><a href="/#bookingTable">Gallery</a></li>
                <li><a href="/#blog">Blogs</a></li>
               <li><a href="/#contact">Contact</a></li>
              
            </ul>

           <div className={navCSS.navBtns}>
           <Link to="/contact"> <button>Book a Taxi</button></Link>
            <div className={navCSS.bars} onClick={menuHandler}>
            
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
           </div>
        </div>
    </div>
  );
}

export default Nav;