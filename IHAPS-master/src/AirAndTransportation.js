import './App.css';
import React , { Component}  from 'react';
import {Link} from "react-router-dom";
import Appbar from './Appbar';
import Footer from './Footer';
import { AppBar, Typography, Toolbar } from '@mui/material'

function AirandTransportation() {

    return (
        <>
            <div className="main_container" style={{ backgroundColor: "rgb(223,246,221)" }}>
                <Appbar/>
                <div className='second_section' >
                    <ul style={{ height: "100px", display: "flex", alignItems: "center" }}>
                        <li style={{ cursor: "none" }}><a > AIR AND TRANSPORTATION FORMS</a></li>
                    </ul>
                </div>
                <div className='total-boxes'>
                    <div className="first-boxes">
                      
                        <div className='box'>
                        <Link to="/CampusFleetAndSusTransit"  style={{  textDecoration: "none"}}>
                            <div className='box-text'> Campus Fleet and Sustainable Transit</div>
                            </Link>


                        </div>
                    </div>
                </div>
                <Footer/>

            </div>
        </>
    );
}

export default AirandTransportation;