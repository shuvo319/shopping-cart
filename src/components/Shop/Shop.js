import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json'
import Product from '../Product/Product';

const Shop = () => {
    const productsItems = fakeData.slice(0,10)
    const [products, setproducts] = useState(productsItems)
    return (
        <div className='flex'>
             <div className='w-3/4 border-x-2'>
                {
                    products.map(product => <Product product={product}>{product.name}</Product>)
                }
            </div>

            <div className='w-1/4'>
                <h1>Cart Summary</h1>
            </div>
        </div>
    );
};

export default Shop;