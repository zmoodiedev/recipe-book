import GoogleButton from './GoogleButton';
import { auth, googleProvider } from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import { useState } from "react";

import './Auth.css';

export const Auth = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <div>
            <form>
                <div className="form-row">
                    <div className="form-item">
                        <label htmlFor="email">Email Address</label>
                        <input
                            placeholder="Enter Email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="email-input"
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-item">
                    <label htmlFor="password">Password</label>
                        <input
                            placeholder="Enter Password"
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                        />
                    </div>
                </div>
            </form>
            <div className="login-btns">
                <button onClick={signIn} type="button" className="sign-in">Sign In</button>
                <span className="login-divider"><hr />or<hr/></span>
                <GoogleButton onClick={signInWithGoogle} />
            </div>

        </div>
    )
}