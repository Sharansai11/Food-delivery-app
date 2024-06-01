import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setshowLogin}) => {
  const [currentState,setcurrentState]=useState("Login")
   
  return (
    <div className='LoginPopup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>   
      
          <img onClick={()=>{
            setshowLogin(false)}} src={assets.cross_icon} alt="" />  
               </div>
            <div className="login-popup-input">
            {currentState==="Login"?<></>:
             <input  placeholder="Your Name" type="text" required/>}
                  <input  placeholder="Email" type="email" required/>
             <input  placeholder="Password" type="password" required/>
            </div>
            <button className='btn'> {currentState=="sign up"?"Create Account":"Login"}</button>
      
        <div className="login-popup-condition">  <input className='checkbox' type="checkbox" required/>
        <p>By continuing, i agree to Terms of Use and Privacy Policy.</p>
        </div>
      
      
      {currentState === "Login" ? (
          <p>Don't have an account? <span onClick={() => setcurrentState("sign up")}>Click Here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setcurrentState("Login")}>Login Here</span></p>
        )}
      </form>
      
    </div>
  )
}

export default LoginPopup