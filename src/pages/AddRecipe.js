import React from "react";
import ButtonSection from "../components/ButtonSection";
import AddButton from "../components/AddButton";

import './AddRecipe.css';

const AddRecipe = () => {

    const handleAddIngredient = () => {
        
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
                                    <input type="number" min="0" name="hours" /><label className="sub-label" htmlFor="hours">Hours</label>
                                </div>
                                <div className="add-minutes">
                                    <input type="number" min="0" max="59" name="minutes" /><label className="sub-label" htmlFor="minutes">Minutes</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-item add-ingredients">
                            <label>Ingredients</label>
                            <ul>
                                <li>Ingredient 1</li>
                                <li>Ingredient 2</li>
                                <li>Ingredient 3</li>
                                <li><input type="text" name="add-ingredient" /><AddButton /></li>
                            </ul>

                            
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-item add-directions">
                            <label htmlFor="ingredients">Directions</label>
                            <textarea className="add-step"></textarea>
                            <AddButton />
                        </div>
                    </div>
                </form>              
            </section>
            <ButtonSection page="add-recipe" />
        </>
    );
};

export default AddRecipe;