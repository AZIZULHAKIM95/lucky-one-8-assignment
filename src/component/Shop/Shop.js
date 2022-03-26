import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [carts, setCarts] = useState([])
    const cartName = carts.map((cart) => cart.name)
    const [singph, setSingph] = useState()

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const addToCart = (Product) => {

        const newCart = [...carts, Product]
        setCarts(newCart)

    }

    const randoma = (data) => {
        const randoma = data[Math.floor(Math.random() * data.length)];
        setSingph(randoma);
        setCarts([])
    }

    const removeCart = () => {
        setCarts([]);
        setSingph([])
    }

    return (
        <div>
            <div className='all-shop-container'>
                <div className='product-container'>
                    {
                        products.map((product) => (<Product product={product} key={product.id} addToCart={addToCart}></Product>)
                        )}

                </div>

                <div className='cart-container'>
                    {carts.map((carts) => (
                        <Cart cart={carts}></Cart>
                    ))}
                    <h3>{singph}</h3>
                    <button onClick={() => randoma(cartName)}>Random</button><br />
                    <button onClick={removeCart}>All Remove</button>
                </div>
            </div>
        </div>

    );
};


export default Shop;