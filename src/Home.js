import React from 'react'
import "./css/Home.css"
import pic from "./images/frame1.png";
import Service from './Service';
import Project from './Project';
import { Link } from 'react-router-dom';
import herobg from "./images/hero2.jpg";
export default function Home(props) {
  document.title = "Jaidnasim-Home-Page"
  return (
    <>
      <section className='hero' style={{backgroundImage: `url(${herobg})`}}>
             <div className='hero-section-start'>
                 <div className='hero-details' data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in" >
                 <div className="hero-underline"></div>
                   <h1>I am <span style={{color:" #7ffeff"}}> Jaid Nasim</span></h1>
                   <p>I am</p>
                   <p>Front End Develpoper</p>
                  <Link to= "/about">
                  <button>About Me</button>
                  
                  </Link>
                  
                   <div className="contactme" style={{opacity:props.opacity}}>
                <a href="https://github.com/Jaid616/" className="contactmy" target="blank" >

                    <ion-icon name="logo-github" ></ion-icon>
                </a>
                <a href="https://twitter.com/jaidnasim1" className="contactmy" target="blank">

                    <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a href="https://www.facebook.com/jaid.nasim.39" className="contactmy"target="blank">

                    <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="https://www.linkedin.com/in/jaid-nasim-148113240/" className="contactmy"target="blank">

                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a href="https://www.instagram.com/jaidnasim/" className="contactmy"target="blank">

                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </div> 

                 </div>
                 <div data-aos="fade-down" data-aos-duration="1500" data-aos-easing="ease-in" className='hero-image'>
                    <p className='hero-image '>
                        <img src={pic} alt="" srcSet="" />
                    </p>
                 </div>
                 

             </div>


      </section>
        <Service/>
        <Project/>        
        </>
    
  )
}
