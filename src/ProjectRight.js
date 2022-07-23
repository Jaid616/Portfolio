import React from 'react'

export default function ProjectRight(props) {
  return (
    <>
        <div className='container'style={{overflow:"hidden"}}>
                    <h2 className='project-img' data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in">
                        <img src={props.img} alt="" />
                    </h2>

                    <div className='Cards'data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in">
                    <h3 className="card-heading">{props.number}</h3>
                    <h3 className="card-heading">{props.heading}</h3>
                <p className="card-para">{props.discription}
                    </p>
                
                    <button className="card-button1">{props.btn1}</button>
                    <button className="card-button1">{props.btn2}</button>
                    <button className="card-button1">{props.btn3}</button>
                    <div style={{padding:"1rem",fontSize:"20px"}}>

                    <a href={props.sourceCode} style={{color:"black",}} target="blank" >

<ion-icon name="logo-github" ></ion-icon>
</a>

<a href={props.link} style={{color:"black",paddingLeft:"1rem"}} target="blank">

<ion-icon name="link"></ion-icon>
</a>
                    </div>
                    </div>
                </div>
    </>
  )
}
