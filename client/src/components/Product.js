import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Product = (props) => {    

    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then( res => {
            console.log(res.data)
            setProduct(res.data);
            })
            .catch(err => console.log(err))
        }, [id])


    return(
        <div>
            <div>
                <Link to={'/home'}>Home</Link>
            </div>
            <p>Product Name: {product.title}</p>
            <p>Product Price: {product.price}</p>
            <p>Product Description: {product.description}</p>
        </div>
    )
}

export default Product;