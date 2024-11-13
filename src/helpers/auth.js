import { getAuth } from 'firebase/auth';

export const getLoggedInUser = () => {
    const auth = getAuth();
    return auth.currentUser;
}