import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let total = 0;
    let shipping = 40;
    for(const product of cart){
        total = total+product.price;
       
    }
    const grandTotal = (total+shipping);
    return (
        <div className="cart">
            <h4>order summary</h4>
            <p>Selected Item: {cart.length}</p>
            <p>Total price: ${total}</p>
            <p>Total shipping: {shipping}</p>
            <p>Tax:</p>
            <p>Grand Total:{grandTotal}</p>
        </div>
    );
};

export default Cart;