import React from 'react'
import { NavLink} from 'react-router-dom';


import "./css/Header.css"
import logo from "./images/logo111.png"
export default function Header(props) {

  return (
    <>
       <section className='header'>
           <nav style={props.height}>   
             <h2 className='logo'>
                <img src={logo} alt="" />
                
               
             
             </h2>
             <h3>
             <ion-icon name="menu-outline" class="navopen" style={{display:props.opendisplay}} onClick={props.open}></ion-icon>
           <ion-icon name="close-outline" class="navclose"style={{left:props.closedisplay}} onClick={props.close}></ion-icon>
             </h3>
             
               
             <div className='menu'>

                <ul className='navbar pt ' style={{left:props.left}}>
                <li className='nav-list'>  <NavLink to = "/"className='navitem ' onClick={props.close} >Home</NavLink></li>

                   <li className='nav-list'>  <NavLink to = "/about"className='navitem'onClick={props.close}> About</NavLink></li>

                   <li className='nav-list'> <NavLink to="/projects" className='navitem 'onClick={props.close}> Project</NavLink></li>

                  <li className='nav-list'>
                     <NavLink to = "/contact" className='navitem 'onClick={props.close}> Contact</NavLink>
                     </li> 
                     
                </ul>
             </div>


             </nav>

                           



       </section>
    
    
    </>
  )
}
