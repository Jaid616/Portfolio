import React from 'react'
import "./css/Project.css"
import ProjectLeft from './ProjectLeft'
import ProjectRight from './ProjectRight'
import covidTracker from "./images/covidTracker.png"
import IPTracker from "./images/IPTracker.png"
import dashboardImg from "./images/dashboard.png"
import formdataImg from "./images/formdata.png"
export default function Project() {
  return (
    <>
    <section className='mt' style={{backgroundColor:"#f1f3f2",padding:"5rem 0"}}>
    <div className="heading">
              <h2 > All Projects</h2>
              <div className="underline"></div>
            </div>
     <ProjectRight 
                sourceCode = "https://github.com/Jaid616/dashboard"
                img = {dashboardImg}
                link = "https://dashboard-4khu.onrender.com/"
                btn1= "React"
                btn2 = "Material-UI"
                btn3 = "Node"
                number = "01" 
               heading = "User Dashboard"
                discription="In this project, user can register yourself. After Registration user can log in with own email id and password.
                if the user want to change own password then user can request for change password after login." />
<ProjectLeft 
                sourceCode = "https://github.com/Jaid616/formdata-frontend"
                img = {formdataImg}
                link = "https://frontend-kajz.onrender.com/"
                btn1= "React"
                btn2 = "Node"
                btn3 = "CSS"
                number = "02" 
               heading = "FormValidation"
                discription="In this project, user can submit form after validation all inputs. After submit, all data store on database with the help of Node js and mongoDB" />

               <ProjectRight 
               sourceCode = "https://github.com/Jaid616/Covid_Tracker"
               link="https://jaidnasim.000webhostapp.com/Covid_Tracker"
               btn1= "React"
               btn2 = "JavaScript"
               btn3 = "BootStrap"
               img = {covidTracker}
               number = "02" 
               heading = "Covid-19 Tracker"
                discription="A React App for all the latest updates about the spread of Corona Virus in India Features:- Data is analyzed with State wise statistics are shown, District wise statistics are shown, Updated regulary (All the available time stamps are notified), Resources List for almost every city is provided which includes TestLabs, Free Food Services, etc."/>

                <ProjectLeft 
                sourceCode = "https://github.com/Jaid616/IP-Tracker"
                img = {IPTracker}
                link = "https://jaidnasim.000webhostapp.com/IPaddress-Tracker/"
                btn1= "HTML"
                btn2 = "CSS"
                btn3 = "JavaScript"
                number = "03" 
               heading = "IP Address Tracker"
                discription="This method of tracking can have very broad results and can sometimes only get an accurate result with some input from the user about their location.In some countries laws are in place that state a service can only track you as far as your country without your consent. If the user consents then the service can view your ISP's logs and track you as accurately as possible"/>



               
                
            

      </section>      
    </>
  )
}
