import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Fruit from '../Fruit/Fruit';
import { TiTick } from 'react-icons/ti'
import { ImCross } from 'react-icons/im'
import './Fruits.css'

const Fruits = () => {
    const [fruitsJuice, setFruitsJuice] = useState([]);
    const [cart, setCart] = useState([]);

    useState(() => {
        fetch('fruits.json')
            .then(res => res.json())
            .then(data => setFruitsJuice(data))
    }, []);

    // cart selected handle
    const handleAddToCat = (fruit) => {
        const newCart = [...cart, fruit];
        if (newCart.length === 5) {
            // alert("maximum juice items added")
            //add componentDidMount
            document.getElementById('error').style.display = 'block'

        }
        else {
            setCart(newCart)
        }
    }

    // choose handle
    const handleChooseItem = () => {
        console.log('choose')
    }

    // error message closed
    function closedHandle() {
        document.getElementById('error').style.display = 'none'
    }
    return (
        <div>
            <div id="error">Your Maximum choose juicy over. <ImCross id='close' onClick={closedHandle} /></div>
            <div className='main-container'>

                <div className="fruits-container">
                    {
                        fruitsJuice.map(fruit => <Fruit
                            key={fruit.id}
                            fruitData={fruit}
                            handleAddToCat={handleAddToCat}
                        ></Fruit>)
                    }
                </div>
                <div className='cart-container'>
                    <h5>Your Selected Juice Items</h5> <br />
                    {
                        cart.map(juiceItem => <Cart
                            key={juiceItem.id}
                            item={juiceItem}
                        ></Cart>)
                    }

                    <div className='selected-btn-section'>
                        <button onClick={handleChooseItem} className='choose-for-me'>
                            <p>Choose 1 For Me </p>
                        </button>
                        <br />
                        <button className='again-choose'>
                            <p>Choose Again <TiTick /></p>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Fruits;