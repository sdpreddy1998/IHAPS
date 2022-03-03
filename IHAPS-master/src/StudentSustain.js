import './App.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import React , { Component}  from 'react';


function StudentSustain() {

    return (
        <>
            <div className="main_container" style={{ backgroundColor: "rgb(223,246,221)" }}>
                <div className='course-heading'>
                Student Sustainability Groups, Programs, and Initiatives 
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
                            Type of Student Sustainability Groups, Programs, and Initiatives (Select One)
                            </div>
                            <div className='input-text'>
                                <div class="select">
                                    <select id="standard-select">
                                        <option value="Option 1">--SELECT--</option>
                                        <option value="Option 2">Active student groups focused on sustainability</option>
                                        <option value="Option 3">Gardens, farms, community supported agriculture (CSA)</option>
                                    </select>
                                    <span class="focus"></span>
                                </div>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                            Groups, Programs, and Initiative Name
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                            Brief Description/Mission of the Group, Program, or Initiative
                            </div>
                            <div className='input-text'>
                                <input type="text" style={{ height: 80, width: "250%" }} />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                            Target Audience(s) Group, Program or Initiatve: (Select all that apply)
                            </div>
                            <div className='input-text'>
                                <div class="select">
                                    <select id="standard-select">
                                        <option value="Option 1">--SELECT--</option>
                                        <option value="Option 2">Students</option>
                                        <option value="Option 3">Staff</option>
                                        <option value="Option 4">Faculty</option>
                                        <option value="Option 5">Alumni</option>
                                        <option value="Option 5">Community</option>
                                    </select>
                                    <span class="focus"></span>
                                </div>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                            Brief Description of the Measurable Impacts and/or Positive Results (required for outreach campaigns):
                            </div>
                            <div className='input-text'>
                                <input type="text" style={{ height: 80, width: "250%" }} />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                            Any supporting outreach materials and publications?
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
                            If yes, provide a description
                            </div>
                            <div className='input-text'>
                                <input type="text" style={{ height: 80, width: "250%" }} />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                                URL (If available)
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
            </div>
        </>
    );
}


export default StudentSustain;
