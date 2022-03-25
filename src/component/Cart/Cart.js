import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    return (
        <div className='cart-all'>
            <h2>SELECTED ITEMS</h2>

            <div>
                <button className='btn'>CHOOSE 1 FOR ME</button>
                <button className='btn'>RESET</button>
            </div>

        </div>
    );
};

export default Cart;