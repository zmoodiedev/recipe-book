import React from "react";
import './ButtonSection.css';

const ButtonSection = ({ page }) => {
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
            <button>{buttonText}</button>
        </div>
    );
};

export default ButtonSection;