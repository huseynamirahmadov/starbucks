import React from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import MainLogo from '../../components/MainLogo';

const Navbar = () => {
    return (
        <>
            <div className="navbar-box-shadow">
                <div className="container">
                    <div className="navbar">
                        <div className="navbar-left-side">
                            <MainLogo />
                            <div className="navbar-links">
                                <ul>
                                    <li>
                                        <NavLink to='/menu'>MENU</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/rewards'>REWARDS</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/giftcards'>GIFT CARDS</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="navbar-right-side">
                            <div className="find-a-store">
                                <NavLink to='/findastore'>
                                    <MdLocationOn />
                                    <span>Find a store</span>
                                </NavLink>
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
            </div>
        </>
    )
}

export default Navbar