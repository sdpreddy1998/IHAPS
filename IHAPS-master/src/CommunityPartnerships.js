import './App.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import React , { Component}  from 'react';
import Appbar from './Appbar';
import Footer from './Footer';
import { AppBar, Typography, Toolbar } from '@mui/material'


function CommunityPartnerships() {

    return (
        <>
            <div className="main_container" >
                <Appbar/>
                <div className='course-heading'>
                    Community Partnerships
                </div>
                <div className='course-container'>
                    <div className='academiccourse-items'>
                        <div className='items'>
                            <div className='input-name-large'>
                                Reporting Date(Academic Year)
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                            Name of the institution’s formal community partnership to advance sustainability
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                            A brief description of the institution’s formal community partnership to advance sustainability
                            </div>
                            <div className='input-text'>
                                <input type="text" style={{ height: 80, width: "250%" }} />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                            Does the institution provide financial or material support for the partnership?
                            </div>
                            <div className='input-text'>
                                <input type="radio" id="html" name="fav_language" value="HTML" />
                                <label for="html">Yes</label>
                                <input type="radio" id="css" name="fav_language" value="CSS" />
                                <label for="css">No</label>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                            Which of the following best describes the partnership timeframe?
                            </div>
                            <div className='input-text'>
                                <div class="select">
                                    <select id="standard-select">
                                        <option value="Option 1">--SELECT--</option>
                                        <option value="Option 2">Short-term project/event</option>
                                        <option value="Option 3">Multi-year/ongoing</option>
                                    </select>
                                    <span class="focus"></span>
                                </div>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                            Which of the following best describes the partnership?
                            </div>
                            <div className='input-text'>
                                <div class="select">
                                    <select id="standard-select">
                                        <option value="Option 1">--SELECT--</option>
                                        <option value="Option 2">Sustainability-Focused</option>
                                        <option value="Option 3">Sustainability-Related</option>
                                    </select>
                                    <span class="focus"></span>
                                </div>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                            Are underrepresented groups and/or vulnerable populations engaged as equal partners (in strategic planning, decision-making, implementation, and review)?
                            </div>
                            <div className='input-text'>
                                <input type="radio" id="html" name="fav_language" value="HTML" />
                                <label for="html">Yes</label>
                                <input type="radio" id="css" name="fav_language" value="CSS" />
                                <label for="css">No</label>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                            POC for Partnership (Name, Position, Email)
                            </div>
                            <div className='input-text'>
                                <input type="text" style={{ height: 80, width: "250%" }} />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                            Website URL (If available)
                            </div>
                            <div className='input-text'>
                                <input type="text" style={{ height: 50, width: "250%" }} />
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


export default CommunityPartnerships;
