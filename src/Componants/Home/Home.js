import React, { useState } from 'react';
import useTshirts from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const [tshirts, setTshirts] = useTshirts();
    const [carts, setCarts] = useState([])

    const handelAddToCart = selectItem => {
        const exsist = carts.find(tshirt => tshirt._id == selectItem._id)
        if (!exsist) {
            const newCart = [...carts, selectItem]
            setCarts(newCart);
        }
        else {
            alert("this item already exist")
        }

    }
    const handelRemoveCart = selectItem => {
        const shirt = carts.filter(Tshirt => Tshirt._id !== selectItem._id)
        setCarts(shirt);
    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handelAddToCart={handelAddToCart}
                    ></Tshirt>)
                }


            </div>

            <div className="cart-container">
                <h3>This is order cart</h3>
                {
                    carts.map(cart => <Cart
                        key={cart._id}
                        cart={cart}
                        handelRemoveCart={handelRemoveCart}></Cart>)
                }
            </div>
        </div>
    );
};

export default Home;