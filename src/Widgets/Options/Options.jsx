import React from "react";

import BegOptions from "../begOptions/BegOptions";

const Options = (props) => { 
    const BegOptions = [
        {
            text: "What is TaxUI?",
            handler: props.actionProvider.handleTaxUI,
            id: 1,
        },
        {
            text: "What documents do I need to file for IRS form 990?",
            handler: props.actionProvider.handlePaperwork,
            id: 2,
        },
        {
            text: "How do I use TaxUI?",
            handler: props.actionProvider.handleUsage,
            id: 3,
        },
        {
            text: "What is the future of TaxUI?",
            handler: props.actionProvider.handleFuture,
            id: 4,
        },
    ];
    return <BegOptions options={BegOptions} title= "Select Options" {...props} />;
};

export default Options;