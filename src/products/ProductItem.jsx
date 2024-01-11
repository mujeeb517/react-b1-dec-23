import ShouldRender from "../util/ShouldRender";
import moment from 'moment';
import NoImg from '../assets/img/no-img.png';
import { Link, useSearchParams } from "react-router-dom";
import axios from "../util/axios";
import { useState } from "react";
import Error from "../util/Error";

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
function ProductItem({ item, onRemove }) {

    const onImgError = (e) => {
        e.target.src = NoImg;
        e.target.width = 100;
        e.target.height = 100;
    };

    const [hasErr, setErr] = useState(false);
    const [authErr, setAuthErr] = useState(false);

    const onDelete = async () => {
        try {
            const res = confirm('are you sure you want to delete?');
            if (res) {
                await axios().delete(`/api/products/${item._id}`);
                onRemove();
            }
        } catch (err) {
            if (err.response.status === 403) setAuthErr(true);
            else setErr(true);
        }
    }

    return (<div className="m-4 bg-gray-100 flex flex-col items-center justify-between rounded shadow">
        <ShouldRender cond={hasErr || authErr}>
            <Error msg={authErr ? 'Permission denied' : 'Try again'} />
        </ShouldRender>

        <button onClick={onDelete} className="ml-auto m-1 hover:text-orange-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>
        <img onError={onImgError} src={item.image} width={200} height={200} />

        <div>
            <Link to={'/products/' + item._id}>
                <h1 className="font-bold text-blue-300">{item.brand} {item.model}</h1>
            </Link>
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