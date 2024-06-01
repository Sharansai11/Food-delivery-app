import React from 'react'
import { assets } from '../../assets/assets'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio aliquam ipsa quia inventore assumenda ducimus facilis, omnis repellendus? Expedita.</p>
                    <div className="social-icons"> <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_iconicon} alt="" /></div>

                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Deliver </li>
                        <li>privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+914567891213</li>
                        <li>contact@tomao.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='copy-right'>Copyright  tomato-All Rights Reserved </p>
        </div>
    )
}

export default Footer