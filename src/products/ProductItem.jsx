import ShouldRender from "../util/ShouldRender";
import moment from 'moment';
import NoImg from '../assets/img/no-img.png';

function Price({ item }) {
    function getPrice() {
        return item.price - (item.price) * (item.discount / 100);
    }

    // Fragment
    // Refactoring
    return <>
        <div className="line-through">${item.price}</div>
        <div className="text-lg font-bold">
            ${getPrice()}
            <span className="text-sm text-green-500 font-bold ml-1">({item.discount}%)</span>
        </div>
    </>
}

function Actions() {
    return <div>
        <button className="p-2 bg-orange-500 text-white hover:bg-orange-600 m-1 rounded">Add to cart</button>
        <button className="p-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white m-1 rounded">Buy Now</button>
    </div>
}



// mobile-first
// desktop
// responsive
function ProductItem({ item }) {

    const onImgError = (e) => {
        e.target.src = NoImg;
        e.target.width = 100;
        e.target.height = 100;
    };

    return (<div className="m-4 bg-gray-100 flex flex-col items-center justify-between rounded shadow">
        <img onError={onImgError} src={item.image} width={200} height={200} />
        <div>
            <h1 className="font-bold">{item.brand} {item.model}</h1>
            <Price item={item} />
            <h1>{moment(item.updatedDate).fromNow()}</h1>
            <ShouldRender cond={item.inStock}>
                <Actions />
            </ShouldRender>
            <ShouldRender cond={!item.inStock}>
                <button className="p-2 bg-orange-500 text-white hover:bg-orange-600 m-1 rounded">Notify</button>
            </ShouldRender>
        </div>
    </div>);
}

export default ProductItem;