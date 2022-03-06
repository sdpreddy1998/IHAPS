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
        <div className='second_section'>
          <ul className='main-box'>
          <Link to="/Curriculum" style={{  textDecoration: "none"}} ><li><a >Curriculum</a></li></Link>
          <Link to="/ResearchandScholorship" style={{  textDecoration: "none"}} ><li><a >Research and Scholorship</a></li></Link>
          <Link to="/Communityengagement" style={{  textDecoration: "none"}} ><li><a >Community Engagement</a></li></Link>
          <Link to="/FoodAndWaste" style={{  textDecoration: "none"}} ><li><a >Food and Waste (and Purchasing)</a></li></Link>
          <Link to="/AirandTransportation" style={{  textDecoration: "none"}} ><li><a >Air and Transportation</a></li></Link>
          <Link to="/OtherWorkGroups" style={{  textDecoration: "none"}} ><li><a >Other Work Groups</a></li></Link>
          </ul>
        </div>
        <div className="back-button">
          <Link to="/">
        <Button variant="contained" startIcon={<KeyboardArrowLeftIcon />} >
        Back
      </Button>
      </Link>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default WorkGroups;
