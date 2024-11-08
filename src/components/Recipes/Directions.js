import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import './Directions.css';

const Directions = ({ directions = [], setDirections }) => {

    const [newDirection, setNewDirection] = useState("");

    const handleAddDirection = () => {
        if (newDirection) {
            setDirections(prevDirections => [...prevDirections, newDirection]);
            setNewDirection(""); // Clear input field
        }
    }


    return (
        <div className="directions">
            <h2>Directions</h2>
           
            {directions.length > 0 ? (
                <ol type="1" className="steps">
                {directions.map((direction, index) => (
                    <li key={index} className="step">
                        {direction}
                    </li>
                ))}
                </ol>
                ) : (
                    <>
                        <div>No directions provided</div>
                        <input
                            type="text"
                            value={newDirection}
                            onChange={(e) => setNewDirection(e.target.value)}
                            placeholder="Add a step."
                        />
                        <button onClick={handleAddDirection}>
                            <FontAwesomeIcon icon={faSquarePlus} /> Add
                        </button>
                    </>
                )
            }
        </div>
    );
};

export default Directions;