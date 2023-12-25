import ProductItem from "./ProductItem";

// container component
function ProductList() {
    // api 
    // fetch
    const products = [
        { id: 1, brand: 'Apple', model: 'Iphone 13', price: 800, img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70' },
        { id: 2, brand: 'Apple', model: 'Iphone 14', price: 1000, img: 'https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/8/z/w/iphone-13-mlph3hn-a-apple-original-imag6vzzhrxgazsg.jpeg?q=70' }
    ];

    return <div>
        <h1 className="text-2xl font-light">Products</h1>
        <div className="grid grid-cols-3">
            {products.map(item => <ProductItem key={product.id} product={item} />)}
        </div>
    </div>
}

export default ProductList;
