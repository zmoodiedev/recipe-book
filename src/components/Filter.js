import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

import './Filter.css';

async function fetchDataFromFirestore() {
    const querySnapshot = await getDocs(collection(db, "categories"))

    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data()});
    });
    return data.sort((a, b) => a.name.localeCompare(b.name));   
}

const Filter = ({ assignedCategoryIds }) => {
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchDataFromFirestore();
            setCategoryData(data);
        }
        fetchData();
    }, []);

    const filteredCategories = categoryData.filter(category =>
        Array.isArray(assignedCategoryIds) && assignedCategoryIds.includes(category.id)
    );


    const handleClick = (event) => {
        const clickedCategory = event.target;
        if (clickedCategory.classList.contains("category")) {
            clickedCategory.classList.toggle("active");

            const activeCategories = document.getElementsByClassName("category active");
            if (activeCategories.length === 0) {
                const allCategory = document.querySelector(".category");
                allCategory.classList.add("active");
            }
        }
    }

    return (
        <div id="filterWrap">
            {filteredCategories.length > 0 ? (
                <ul className="filter categories">
                    <li className="category active" onClick={handleClick}>All</li>
                    {filteredCategories.map((category, index) => (
                            <li
                                key={index}
                                id={category.id}
                                className="category"
                                onClick={handleClick}
                            >{category.name}</li>
                    ))}
                </ul>
            ) : (<></>)}
        </div>
    );
};

export default Filter;