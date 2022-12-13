import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeToCart } from '../Services/Actions/actions';

function Cartpage() {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cardItems.cardData);

    return (
        <>
            <h1>Added Items To the Cart</h1>
            <table border='1' align='center'>
                <thead>
                    <tr>
                        <th style={{ "width": "80px" }}>No.</th>
                        <th style={{ "width": "100px" }}>Brand Name</th>
                        <th style={{ "width": "200px" }}>Mobiles</th>
                        <th style={{ "width": "100px" }}>Price</th>
                        <th style={{ "width": "100px" }}>Opeations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((data, i) =>
                            <tr key={i + 1}>
                                <td>{i + 1}</td>
                                <td>{data.name}</td>
                                <td className="img-wrapper item"><img src={data.image} alt='RmCart' /> </td>
                                <td style={{ color: 'red' }}>${data.price}</td>
                                <td><button style={{ "color": "white", "backgroundColor": "rgb(252, 41, 41)", "height": "30px", "width": "70px", "borderRadius": "5px", "box-shadow": "2px 2px 8px 2px rgb(41, 40, 40)", "font-size": "15px" }} onClick={() =>
                                    dispatch(removeToCart(data))
                                }>Delete</button></td>
                            </tr>)
                    }
                </tbody>
            </table>
            <h3 style={{ color: 'red' }}>Total Amount:</h3>
        </>
    )
}

export default Cartpage