import { useState } from "react";

function NewProduct() {

    const [product, setProduct] = useState({
        brand: '',
        model: '',
        price: '',
        inStock: false,
        discount: ''
    });

    const onInputChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const onSave = () => {
        console.log(product);
    };

    return (<div className="m-4 bg-gray-100 p-4 shadow w-1/2">
        <h1 className="text-lg">Add New Product</h1>
        <div className="mt-4 flex flex-col">
            <label>Brand</label>
            <select onChange={onInputChange} name="brand" className="border p-2 rounded">
                <option>--select--</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Google">Google</option>
                <option value="Xiomi">Xiomi</option>
                <option value="Vivo">Vivo</option>
            </select>
        </div>
        <div className="mt-4 flex flex-col">
            <label>Model</label>
            <input onChange={onInputChange} name="model" className="border p-2 rounded" type="text" placeholder="Model" />
        </div>
        <div className="mt-4 flex flex-col">
            <label>Price</label>
            <input onChange={onInputChange} name="price" className="border p-2 rounded" type="text" placeholder="Price" />
        </div>
        <div className="mt-4 flex flex-col">
            <label>Discount</label>
            <input onChange={onInputChange} name="discount" className="border p-2 rounded" type="text" placeholder="Discount" />
        </div>
        <div className="mt-4">
            <label>In Stock?</label>
            <input onChange={onInputChange} name="inStock" className="ml-1 border p-2 rounded" type="checkbox" />
        </div>
        <div className="mt-2">
            <button onClick={onSave} className="bg-orange-500 p-2 text-white rounded">Save</button>
        </div>
    </div>);
}

export default NewProduct;