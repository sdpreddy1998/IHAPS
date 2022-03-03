import './App.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import React , { Component}  from 'react';

function Appliedstudentlearning() {

    return (
        <>
            <div className="main_container" style={{ backgroundColor: "rgb(223,246,221)" }}>
                <div className='course-heading'>
                    Academic Student Learning
                </div>
                <div className='course-container'>
                    <div className='academiccourse-items'>
                        <div className='items'>
                            <div className='input-name-extra-large'>
                                Project Name::
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-extra-large'>
                                Project POC:
                            </div>
                            <div className='input-text'>
                                <textarea id="w3review" name="w3review" rows="4" cols="50">
                                </textarea>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-extra-large'>
                                Type of Program/Project:
                            </div>
                            <div className='input-text'>
                                <textarea id="w3review" name="w3review" rows="4" cols="50">
                                </textarea>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-extra-large'>
                                Contributes to the following impact area(s) (select up to 3):
                            </div>
                            <div className='input-text'>
                                <div class="select">
                                    <select id="standard-select">
                                        <option value="Option 1">Select</option>
                                        <option value="Option 2">Campus Engagement</option>
                                        <option value="Option 3">Public Engagement</option>
                                        <option value="Option 4">Buildings</option>
                                        <option value="Option 5">Air & Climate</option>
                                        <option value="Option 5">Grounds</option>
                                        <option value="Option 5">Food & Dining</option>
                                        <option value="Option 5">Transportation</option>
                                        <option value="Option 5">Purchasing</option>
                                        <option value="Option 5">Waste</option>
                                        <option value="Option 5">Water</option>
                                        <option value="Option 5">Coordination & Planing</option>
                                        <option value="Option 5">Diversit & Finance</option>
                                        <option value="Option 5">Investment& Finance</option>
                                        <option value="Option 5">Welbeing & Work</option>
                                    </select>
                                    <span class="focus"></span>
                                </div>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-extra-large'>
                                Provide a brief description of the projects
                                and how they contribute to understanding
                                or advancing sustainability in relation to the impact area:
                            </div>
                            <div className='input-text'>
                                <textarea id="w3review" name="w3review" rows="4" cols="50">
                                </textarea>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-extra-large'>
                            Project Date(s):
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-extra-large'>
                            URL (if available)
                            </div>
                            <div className='input-text'>
                                <input type="text" style={{ height: 80, width: "250%" }} />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-extra-large'>
                            Upload relevant docs
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
            </div>
        </>
    );
}

export default Appliedstudentlearning;
