import React from 'react'
import Header from "./Header"
import Home from './Home'
import { useState } from 'react'
import Footer from './Footer';
import { Routes, Route } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Error from './Error';
export default function App() {
  const [opendisplay,setopendisply]= useState();
  const [closedisplay,setclosedisply]= useState('-20%');
  const [left,setleft]= useState();
  const [ opacity,setopacity] = useState();
 

  AOS.init();
    const open = ()=>{
        setopendisply('');
        setclosedisply('75%');
        setleft("0%");
        setopacity(0);
  
     
      
       
       
    }

    const close = ()=>{
       
        setclosedisply('-20%');
        setleft("-100%");
        setopacity('');
       
    }

   
  return (
    <>
       <Header opendisplay = {opendisplay} closedisplay = {closedisplay} left = {left} open = {open} close = {close} /> 
       <Routes>
        <Route path = "/" element = {<Home  opacity = {opacity} />}/>
        <Route path = "projects" element = {<Projects/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "*" element = {<Error/>} />
        <Route path = "/contact" element = {<Contact/>} />
        </Routes>    
       <Footer/> 
    </>
  )
}
