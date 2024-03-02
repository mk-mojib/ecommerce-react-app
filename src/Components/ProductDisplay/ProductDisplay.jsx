import React, { useContext } from 'react'
import "./ProductDisplay.css"
import "./Rating.css"
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='productdisplay'>
        <div className="pd-left">
            <div className="pd-img-list">
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className="pd-img">
            <img className='pd-main-img' src={product.image} alt=''/>
            </div>
        </div>
        <div className="pd-right">
            <h1>{product.name}</h1>
            <div className="pd-right-star">
                <fieldset className="starability-slot">
                    <input type="radio" id="no-rate" className="input-no-rate" name="rating" value="1" checked aria-label="No rating." />
                    <input type="radio" id="first-rate1" name="rating" value="1" />
                    <label htmlFor="first-rate1" title="Terrible">1 star</label>
                    <input type="radio" id="first-rate2" name="rating" value="2" /> 
                    <label htmlFor="first-rate2" title="Not good">2 stars</label>
                    <input type="radio" id="first-rate3" name="rating" value="3" />
                    <label htmlFor="first-rate3" title="Average">3 stars</label>
                    <input type="radio" id="first-rate4" name="rating" value="4" />
                    <label htmlFor="first-rate4" title="Very good">4 stars</label>
                    <input type="radio" id="first-rate5" name="rating" value="5" />
                    <label htmlFor="first-rate5" title="Amazing">5 stars</label>
                    <br /><br />
                    <p>99 Ratings</p>
                </fieldset>
            </div>
            <div className="pd-right-prices">
                <div className="pd-right-new_price">₹{product.new_price}</div>
                <div className="pd-right-old_price">₹{product.old_price}</div>
            </div>
            <div className="pd-right-desc">
                Clothing can be a way to express your personal style. You can choose clothing that reflects your personality and interests.
            </div>
            <div className="pd-right-size">
                <h1>Size</h1>
                <div className="pd-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>     
            </div>
            <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
            <p className='pd-right-category'><span>Category : </span>Women, T-Shirt, Hem Blouse</p>
            <p className='pd-right-category'><span>Tags : </span>Latest, Popular</p>
        </div>
    </div>
  )
}

export default ProductDisplay