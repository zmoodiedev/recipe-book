import React from "react";
import Filter from '../Filter';
import RecipeGrid from "./RecipeGrid";

const SearchRecipes = () => {
    return (
        <section id="searchRecipes" className="container">
            <h1>Search Recipes</h1>
            <Filter />
            <RecipeGrid />
        </section>
    );
};

export default SearchRecipes;