import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import './Categories.css';

async function fetchDataFromFirestore() {
    const querySnapshot = await getDocs(collection(db, "categories"));
    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
    });
    return data.sort((a, b) => a.name.localeCompare(b.name));   
}

const Categories = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const categoriesData = await fetchDataFromFirestore();
            setCategories(categoriesData);
        };
        fetchCategories();
    }, []);

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

export default Categories;