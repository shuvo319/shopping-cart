import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/products.json';
import Product from '../Product/Product';


const ProductDetails = (props) => {
    const {productId} = useParams();
    const product = fakeData.find(product => product.id === productId);
    console.log(product)
    return (
        <>
           <h1>Product ID: {productId}</h1>
           <Product showAddToCart={false} product={product}></Product>
        </>
    );
};

export default ProductDetails;