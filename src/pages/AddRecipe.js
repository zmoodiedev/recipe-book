import React, { useEffect, useState } from "react";
import CategoryFilter from "../components/Recipes/CategoryFilter";
import { getMeasurementLabel } from "../helpers/measurementLabels";
import ButtonSection from "../components/ButtonSection";
import AddButton from "../components/AddButton";
import DeleteButton from "../components/DeleteButton";

import './AddRecipe.css';

const AddRecipe = () => {


    // ===== Ingredients
    const [ingredients, setIngredients] = useState([]);

    const [ingredientQuantity, setIngredientQuantity] = useState('');
    const [measurement, setMeasurement] = useState('');
    const [ingredientName, setIngredientName] = useState('');

    const handleChangeQuantity = (e) => {
        setIngredientQuantity(e.target.value);
    };

    const handleChangeMeasurement = (e) => {
        setMeasurement(e.target.value);
    };
    
    const handleChangeName = (e) => {
        setIngredientName(e.target.value);
    };
    
    const handleAddIngredient = (e) => {
        e.preventDefault();
        if (ingredientQuantity && measurement && ingredientName) {
            setIngredients(prevIngredients => [
                ...prevIngredients,
                { id: Date.now(), quantity: ingredientQuantity,  measurement: measurement,  name: ingredientName } // Add a unique ID and amount
            ]);
            // Clear the input fields
            setIngredientQuantity('');
            setMeasurement('');
            setIngredientName('');
        }
   };

    const handleDeleteIngredient = (id) => {
        setIngredients(prevIngredients => 
            prevIngredients.filter(ingredient => ingredient.id !== id)
        );
    };


    // ===== Steps
    const [steps, setSteps] = useState([]);

    const [stepDescription, setStepDescription] = useState('');

    const handleChangeStepDescription = (e) => {
        setStepDescription(e.target.value);
    };

    const handleAddStep = (e) => {
        e.preventDefault();
        if (stepDescription) {
            setSteps(prevSteps => [
                ...prevSteps,
                { id: (steps.length + 1), description: stepDescription } // Add a unique ID and amount
            ]);
            // Clear the input fields
            setStepDescription('');
        }
    }

    const handleDeleteStep = (id) => {
        setSteps(prevSteps => 
            prevSteps.filter(step => step.id !== id)
        );
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
                        <div className="form-item add-categories">
                           
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
                                        {ingredient.quantity} {getMeasurementLabel(ingredient.quantity, ingredient.measurement)} - {ingredient.name} <DeleteButton action={() => handleDeleteIngredient(ingredient.id)} />
                                    </li>
                                ))}
                            </ul>
                            <div className="add-ingredient">
                                <label htmlFor="amount" className="sr-only">Measurement Amount</label>
                                <input 
                                    type="text" 
                                    name="amount" 
                                    className="amount" 
                                    placeholder="Quantity" 
                                    value={ingredientQuantity} 
                                    onChange={handleChangeQuantity} 
                                />
                                <label htmlFor="measurement" className="sr-only">Measurement</label>
                                <select
                                    id="measurement"
                                    name="measurement"
                                    onChange={handleChangeMeasurement}
                                >
                                    <option value="">Select Measurement</option>
                                    <option value="Cups">Cups</option>
                                    <option value="Tbsps">Tbsps</option>
                                    <option value="Teaspoons">Tsps</option>
                                    <option value="Grams">Grams</option>
                                </select>
                                <label htmlFor="ingredient-name" className="sr-only">Ingredient Name</label>
                                <input
                                    type="text"
                                    name="ingredient-name"
                                    className="name"
                                    placeholder="Ingredient Name"
                                    value={ingredientName} 
                                    onChange={handleChangeName}
                                />
                                <AddButton onClick={handleAddIngredient} />
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
                                        className="step"
                                    >
                                        <h3 className="step-number">Step {step.id} <DeleteButton action={() => handleDeleteStep(step.id)} /></h3>
                                        <p>{step.description}</p>
                                       
                                    </li>
                                ))}
                            </ul>
                            <div className="add-step">
                                <textarea
                                    className="steps"
                                    name="steps"  
                                    placeholder="Describe the next step" 
                                    value={stepDescription} 
                                    onChange={handleChangeStepDescription}
                                ></textarea>
                                <AddButton onClick={handleAddStep} />
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