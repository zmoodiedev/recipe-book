import React from "react";
import './Directions.css';

const Directions = ({ directions }) => {

    return (
        <div className="directions">
            <h2>Directions</h2>
            
            {directions ?
                <ol type="1" className="steps">
                {directions.map((direction, index) => (
                    <li key={index} className="step">{direction}</li>
                ))}
                </ol>
                :
                <div>No directions provided.</div>
            }

        </div>
    );
};

export default Directions;