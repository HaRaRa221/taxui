import React from "react";

import "./begOptions.css";


const begOptions = (props) => {
    return (
        <div className="begoptions">
        <div className="begoptions-container">
            {props.begOptions.map((option) => (
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

export default begOptions;
