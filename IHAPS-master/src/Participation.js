import './App.css';
import Homeimage from "./images/homepageimage.png";
import Button from '@mui/material/Button';
import React, { Component }  from 'react';
import { Link } from "react-router-dom";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Appbar from './Appbar';
import Footer from './Footer';
import { AppBar, Typography, Toolbar } from '@mui/material'

function Participation() {

    return (
        <div className="main_container" style={{ backgroundColor: "white" }}>
            <Appbar/>
            <div className='second_section'>
                <ul className='participation-bar'>
                    <li>
                        <Link to="/">
                            <Button variant="contained" startIcon={<KeyboardArrowLeftIcon />}>
                                Home
                            </Button>
                        </Link>
                    </li>
                    <li className='welcome-text'>WELCOME TO IHAPS</li>
                    <li className='visibility'>dskfasdkf</li>
                </ul>
            </div>
            <div className='participation-contents'>
                <div>
                    <table>
                        <tr>
                            <th>Login/SignUp</th>
                        </tr>
                        <tr>
                            <Link to="/Register">
                                <td>Sign Up</td>
                            </Link>
                        </tr>
                        <tr>
                            <Link to="/Login">
                                <td>Login</td>
                            </Link>
                        </tr>

                    </table>
                </div>
                <div className='participation-text'>
                    Participation in IHAPS  involves collecting information about our institution’s sustainability initiatives and performance, documenting that information in standard format, and submitting a report to AASHE to earn public recognition.
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Participation;
