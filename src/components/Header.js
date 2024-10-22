import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../core/UserSlice';
import { getAuth, signOut } from "firebase/auth";
import Nav from './Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


import './Header.css';


const Header = () => {

    const user = useSelector((state) => state.data.user.user);
    const dispatch = useDispatch();

    const auth = getAuth();
    
    const handleLogout = () => {
        dispatch(loginUser());
        signOut(auth);
    }

    return (
        <header>
            <div id="headWrap" className="container">
                <Link to="/" className="logo">Recipe Book</Link>
                <Nav />
                {user ?
                    <button className="username" onClick={handleLogout}>{user.username}</button>
                          :
                    <div id="loginLink">
                        <Link to="/login"><FontAwesomeIcon icon={faUser} className="login-icon" /> Login</Link>
                    </div>
                }
            </div>
        </header>
    );
};

export default Header;