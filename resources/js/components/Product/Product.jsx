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
        <div b class="container-sm table-responsive">
    
            <table class="table table-dark table-borderless">
                <thead className="bg-primary text-white">
                    
                    <tr className="align-top">
                        <th>Description</th>
                        <th>Bought Price</th>
                        <th>Profit Percent</th>
                        <th>Quantity</th>
                        <th>

                            <div className="input-group mb-3">
                                <div className="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                    </svg>
                                </div>
                                <div className="input-group-text">
                                    <input type="text" size className="form-control form-control-sm" placeholder="Search Product..." aria-label="Search Product" aria-describedby="button-addon2"/>
                                </div>
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
                                <div class="row g-2">
                                    <div class="col-md-3">
                                        <Link to={`puntoVenta/public/products/edit/${product.id}`} className='btn btn-outline-info' >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                            </svg>  Edit
                                        </Link>
                                    </div>
                                    <div class="col-md-5">
                                        <button onClick={ ()=>deleteProduct(product.id)} className='btn btn-outline-danger'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                                </svg> Delete
                                            </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    )
}

export default ShowProducts
