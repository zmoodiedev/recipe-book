import { getAuth } from 'firebase/auth';

export const getLoggedInUser = () => {
    const auth = getAuth();
    const user =  auth.currentUser;

    if (user) {
        return user;
    } else {
        // No user signed in
    }
}