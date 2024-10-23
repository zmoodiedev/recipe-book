import { useEffect, useState } from 'react';
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const useFetchRecipe = (recipeId) => {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const recipeDoc = doc(db, "recipes", recipeId);
                const recipeSnapshot = await getDoc(recipeDoc);

                if (recipeSnapshot.exists()) {
                    setRecipe({
                        id: recipeSnapshot.id,
                        ...recipeSnapshot.data(),
                    });
                } else {
                    setError("Recipe not found");
                }
            } catch (err) {
                setError("Error fetching recipe");
            } finally {
                setLoading(false);
            }
        };

        if (recipeId) {
            fetchRecipe();
        }
    }, [recipeId]);

    return { recipe, loading, error };
};

export default useFetchRecipe;