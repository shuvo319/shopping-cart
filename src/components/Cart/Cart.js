import React from 'react';

const Cart = (props) => {

    const cart = props.cart;

    const totalPrice = cart.reduce((total, product) => total + product.price, 0)

    let shipping = 0;
    if (totalPrice < 400) {
        shipping = 3.99;
    }
    else if (totalPrice < 700) {
        shipping = 1.99;
    }

    else if (totalPrice > 700) {
        shipping = 0;
    }


    return (
        <div className=''>
            <h1 className='font-bold'>Order Summary</h1>
            <h4>Order Summary: {props.cart.length}</h4>
            <p>Shipping cost: ${shipping}</p>
            <p className='text-red-700 font-bold'>Total: ${totalPrice}</p>
        </div>
    );
};

export default Cart;