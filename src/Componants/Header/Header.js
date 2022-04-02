import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>welcome to fancy tshirt store!!!</h1>
            <nav className='header-link'>
                <Link to={"/"}>Home</Link>
                <Link to={"/orders"}>Orders</Link>
                <Link to={'/inventory'}>Inventory</Link>
                <Link to={"/about"}>About us</Link>
            </nav>
        </div>
    );
};

export default Header;