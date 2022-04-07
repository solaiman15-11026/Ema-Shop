import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Shopdetails from '../Shopdetails/Shopdetails';
import './Shop.css'
const Shop = () => {
    const [shop, setShop] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setShop(data))
    }, [])

    //add to cart buttom------------------------------
    const [cart, setCart] = useState([])
    const addCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className='container'>

            <div className="product-container">

                {
                    shop.map(product => <Shopdetails
                        product={product}
                        key={product.id}
                        addCart={addCart}
                    ></Shopdetails>)
                }
            </div>

            <div className="cart-container">

                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;