import React from 'react';
import './MainLogo.css';
import StrLogo from '../../assets/images/starbucks-logo.svg';
import { Link } from 'react-router-dom';

const MainLogo = () => {
  return (
    <div className='main-logo'>
      <Link to='/'>
        <img src={StrLogo} />
      </Link>
    </div>
  )
}

export default MainLogo