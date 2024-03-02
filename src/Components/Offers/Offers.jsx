import React from 'react'
import "./Offers.css"
import offers_img from "../Assets/offers_img.png"

export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>GREAT DEAL FOR BEST SELLERS PRODUCTS</p>
            <button>Explore Now</button>
        </div>
        <div className="offers-right">
            <img src={offers_img} alt='' />
        </div>
    </div>
  )
}

export default Offers
