import React, { useEffect, useState } from "react";
import CTA from "../components/CTA";
import SearchRecipes from "../components/Recipes/SearchRecipes";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {

    const [categoryIds, setCategoryIds] = useState([]);

    useEffect(() => {
        const fetchRecipeCategories = async () => {
            const recipesSnapshot = await getDocs(collection(db, "recipes"));
            const recipesData = recipesSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
        
            const allCategoryIds = [];
            recipesData.forEach(recipe => {
                if (recipe.categories) {
                    allCategoryIds.push(...recipe.categories); // Collect all category IDs
                }
            });
        
            setCategoryIds(allCategoryIds);
        };

        fetchRecipeCategories();
    }, []);
    
    return (
        <>
            <CTA />
            <SearchRecipes recipes={{ categories: categoryIds }} />
        </>
    );
};

export default Home;