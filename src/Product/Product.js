import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const{name, img, price, age} = props.product;
    
    
    return (
        <div className='product'>
          <img src={img} alt=""></img>
          <div className='product-info'>
          <p className='product-name'>{name}</p>
          <p>Price: {price}</p>
          <p>Age: {age}</p>
          </div>
          <button onClick ={()=>props.handleClick(props.product)} className='btn'>
            <p> Add to cart</p>
             <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </button>
          
     </div>
    );
};

export default Product; 