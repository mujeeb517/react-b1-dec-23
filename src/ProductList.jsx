import ProductItem from "./ProductItem";

// container component
function ProductList() {
    // api 
    // fetch
    const products = [
        { id: 1, brand: 'Apple', model: 'Iphone 13', price: 800, img: 'https://images.pexels.com/photos/16247538/pexels-photo-16247538/free-photo-of-a-cell-phone-sitting-on-a-table-next-to-a-plant.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 2, brand: 'Apple', model: 'Iphone 14', price: 1000, img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRU5KYtYVRMplF9xFxqF9tubJdBCmnDGciC50DC7DM1pDHhppNhWZQwdgZra0vUYICdgzXVEX0_PWpqzYtRJfJ-tJCiP4m5gyUsR8z9OV1m41r8zA-4diJVzf8' }
    ];

    return <div>
        <h1 className="text-2xl font-light">Products</h1>
        {products.map(item => <ProductItem product={item} />)}
    </div>
}

export default ProductList;
