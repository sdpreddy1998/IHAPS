import './App.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import React , { Component}  from 'react';
import Appbar from './Appbar';
import Footer from './Footer';
import Topappbar from './Topappbar';
import Navigationbar from './Navigationbar';
function ExecutiveDirector() {
    return (
        <div className="main_container" >
            <Topappbar/>
            <Appbar/>
            <Navigationbar/>
            <div className='second_section' >
                <ul className="main-box" style={{ height: "100px", display: "flex", alignItems: "center" }}>
                    <li style={{ fontSize: 40, color: "white" }}>Executive Director</li>
                </ul>
                
            </div>
            
            <Footer/>
        </div>
    );
}

export default ExecutiveDirector;
