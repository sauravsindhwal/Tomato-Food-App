import React from 'react'
import './Footer.css'
import { assets } from '../../assets/food del assets/frontend_assets/assets'

const Footer = () => {
  return (
<div className="footer" id='footer'>
    <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi facilis at nostrum esse vero velit, quam placeat 
                sunt fugiat adipisci aliquam sapiente soluta molestiae inventore reprehenderit laborum animi hic ratione!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
        </div>
        <div className="footer-content-center">
<h2>Compnay</h2>
<ul>
    <li>Home</li>
    <li>About us</li>
    <li>Delivery</li>
    <li>Pruvacy Policy</li>

</ul>
        </div>
        <div className="footer-content-right">
<h2>Contact us</h2>
<ul>
    <li>+1 222-333-4444</li>
    <li>info@tomato.com</li>

</ul>
        </div>
    </div>
    <hr />
    <p className="footer-copyright">
    © 2024 Tomato. All Rights Reserved
    </p>
</div>
  )
}

export default Footer