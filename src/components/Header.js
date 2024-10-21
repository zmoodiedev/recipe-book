import React from 'react';

import Nav from './Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


import './Header.css';


const Header = () => {
    return (
        <header>
            <div id="headWrap" className="container">
                <div className="logo">Recipe Book</div>
                <Nav />
                <div id="loginLink">
                    <FontAwesomeIcon icon={faUser} className="login-icon" /> Login
                </div>
            </div>
        </header>
    );
};

export default Header;