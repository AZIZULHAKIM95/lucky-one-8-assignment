import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { id, name, price, img } = props.Product
    return (
        <div className='all-product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <h2 className='pp'>Name: {name}</h2>
                <h3>Price: ${price}</h3>
                <h4>Id: {id}</h4>
            </div>
            <button onClick={() => props.handelAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;