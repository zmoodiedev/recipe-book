import React from 'react';

import './Filter.css';

const Filter = () => {
    return (
        <div id="filterWrap">
            <ul className="filter">
                <li className="filter-item active">All</li>
                <li className="filter-item">Appetizers</li>
                <li className="filter-item">Mains</li>
                <li className="filter-item">Sides</li>
                <li className="filter-item">Desserts</li>
                <li className="filter-item">Breakfast</li>
                <li className="filter-item">Lunch</li>
                <li className="filter-item">Dinner</li>
                <li className="filter-item">Soups</li>
                <li className="filter-item">Salads</li>
                <li className="filter-item">Dips</li>
            </ul>
        </div>
    );
};

export default Filter;