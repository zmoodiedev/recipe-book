import React from 'react';
import { Link } from 'react-router-dom'
import './UserMenu.css';

const UserMenu = ({ username, logout }) => {
    return (
        <div id="userMenu">
            <span className="username">{username}</span>
            <ul>
                <li>
                    <Link onClick={logout}>Logout</Link>
                </li>
            </ul>
        </div>
    )
};

export default UserMenu;