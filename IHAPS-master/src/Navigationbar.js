
import { AppBar, Typography, Toolbar } from '@mui/material'
import React from 'react';
import Logo from "./images/IHAPS-LOGO.png"
import { Link } from "react-router-dom";
import Participation from './Participation';
export default function Navigationbar() {
    const handleHome = () => {
        window.location = '/';
    }
    const handleWorkgroupsreport = () => {
        window.location = '#/Workgroupsreport';
    }
    const handleParticipation = () => {
        window.location = '#/Participation';
    }
    const handleAbout = () => {
        window.location = '#/About';
    }
    const handleWorkGroups = () => {
        window.location = '#/WorkGroups';
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
                    <button class="dropbtn" onClick={handleAbout}>About IHAPS
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                    <Link to="/ExecutiveDirector"><a href="">Executive Director</a></Link>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn" onClick={handleWorkGroups}>WorkGroups
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <Link to="/Curriculum"><a href="">Curriculum</a></Link>
                        <Link to="/ResearchandScholorship"><a href="">Research and Scholorship</a></Link>
                        <Link to="/Communityengagement"><a href="">Community Engagement</a></Link>
                        <Link to="/FoodAndWaste"><a href="">Food and Waste</a></Link>
                        <Link to="/AirandTransportation"><a href="">Air and Transportation</a></Link>
                        <Link to="/OtherWorkGroups"><a href="">Other Work Groups</a></Link>

                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn" onClick={handleWorkgroupsreport}>Reports and Data
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <Link to="/Curriculum"><a href="">Curriculum</a></Link>
                        <Link to="/ResearchandScholorship"><a href="">Research and Scholorship</a></Link>
                        <Link to="/Curriculum"><a href="">Curriculum</a></Link>
                        <Link to="/Curriculum"><a href="">Curriculum</a></Link>
                        <Link to="/Curriculum"><a href="">Curriculum</a></Link>
                        <Link to="/Curriculum"><a href="">Curriculum</a></Link>
                        <Link to="/Curriculum"><a href="">Curriculum</a></Link>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn" onClick={handleParticipation}>Login & Sign Up
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <Link to="/Register"><a href="">Sign Up</a></Link>
                        <Link to="/Login"><a href="">Login</a></Link>
                    </div>
                </div>
            </div>
        </>
    )
}