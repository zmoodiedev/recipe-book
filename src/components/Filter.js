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

const Filter = () => {

    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchDataFromFirestore();
            setCategoryData(data);
        }
        fetchData();
        
    }, []);

    return (
        <div id="filterWrap">
            {categoryData[0] ? (
                <ul className="filter categories">
                    <li className="category">All</li>
                    {categoryData.map((category, index) => (
                            <li
                                key={index}
                                id={category.id}
                                className="category"
                            >{category.name}</li>
                    ))}
                </ul>
            ) : (<></>)}
        </div>
    );
};

export default Filter;