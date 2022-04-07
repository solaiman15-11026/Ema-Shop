import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h4 className='tu'>Order Summary</h4>
            <p>Selet items: {props.cart.length}</p>
        </div>
    );
};

export default Cart;