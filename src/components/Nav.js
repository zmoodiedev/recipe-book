import { Link } from 'react-router-dom';

import './Nav.css';

const Nav = () => {
    return (
        <nav id="mainNav">
            <ul className="nav-items">
                <li className="nav-item">
                    <Link to="/add-recipe">Add a Recipe</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;