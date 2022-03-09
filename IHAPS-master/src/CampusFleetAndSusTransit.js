import './App.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import React , { Component}  from 'react';
import Appbar from './Appbar';
import Footer from './Footer';
import { AppBar, Typography, Toolbar } from '@mui/material'
import Topappbar from './Topappbar';
import Navigationbar from './Navigationbar';

function CampusFleetAndSusTransit() {

    return (
        <>
            <div className="main_container" >
                <Topappbar/>
                <Appbar/>
                <Navigationbar/>
                <div className='second_section' >
                    <ul  className="main-box" style={{ height: "80px", fontFamily:'sans-serif', display: "flex", alignItems: "center" }}>
                        <li style={{ cursor: "none" }}><a > Campus Fleet and Sustainable Transit</a></li>
                    </ul>
                </div>
                <div className='course-container'>
                    <div className='academiccourse-items'>
                        <div className='items'>
                            <div className='input-name'>
                            Reporting Period (Start and end date)
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name'>
                            Total number of vehicles in the institution’s fleet 
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name'>
                            Number of gasoline-only vehicles in the fleet 
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name'>
                            Number of diesel-only vehicles in the fleet
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name'>
                            Number of gasoline-electric, non-plug-in hybrid vehicles in the fleet
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name'>
                            Number of diesel-electric, non-plug-in hybrid vehicles in the fleet
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name'>
                            Number of plug-in hybrid vehicles in the fleet
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name'>
                            Number of 100 percent electric vehicles (including electric assist utility bicycles and tricycles)
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name'>
                            Number of vehicles fueled with Compressed Natural Gas (CNG) in the fleet
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name'>
                            Number of hydrogen fueled vehicles in the fleet
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name'>
                            Number of vehicles fueled with B20 or higher biofuel for more than 4 months of the year
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name'>
                            Number of vehicles fueled with locally produced, low-level biofuel (e.g., B5)
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

export default CampusFleetAndSusTransit;
