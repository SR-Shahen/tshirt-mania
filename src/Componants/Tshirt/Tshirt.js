import React from 'react';
import './Tshirt.css'
const Tshirt = (props) => {
    const { handelAddToCart, tshirt } = props;
    const { name, price, picture } = tshirt;
    return (
        <div className='show-tshirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price:{price}</p>
            <button onClick={() => handelAddToCart(tshirt)}>Cart</button>
        </div>
    );
};

export default Tshirt;