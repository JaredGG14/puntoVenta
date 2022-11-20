import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api/product/'

const EditProduct = () => {
    const [description, setDescription] = useState('')
    const [boughtPrice, setBoughtPrice] = useState(0)
    const [profitPercent, setProfitPercent] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const navigate = useNavigate(); 
    const {id} = useParams();

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {description: description, boughtPrice: boughtPrice, profitPercent: profitPercent, quantity: quantity})
        navigate('/')
    }

    useEffect( () =>{
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setDescription(response.data.description)
            setBoughtPrice(response.data.boughtPrice)
            setProfitPercent(response.data.profitPercent)
            setQuantity(response.data.quantity)
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }
        getProductById();
    }, [])
    return (
        <div>
        <h3> Edit Product </h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>Description</label>
                <input 
                    value={description}
                    onChange={ (e) => setDescription(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Bought Price</label>
                <input 
                    value={boughtPrice}
                    onChange={ (e) => setBoughtPrice(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Profit Percent</label>
                <input 
                    value={profitPercent}
                    onChange={ (e) => setProfitPercent(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Quantity</label>
                <input 
                    value={quantity}
                    onChange={ (e) => setQuantity(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Update</button>
        </form>
    </div>
    )
}

export default EditProduct
