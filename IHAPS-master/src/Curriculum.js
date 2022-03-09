import './App.css';
import React , { Component}  from 'react';
import {Link} from "react-router-dom";
import Appbar from './Appbar';
import Footer from './Footer';
import { AppBar, Typography, Toolbar } from '@mui/material'
import Topappbar from './Topappbar';
import Navigationbar from './Navigationbar';
function Curriculum() {

    return (
        <>
            <div className="main_container" style={{ backgroundColor: "white" }}>
                <Topappbar/>
                <Appbar/>
                <Navigationbar/>
                <div className='second_section' >
                    <ul  className="main-box" style={{ height: "80px",fontFamily:'sans-serif',display: "flex", alignItems: "center" }}>
                        <li style={{ cursor: "none" }}><a >CURRICULUM FORMS</a></li>
                    </ul>
                </div>
                <div className='total-boxes'>
                    <div className='two-boxes'>
                        
                        <div className='box' >
                        <Link to="/Academiccourse"  style={{  textDecoration: "none"}}>
                            <div className='box-text' > Academic Courses</div>
                            </Link>
                        </div>
                      
                      
                        <div className='box'>
                        <Link to="/Appliedstudentlearning "  style={{  textDecoration: "none"}}>
                            <div className='box-text'> Appiled Student Learning</div>
                            </Link>
                        </div>
                       
                    </div>
                    <div className="first-boxes">
                      
                        <div className='box'>
                        <Link to="/Academicprograms"  style={{  textDecoration: "none"}}>
                            <div className='box-text'> Academic Programs</div>
                            </Link>


                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default Curriculum;
