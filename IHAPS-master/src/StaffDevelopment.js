import './App.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import React , { Component}  from 'react';
import Appbar from './Appbar';
import Footer from './Footer';
import { AppBar, Typography, Toolbar } from '@mui/material'
import Topappbar from './Topappbar';
import Navigationbar from './Navigationbar';

function StaffDevelopment() {

    return (
        <>
            <div className="main_container" style={{ backgroundColor:"skyblue"}}>
                <Topappbar/>
                <Appbar/>
                <Navigationbar/>
                <div className='second_section' >
                    <ul  className="main-box" style={{ height: "80px", fontFamily:'sans-serif', display: "flex", alignItems: "center" }}>
                        <li style={{ cursor: "none" }}><a > Staff Professional Development</a></li>
                    </ul>
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
                            Name of Sustainbaility Professional Development or Training Opportunity
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                            Brief Description of Training
                            </div>
                            <div className='input-text'>
                                <input type="text" style={{ height: 80, width: "250%" }} />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                            Date(s) Offered
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                            Number of Staff Participants (Enter Number)
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        
    
                        <div className='items'>
                            <div className='input-name-large'>
                            Internally-Offered  or Externally-Supported (e.g., through payment, reimbursement, or subsidy)
                            </div>
                            <div className='input-text'>
                                <div class="select">
                                    <select id="standard-select">
                                        <option value="Option 1">--SELECT--</option>
                                        <option value="Option 2">Payment</option>
                                        <option value="Option 3">Reimbursement</option>
                                        <option value="Option 4">Subsidy</option>
                                    </select>
                                    <span class="focus"></span>
                                </div>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                                POC for Training Program
                            </div>
                            <div className='input-text'>
                                <input type="text" style={{ height: 50, width: "150%" }} />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                                Program URL (If available)
                            </div>
                            <div className='input-text'>
                                <input type="text" style={{ height: 50, width: "150%" }} />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-extra-large'>
                            Supporting Documents (Optional)
                            </div>
                            <div className='input-text'>
                            <input type="button" value="Upload" style={{width:100,height:30}}/>
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


export default StaffDevelopment;
