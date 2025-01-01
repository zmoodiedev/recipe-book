import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

const uploadRecipeToDatabase = async (recipeData) => {
    try {
        const recipesCollection = collection(db, "recipes");
        await addDoc(recipesCollection, recipeData);
    } catch (error) {
        console.error("Error adding recipe:", error);
        throw error; // Rethrow the error to handle it in the calling function
    }
};

export default uploadRecipeToDatabase;