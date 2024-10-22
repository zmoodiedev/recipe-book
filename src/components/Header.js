import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


import './Header.css';


const Header = () => {
    return (
        <header>
            <div id="headWrap" className="container">
                <Link to="/" className="logo">Recipe Book</Link>
                <Nav />
                <div id="loginLink">
                    <FontAwesomeIcon icon={faUser} className="login-icon" /> Login
                </div>
            </div>
        </header>
    );
};

export default Header;