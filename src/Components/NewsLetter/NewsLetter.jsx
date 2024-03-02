import React from 'react'
import "./NewsLetter.css"

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email Or WhatsApp</h1>
        <p>Subscribe to our NewsLetter and stay updated</p>
        <div>
            <label htmlFor="phone"></label>
            <input placeholder='Your Email Id' type='email' required/>
            <button>Subscribe Now &#8617;</button>
        </div>
        <h3>OR</h3>
        <div>
            <label htmlFor="phone"></label>
            <input placeholder='WhatsApp No.' type='tel' id='phone' name='phone' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
            <button>Subscribe Now &#8617;</button>
        </div>
        
    </div>
  )
}

export default NewsLetter