import React from "react";
import { Link } from "react-router-dom";

import './CTA.css';

const CTA = () => {
    return (
        <section id="CTA">
            <div className="container cta-content">
                <h2 className="tagline">Your Recipies,<br/>
                Simplified</h2>
                <p className="subtag">Save, cook, and savor — no blogs, no ads, just the dishes you love.</p>
                <Link to="/add-recipe" className="btn cta-btn">Get Started</Link>
            </div>
        </section>
    );
};

export default CTA;