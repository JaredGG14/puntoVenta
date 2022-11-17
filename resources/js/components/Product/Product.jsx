import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const endpoint = 'http://localhost/puntoVenta/public/api'

const ShowProducts = () => {
    const [products, setProducts] = useState([])
    useEffect ( ()=> {
        getAllProducts()
    }, [])
    const getAllProducts = async () => {
        const response = await axios.get(`${endpoint}/products`)
        setProducts(response.data)
    } 
    const deleteProduct = async (id) => {
        axios.delete(`${endpoint}/product/${id}`)
        getAllProducts()
    }    

    return (
        <div>
            <table className='table table-striped'>
                <thead className="bg-primary text-white">
                    <tr>
                        <th>Description</th>
                        <th>Bought Price</th>
                        <th>Profit Percent</th>
                        <th>Quantity</th>
                        <th>
                            <div className="input-group mb-3">
                                <input type="text" size className="form-control form-control-sm" placeholder="Search Product..." aria-label="Search Product" aria-describedby="button-addon2"/>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { products.map( (product) => (
                        <tr key={product.id}>
                            <td> {product.description} </td>
                            <td> ${product.boughtPrice} </td>
                            <td> {product.profitPercent}% </td>
                            <td> {product.quantity} </td>
                            <td>
                                <Link to={`puntoVenta/public/products/edit/${product.id}`} className='btn btn-warning'>Edit</Link>
                                <button onClick={ ()=>deleteProduct(product.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="d-grip gap-2">
                <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
            </div>
        </div>
    )
}

export default ShowProducts
