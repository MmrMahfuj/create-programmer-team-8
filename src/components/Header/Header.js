import React from 'react';

const Header = () => {
    return (
        <div className="container text-center bg-light rounded mb-5 p-2">
            <h1 className="fw-bold lh-lg">Create a <span className="text-success">programmer</span> team.</h1>
            <p>The computer programmer is a creator of universes for which he alone is the lawgiver.</p>
            <h3 className="fw-bold">Total Budget: <span className="fw-bold text-success">150 Million</span></h3>
        </div>
    );
};

export default Header;