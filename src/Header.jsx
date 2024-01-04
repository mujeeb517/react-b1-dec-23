import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    // <h1>Header</h1>
    return (
        <header className="bg-orange-500 p-2 flex justify-between">
            <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" dataSlot="icon" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <h1 className="text-3xl ml-1 font-light text-white">Products</h1>
            </div>
            <ul className="flex text-white mt-2 mr-4">
                <li className="ml-2 hover:text-orange-800">
                    <a href="/">Home</a>
                </li>
                <li className="ml-2 hover:text-orange-800"> <Link to="/about"> About</Link></li>
                <li className="ml-2 hover:text-orange-800"> <Link to="/products"> Products</Link></li>
                <li className="ml-2 hover:text-orange-800"> <Link to="/users"> Users</Link></li>
                <li className="ml-2 hover:text-orange-800"> <Link to="/contact"> Contact</Link></li>
            </ul>
        </header>);
}

export default Header;