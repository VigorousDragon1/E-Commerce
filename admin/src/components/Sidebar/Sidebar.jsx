import React from 'react';
// import Sidebar from '../../components/Sidebar/Sidebar';
import './sidebar.css'
import { Link } from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.svg';
import list_product_icon from '../../assets/Product_list_icon.svg'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Link to={'/addproduct'} style={{ textDecoration: "none" }}>
                <div className='sidebar-item'>
                    <img src={add_product_icon} alt="" />
                    <p>AddProduct</p>
                </div>
            </Link>

            <Link to={'/listproduct'} style={{ textDecoration: "none" }}>
                <div className='sidebar-item'>
                    <img src={list_product_icon} alt="" />
                    <p>Product List</p>
                </div>
            </Link>
        </div>
    );
};

export default Sidebar;
