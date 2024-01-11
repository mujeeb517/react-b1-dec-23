import React, { useEffect, useState } from "react";

import Header from "./Header";
import { BrowserRouter } from 'react-router-dom';
import Footer from "./Footer";
import AppRoutes from "./AppRoutes";
import UserContext from './context/UserContext';


function App() {

    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const hasToken = !!localStorage.getItem('token');
        setLoggedIn(hasToken);
    }, []);

    return <BrowserRouter>
        <UserContext.Provider value={{ isLoggedIn, setLoggedIn }}>
            <Header />
            <AppRoutes />
            <Footer />
        </UserContext.Provider>
    </BrowserRouter>;
}

export default App;
