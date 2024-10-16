import React from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='sticky top-0'>
            <div className="bg-black flex justify-center items-center py-3">
                <a href="/"><img src={logo} alt="" /></a>
            </div>

            <div>
                <nav className='bg-slate-600 text-white flex justify-center space-x-6 py-4'>
                    <a className=" hover:text-green-300" href="/shop">Shop</a>
                    <a className=" hover:text-green-300" href="/review">Order Review</a>
                    <a className=" hover:text-green-300" href="/inventory">Manage Inventory</a>
                </nav>
            </div>

        </div>

    );
};

export default Header;