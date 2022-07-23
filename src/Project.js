import React from 'react'
import "./css/Project.css"
import ProjectLeft from './ProjectLeft'
import ProjectRight from './ProjectRight'
import covidTracker from "./images/covidTracker.png"
import IPTracker from "./images/IPTracker.png"
export default function Project() {
  return (
    <>
    <section className='mt' style={{backgroundColor:"#f1f3f2",padding:"5rem 0"}}>
    <div className="heading">
              <h2 > All Projects</h2>
              <div className="underline"></div>
            </div>
               <ProjectRight 
               sourceCode = "https://github.com/Jaid616/Covid_Tracker"
               link="https://jaidnasim.000webhostapp.com/Covid_Tracker"
               btn1= "React"
               btn2 = "JavaScript"
               btn3 = "BootStrap"
               img = {covidTracker}
               number = "01" 
               heading = "Covid-19 Tracker"
                discription="A React App for all the latest updates about the spread of Corona Virus in India Features:- Data is analyzed with State wise statistics are shown, District wise statistics are shown, Updated regulary (All the available time stamps are notified), Resources List for almost every city is provided which includes TestLabs, Free Food Services, etc."/>

                <ProjectLeft 
                sourceCode = "https://github.com/Jaid616/IP-Tracker"
                img = {IPTracker}
                link = "https://jaidnasim.000webhostapp.com/IPaddress-Tracker/"
                btn1= "HTML"
                btn2 = "CSS"
                btn3 = "JavaScript"
                number = "02" 
               heading = "IP Address Tracker"
                discription="This method of tracking can have very broad results and can sometimes only get an accurate result with some input from the user about their location.In some countries laws are in place that state a service can only track you as far as your country without your consent. If the user consents then the service can view your ISP's logs and track you as accurately as possible"/>



               
                
            

      </section>      
    </>
  )
}
