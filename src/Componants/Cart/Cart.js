import React from 'react';

const Cart = (props) => {
    const { handelRemoveCart, cart } = props;
    const { name } = cart;
    return (
        <div>

            <h5>Name:{name} <button onClick={() => handelRemoveCart(cart)}>X</button></h5>
        </div>
    );
};

export default Cart;