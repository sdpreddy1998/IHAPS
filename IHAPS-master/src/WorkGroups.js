import './App.css';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Link } from "react-router-dom";
import React , { Component}  from 'react';
import Appbar from './Appbar';
import Footer from './Footer';
import { AppBar, Typography, Toolbar } from '@mui/material'
import Topappbar from './Topappbar';
import Navigationbar from './Navigationbar';

function WorkGroups() {

  return (
    <>
      <div className="main_container" style={{ backgroundColor: "white" }}>
        <Topappbar/>
        <Appbar/>
        <Navigationbar/>
        <div className='sixth_section' >
                <ul  className="main-box" style={{ height: "80px", display: "flex", alignItems: "center" }}>
                    <li style={{ font:'bold', fontSize: 25,fontStyle:'normal', color: "white" }}>Work Groups</li>
                </ul>
            </div>
            <div class="sidenav" style={{position:"relative",marginTop:30,marginBottom:30}}>
               <Link to="/Curriculum"> <a>Curriculum</a></Link>
               <hr class="solid"/>
               <Link to="/ResearchAndScholorship"> <a>Research and Scholorship</a></Link>
               <hr class="solid"/>
               <Link to="/Communityengagement"> <a>Community Engagement</a></Link>
               <hr class="solid"/>
               <Link to="/FoodAndWaste"> <a>Food and Waste(and Purchasing)</a></Link>
               <hr class="solid"/>
               <Link to="/AirAndTransportation"> <a>Air and Transportation</a></Link>
               <hr class="solid"/>
               <Link to="/OtherWorkGroups"> <a>Other Work Groups</a></Link>
               <hr class="solid"/>
            </div>
        
      
        <Footer/>
      </div>
    </>
  );
}

export default WorkGroups;
