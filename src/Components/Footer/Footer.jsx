import React from 'react'
import "./Footer.css"
import footer_logo from "../Assets/logo_moshop.png"
import linkedin_icon from "../Assets/linkedin.png"
import wapp_icon from "../Assets/whatsapp_icon.webp"
import x_icon from "../Assets/x-twitter.png"
import github_icon from "../Assets/github_logo.png"

const Footer = () => {
    const handleClickLinkedin = () => {
        window.open('https://www.linkedin.com/in/mdkhalidmojib/', '_blank');
    };
    const handleClickWhatsApp = () => {

        const phoneNumber = '+919955888978';
        const whatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}`;
        window.open(whatsappLink, '_blank');
    };
    const handleClickX = () => {
        window.open('https://twitter.com/MKMOJIB1', '_blank');
    };
    const handleClickGitHub = () => {
        window.open('https://github.com/mk-mojib/', '_blank');
    };
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt='' />
            <p>MOSHOP</p>
        </div>
        <ul className='footer-company'>
                <li>Teams & Conditions</li>
                <li>Privacy</li>
                <li>Products</li>
                <li>About us</li>
                <li>Contact us</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img className='linkedin' style={{height: 31, width: 32, cursor: 'pointer'}} src={linkedin_icon} alt='Clickable' onClick={handleClickLinkedin} />
            </div>
            <div className="footer-icons-container">
                <img className='whatsapp' style={{height: 31, width: 32, cursor: 'pointer'}} src={wapp_icon}  alt="Clickable" onClick={handleClickWhatsApp}/>
            </div>
            <div className="footer-icons-container">
                <img className='x-twitter' style={{height: 31, width: 32, cursor: 'pointer'}} src={x_icon} alt='Clickable' onClick={handleClickX} />
            </div>
            <div className="footer-icons-container">
                <img className='github' style={{height: 31, width: 32, cursor: 'pointer'}} src={github_icon} alt='Clickable' onClick={handleClickGitHub} />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright &copy; 2024 All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer