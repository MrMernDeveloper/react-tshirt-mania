import React, { useState } from 'react';
import './Tshirt.css'

const Tshirt = ({ tshirt, handelAddToCart }) => {
    const { name, picture, price } = tshirt;
    
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />

            <h1>{name}</h1>
            <h4> Price: ${price}</h4>
            <button onClick={() => handelAddToCart(tshirt)}>Buy This</button>

        </div>
    );
};

export default Tshirt;