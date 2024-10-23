import React from 'react';
import { Link } from 'react-router-dom';
import FrenchToast from '../../assets/images/french-toast.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import './RecipeCard.css';



const RecipeCard = ({ recipe }) => {
    return (
        <div className="recipe-card">
            <Link to={`/recipe/${recipe.id}`}><img src={FrenchToast} alt="" className="recipe-img" /></Link>
            <div className="recipe-details">
                <div className="serving-size">
                    <FontAwesomeIcon icon={faUtensils} className="icon" /> {recipe.serving} Servings
                </div>
                <div className="cook-time">
                    <FontAwesomeIcon icon={faClock} className="icon" /> {recipe.time}
                </div>
            </div>
            <h3 className="recipe-title">{recipe.name}</h3>
        </div>
    );
};

export default RecipeCard;