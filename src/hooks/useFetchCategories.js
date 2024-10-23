import { useEffect, useState } from 'react';
import { getDoc } from "firebase/firestore";

const useFetchCategories = (categoryRefs) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoryPromises = categoryRefs.map(ref => getDoc(ref)); // Fetch each category document
                const categoryDocs = await Promise.all(categoryPromises);
                const fetchedCategories = categoryDocs.map(doc => ({ id: doc.id, ...doc.data() })); // Map to desired structure
                setCategories(fetchedCategories);
            } catch (err) {
                setError("Error fetching categories");
            } finally {
                setLoading(false);
            }
        };

        if (categoryRefs && categoryRefs.length > 0) {
            fetchCategories();
        }
    }, [categoryRefs]);

    return { categories, loading, error };
};

export default useFetchCategories;