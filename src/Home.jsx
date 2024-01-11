import Level from "./Level";
import Counter from './Counter';

function Home() {
    return (<div>
        <h1 className="text-lg font-bold">Home Page</h1>
        <Level />
        <Counter />
    </div>);
}

export default Home;