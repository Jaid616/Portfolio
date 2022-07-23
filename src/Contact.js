import React from 'react'
import { useState } from 'react'
import "./css/Contact.css"
export default function Contact() {
     
     const [name,setname]=useState("");
     const [email,setemail]=useState("");
     const [msg,setmsg] = useState("");

     const [blankurl , setblankurl] = useState("/");
     
    const url = "https://formsubmit.io/send/30a84450-4cbd-480e-9b1c-82b387a1115d"

    document.title = "Jaidnasim-Contact-Page"

     const onChnageNameHandler=(e)=>{
            setname(e.target.value)
     }

     const onChnageEmailHandler = (e)=>{
            setemail(e.target.value)
     }

     const onChnageMsgHandler = (e)=>{
             setmsg(e.target.value)
     }

     const submitForm = ()=>{
          
        setblankurl(url);
     
     }

  
  return (
    <>
    <div style={{backgroundColor:"#f1f3f2",padding:"5rem 0"}}>

     <div className=" heading">
                <h3>Get In Touch</h3>
                <div className="underline"></div>
              </div>
       <form action = {blankurl}  onSubmit={submitForm} className="contact-form">
          
          <div className='input-tag'>

           <input type="text" className='form-input' id="name" name="name" placeholder=" " autoComplete='off' required value={name} onChange={onChnageNameHandler}/>
           <label htmlFor="name" className='input-lable'>Name</label>
          </div>
          <div className='input-tag'>

           <input type="email" className='form-input' id="email" name="email" placeholder=" " autoComplete='off' required value={email} onChange={onChnageEmailHandler}/>
           <label htmlFor="email" className='input-lable'>Email</label>
          </div>
         
            <div className='input-tag'>
                   <textarea className='form-input' name="message" id="message" cols="52" rows="10" placeholder=" " value={msg} onChange={onChnageMsgHandler}></textarea>
                   <label htmlFor="message" className='textarea-lable'>Message</label>
          </div>
           <div className='input-tag '>

          <input className='sub-btn' type="submit" value="Submit" />
           </div>
          
           
       </form>
    
    </div>
    
    </>
  )
}
