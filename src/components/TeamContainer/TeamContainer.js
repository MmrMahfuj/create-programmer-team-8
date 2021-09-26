import React, { useEffect, useState } from 'react';

import Cart from '../Cart/Cart';
import Programmer from '../Programmer/Programmer';

const TeamContainer = () => {
    const [programmers, setProgrammers] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./programmer.JSON')
            .then(res => res.json())
            .then(data => setProgrammers(data))
    }, [])
    //  handle button 
    const handleButton = (programmer) => {
        const newCart = [...cart, programmer]
        setCart(newCart);
    }
    return (
        <div className="container-fluid bg-light">
            <div className="row">
                <div className="col-md-8">
                    <div className="row g-4">
                        {
                            programmers.map(programmer => <Programmer
                                handleButton={handleButton}
                                key={programmer.id}
                                programmer={programmer}></Programmer>)
                        }
                    </div>
                </div>
                <div className="col-md-4">
                    <Cart cart={cart}></Cart>
                </div>
            </div>

        </div>
    );
};

export default TeamContainer;