import React from 'react';
import axios from 'axios';
import ShouldRender from '../util/ShouldRender';
import Loader from '../util/Loader';
import Error from '../util/Error';

class ProductList extends React.Component {

    state = {
        products: [],
        hasError: false,
        loading: true
    }

    constructor() {
        super();
        // CORS 
        // Cross origin resource sharing
        // UI: localhost:5173
        // API: products-api-0pc7.onrender.com

        axios.get('https://products-api-0pc7.onrender.com/api/products')
            .then(res => this.setState({ products: res.data.data }))
            .catch(err => this.setState({ hasError: true }))
            .finally(() => this.setState({ loading: false }));
    }

    render() {
        return <div className="m-2">
            <ShouldRender cond={this.state.loading}>
                <Loader />
            </ShouldRender>
            <ShouldRender cond={this.state.hasError}>
                <Error />
            </ShouldRender>
            <h1 className="text-lg font-bold">Products</h1>
        </div>
    }
}

export default ProductList;
