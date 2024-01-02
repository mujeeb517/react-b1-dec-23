import React from "react";

import Header from "./Header";
import ProductList from "./products/ProductList";
import Counter from './Counter';
import AutoCounter from "./AutoCounter";
import ShouldRender from "./util/ShouldRender";
import CounterFunc from "./CounterFunc";
import AutoCounterFunc from "./AutoCounterFunc";

// class App extends React.Component {

//     state = { show: true }

//     onHide = () => {
//         this.setState({ show: !this.state.show });
//     }

//     render() {
//         return <div>
//             <Header />
//             <ShouldRender cond={this.state.show}>
//                 <AutoCounter />
//             </ShouldRender>
//             <button onClick={this.onHide} className="m-2 bg-orange-500 p-2 rounded">Hide</button>
//         </div >;
//     }
// }



function App() {
    return <div>
        <Header />
        <AutoCounterFunc />
        {/* <Counter /> */}
        {/* <ProductList /> */}
        {/* <Users /> */}
        {/* <Counter />
        <Counter value={100} />
        <Counter value={5} /> */}
        {/* <ProductList /> */}
    </div>;
}

export default App;


// function
// null or UI