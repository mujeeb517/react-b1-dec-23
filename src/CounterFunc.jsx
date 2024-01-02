import { useState } from "react";

function CounterFunc() {

    const [count, setCount] = useState(0);

    function inc() {
        setCount(count + 1);
    }

    function dec() {
        setCount(count - 1);
    }

    return (<div>
        <h1>Count: {count} </h1>
        <button onClick={inc} className="p-1 bg-orange-500 text-white rounded m-2">++</button>
        <button onClick={dec} className="p-1 bg-orange-500 text-white rounded m-2">--</button>
    </div>);
}

export default CounterFunc;