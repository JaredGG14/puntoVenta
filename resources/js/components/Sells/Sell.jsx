import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";



const endpoint = 'http://localhost/puntoVenta/public/api'

const ShowSells = () => {
    const [sells, setSells] = useState([])
    useEffect(() => {
        getAllSells()
    }, [])

    const [sellId, setSellId] = useState([])
    useEffect(() => {
        getSellId()
    }, [])

    const getAllSells = async () => {
        const response = await axios.get(`${endpoint}/sells`)
        setSells(response.data)
    }
    const getSellId = async (id) => {
        const response = await axios.get(`${endpoint}/sell/${id}`)
        setSellId(response.data)
    }
    const deleteSell = async (id) => {
        axios.delete(`${endpoint}/sell/${id}`)
        getAllSells()
    }

    const [dialog, setDialog] = useState({
        message: "",
        handle: false,
        nameSell: ""
    });

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleDelete = (id, name) => {
        const handleShow = () => setShow(true);
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => deleteProvider(id)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    }


    return (
        <div class="container-sm">
            <table class="table table-dark table-borderless">
                <thead className="bg-primary text-white">
                <tr className="align-center">
                        <th>
                            <div class="align-center">
                                <h1>Sells</h1>
                            </div>
                        </th>
                        <th>
                            <div class="align-center">
                                <Link to={`puntoVenta/public/products/create`} className='btn btn-outline-warning'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                    </svg>
                                </Link>
                            </div>
                        </th>
                    </tr>
                    <tr className="align-top">
                        <th>Total</th>
                        <th>User</th>
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
                
                    {sells.map((sell) => (
                        <tr key={sell.id}>
                            <td> $ {sell.total} </td>
                            <td> {sell.users.name} </td>
                            <td>
                                <div class="row g-3">
                                    <div class="col-md-3">
                                        <Link to={`puntoVenta/public/sell/edit/${sell.id}`} className='btn btn-outline-info'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                            </svg>
                                        </Link>
                                    </div>
    
                                    <div class="col-md-3">
    
                                        <button className='btn btn-outline-danger' onClick={() => handleDelete(sell.id, sell.name)}  >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                            </svg>
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





export default ShowSells;