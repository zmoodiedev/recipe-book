import React, { useEffect, useState } from "react";
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
    const { recipes } = useFetchRecipes(); // Fetch recipes using the custom hook

    useEffect(() => {
        const fetchCategories = async () => {
            const categoriesData = await fetchDataFromFirestore();
            setCategories(categoriesData);
        };
        fetchCategories();
    }, []);

    const filterItems = () => {
        if (selectedCategories.length > 0) {
            const filtered = recipes.filter(recipe => 
                recipe.categories && recipe.categories.some(category => 
                    selectedCategories.includes(category) // Check if any category in the recipe matches the selected categories
                )
            );
            onFilteredRecipes(filtered); // Pass filtered recipes to the parent
        } else {
            onFilteredRecipes(recipes); // Pass all recipes if no category is selected
        }
    };

    useEffect(() => {
        filterItems();
    }); // Add recipes to the dependency array

    const handleFilterButtonClick = (selectedCategory) => {
        if (selectedCategories.includes(selectedCategory)) {
            const categories = selectedCategories.filter((e) => e !== selectedCategory);
            setSelectedCategories(categories);
        } else {
            setSelectedCategories([...selectedCategories, selectedCategory]);
        }
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