import React from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div>
            <div className="bg-black flex justify-center items-center py-3">
                <img src={logo} alt="" />
            </div>

            <div>
                <nav className='bg-slate-600 text-white flex justify-center space-x-6 py-4'>
                    <a className=" hover:text-green-300" href="/shop">Shop</a>
                    <a className=" hover:text-green-300"href="/review">Order Review</a>
                    <a className=" hover:text-green-300"href="/manage">Manage Inventory</a>
                </nav>
            </div>

        </div>
       
    );
};

export default Header;