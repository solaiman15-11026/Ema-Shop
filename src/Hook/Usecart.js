import React, { useEffect, useState } from 'react';
import { getCart } from '../utilities/fakedb';

const Usecart = (products) => {
    const [cart, setCart] = useState([])

    useEffect((products) => {
        const storeCart = getCart();
        const savecart = [];

        for (const id in storeCart) {
            const addProduct = products.find(product => product.id === id);
            if (addProduct) {
                const quantity = storeCart[id]
                addProduct.quantity = quantity;
                savecart.push(addProduct)
            }
        }

        setCart(savecart)
    }, [products])

    return [cart, setCart]
};

export default Usecart;