import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser, setLoading } from './core/UserSlice';
import { auth } from './config/firebase';
import './App.css';
import Header from "./components/Header";
import Home from './pages/Home';
import Login from './pages/Login';
import Recipe from './pages/Recipe';
import AddRecipe from './pages/AddRecipe';
import Footer from './components/Footer';


function App() {

  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        console.log('User is not logged in');
        setUser(null); // Clear user state
      }
    });

    return () => unsubscribe(); // Clean up subscription on unmount
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={ !user ? <Login /> : <Navigate to="/" />} />
        <Route path="/recipe/:recipeName" element={<Recipe />} />
        <Route path="/add-recipe" element={ user ? <AddRecipe /> : <Navigate to="/login" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
