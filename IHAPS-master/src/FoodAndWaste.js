import './App.css';
import React , { Component}  from 'react';
import {Link} from "react-router-dom";
import Appbar from './Appbar';
import Footer from './Footer';
import { AppBar, Typography, Toolbar } from '@mui/material'
import Topappbar from './Topappbar';
import Navigationbar from './Navigationbar';
function FoodAndWaste() {

    return (
        <>
            <div className="main_container" >
                <Topappbar/>
                <Appbar/>
                <Navigationbar/>
                <div className='second_section' >
                    <ul  className="main-box" style={{ height: "80px", fontFamily:'sans-serif',display: "flex", alignItems: "center" }}>
                        <li style={{ cursor: "none" }}><a >Food And Waste (And Purchasing Forms)</a></li>
                    </ul>
                </div>
                <div className='total-boxes'>
                    <div className="first-boxes">
                      
                        <div className='box'>
                        <Link to="/SusFoodandBeverage"  style={{  textDecoration: "none"}}>
                            <div className='box-text'> Sustainability Food and Beverage Purchasing Inventory</div>
                            </Link>


                        </div>
                    </div>
                </div>
            <Footer/>
            </div>
        </>
    );
}

export default FoodAndWaste;
