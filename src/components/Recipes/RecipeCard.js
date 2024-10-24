import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import './RecipeCard.css';



const RecipeCard = ({ recipe }) => {
    return (
        <Link to={`/recipe/${recipe.name.replace(/\s+/g, '-').toLowerCase()}`} className="recipe-card">
                <img src={recipe.image} alt="" className="recipe-img" />
                <div className="recipe-details">
                    {recipe.servings &&
                        <div className="serving-size">
                            <FontAwesomeIcon icon={faUtensils} className="icon" /> {recipe.serving} Servings
                        </div>
                    }
                    {recipe.time &&
                        <div className="cook-time">
                            <FontAwesomeIcon icon={faClock} className="icon" /> {recipe.time}
                        </div>
                    }
                    <h3 className="recipe-title">{recipe.name}</h3>
                </div>
        </Link>
    );
};

export default RecipeCard;