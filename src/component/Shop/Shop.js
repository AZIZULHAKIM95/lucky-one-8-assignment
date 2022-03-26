import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoreCart } from '../../utilities/fakedb'
import './Shop.css'

const Shop = () => {

    const [Products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getStoreCart();
        for (const id in storedCart) {
            const addedProduct = Products.find(product => product.id === id)
        }


    }, [])


    const handelAddToCart = (Product) => {
        console.log(Product)

        const newCart = [...cart, Product]
        setCart(newCart)
        addToDb(Product.id)

    }

    return (
        <div className='all-shop-container'>
            <div className='product-container'>
                {
                    Products.map(product => <Product Product={product} key={product.id} handelAddToCart={handelAddToCart}></Product>)
                }

            </div>

            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;