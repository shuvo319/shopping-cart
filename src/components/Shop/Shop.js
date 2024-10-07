import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const productsItems = fakeData.slice(0, 30);
    const [products, setProducts] = useState(productsItems);

    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        console.log('added', product);
        const newCart = [...cart, product];
        setCart(newCart);
        console.log(cart.length)
    }
    return (
        <div className='flex'>
            <div className='w-3/4 border-x-2'>
                {
                    products.map(product => <Product product={product} handleAddProduct={handleAddProduct}></Product>)
                }
            </div>

            <div className='w-1/4 fixed top-30 right-10' >
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;