import './App.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import React , { Component}  from 'react';
import Appbar from './Appbar';
import Footer from './Footer';
import { AppBar, Typography, Toolbar } from '@mui/material'

function SusFoodandBeverage() {

    return (
        <>
            <div className="main_container" >
                <Appbar/>
                <div className='course-heading'>
                Sustainable Food and Beverage Purchasing Inventory
                </div>
                <div className='course-container'>
                    <div className='academiccourse-items'>
                        <div className='items'>
                            <div className='input-name'>
                            Product name, label, or brand
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='submit-button'>
                        <Link to="/" style={{  textDecoration: "none"}}>
                            <Button variant="contained" style={{height:50,width:"200%"}}>
                                Submit
                            </Button>
                        </Link>
                        </div>
                    </div>
                    <div className='visibility'>
                        dsadlf;ka
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default SusFoodandBeverage;