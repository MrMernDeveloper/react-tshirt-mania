import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'


const Home = () => {

    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);



    const handelAddToCart = tshirt => {
        const newCart = [...cart, tshirt];
       
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            alert('Tshirt has already exists')
        }
        else {
            setCart(newCart); 
        }

    }
    const handelRemoveItem = tshirt => {
        // console.log(tshirt)
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaining);

    }

    return (
        <div className='home-container'>
            <div className='product-container'>
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handelAddToCart={handelAddToCart}

                    ></Tshirt>)
                }
                
           </div>
            <div className='cart-container'>

                <Cart
                    cart={cart}
                    handelRemoveItem={handelRemoveItem}
                >  
                    </Cart>
                
           </div>

        </div>
    );
};

export default Home;