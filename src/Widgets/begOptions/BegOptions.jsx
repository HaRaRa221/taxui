import React from "react";

import "./BegOptions.css";

const BegOptions = (props) => {
    return (
        <div className="options">
        <div className="options-container">
            {props.options.map((option) => (
                <div 
                className="option-button"
                onClick={option.handler}
                key={option.id}
                >
                    {option.text}
                </div>
            ))}
        </div>
        </div>
    );
    
};

export default BegOptions;
