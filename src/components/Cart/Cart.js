import React from 'react';

const Cart = (props) => {
    console.log(props.cart);
    const { cart } = props;
    console.log(cart);

    const totalAmount = cart.reduce((previous, current) => previous + current.hire, 0)




    return (
        <div className="ms-3 p-2 border rounded">
            <h2>Programmers Added: {cart.length}</h2>
            <h3>Total Cost: ${totalAmount}</h3>
            <ul>
                {
                    cart.map(programmer => <li key={programmer.id}>{programmer.name}</li>)
                }
            </ul>
            <div className="text-center">
                <button className="w-50 rounded pt-1 pb-1 btn-success">HIRE NOW</button>
            </div>
        </div>
    );
};

export default Cart;