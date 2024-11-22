import { Link } from 'react-router-dom';
import { getLoggedInUser } from '../helpers/auth';

import './Nav.css';

const Nav = () => {
    const user = getLoggedInUser()
    return (
        <>
        {user &&
            <nav id="mainNav">
                <ul className="nav-items">
                    <li className="nav-item">
                        <Link to="/add-recipe">Add a Recipe</Link>
                    </li>
                </ul>
            </nav>
        }
        </>
    );
}

export default Nav;