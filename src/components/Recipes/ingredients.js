import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import './Ingredients.css';

const Ingredients = ({ ingredients = [], setIngredients }) => {
    const [newIngredient, setNewIngredient] = useState("");

    const handleAddIngredient = () => {
        if (newIngredient) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
            setNewIngredient(""); // Clear input field
        }
    };

    return (
        <div className="ingredients">
            <h2>Ingredients</h2>
            
            {ingredients.length > 0 ? (
                <ul className="ingredient-list">
                    {ingredients.map((ingredient) => (
                        <li key={ingredient.id} className="ingredient">
                        {ingredient.quantity} {ingredient.measurement} of {ingredient.name}
                        </li>
                    ))}
                </ul>
            ) : (
                <>
                    <div>No ingredients provided.</div>
                    <input
                    type="text"
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)}
                    placeholder="Add an ingredient"
                />
                <button onClick={handleAddIngredient} className="add">
                    <FontAwesomeIcon icon={faSquarePlus} /> Add
                </button>
                </>
            )}

           
        </div>
    );
};

export default Ingredients;