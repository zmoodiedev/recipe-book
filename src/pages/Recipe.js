import React from "react";

import './Recipe.css';

const Recipes = () => {
    return (
        <section className="recipe">
            <div className="featured-image"></div>
            <div className="recipe-wrap container">
                <h1 className="title">French Toast</h1>
                <div className="details">
                    <div className="ingredients"></div>
                    <div className="directions"></div>
                </div>
            </div> 
        </section>
    );
};

export default Recipes;