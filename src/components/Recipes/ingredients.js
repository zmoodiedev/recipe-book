import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import './Ingredients.css';

const Ingredients = ({ ingredients }) => {
    return (
        <div className="ingredients">
            <h2>Ingredients</h2>
            {ingredients ?
                <ul className="ingredient-list">
                    {ingredients.map((ingredient, index) => (
                        <li key={index} className="ingredient">
                            <FontAwesomeIcon icon={faSquarePlus} className="add-ingredient" />{ingredient}
                        </li>
                    ))}
                </ul>
                :
                <div>No ingredients provided.</div>
            }

        </div>
    );
};

export default Ingredients;