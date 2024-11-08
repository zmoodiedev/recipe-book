import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser, setLoading } from './core/UserSlice';
import { auth } from './config/firebase';
import './App.css';
import Header from "./components/Header";
import Home from './pages/Home';
import Login from './pages/Login';
import Recipe from './pages/Recipe';
import AddRecipe from './pages/AddRecipe';


function App() {

  const dispatch = useDispatch();

  
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
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
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recipe/:recipeName" element={<Recipe />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
