import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    console.log(cart)

    return (
        <div >
            <div className='cart-all'>
                <h4>{cart.name}</h4>

            </div>

        </div>
    );
};

export default Cart;