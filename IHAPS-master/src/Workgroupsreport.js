import './App.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import React , { Component}  from 'react';
import Appbar from './Appbar';
import Footer from './Footer';
import { AppBar, Typography, Toolbar } from '@mui/material'
import Topappbar from './Topappbar';
import Navigationbar from './Navigationbar';
function Workgroupsreport() {
    return (
        <div className="main_container">
            <Topappbar/>
            <Appbar/>
            <Navigationbar/>
            <div className='sixth_section' >
                <ul  className="main-box" style={{ height: "80px", display: "flex", alignItems: "center" }}>
                    <li style={{ font:'bold', fontSize: 25,fontStyle:'normal', color: "white" }}>Work Groups Report</li>
                </ul>
            </div>
            <div class="sidenav" style={{position:"relative",marginTop:30,marginBottom:30}}>
                <a >Co-ordination & Planning</a>
                <hr class="solid"/>
               <Link to="/Curriculum"> <a  >Curriculum</a></Link>
               <hr class="solid"/>
                <a >Research & Scholarship</a>
                <hr class="solid"/>
                <a >Campus & Community Engagement</a>
                <hr class="solid"/>
                <a  >Diversity, Equity & Wellbeing at Work</a>
                <hr class="solid"/>
                <a  >Purchasing</a>
                <hr class="solid"/>
                <a  >Food & Waste</a>
                <hr class="solid"/>
                <a  >Air & Transportation</a>
                <hr class="solid"/>
                <a  >Energy & Buildings</a>
                <hr class="solid"/>
                <a  >Grounds & Water</a>
            </div>
            <Footer/>
        </div>
    );
}

export default Workgroupsreport;
