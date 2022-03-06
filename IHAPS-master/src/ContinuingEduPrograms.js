import './App.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import React , { Component}  from 'react';
import Appbar from './Appbar';
import Footer from './Footer';
import { AppBar, Typography, Toolbar } from '@mui/material'


function ContinuingEduPrograms() {

    return (
        <>
            <div className="main_container" >
                <Appbar/>
                <div className='course-heading'>
                    Continuing Education Programs
                </div>
                <div className='course-container'>
                    <div className='academiccourse-items'>
                        <div className='items'>
                            <div className='input-name-large'>
                                Reporting Date (Academic Year)
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                            Name of the sustainability-focused certificate program
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                                Brief  Course Description
                            </div>
                            <div className='input-text'>
                                <input type="text" style={{ height: 80, width: "250%" }} />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                                Program POC (Name,Position, Email)
                            </div>
                            <div className='input-text'>
                                <input type="text" style={{ height: 80, width: "250%" }} />
                            </div>
                        </div>
                        
                        <div className='items'>
                            <div className='input-name-large'>
                            Semester Program Started
                            </div>
                            <div className='input-text'>
                                <div class="select">
                                    <select id="standard-select">
                                        <option value="Option 1">--SELECT--</option>
                                        <option value="Option 2">Spring</option>
                                        <option value="Option 3">Summer</option>
                                        <option value="Option 3">Fall</option>
                                    </select>
                                    <span class="focus"></span>
                                </div>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                            Year Program Started
                            </div>
                            <div className='input-text'>
                                <div class="select">
                                    <select id="standard-select">
                                        <option value="Option 1">--SELECT--</option>
                                        <option value="Option 2">2022</option>
                                        <option value="Option 3">2023</option>
                                        <option value="Option 3">2024</option>
                                    </select>
                                    <span class="focus"></span>
                                </div>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                            Program Active or Inactive
                            </div>
                            <div className='input-text'>
                                <div class="select">
                                    <select id="standard-select">
                                        <option value="Option 1">--SELECT--</option>
                                        <option value="Option 2">Active</option>
                                        <option value="Option 3">Inactive</option>
                                    </select>
                                    <span class="focus"></span>
                                </div>
                            </div>
                        </div>
                    
                        <div className='submit-button'>
                            <Link to="/" style={{  textDecoration: "none"}}>
                                <Button variant="contained" style={{ height: 50, width: "200%" }}>
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


export default ContinuingEduPrograms;
