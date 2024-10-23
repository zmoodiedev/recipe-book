import React from "react";
import './Directions.css';

const Directions = ({ steps }) => {

    return (
        <div className="directions">
            <h2>Directions</h2>
            <ol type="1" className="steps">
            {steps.map((step, index) => (
                <li key={index} className="step">{step}</li>
            ))}
            </ol>
        </div>
    );
};

export default Directions;