import { useState, useEffect } from "react";

function AutoCounterFunc() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        // componentDidMount
        console.log('mounted');
        setTimeout(() => {
            setCount(count + 1);
            console.log('updated');
        }, 1000);
    }, [count]);

    return (<div>
        <h1>Count : {count}</h1>
    </div>);
}

export default AutoCounterFunc;