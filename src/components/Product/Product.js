import React from 'react';

const Product = (props) => {
    const { name, img, seller, stock, price } = props.product;
    return (
        <div className='flex border-b-2 border-indigo-300'>
            <div className='max-w-xs '>
                <img src={img} alt="" />
            </div>
            <div className='text-left space-y-2 px-10'>
                <div className='py-5'>
                <h1 className='text-lg font-bold'>{name}</h1>
                </div>
                
                <div className='py-10'>
                <h1 className='text-md font-bold'>by: {seller}</h1>
                <h1 className='text-md font-bold'>Left {stock} only products available</h1>
                <h1 className='text-md font-bold text-red-700'>${price}</h1>
                </div>
               
            </div>
        </div>

    );
};

export default Product;