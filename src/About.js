import React from 'react'
import "./css/About.css"
import AboutSkill from './AboutSkill';
import AboutSkillName from './AboutSkillName';
import pic from "./images/frame1.png";
export default function About() {
        
         document.title = "Jaidnasim-About-Page"
  return (
    <>      <section>

            <div className='about'>

                <div className='about-photo'>
                    <img src={pic} alt=""/>
                </div>
                 <div className='about-details'>
                 <div className="heading"style={{textAlign:"start"}}>
                <h2 >About Me</h2>
                <div className="hero-underline"></div>
              </div>
                    <p  className='about-me'  style={{margin: "2rem 0"}}>I am a Front-end developer based in Gorakhpur, India. I am done BCA from Chhatrapati Shahu Ji Maharaj University Kanpur. I am actively looking for opportunities that will help me in growing/building my tech stack.</p>
                    <p className='about-me'>
                    I am still a learner who still needs to learn lot of cool things. Please ping me up if you have anything interesting or want to share a powerful framework, a useful library, some css-tricks or memes ✌.
                    </p>
                    <p className='about-me'>
                    I love to code, watch football and travel. Here's a 😄 if you were missing on it today.
                    </p>
                 </div>
            </div>
    </section>

    <section>
    <div className="skill">
    <div className="heading">
                <h2 >SKILL SETS</h2>
                <div className="underline"></div>
              </div>
              <div className='skill-item'>

             <AboutSkill skilltype = "Language"/>
             <div className="language">
                   <AboutSkillName skillname = "JavaScript"/>
                   <AboutSkillName skillname = "C++"/>
                   <AboutSkillName skillname = "C"/>
                   <AboutSkillName skillname = "Java"/>

             </div>
             
              </div>

              <div className='skill-item'>

<AboutSkill skilltype = "Front-End Development"/>
<div className="language">
      <AboutSkillName skillname="HTML5"/>
      <AboutSkillName skillname="CSS3"/>
      <AboutSkillName skillname= "React Js"/>
      <AboutSkillName skillname= "SASS"/>


</div>

 </div>
 <div className='skill-item'>

<AboutSkill skilltype="Design Frameworks"/>
<div className="language">
      <AboutSkillName skillname="Material-ui"/>
      <AboutSkillName skillname="Twiiter Bootstrap"/>

</div>

 </div>

 <div className='skill-item'>

<AboutSkill skilltype="Design Software"/>
<div className="language">
      <AboutSkillName skillname="Premire Pro"/>
      <AboutSkillName skillname="Photoshop"/>

</div>

 </div>

      </div>       
    </section>
    </>
  )
}
