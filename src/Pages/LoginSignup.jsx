import React from 'react'
import "./CSS/LoginSignup.css"

const loginSignup = () => {
  return (
    <div className='logsignup'>
        <div className="logsignup-container">
            <h1>Sign Up</h1>
            <div className="logsignup-feilds">
              <input type='text' placeholder='Enter Your Name' />
              <input type='email' placeholder='Enter Your Email' />
              <input type='password' placeholder='Password' />
            </div>
            <button>Continue</button>
            <p className='logsignup-login'>Already have an account? <span>Login here</span></p>
            <div className="logsignup-agree">
              <input type='checkbox' name='' id='' />
              <p>By Continuing, I agree to the term of use & privacy policy</p>
            </div>
        </div>
    </div>
  )
}

export default loginSignup