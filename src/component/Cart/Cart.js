import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let allProduct = []
    for (const product of cart) {
        // allProduct = allProduct.push + product.name + ' '
        allProduct.push(product.name)
    }

    return (
        <div className='cart-all'>
            <h2>SELECTED ITEMS</h2>

            <div>

                <h4>Name : {cart.length}</h4>
                <ul>
                    {
                        // allProduct.foreach((p) => <li>p</li>)
                        allProduct
                    }
                </ul>
                <button className='btn'>CHOOSE 1 FOR ME</button>
                <button className='btn'>RESET</button>
            </div>

        </div>
    );
};

export default Cart;