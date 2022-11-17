import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const endpoint = 'http://localhost:8000/puntoVenta/public'

const ShowCart = () => {
    const [carts, setCarts] = useState([])
    useEffect ( ()=> {
        getAllCarts()
    }, [])
    const getAllCarts = async () => {
        const response = await axios.get(`${endpoint}/carts`)
        setCarts(response.data)
    } 

    const deleteCarts = async (id) => {
        axios.delete(`${endpoint}/cart/${id}`)
        getAllProducts()
    }    

    return (
        <div>
            <div className="d-grip gap-2">
                <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
            </div>
            <table className='table table-striped'>
                <thead className="bg-primary text-white">
                    <tr>
                        <th>Description</th>
                        <th>Bought Price</th>
                        <th>Profit Percent</th>
                        <th>Quantity</th>
                        <th>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { carts.map( (cart) => (
                        <tr key={cart.user_id}>
                            <td> {cart.description} </td>
                            <td> {cart.boughtPrice} </td>
                            <td> {cart.profitPercent} </td>
                            <td> {cart.quantity} </td>
                            <td>
                                <button onClick={ ()=>deleteProduct(cart.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowCart;