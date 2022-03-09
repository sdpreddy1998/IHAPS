import './App.css';
import {Link} from "react-router-dom";
import React , { Component}  from 'react';
import Appbar from './Appbar';
import Footer from './Footer';
import { AppBar, Typography, Toolbar } from '@mui/material'
import Topappbar from './Topappbar';
import Navigationbar from './Navigationbar';

function ResearchandScholorship() {

    return (
        <>
            <div className="main_container" >
                <Topappbar/>
                <Appbar/>
                <Navigationbar/>
                <div className='second_section' >
                    <ul  className="main-box" style={{ height: "80px", fontFamily:'sans-serif',display: "flex", alignItems: "center" }}>
                        <li style={{ cursor: "none" }}><a >Research And Scholorship Forms</a></li>
                    </ul>
                </div>
                <div className='total-boxes'>
                    <div className="first-boxes">
                      
                        <div className='box'>
                        <Link to="/FacultySusResearchService"  style={{  textDecoration: "none"}}>
                            <div className='box-text'> Faculty Sustainability Research  and Service</div>
                            </Link>


                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default ResearchandScholorship;
