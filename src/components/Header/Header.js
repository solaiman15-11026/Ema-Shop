import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='papa'>
            <img src={logo} alt="" />
            <div className='pp'>
                <a href="/shop">Shop</a>
                <a href="/oder">Order</a>
                <a href="/cart">Cart</a>
                <a href="/about">About</a>
            </div>
        </nav>

    );
};

export default Header;