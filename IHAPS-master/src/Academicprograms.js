import './App.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import React , { Component}  from 'react';
import Appbar from './Appbar';
import Footer from './Footer';
import { AppBar, Typography, Toolbar } from '@mui/material'


function Academicprograms() {

    return (
        <>
            <div className="main_container">
                <Appbar/>
                <div className='course-heading'>
                    Academic Programs
                </div>
                <div className='course-container'>
                    <div className='academiccourse-items'>
                        <div className='items'>
                            <div className='input-name-large'>
                                Sustainability-Focused Academic Program Name
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                                College/Unit
                            </div>
                            <div className='input-text'>
                                <div class="select">
                                    <select id="standard-select">
                                        <option value="Option 1">--SELECT--</option>
                                        <option value="Option 2">College of Science</option>
                                        <option value="Option 3">College of Education</option>
                                        <option value="Option 4">College of Business</option>
                                        <option value="Option 5">College of Humality of Science</option>
                                    </select>
                                    <span class="focus"></span>
                                </div>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                                Level of Program
                            </div>
                            <div className='input-text'>
                                <input type="radio" id="html" name="fav_language" value="HTML" />
                                <label for="html">UnderGraduate</label>
                                <input type="radio" id="css" name="fav_language" value="CSS" />
                                <label for="css">Graduate</label>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                                Program Type
                            </div>
                            <div className='input-text'>
                                <div class="select">
                                    <select id="standard-select">
                                        <option value="Option 1">--SELECT--</option>
                                        <option value="Option 2">Major</option>
                                        <option value="Option 3">Minor</option>
                                        <option value="Option 4">Degree</option>
                                        <option value="Option 5">Concentration</option>
                                        <option value="Option 5">An immersive Experience</option>
                                    </select>
                                    <span class="focus"></span>
                                </div>
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
                                Website URL for the Program
                            </div>
                            <div className='input-text'>
                                <input type="text" style={{ height: 80, width: "250%" }} />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                                Program POC
                            </div>
                            <div className='input-text'>
                                <input type="text" style={{ height: 50, width: "150%" }} />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                                Adopted one or more sustainability-focused learning outcome(s)
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
                                Requires the successful completion of a sustainability-focused course
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
                                Semester program started
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
                                Year program started
                            </div>
                            <div className='input-text'>
                                <input type="text" />
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
                                        <option value="Option 2">Active Program</option>
                                        <option value="Option 3">InActive Program</option>
                                    </select>
                                    <span class="focus"></span>
                                </div>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                                Reporting Date (Academic Year)
                            </div>
                            <div className='input-text'>
                                <input type="text" />
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


export default Academicprograms;
