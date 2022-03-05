import './App.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import React , { Component}  from 'react';
import Appbar from './Appbar';
import Footer from './Footer';
import { AppBar, Typography, Toolbar } from '@mui/material'

function Workgroupsreport() {
    return (
        <div className="main_container" style={{ backgroundColor: "rgb(223,246,221)" }}>
            <Appbar/>
            <div className='sixth_section' >
                <ul style={{ height: "80px", display: "flex", alignItems: "center" }}>
                    <li style={{ font:'bold', fontSize: 25,fontStyle:'normal', color: "white" }}>WORK GROUPS REPORT</li>
                </ul>
            </div>
            <div class="sidenav">
                <a >Co-ordination & Planning</a>
               <Link to="/Curriculum"> <a  >Curriculum</a></Link>
                <a >Research & Scholarship</a>
                <a >Campus & Community Engagement</a>
                <a  >Diversity, Equity & Wellbeing at Work</a>
                <a  >Purchasing</a>
                <a  >Food & Waste</a>
                <a  >Air & Transportation</a>
                <a  >Energy & Buildings</a>
                <a  >Grounds & Water</a>
            </div>
            <Footer/>
        </div>
    );
}

export default Workgroupsreport;
