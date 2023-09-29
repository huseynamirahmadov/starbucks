import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-box">
            <h3>About Us</h3>
            <ul>
              <li><Link to='#'>Our Company</Link></li>
              <li><Link to='#'>Out Coffee</Link></li>
              <li><Link to='#'>Stories and News</Link></li>
              <li><Link to='#'>Starbucks Archive</Link></li>
              <li><Link to='#'>Investor Relations</Link></li>
              <li><Link to='#'>Customer Service</Link></li>
              <li><Link to='#'>Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-box">
            <h3>Careers</h3>
            <ul>
              <li><Link to='#'>Culture and Values </Link></li>
              <li><Link to='#'>Inclusion, Diversity and Equity</Link></li>
              <li><Link to='#'>College Achivement Plan</Link></li>
              <li><Link to='#'>Alumni Community</Link></li>
              <li><Link to='#'>U.S. Careers</Link></li>
              <li><Link to='#'>International Careers</Link></li>
            </ul>
          </div>
          <div className="footer-box">
            <h3>Social Impact</h3>
            <ul>
              <li><Link to='#'>People</Link></li>
              <li><Link to='#'>Planet</Link></li>
              <li><Link to='#'>Environmental and Social Impact Reporting</Link></li>
            </ul>
          </div>
          <div className="footer-box">
            <h3>For Business Partners</h3>
            <ul>
              <li><Link to='#'>Landlord Support Center</Link></li>
              <li><Link to='#'>Suppliers</Link></li>
              <li><Link to='#'>Corporate Gift Cards Sales</Link></li>
              <li><Link to='#'>Office and Foodservice Coffee</Link></li>
            </ul>
          </div>
          <div className="footer-box">
            <h3>Order and Pick Up</h3>
            <ul>
              <li><Link to='#'>Order on the App</Link></li>
              <li><Link to='#'>Order on the Web</Link></li>
              <li><Link to='#'>Delivery</Link></li>
              <li><Link to='#'>Order and Pick Up Options</Link></li>
              <li><Link to='#'>Explore and Find Coffee for Home</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-bottom">
          <div className="footer-socials">
            <ul>
              <li><Link to='#'></Link></li>
              <li><Link to='#'></Link></li>
              <li><Link to='#'></Link></li>
              <li><Link to='#'></Link></li>
              <li><Link to='#'></Link></li>
              <li><Link to='#'></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer