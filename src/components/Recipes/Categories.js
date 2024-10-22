import React from 'react';
import './Categories.css';

const Categories = () => {
    return (
        <div id="categoryWrap" className="container">
            <ul className="categories">
                <li className="category">Breakfast</li>
                <li className="category">Sweet</li>
                <li className="category">Main</li>
            </ul>
        </div>
    );
};

export default Categories;