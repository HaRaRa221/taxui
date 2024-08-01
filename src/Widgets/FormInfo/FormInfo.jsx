import React from "react";

const FormInfo = (props) => {

    const NinetyInfo = [

        'Schedule C',
        'Schedule D', 
        'Schedule E', 
        'Schedule F', 
        'Schedule G', 
        'Schedule H',  
        'Schedule I', 
        'Schedule J', 
        'Schedule K', 
        'Schedule L', 
        'Schedule M', 
        'Schedule N',
    ];

    const form990Markup = NinetyInfo.map((info) => (
        <p>
            {info}
        </p>
    ));

    return <div>{form990Markup}</div>;



};

export default FormInfo;