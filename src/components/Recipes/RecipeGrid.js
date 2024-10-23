import React from 'react';
import RecipeCard from "./RecipeCard";
import useFetchRecipes from '../../hooks/useFetchRecipes';
import './RecipeGrid.css';

const RecipeGrid = () => {
    const { recipes, loading, error } = useFetchRecipes(); // Use the custom hook

    if (loading) return <div>Loading...</div>; // Show loading state
    if (error) return <div>{error}</div>; // Show error message

    return (
        <div id="recipeGrid">
            {Array.isArray(recipes) && recipes.length > 0 ? (
                recipes.map((recipe) => (
                    <RecipeCard
                        key={recipe.id}
                        className="recipe-card"
                        recipe={recipe}
                    />
                ))
            ) : (
                <div>No recipes found.</div> // Handle case when no recipes are available
            )}
        </div>
    );
};

export default RecipeGrid;