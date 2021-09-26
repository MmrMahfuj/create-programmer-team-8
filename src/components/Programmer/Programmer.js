import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Programmer.css';

const Programmer = (props) => {
    const { name, language, category, experience, hire, img } = props.programmer;
    return (
        <div className="col-md-4">
            <div className="ms-3 container cart-color rounded border m-2 p-3  h-100">
                <div className="text-center mb-4">
                    <img className="rounded-circle img-size" src={img} alt="" />
                </div>
                <h5 className="fw-bolder name-height">Name: {name}</h5>
                <p>Language: {language}</p>
                <p>Category: {category}</p>
                <p>Experience: {experience}</p>
                <h4>Payment: ${hire}</h4>
                <button
                    onClick={() => props.handleButton(props.programmer)}
                    className="w-50 rounded pt-1 pb-1 btn-success"
                > <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Programmer;