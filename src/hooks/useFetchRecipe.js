import { useEffect, useState } from 'react';
import { db } from "../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const useFetchRecipe = (formattedRecipeName) => {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const q = query(collection(db, "recipes"), where("name", "==", formattedRecipeName));
                const querySnapshot = await getDocs(q);

                console.log("Query snapshot:", querySnapshot); // Debugging line

                if (!querySnapshot.empty) {
                    const recipeData = querySnapshot.docs[0];
                    setRecipe({
                        id: recipeData.id,
                        ...recipeData.data(),
                    });
                } else {
                    setError("Recipe not found");
                }
            } catch (err) {
                console.error("Error fetching recipe:", err); // Debugging line
                setError("Error fetching recipe");
            } finally {
                setLoading(false);
            }
        };

        if (formattedRecipeName) {
            fetchRecipe();
        }
    }, [formattedRecipeName]);

    return { recipe, loading, error };
};

export default useFetchRecipe;