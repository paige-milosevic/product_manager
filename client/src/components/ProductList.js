import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {

    const {products, setProducts} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => {
                console.log(res.body);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteProduct = (productIdFromBelow) => {
        axios.delete(`http://localhost:8000/api/product/${productIdFromBelow}`)
            .then(res => {
                console.log(res)
                console.log(res.data)
                setProducts(products.filter(product => product._id !== productIdFromBelow))
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            {
                products.map((product, index) =>( 
                    <div key={index}>
                        <br></br>
                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                        <br></br>
                        <button><Link to={`/product/update/${product._id}`}>Edit</Link></button>
                        <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                    </div>
                ))
            }
            <h2></h2>
        </div>
    )

}

export default ProductList