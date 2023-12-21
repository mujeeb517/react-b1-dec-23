import React from "react";
import './Display.css';

function Display() {
    // inline styles
    // <img style="border-radius:10px" src="img.jpeg" width="100" height="100"/>
    return <div>
        <h1 className="heading">Hello</h1>
        <img className="img" src="https://images.pexels.com/photos/9367332/pexels-photo-9367332.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            width="200" height="200" />
    </div>

}

export default Display;