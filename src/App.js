import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Recipe from './pages/Recipe';
import AddRecipe from './pages/AddRecipe';
import ShoppingList from './pages/ShoppingList';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/shopping-list" element={<ShoppingList />} />
      </Routes>
    </Router>
  );
}

export default App;
