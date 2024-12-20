import React, { useEffect, useState } from "react";
import ButtonSection from "../components/ButtonSection";
import AddButton from "../components/AddButton";
import DeleteButton from "../components/DeleteButton";

import './AddRecipe.css';

const AddRecipe = () => {
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState([]);


    const handleAddIngredient = (e) => {
        e.preventDefault();
        console.log("Add Ingredient");
    }

    const handleDeleteIngredient = (e) => {
        e.preventDefault();
        console.log("Delete Ingredient");
    }

    const handleAddStep = (e) => {
        e.preventDefault();
        console.log("Add Ingredient");
    }

    const handleDeleteStep = (e) => {
        e.preventDefault();
        console.log("Delete Ingredient");
    }
    
    return (
        <>
            <section className="add-recipe container">
                <h1>Add a Recipe</h1>
                <form id="addRecipe">
                    <div className="form-row">
                        <div className="form-item recipe-name">
                            <label htmlFor="name">Recipe Name</label>
                            <input type="text" name="name" />
                        </div>
                    </div>
                    <div className="form-row split-2">
                        <div className="form-item serving-size">
                            <label htmlFor="servings">Serving Size</label>
                            <input type="number" min="1" name="servings" />
                        </div>
                        <div className="form-item cooking-time">
                            <label>Cooking Time</label>
                            <div className="time-split">
                                <div className="add-hours">
                                    <input type="number" min="0" name="hours" placeholder="Hours" /><label htmlFor="hours" className="sr-only">Hours</label>
                                </div>
                                <div className="add-minutes">
                                    <input type="number" min="0" max="59" name="minutes" placeholder="Minutes" /><label htmlFor="minutes" className="sr-only">Minutes</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-item add-ingredients">
                            <label>Ingredients</label>
                            <ul className="ingredient-list">
                                {ingredients.map((ingredient, index) => (
                                    <li
                                        key={ingredient.id || index}
                                        className="ingredient to-add"
                                    >
                                        {ingredient} <DeleteButton action={handleDeleteIngredient} />
                                    </li>
                                ))}
                            </ul>
                            <div className="add-ingredient">
                                <input type="text" name="ingredient-amount" className="amount" placeholder="Quantity" />
                                <input type="text" name="ingredient-name" className="name" placeholder="Ingredient Name" />
                                <AddButton action={handleAddIngredient} />
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-item add-steps">
                            <label htmlFor="steps">Steps</label>
                            <ul className="steps-list">
                                {steps.map((step, index) => (
                                    <li
                                        key={step.id || index}
                                        className="ingredient to-add"
                                    >
                                        {step} <DeleteButton action={handleDeleteStep} />
                                    </li>
                                ))}
                            </ul>
                            <div className="add-step">
                                <textarea className="steps"></textarea>
                                <AddButton action={handleAddStep} />
                            </div>
                        </div>
                    </div>
                </form>              
            </section>
            <ButtonSection page="add-recipe" />
        </>
    );
};

export default AddRecipe;