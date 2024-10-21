import React from 'react';
import FrenchToast from '../../assets/images/french-toast.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import './RecipeCard.css';

const RecipeCard = () => {
    return (
        <div className="recipe-card">
            <img src={FrenchToast} alt="" className="recipe-img" />
            <div className="recipe-details">
                <div className="serving-size">
                <FontAwesomeIcon icon={faUtensils} className="icon" /> 2 Servings
                </div>
                <div className="cook-time">
                    <FontAwesomeIcon icon={faClock} className="icon" /> 40 Minutes
                </div>
            </div>
            <h2 className="recipe-title">French Toast</h2>
        </div>
    );
};

export default RecipeCard;