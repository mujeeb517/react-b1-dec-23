import React from 'react';

// inline, block
// span, img

/*
    <img src="img.jpeg"/>
    <span>Hello world</span>
    // Javascript xml
    // input

    Function
    null or UI
    input

    interpolation
*/

function Name({ value, designation }) {
    return <div>
        <b>{value}</b>
        <div>
            <i>{designation}</i>
        </div>
    </div>;
}

export default Name;
