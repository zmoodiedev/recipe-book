import React from "react";

import './Nav.css';

const Nav = () => {
    return (
        <nav id="mainNav">
            <ul className="nav-items">
                <li className="nav-item">
                    <a href="/recipes">Search for Recipes</a>
                </li>
                <li className="nav-item">
                    <a href="/add-recipe">Add a Recipe</a>
                </li>
                <li className="nav-item">
                    <a href="/shopping-list">Shopping List</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;