import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import MainLogo from '../../components/MainLogo';

const Navbar = () => {
    return (
        <>
            <div className="container">
                <div className="navbar">
                    <div className="navbar-left-side">
                        <MainLogo />
                        <div className="navbar-links">
                            <ul>
                                <li>
                                    <Link to='/menu'>MENU</Link>
                                </li>
                                <li>
                                    <Link to='/rewards'>REWARDS</Link>
                                </li>
                                <li>
                                    <Link to='/giftcards'>GIFT CARDS</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-right-side">
                        <div className="find-a-store">
                            <Link to='/findastore'>
                                <MdLocationOn />
                                <span>Find a store</span>
                            </Link>
                        </div>
                        <div className="sign">
                            <div className="sign-in">
                                <Link to='signin'>
                                    Sign in
                                </Link>
                            </div>
                            <div className="join-now">
                                <Link to='joinnow'>
                                    Join now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar