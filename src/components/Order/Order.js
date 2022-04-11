import React from 'react';
import Usecart from '../../Hook/Usecart';
import Usepeoduct from '../../Hook/Usepeoduct';

const Order = () => {
    const [product, setProduct] = Usepeoduct();
    const [cart, setCart] = Usecart();

    return (
        <div>
            <h1>Order here {product.length}</h1>
        </div>
    );
};

export default Order;