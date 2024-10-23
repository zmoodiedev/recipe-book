import React from "react";
import useFetchRecipe from "../hooks/useFetchRecipe";
import useFetchCategories from "../hooks/useFetchCategories";
import Categories from "../components/Recipes/Categories";
import Ingredients from "../components/Recipes/Ingredients";
import Directions from "../components/Recipes/Directions";
import ButtonSection from "../components/ButtonSection";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faClock } from "@fortawesome/free-solid-svg-icons";

import './Recipe.css';


const Recipe = () => {
    const { recipeId } = useParams(); // Get the recipe ID from the URL
    const { recipe, loading, error } = useFetchRecipe(recipeId);
    console.log(recipe); 
    const { categories } = useFetchCategories(recipe?.categories || []); 
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!recipe) return <div>Recipe not found.</div>; // Handle case when recipe is not found

    

    return (
        <section className="recipe">
            <div className="featured-image">
                <Categories categories={categories} />
            </div>
            <div className="recipe-wrap container">
                <h1 className="title">{recipe.name}</h1>
                <div className="details">
                    <div className="serving-size">
                        <FontAwesomeIcon icon={faUtensils} className="icon" /> {recipe.servings} Servings
                    </div>
                    <div className="cook-time">
                        <FontAwesomeIcon icon={faClock} className="icon" /> {recipe.time}
                    </div>
                </div>
                <div className="instructions">
                    <Ingredients ingredients={recipe.ingredients} />
                    <Directions steps={recipe.steps} />
                </div>
            </div> 
            <ButtonSection page="recipe" />
        </section>
    );
};

export default Recipe;