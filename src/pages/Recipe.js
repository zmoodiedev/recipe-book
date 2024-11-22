import React, { useState } from "react";
import useFetchRecipe from "../hooks/useFetchRecipe";
import Categories from "../components/Recipes/Categories";
import Ingredients from "../components/Recipes/Ingredients";
import Directions from "../components/Recipes/Directions";
import ButtonSection from "../components/ButtonSection";
import Loader from '../components/Loader';
import NotFound from '../components/Recipes/NotFound';
import { useParams } from "react-router-dom";
import { getAuth } from 'firebase/auth';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faClock } from "@fortawesome/free-solid-svg-icons";

import './Recipe.css';

const Recipe = () => {
    const { recipeName } = useParams(); // Get the recipe name from the URL
    const formattedRecipeName = recipeName.replace(/-/g, ' '); // Convert hyphens back to spaces

    const { recipe, loading, error } = useFetchRecipe(formattedRecipeName); // Fetch recipe using the formatted name
    
    const [isEditing, setIsEditing] = useState(false); // New state for editing mode

    if (loading) return <Loader />;
    if (error) return <div>{error}</div>;
    if (!recipe) return <NotFound />; // Handle case when recipe is not found

    const auth = getAuth();
    const loggedInUser = auth.currentUser;

    const toggleEditMode = () => {
        setIsEditing(prev => !prev); // Toggle between view and edit mode
    };


    return (
        <section className="recipe">
            <div className="recipe-header">
                <div
                    className="featured-image"
                    style={{backgroundImage: `url(${recipe.image})`}}>
                    <Categories categories={recipe.categories} />
                </div>
                <div className="recipe-info">
                    <h1 className="title">{recipe.name}</h1>
                    {(recipe.servings || recipe.time) && (
                    <div className="details">
                        {recipe.servings && (
                            <div className="serving-size">
                                <FontAwesomeIcon icon={faUtensils} className="icon" /> {recipe.servings} Servings
                            </div>
                        )}
                        {recipe.time && (
                            <div className="cook-time">
                                <FontAwesomeIcon icon={faClock} className="icon" /> {recipe.time}
                            </div>
                        )}
                    </div>
                )}
                </div>
            </div>

            <div className="recipe-wrap container">
                {isEditing ? ( // Conditional rendering based on editing state
                    <div>
                        {/* Add your editing form here */}
                        <button onClick={toggleEditMode}>Save</button> {/* Button to save changes */}
                    </div>
                ) : (
                    <div className="instructions">
                        <Ingredients ingredients={recipe.ingredients} />
                        <Directions directions={recipe.directions} />
                    </div>
                )}
            </div>
            {loggedInUser && <ButtonSection page="recipe" toggle={toggleEditMode} />}
        </section>
    );
};

export default Recipe;