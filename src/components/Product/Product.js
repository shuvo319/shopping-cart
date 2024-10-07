import React from 'react';

const Product = (props) => {
    console.log(props)
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

                <div>
                    <button onClick={() => props.handleAddProduct(props.product)} className='flex text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2'>
                        <svg className="w-[20px] h-[20px] text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                        </svg>
                        Add To Cart</button>
                </div>

            </div>
        </div>

    );
};

export default Product;