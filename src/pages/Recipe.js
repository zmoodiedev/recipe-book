import React from "react";
import Categories from "../components/Recipes/Categories";
import Ingredients from "../components/Recipes/Ingredients";
import Directions from "../components/Recipes/Directions";
import ButtonSection from "../components/ButtonSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faClock } from "@fortawesome/free-solid-svg-icons";

import './Recipe.css';

const Recipes = () => {
    return (
        <section className="recipe">
            <div className="featured-image">
                <Categories />
            </div>
            <div className="recipe-wrap container">
                <h1 className="title">French Toast</h1>
                <div className="details">
                    <div className="serving-size">
                        <FontAwesomeIcon icon={faUtensils} className="icon" /> 2 Servings
                    </div>
                    <div className="cook-time">
                        <FontAwesomeIcon icon={faClock} className="icon" /> 40 Minutes
                    </div>
                </div>
                <div className="instructions">
                    <Ingredients />
                    <Directions />
                </div>
            </div> 
            <ButtonSection />
        </section>
    );
};

export default Recipes;