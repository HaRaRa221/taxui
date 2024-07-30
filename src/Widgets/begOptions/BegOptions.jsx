import React from "react";

import "./BegOptions.css";

const begOptions = (props) => {
    return (
        <div className="body">
        <div className="options-container">
            {props.options.map((option) => (
                <div 
                    className="option-button"
                    key={option.id}
                    onClick={option.handler}
                >
                    {option.name}
                </div>
            ))}
        </div>
        </div>
    );
    
};

export default begOptions;
