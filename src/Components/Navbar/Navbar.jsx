import {React, useContext, useState } from 'react'
import "./Navbar.css"
import logo from "../Assets/logo_moshop.png"
import cart from "../Assets/cart.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className="logo">
            <img src={logo} alt="" />
            <p>MOSHOP</p>
        </div>
        <ul className="nav-menu">
            <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration: "none", color: 'goldenrod'}} to="/">Shop</Link>{menu==="shop"?<hr/>: <></>}</li>
            <li onClick={() => {setMenu("mens")}}><Link style={{textDecoration: "none", color: 'goldenrod'}} to="/mens">Men</Link>{menu==="mens"?<hr/>: <></>}</li>
            <li onClick={() => {setMenu("womens")}}><Link style={{textDecoration: "none", color: 'goldenrod'}} to="/womens">Women</Link>{menu==="womens"?<hr/>: <></>}</li>
            <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration: "none", color: 'goldenrod'}} to="/kids">Kids</Link>{menu==="kids"?<hr/>: <></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={cart} alt='' /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar