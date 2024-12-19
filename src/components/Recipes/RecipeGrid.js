import React from 'react';
import RecipeCard from "./RecipeCard";
import './RecipeGrid.css';

const RecipeGrid = ({ recipes }) => {
    if (!Array.isArray(recipes) || recipes.length === 0) return <div>No recipes found.</div>;

    return (
        <div id="recipeGrid">
            {recipes.map((recipe) => (
                <RecipeCard
                    key={recipe.id}
                    className="recipe-card"
                    recipe={recipe}
                />
            ))}
        </div>
    );
};

export default RecipeGrid;