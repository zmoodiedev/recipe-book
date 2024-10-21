import React from "react";
import RecipeCard from "./RecipeCard";

import './RecipeGrid.css';

const RecipeGrid = () => {
    return (
        <div id="recipeGrid">
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
        </div>
    );
};

export default RecipeGrid;