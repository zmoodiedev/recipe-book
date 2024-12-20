import React from 'react';
import './Categories.css';

const Categories = ({ categories }) => {
    
    return (
        <div id="categoryWrap" className="container">
            <ul className="categories">
                {categories.map((category, index) => (
                    <li
                        key={category.id || index}
                        className="category"
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;