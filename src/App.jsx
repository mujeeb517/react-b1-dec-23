import Header from "./Header";
import Footer from "./Footer";
import Display from "./Display";
import Names from "./Names";
import Name from "./Name";
import PI, { add as add2, obj } from './math';

function App() {
    return <div>
        <h1>{add2(100, 200)}</h1>
        <Header></Header>
        <Names />
        <Name value="Uzair" designation="SSE" />
        <Display />
        <Footer></Footer>
    </div>;
}

export default App;


// function
// null or UI