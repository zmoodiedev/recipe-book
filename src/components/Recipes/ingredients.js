import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import './Ingredients.css';

const Ingredients = () => {
    return (
        <div className="ingredients">
            <h2>Ingredients</h2>
            <ul className="ingredient-list">
                <li className="ingredient">
                    <FontAwesomeIcon icon={faSquarePlus} className="add-ingredient" />2 tablespoons butter
                </li>
                <li className="ingredient">
                    <FontAwesomeIcon icon={faSquarePlus} className="add-ingredient" />1 cup sliced fresh mushrooms
                </li>
                <li className="ingredient">
                    <FontAwesomeIcon icon={faSquarePlus} className="add-ingredient" />⅓ cup chopped onion
                </li>
                <li className="ingredient">
                    <FontAwesomeIcon icon={faSquarePlus} className="add-ingredient" />1 pound lean ground beef
                </li>
                <li className="ingredient">
                    <FontAwesomeIcon icon={faSquarePlus} className="add-ingredient" />2 tablespoons all-purpose flour
                </li>
                <li className="ingredient">
                    <FontAwesomeIcon icon={faSquarePlus} className="add-ingredient" />1 teaspoon garlic powder
                </li>
                <li className="ingredient">
                    <FontAwesomeIcon icon={faSquarePlus} className="add-ingredient" />1 teaspoon seasoning salt
                </li>
                <li className="ingredient">
                    <FontAwesomeIcon icon={faSquarePlus} className="add-ingredient" />½ teaspoon ground paprika
                </li>
                <li className="ingredient">
                    <FontAwesomeIcon icon={faSquarePlus} className="add-ingredient" />¼ teaspoon ground black pepper
                </li>
                <li className="ingredient">
                    <FontAwesomeIcon icon={faSquarePlus} className="add-ingredient" />1 (10.75 ounce) can condensed cream of mushroom soup
                </li>
                <li className="ingredient">
                    <FontAwesomeIcon icon={faSquarePlus} className="add-ingredient" />¾ cup sour cream, or more to taste
                </li>
                <li className="ingredient">
                    <FontAwesomeIcon icon={faSquarePlus} className="add-ingredient" />1 tablespoon liquid smoke, or to taste (Optional)
                </li>
                <li className="ingredient">
                    <FontAwesomeIcon icon={faSquarePlus} className="add-ingredient" />1 tablespoon Worcestershire sauce
                </li>
            </ul>
        </div>
    );
};

export default Ingredients;