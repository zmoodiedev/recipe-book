import { useEffect, useState } from 'react';
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

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

    return { recipes, loading, error };
};

export default useFetchRecipes;