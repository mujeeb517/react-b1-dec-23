import React from "react";

import Header from "./Header";
import { BrowserRouter } from 'react-router-dom';
import Footer from "./Footer";
import AppRoutes from "./AppRoutes";

function App() {
    return <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
    </BrowserRouter>;
}

export default App;
