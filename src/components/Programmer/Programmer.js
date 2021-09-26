import React from 'react';
import './Programmer.css';

const Programmer = (props) => {
    const { name, language, category, experience, hire, img } = props.programmer;
    return (
        <div className="col-md-4">
            <div className="ms-3 container border m-2 p-3  h-100">
                <div className="text-center">
                    <img className="rounded-circle img-size" src={img} alt="" />
                </div>
                <h2>Name: {name}</h2>
                <p>Language: {language}</p>
                <p>Category: {category}</p>
                <p>Experience: {experience}</p>
                <h4>Hire amount: ${hire}</h4>
                <button
                    onClick={() => props.handleButton(props.programmer)}
                    className="w-50 rounded pt-1 pb-1 btn-success"
                >Add to cart</button>
            </div>
        </div>
    );
};

export default Programmer;