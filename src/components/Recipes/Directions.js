import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import './Directions.css';

const Directions = ({steps = [], setSteps }) => {

    const [newStep, setNewStep] = useState("");

    const handleAddDirection = () => {
        if (newStep) {
            setSteps(prevSteps => [...prevSteps, { id: prevSteps.length + 1, description: newStep }]);
            setNewStep(""); // Clear input field
        }
    }


    return (
        <div className="directions">
            <h2>Directions</h2>
           
            {steps.length > 0 ? (
                <ol type="1" className="steps">
                {steps.map((step) => (
                    <li key={step.id} className="step">
                    {step.description}
                    </li>
                ))}
                </ol>
                ) : (
                    <>
                        <div>No directions provided</div>
                        <input
                            type="text"
                            value={newStep}
                            onChange={(e) => setNewStep(e.target.value)}
                            placeholder="Add a step."
                        />
                        <button onClick={handleAddDirection} className="add">
                            <FontAwesomeIcon icon={faSquarePlus} /> Add
                        </button>
                    </>
                )
            }
        </div>
    );
};

export default Directions;