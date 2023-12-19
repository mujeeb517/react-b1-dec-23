import React from "react"

function Display() {
    // <img src="img.jpeg" width="100" height="100"/>
    return React.createElement('img',
        {
            src: 'https://images.pexels.com/photos/9367332/pexels-photo-9367332.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
            width: 200,
            height: 200
        }, null);
}

export default Display;