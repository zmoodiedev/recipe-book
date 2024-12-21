import React, { useState } from "react";
import { getMeasurementLabel } from "../helpers/measurementLabels";
import CategoryFilter from "../components/Recipes/CategoryFilter";
import AddButton from "../components/AddButton";
import DeleteButton from "../components/DeleteButton";

import './AddRecipe.css';

const AddRecipe = () => {
    

    // Prevent non-numeric key presses in some browsers
    const handleKeyPress = (e) => {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    };

    const [recipeName, setRecipeName] = useState('');
    const handleChangeRecipeName = (e) => {
        setRecipeName(e.target.value);
    };


    // ===== Categories
    const [selectedCategories] = useState([]);


    // ===== Servings
    const [servings, setServings] = useState('');
    const handleChangeServings = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setServings(value); // Update state if valid
        }
    };

    // ===== Cooking Times
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');

    const handleChangeHours = (e) => {
        setHours(e.target.value);
    };

    const handleChangeMinutes = (e) => {
        setMinutes(e.target.value);
    };
    

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
            setIngredientName('');
        }
    };

    const handleDeleteIngredient = (id, e) => {
        e.preventDefault();
        const newIngredients = ingredients.filter((_, i) => i !== id);
        setIngredients(newIngredients);
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

    const handleDeleteStep = (index, e) => {
        e.preventDefault();
        const newSteps = steps.filter((_, i) => i !== index);
        setSteps(newSteps);
    }
    
    return (
        <>
            <section className="add-recipe container">
                <h1>Add a Recipe</h1>
                <form id="addRecipe">
                    <div className="form-row">
                        <div className="form-item recipe-name">
                            <label htmlFor="name">Recipe Name</label>
                            <input
                                type="text"
                                id="recipe-name"
                                name="recipe-name"
                                value={recipeName}
                                onChange={handleChangeRecipeName}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-item recipe-categories">
                            <label htmlFor="categories">Categories</label>

                        </div>
                    </div>
                    <div className="form-row split-2">
                        <div className="form-item serving-size">
                            <label htmlFor="servings">Serving Size</label>
                            <input
                                type="number"
                                id="servings"
                                name="servings"
                                placeholder="Servings"
                                inputMode="numeric"
                                value={servings}
                                onChange={handleChangeServings}
                                onKeyPress={handleKeyPress}
                                min="1"
                            />
                        </div>
                        <div className="form-item cooking-time">
                            <label>Cooking Time</label>
                            <div className="time-split">
                                <div className="add-hours">
                                    <input
                                        type="number"
                                        min="0"
                                        name="hours"
                                        placeholder="Hours"
                                        value={hours}
                                        onChange={handleChangeHours}
                                        onKeyPress={handleKeyPress}
                                    />
                                    <label htmlFor="hours" className="sr-only">Hours</label>
                                </div>
                                <div className="add-minutes">
                                    <input
                                        type="number"
                                        min="0"
                                        max="59"
                                        name="minutes"
                                        placeholder="Minutes"
                                        value={minutes}
                                        onChange={handleChangeMinutes}
                                        onKeyPress={handleKeyPress}
                                    />
                                    <label htmlFor="minutes" className="sr-only">Minutes</label>
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
                                        {ingredient.quantity} {getMeasurementLabel(ingredient.quantity, ingredient.measurement)} - {ingredient.name} <DeleteButton onClick={(event) => handleDeleteIngredient(index, event)} />
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
                                <div className="custom-select">
                                    <label htmlFor="measurement" className="sr-only">Measurement</label>
                                    <select
                                        id="measurement"
                                        className={measurement ? `${measurement}` : "placeholder"}
                                        name="measurement"
                                        onChange={handleChangeMeasurement}
                                        defaultValue=""
                                    >
                                        <option value="" disabled hidden>Measurement</option>
                                        <option value="x">x (number)</option>
                                        <option value="Cups">Cups</option>
                                        <option value="Tsps">Tbsps</option>
                                        <option value="Tsps">Tsps</option>
                                        <option value="Grams">Grams</option>
                                    </select>
                                </div>
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
                                        key={index}
                                        className="step"
                                    >
                                        <h3 className="step-number">Step {index + 1} <DeleteButton onClick={(e) => handleDeleteStep(index, e)} /></h3>
                                        <p>{step.description}</p>
                                       
                                    </li>
                                ))}
                            </ul>
                            <div className="add-step">
                                <textarea
                                    rows="8"
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
                    <button className="green">Publish Recipe</button>
                </form>              
            </section>
        </>
    );
};

export default AddRecipe;