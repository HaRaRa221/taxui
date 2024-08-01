import React from "react";

import "./BegOptions.css";


const BegOptions = (props) => {
    return (
        <div className="begoptions">
        <div className="begoptions-container">
            {props.BegOptions.map((option) => (
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
