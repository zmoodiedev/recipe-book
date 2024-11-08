import React from "react";
import './ButtonSection.css';

const ButtonSection = ({ page, toggle }) => {
    let buttonText;

    switch (page) {
        case 'add-recipe':
            buttonText = 'Publish Recipe';
            break;
        case 'recipe':
            buttonText = 'Edit Recipe';
            break;
        default:
            buttonText = 'DEFAULT';
    }

    return (
        <div className="button-section">
            <button onClick={toggle}>{buttonText}</button>
        </div>
    );
};

export default ButtonSection;