import React from 'react';
import { useContext } from 'react';

const DataContext = React.createContext(0);


function Level1() {
    return (<div>
        <h1>Level 1</h1>
        <Level2 />
    </div>);
}


function Level2() {
    const x = useContext(DataContext);

    return (<div>
        <h1>Level 2, {x}</h1>
        <Level3 />
    </div>);
}

function Level3() {
    const x = useContext(DataContext);

    return (<div>
        <h1>Level 3, data passed is: {x}</h1>
    </div>);
}


function Level() {

    const x = 100;

    return (<div>
        <h1> Top most component </h1>
        <DataContext.Provider value={x}>
            <Level1 />
        </DataContext.Provider>
    </div>);
}



export default Level;