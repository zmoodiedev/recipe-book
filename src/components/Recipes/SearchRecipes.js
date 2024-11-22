import React from "react";
import Filter from '../Filter';
import RecipeGrid from "./RecipeGrid";

const SearchRecipes = ({ recipes }) => {
    return (
        <section id="searchRecipes" className="container">
            <h1>Search Recipes</h1>
            <Filter assignedCategoryIds={recipes.categories} />
            <RecipeGrid />
        </section>
    );
};

export default SearchRecipes;