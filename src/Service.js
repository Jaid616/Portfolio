import React from 'react'
import "./css/Service.css"
export default function Service() {
  return (
    <>
      <section className='mt'>
      <div className="heading">
                <h2 >Services</h2>
                <div className="underline"></div>
              </div>
               <div className='service'>
               <div className="service-item" data-aos="flip-right"  data-aos-offset="250" data-aos-duration="1000">
                    <ion-icon name="code-slash-outline" class="service-icon"></ion-icon>
                    <h3 className="service-name"> Web Development</h3>
                    <div className=" service-underline"></div>
                     <p className="service-details">I make wesites that loves to stay over the internet using the latest technology trends. I try to write managable and scalable code so expansion is never a problem. I have knowledge about FrontEnd Development</p>
                 </div>

                 <div className="service-item" data-aos="flip-right" data-aos-offset="250" data-aos-duration="1000">
                    <ion-icon name="logo-wordpress" class="service-icon"></ion-icon>
                    <h3 className="service-name"> Custom Management System</h3>
                    <div className=" service-underline"></div>
                     <p className="service-details">Are you someone who wants to make a blog or some website with frequent changes in content ? Custom Management System (CMS) is the solution. It helps in easy editing and handling of content</p>
                 </div>  
                 <div className="service-item" data-aos="flip-right" data-aos-offset="250" data-aos-duration="1000">
                    <ion-icon name="cog-outline" class="service-icon"></ion-icon>
                    <h3 className="service-name"> Hosting & Maintence</h3>
                    <div className=" service-underline"></div>
                     <p className="service-details">Yay, we made a website ! That doesn't mean it is live over the internet and people are ready to consume your website. No problem I got you covered, I am there for all the after work getting a domain, getting a cheap hosting, small changes that might have creeped into your mind after you made your site live. I am with you from start to end</p>
                 </div> 

                 
                 
                  

               </div>

      </section>
    
    </>
  )
}
