import React from 'react';
import RecipeCard from "./RecipeCard";
import './RecipeGrid.css';

const RecipeGrid = ({ recipes }) => {

    return (
        <>
            {!Array.isArray(recipes) || recipes.length === 0 ? (
                <div className="no-recipes">No recipes found.</div>
            ) : (
                    <div id="recipeGrid">
                        {recipes.map((recipe) => (
                            <RecipeCard
                                key={recipe.id}
                                className="recipe-card"
                                recipe={recipe}
                            />
                        ))}
                    </div>

            )}
        </>
    );
};

export default RecipeGrid;