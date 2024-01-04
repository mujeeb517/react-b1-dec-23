import { Routes, Route } from 'react-router-dom';

import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import NotFound from "./NotFound";
import NewProduct from './products/NewProduct';
import ProductDetail from './products/ProductDetail';
import ProductList from "./products/ProductList";
import Users from "./Users";

function AppRoutes() {
    return (<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/new" element={<NewProduct />} />
        {/* <Route path="*" element={<Home />} /> */}
        <Route path="*" element={<NotFound />} />
    </Routes>);
}

export default AppRoutes;