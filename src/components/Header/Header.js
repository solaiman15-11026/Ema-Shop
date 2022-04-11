import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='papa'>
            <img src={logo} alt="" />
            <div className='pp'>
                <a href="/shop">Shop</a>
                <Link to="/order">Order</Link>
                <a href="/cart">Cart</a>
                <Link to="/about">About</Link>
            </div>
        </nav>

    );
};

export default Header;