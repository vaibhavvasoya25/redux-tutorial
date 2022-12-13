import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeToCart } from '../Services/Actions/actions';


const Home = (props) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cardItems.cardData);
    const products = useSelector(state => state.cardItems.products);

    // if (!products) {
    //     return null
    // }
    return (
        <>
            <h1>Smart Phones</h1>
            {products.map(product => {
                return (
                    <div key={product.id}>
                        <Link to='/cartpage' className='add-to-cart'>
                            <span className='cart-count'>{cart.length}</span>
                            <img alt='addToCart' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE8pywQQhB8F8227xMfmayneek1yjt-OtoiA&usqp=CAU' />
                        </Link>

                        <div className='cart-wrapper'>
                            <div className='img-wrapper item'>
                                <img src={product.image} alt="" />
                            </div>
                            <div className='text-wrapper item'>
                                <span>
                                    {product.name} Price:
                                </span> <br /><br />
                                <span style={{ color: 'red' }}>
                                    ${product.price}
                                </span>
                            </div>
                            <div className='btn-wrapper item'>
                                <button onClick={() =>
                                    dispatch(addToCart(product))
                                } className='addCart'>Add to cart</button><br />
                                <button onClick={() =>
                                    dispatch(removeToCart(product))
                                } className='removeCart'>Remove to cart</button>

                            </div>

                        </div><br /><br />

                    </div>
                )
            })}
        </>
    )
}

export default Home