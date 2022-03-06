
import { AppBar, Typography, Toolbar } from '@mui/material'
import React from 'react';
import Logo from "./images/IHAPS-LOGO.png"
import { Link } from "react-router-dom";
export default function Navigationbar() {
   const  handleHome=()=>{
    window.location.reload();
    }
    return (
        <>
            <div class="navbar">
                <div class="dropdown">
                    <button class="dropbtn" onClick={handleHome}>Home
                        <i class="fa fa-caret-down"></i>
                    </button>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Login & Sign Up
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <Link to="/Register"><a href="#">Sign Up</a></Link>
                        <Link to="/Login"><a href="#">Login</a></Link>
                        <Link to="/WorkGroups"><a href="#">Work Groups</a></Link>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Reports and Data
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <Link to="/Curriculum"><a href="#">Curriculum</a></Link>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">About IHAPS
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                    </div>
                </div>
            </div>
        </>
    )
}