import React, { useState } from "react";
import CategoryFilter from './CategoryFilter';
import RecipeGrid from "./RecipeGrid";

const SearchRecipes = ({ recipes }) => {
    const [selectedCategories] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState(recipes); // Initialize with all recipes

    const handleFilteredRecipes = (filtered) => {
        setFilteredRecipes(filtered); // Update filtered recipes
    };

    return (
        <section id="searchRecipes" className="container">
            <h1>Search Recipes</h1>
            <CategoryFilter onFilteredRecipes={handleFilteredRecipes} />
            <RecipeGrid selectedCategories={selectedCategories} recipes={filteredRecipes} />
        </section>
    );
};

export default SearchRecipes;