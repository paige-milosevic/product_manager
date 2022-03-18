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

    return(
        <div>
            {
                products.map((product, index) =>( 
                    <div key={index}>
                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                    </div>
                ))
            }
            <h2></h2>
        </div>
    )

}

export default ProductList