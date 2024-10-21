import React from "react";
import Header from '../components/Header';
import CTA from "../components/CTA";
import SearchRecipes from "../components/SearchRecipes";

const Home = () => {
    return (
        <>
            <Header />
            <CTA />
            <SearchRecipes />
        </>
    );
};

export default Home;