import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ShouldRender from '../util/ShouldRender';
import Error from '../util/Error';

import axios from '../util/axios';

function NewProduct() {

    const navigate = useNavigate();

    const [product, setProduct] = useState({
        brand: '',
        model: '',
        price: '',
        inStock: false,
        discount: ''
    });

    const [hasError, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const onInputChange = (e) => {
        console.log(e.target.value);
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const isValid = () => {
        return product.brand
            && product.model
            && product.price;
    };

    const onSave = async () => {
        if (!isValid()) return;
        try {
            const payload = { ...product, inStock: product.inStock === 'on' };
            await axios().post('/api/products', payload);
            setSuccess(true);
            setProduct({ brand: '', model: '', price: '', discount: '', inStock: false });
            // redirect
            // navigate('/products');
        } catch (err) {
            setError(true);
        }
    };

    return (<div className="m-4 bg-gray-100 p-4 shadow w-1/2">
        <ShouldRender cond={success}>
            <div className="p-3 bg-green-500 rounded text-white">
                Successfully product added!
            </div>
        </ShouldRender>
        <ShouldRender cond={hasError}>
            <Error />
        </ShouldRender>
        <h1 className="text-lg">Add New Product</h1>
        <div className="mt-4 flex flex-col">
            <label>Brand</label>
            <select value={product.brand} onChange={onInputChange} name="brand" className="border p-2 rounded">
                <option value="">--select--</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Google">Google</option>
                <option value="Xiomi">Xiomi</option>
                <option value="Vivo">Vivo</option>
            </select>
            <ShouldRender cond={!product.brand}>
                <span className="m-1 text-sm text-red-500">Required</span>
            </ShouldRender>
        </div>
        <div className="mt-4 flex flex-col">
            <label>Model</label>
            <input value={product.model} onChange={onInputChange} name="model" className={product.model ? "border border-green-500 p-2 rounded" : "border border-red-400 p-2 rounded"} type="text" placeholder="Model" />
            <ShouldRender cond={!product.model}>
                <span className="m-1 text-sm text-red-500">Required</span>
            </ShouldRender>
        </div>
        <div className="mt-4 flex flex-col">
            <label>Price</label>
            <input value={product.price} onChange={onInputChange} name="price" className="border p-2 rounded" type="text" placeholder="Price" />
            <ShouldRender cond={!product.price}>
                <span className="m-1 text-sm text-red-500">Required</span>
            </ShouldRender>
        </div>
        <div className="mt-4 flex flex-col">
            <label>Discount</label>
            <input value={product.discount} onChange={onInputChange} name="discount" className="border p-2 rounded" type="text" placeholder="Discount" />
        </div>
        <div className="mt-4">
            <label>In Stock?</label>
            <input checked={product.inStock} onChange={onInputChange} name="inStock" className="ml-1 border p-2 rounded" type="checkbox" />
        </div>
        <div className="mt-2">
            <button onClick={onSave} className="bg-orange-500 p-2 text-white rounded">Save</button>
        </div>
    </div>);
}

export default NewProduct;