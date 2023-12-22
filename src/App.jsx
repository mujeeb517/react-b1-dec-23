import Counter from "./Counter";
import Header from "./Header";
import ProductList from "./ProductList";

function App() {
    return <div>
        <Header />
        <Counter />
        <Counter value={100} />
        <Counter value={5} />
        {/* <ProductList /> */}
    </div>;
}

export default App;


// function
// null or UI