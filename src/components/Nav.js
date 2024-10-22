import { Link } from 'react-router-dom';

import './Nav.css';

const Nav = () => {
    return (
        <nav id="mainNav">
            <ul className="nav-items">
                <li className="nav-item">
                    <Link to="/recipes">Search for Recipes</Link>
                </li>
                <li className="nav-item">
                    <Link to="/add-recipe">Add a Recipe</Link>
                </li>
                <li className="nav-item">
                    <Link to="/shopping-list">Shopping List</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;