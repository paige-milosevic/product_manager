import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ProductUpdate = (props) => {

    const navigate = useNavigate();
    const {id} = useParams();

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [id])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}`, 
        {
            title,
            price,
            description
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate('/home')
            })
            .catch((err) => console.log(err))
    }


    return(

        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title: </label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type='text' />
                </div>
                <div>
                    <label>Price: </label>
                    <input value={price} onChange={(e) => setPrice(e.target.value)} type='text' />
                </div>
                <div>
                    <label>Description: </label>
                    <input value={description} onChange={(e) => setDescription(e.target.value)} type='text' />
                </div>       
                <button type='submit'>Update Product</button>
            </form>
        </div>
    )
}

export default ProductUpdate;