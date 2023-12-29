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

class ProductList extends React.Component {

    constructor() {
        super();

        this.state = {
            products: [],
            hasError: false,
            loading: true
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
            <h1 className="text-lg font-bold">Products</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1">
                {this.state.products.map(item => <ProductItem key={item._id} item={item} />)}
            </div>
        </div>
    }
}

export default ProductList;
