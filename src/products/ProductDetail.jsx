import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ShouldRender from "../util/ShouldRender";
import ProductItem from "./ProductItem";

function ProductDetail() {

    const params = useParams();

    const id = params.id;   
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://products-api-0pc7.onrender.com/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, []);

    return (<div>
        <div className="w-1/3">
            <ShouldRender cond={product}>
                <ProductItem item={product} />
            </ShouldRender>
        </div>
    </div>);
}

export default ProductDetail;