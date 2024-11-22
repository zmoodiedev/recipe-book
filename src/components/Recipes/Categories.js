import React from 'react';
import './Categories.css';

const Categories = ({ categories }) => {
    
    return (
        <div id="categoryWrap" className="container">
            <ul className="categories">
                {categories.map((category) => (
                    <li key={category.id} className="category">
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;