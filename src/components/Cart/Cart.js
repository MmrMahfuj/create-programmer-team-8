import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUserCheck } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    console.log(props.cart);
    const { cart } = props;

    const totalAmount = cart.reduce((previous, current) => previous + current.hire, 0)




    return (
        <div className="m-3 p-2 border rounded cart-color">
            <h3 className="fw-bold"><FontAwesomeIcon icon={faUserCheck} /> Programmers Added: {cart.length}</h3>
            <h4 className="ms-5 fw-bold">Total Payment: ${totalAmount}</h4>
            <ul>
                {
                    cart.map(programmer => <li key={programmer.id}>{programmer.name}</li>)
                }
            </ul>
            <div className="text-center">
                <button className="w-50 rounded pt-1 pb-1 btn-success"><FontAwesomeIcon icon={faShoppingCart} /> HIRE NOW</button>
            </div>
        </div>
    );
};

export default Cart;