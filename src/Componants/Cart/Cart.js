import React from 'react';

const Cart = (props) => {
    const { handelRemoveCart, cart } = props;
    const { name } = cart;
    let command;
    if (cart.length == 0) {
        command = <p>please add at least one product</p>
    }
    else if (cart.length == 1) {
        command = <p>add another one</p>
    }
    else {
        command = <p>Thanks for adding</p>
    }

    return (
        < div >

            {
                cart.map(tshirt =>
                    <h5>Name:{tshirt.name}
                        <button onClick={() => handelRemoveCart(cart)}>
                            X
                        </button>

                    </h5>)
            }
            {command}
            {cart.length !== 4 ? <p>keep adding</p> : <button>Remove All</button>}
        </div >
    );
};

export default Cart;