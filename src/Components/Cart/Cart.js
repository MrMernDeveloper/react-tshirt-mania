import React from 'react';
import './cart.css'

const Cart = ({ cart, handelRemoveItem }) => {

    let message;
    if (cart.length === 0) {
        message = <p>Plese Buy at least one item !!</p>
    }
    else if (cart.length === 1) {
        message = <div>
            <h3>Amar jonno Ekta nau</h3>
            <p>Tmr nijer jonno ekta</p>
            <p><small>Amar jonno arekta nao please.!!</small></p>
        </div>
    }
    else {
        message = <p>Thanks for buying !</p>
    }
    return (
        <div>
            <h1 className={cart.length === 2 ? 'orange' : 'purple'}>Order Summary</h1>
            <h5 className={`bold ${cart.length ===2 ? 'green' :'yellow'}`}>Order Quantity: {cart.length} </h5>
            {
                cart.map(tshirt => <p key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={()=>{handelRemoveItem(tshirt)}}>X</button>
                </p>)
            }
            {
                message
            }
            {
                cart.length === 3 ? <p>Tin jon ke gift diba?</p> : <p>kino kino</p>
            }
            <p>and operator</p>
            {cart.length === 2 && <h2>Double Item</h2>}
            <p>OR Operator</p>
            {
                cart.length === 4 || <p>4 ta item na</p>
            }
        </div>
    );
};

export default Cart;

/* 
conditional Rendering
1. use element in a variable and then use if-else to set value
2. ternary operation condition ? true : false
3. && operator (if condition is true, I want to display something))
4. || operator (if condition is false, I want to display something)


*/