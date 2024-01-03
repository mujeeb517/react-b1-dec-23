import React from "react";

import Header from "./Header";
import ProductList from "./products/ProductList";
import Users from "./Users";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import NotFound from "./NotFound";

function App() {
    return <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<ProductList />} />
            {/* <Route path="*" element={<Home />} /> */}
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </BrowserRouter>;
}

export default App;
