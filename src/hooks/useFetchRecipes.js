import { useEffect, useState } from 'react';
import { db } from "../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const useFetchRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const recipesSnapshot = await getDocs(collection(db, "recipes"));
                const recipesData = recipesSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setRecipes(recipesData);
            } catch (err) {
                setError("Error fetching recipes");
                setRecipes([]); // Ensure recipes is an empty array on error
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
        
    }, []);
    

    const fetchRecipesByCategory = async (categoryIds) => {
        try {
            const q = query(collection(db, "recipes"), where("categoryId", "in", categoryIds));
            const querySnapshot = await getDocs(q);
            const filteredRecipes = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            return filteredRecipes;
        } catch (err) {
            console.error("Error fetching recipes by category:", err);
            return [];
        }
    };

    return { recipes, loading, error, fetchRecipesByCategory };
};

export default useFetchRecipes;