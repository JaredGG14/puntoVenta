import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet, useParams } from "react-router-dom";
import { Modal, Dropdown, DropdownButton, Form, InputGroup } from "react-bootstrap";


const endpoint = 'http://localhost/puntoVenta/public/api'

const ShowProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = async () => {
        const response = await axios.get(`${endpoint}/products`)
        setProducts(response.data)
    }

    //Delete
    const deleteProduct = async (id) => {
        axios.delete(`${endpoint}/product/${id}`)
        getAllProducts()
        getAllProducts()
    }

    //Foreign keys
    const [providers, setProviders] = useState([])
    useEffect(() => {
        getAllProviders()
    }, [])

    const getAllProviders = async () => {
        const response = await axios.get(`${endpoint}/providers`)
        setProviders(response.data)
    }

    const [categories, setCategories] = useState([])
    useEffect(() => {
        getAllCategories()
    }, [])

    const getAllCategories = async () => {
        const response = await axios.get(`${endpoint}/categories`)
        setCategories(response.data)
    }

    //Modal Menu
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //create
    const [description, setDescription] = useState('')
    const [boughtPrice, setBoughtPrice] = useState(0)
    const [profitPercent, setProfitPercent] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [provider_id, setProvider] = useState(0)
    const [category_id, setCategory] = useState(0)

    const emptyData = () => {
        setDescription('')
        setBoughtPrice(0)
        setProfitPercent(0)
        setQuantity(0)
        setProvider(0)
        setCategory(0)
    }

    const store = async (e) => {
        emptyData();
        e.preventDefault()
        await axios.post(`${endpoint}/product`, { description: description, boughtPrice: boughtPrice, profitPercent: profitPercent, quantity: quantity, provider_id: provider_id, category_id: category_id })
        setShow(false);
        getAllProducts();
    }
    
    return (
        <div class="container-sm">
            <table class="table table-dark table-borderless">
                <thead className="bg-primary text-white">
                    <tr className="align-center">
                        <th>
                            <div class="align-center">
                                <h1>Products</h1>
                            </div>
                        </th>
                        <th>
                            <div class="align-center">
                                <button className='btn btn-outline-warning' onClick={handleShow}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                    </svg>
                                </button>
                            </div>
                        </th>
                    </tr>
                    <tr className="align-top">
                        <th>Description</th>
                        <th>Bought Price</th>
                        <th>Profit Percent</th>
                        <th>Quantity</th>
                        <th>Provider</th>
                        <th>Categories</th>
                        <th>
                            <div className="input-group input-group-sm">
                                <div className="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </div>
                                <input type="text" size className="form-control form-control-sm" placeholder="Search Product..." aria-label="Search Product" aria-describedby="button-addon2" />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td> {product.description} </td>
                            <td> ${product.boughtPrice} </td>
                            <td> {product.profitPercent}% </td>
                            <td> {product.quantity} </td>
                            <td> {product.providers.name}</td>
                            <td> {product.categories.name} </td>
                            <td>
                                <div class="row g-3">
                                    <div class="col-md-3">
                                        <Link to={`puntoVenta/public/products/add_cart/${product.id}`} className='btn btn-outline-success'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div class="col-md-3">
                                        <Link onClick={handleShow} className='btn btn-outline-info'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                            </svg>
                                        </Link>
                                    </div>

                                    <div class="col-md-3">

                                        <Link className='btn btn-outline-danger' onClick={() => deleteProduct(product.id)}  >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                            </svg>
                                        </Link>
                                    </div>

                                </div>
                            </td>

                        </tr>

                    ))}
                </tbody>
            </table>
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title><h3> Create Product </h3></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <form onSubmit={store}>
                                <div className="row g-4">
                                    <div className='col-md-8'>
                                        <label className='form-label'>Description</label>
                                        <input
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            type='text'
                                            className='form-control'
                                        />
                                    </div>
                                    <div className='col-md-4'>
                                        <label className='form-label'>Quantity</label>
                                        <input
                                            value={quantity}
                                            onChange={(e) => setQuantity(e.target.value)}
                                            type='number'
                                            className='form-control'
                                        />
                                    </div>
                                </div>
                                <br />
                                <div className="row g-3">
                                    <div className='col-md-6'>
                                        <label className='form-label'>Bought Price</label>
                                        <input
                                            value={boughtPrice}
                                            onChange={(e) => setBoughtPrice(e.target.value)}
                                            type='number'
                                            className='form-control'
                                        />
                                    </div>
                                    <div className='col-md-6'>
                                        <label className='form-label'>Profit Percent</label>
                                        <input
                                            value={profitPercent}
                                            onChange={(e) => setProfitPercent(e.target.value)}
                                            type='number'
                                            className='form-control'
                                        />
                                    </div>
                                </div>
                                <br />
                                <div className='row g-4'>
                                    <div className='col-md-6'>
                                        <label className='form-label'>Provider</label>
                                        <select class="form-select" id="inputGroupSelect01" onChange={(e) => setProvider(e.target.value)}>
                                            <option selected>Choose a Provider...</option>
                                            {providers.map((provider) => (
                                                <option value={provider.id}>{provider.name}</option>
                                            ))}

                                        </select>
                                    </div>
                                    <div className='col-md-6'>
                                        <label className='form-label'>Category</label>
                                        <select class="form-select" id="inputGroupSelect01" onChange={(e) => setCategory(e.target.value)}>
                                            <option selected>Choose a Category...</option>
                                            {categories.map((category) => (
                                                <option value={category.id}>{category.name}</option>
                                            ))}

                                        </select>
                                    </div>
                                </div>
                                <br />
                                <button type='submit' className='btn btn-primary'>Store</button>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
            <Outlet />
        </div>
    )
}





export default ShowProducts;
