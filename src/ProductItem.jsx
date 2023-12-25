// presentation component
function ProductItem({ product }) {
    return <div className="max-w-sm m-2 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg w-full" src={product.img} alt="" />
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.brand} {product.model}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">${product.price}</p>
        </div>
        <div className="flex">
            <button className="flex p-2 bg-blue-600 m-2 text-white rounded hover:bg-blue-700">
                Add to cart
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </button>
            <button className="flex m-2 p-2 border border-blue-600 text-white rounded hover:bg-blue-600">
                Buy Now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </button>
        </div>
    </div>;
}

export default ProductItem;
