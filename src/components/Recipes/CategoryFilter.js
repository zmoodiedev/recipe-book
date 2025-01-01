import React, { useEffect, useState, useCallback } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import useFetchRecipes from '../../hooks/useFetchRecipes';
import './CategoryFilter.css';

async function fetchDataFromFirestore() {
   const querySnapshot = await getDocs(collection(db, "categories"));
   const data = [];
   querySnapshot.forEach((doc) => {
       data.push({ id: doc.id, ...doc.data() });
   });
   return data.sort((a, b) => a.name.localeCompare(b.name));
}

export default function CategoryFilter({ onFilteredRecipes }) {
   const [selectedCategories, setSelectedCategories] = useState([]);
   const [categories, setCategories] = useState([]);
   const { recipes } = useFetchRecipes();
    useEffect(() => {
       const fetchCategories = async () => {
           const categoriesData = await fetchDataFromFirestore();
           setCategories(categoriesData);
       };
       fetchCategories();
   }, []);
    const filterItems = useCallback(() => {
       if (selectedCategories.length > 0) {
           const filtered = recipes.filter(recipe => 
               recipe.categories && recipe.categories.some(category => 
                   selectedCategories.includes(category)
               )
           );
           onFilteredRecipes(filtered);
       } else {
           onFilteredRecipes(recipes);
       }
   }, [recipes, selectedCategories, onFilteredRecipes]);
    useEffect(() => {
       const debounceTimeout = setTimeout(() => {
           filterItems();
       }, 0); // Adjust the debounce time as needed
        return () => clearTimeout(debounceTimeout); // Cleanup on unmount or when dependencies change
   }, [filterItems]); // Only call filterItems when it changes
    const handleFilterButtonClick = (selectedCategory) => {
       setSelectedCategories(prevSelected => {
           if (prevSelected.includes(selectedCategory)) {
               return prevSelected.filter(e => e !== selectedCategory);
           } else {
               return [...prevSelected, selectedCategory];
           }
       });
   };

    return (
        <div id="filterWrap">
             {categories.length > 0 ? (
                <ul className="filter categories">
                    {categories.map((category) => (
                        <li
                            key={category.id}
                            onClick={() => handleFilterButtonClick(category.name)}
                            className={`category ${selectedCategories.includes(category.name) ? "active" : ""}`}
                        >
                            {category.name}
                        </li>
                    ))}
                </ul>
            ) : (<></>)}
        </div>
    );
}