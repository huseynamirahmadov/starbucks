import React from 'react'
import './Home.css'
import homeImg_1 from '../../assets/images/home-1.webp'
import homeImg_2 from '../../assets/images/home-2.webp'
import homeImg_3 from '../../assets/images/home-3.jpg'
import homeImg_4 from '../../assets/images/home-4.jpg'
import homeImg_5 from '../../assets/images/home-5.jpg'
import { Link, NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-page'>
      <div className="home-cnt">
        <div className='home-cnt-left-side'>
          <img src={homeImg_1} />
        </div>
        <div className="home-cnt-right-side">
          <div className="right-side-cnt">
            <h3>Coffee lovers unite</h3>
            <p>Celebrate your love of coffee with Starbucks® Rewards and start earning your faves for free.*</p>
            <div className='home-cnt-right-side-button'>
              <Link to='joinnow'>
                Join now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-cnt">
        <div className='home-cnt-left-side'>
          <img src={homeImg_2} />
        </div>
        <div className="home-cnt-right-side">
          <div className="right-side-cnt">
            <h3>Coffee friends forever</h3>
            <p>Treat your bestie to something good in celebration of National Coffee Day.</p>
            <div className='home-cnt-right-side-button'>
              <Link to='#'>
                Send an eGift
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-cnt">
        <div className='home-cnt-left-side'>
          <img src={homeImg_3} />
        </div>
        <div className="home-cnt-right-side">
          <div className="right-side-cnt">
            <h3>Boost of let’s go</h3>
            <p>CMake your move this fall for an Iced Shaken Espresso or Iced Brown Sugar Oatmilk Shaken Espresso with rich, invigorating layers.</p>
            <div className='home-cnt-right-side-button'>
              <Link to='#'>
                Order now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-cnt">
        <div className='home-cnt-left-side'>
          <img src={homeImg_4} />
        </div>
        <div className="home-cnt-right-side">
          <div className="right-side-cnt">
            <h3>Ready to refuel</h3>
            <p>The Bacon, Gouda & Egg Sandwich is made to satisfy with 19 grams of protein.</p>
            <div className='home-cnt-right-side-button'>
              <Link to='#'>
                Order now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-cnt">
        <div className='home-cnt-left-side'>
          <img src={homeImg_5} />
        </div>
        <div className="home-cnt-right-side">
          <div className="right-side-cnt">
            <h3>It’s bright and it’s back</h3>
            <p>Fill your cup with Guatemala Casi Cielo® featuring notes of Meyer lemon and cocoa nibs.</p>
            <div className='home-cnt-right-side-button'>
              <Link to='#'>
                Order now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-details">
        <p>*At participating stores. Restrictions apply. See <NavLink to='rewards'>https://www.starbucks.com/rewards</NavLink> for details.</p>
      </div>
    </div>
  )
}

export default Home