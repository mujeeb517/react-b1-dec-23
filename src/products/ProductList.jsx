import React from 'react';
import axios from 'axios';
import ShouldRender from '../util/ShouldRender';
import Loader from '../util/Loader';
import Error from '../util/Error';
import ProductItem from './ProductItem';

// life cycle
// constructor: x1
// render: xN
// componentDidMount: x1
// shouldComponentUpdate: xN
// componentDidUpdate: xN
// componentWillUnmount: x1
// React 16, state

class ProductList extends React.Component {

    constructor() {
        super();

        this.state = {
            products: [],
            hasError: false,
            loading: true,
            columns: true
        }
        // CORS 
        // Cross origin resource sharing
        // UI: localhost:5173
        // API: products-api-0pc7.onrender.com
        // initialization
    }

    async componentDidMount() {
        // axios.get('https://products-api-0pc7.onrender.com/api/products')
        //     .then(res => this.setState({ products: res.data.data }))
        //     .catch(err => this.setState({ hasError: true }))
        //     .finally(() => this.setState({ loading: false }));
        try {
            const res = await axios.get('https://products-api-0pc7.onrender.com/api/products');
            this.setState({ products: res.data.data });
        } catch (err) {
            this.setState({ hasError: true })
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        return <div className="m-2">
            <ShouldRender cond={this.state.loading}>
                <Loader />
            </ShouldRender>
            <ShouldRender cond={this.state.hasError}>
                <Error />
            </ShouldRender>
            {/* xs, sm, md, lg, xl */}
            <div className="flex">
                <h1 className="text-lg font-bold">Products</h1>
                <div>
                    <button className="m-1" onClick={() => this.setState({ columns: false })}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                        </svg>
                    </button>
                    <button onClick={() => this.setState({ columns: true })} className="m-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>
                    </button>
                </div>
            </div>

            <ShouldRender cond={this.state.columns}>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1">
                    {this.state.products.map(item => <ProductItem key={item._id} item={item} />)}
                </div>
            </ShouldRender>

            <ShouldRender cond={!this.state.columns}>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs uppercase bg-gray-500 text-white">
                        <th className="p-4">Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>InStock</th>
                    </thead>
                    <tbody>
                        {this.state.products.map(item => <tr className="bg-white border-b">
                            <td>{item.brand} {item.model}</td>
                            <td><img src={item.image} width={100} height={100} alt="product" /></td>
                            <td>${item.price}</td>
                            <td><input type="checkbox" checked={item.inStock} /></td>
                        </tr>)}
                    </tbody>
                </table>
            </ShouldRender>

        </div>
    }
}

export default ProductList;
