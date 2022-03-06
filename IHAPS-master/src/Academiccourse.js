import './App.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import React , { Component}  from 'react';
import Appbar from './Appbar';
import Footer from './Footer';
import { AppBar, Typography, Toolbar } from '@mui/material'

function Academiccourse() {

    return (
        <>
            <div className="main_container" >
                <Appbar/>
                <div className='course-heading'>
                    Academic Courses
                </div>
                <div className='course-container'>
                    <div className='academiccourse-items'>
                        <div className='items'>
                            <div className='input-name'>
                                Sustainability Course Title
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name'>
                                Department
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
                            <div className='input-name'>
                                Level of Course
                            </div>
                            <div className='input-text'>
                                <input type="radio" id="html" name="fav_language" value="HTML" />
                                <label for="html">UnderGraduate</label>
                                <input type="radio" id="css" name="fav_language" value="CSS" />
                                <label for="css">Graduate</label>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name'>
                                Brief  Course Description
                            </div>
                            <div className='input-text'>
                                <input type="text" style={{ height: 80, width: "250%" }} />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name'>
                                Course Type
                            </div>
                            <div className='input-text'>

                                <div class="select">
                                    <select id="standard-select">
                                        <option value="Option 1">--SELECT--</option>
                                        <option value="Option 2">Sustainability-Focused</option>
                                        <option value="Option 3">Sustainability-Inclusive</option>
                                        <option value="Option 4">None</option>
                                    </select>
                                    <span class="focus"></span>
                                </div>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name'>
                                Semester Offered
                            </div>
                            <div className='input-text'>
                                <div class="select">
                                    <select id="standard-select">
                                        <option value="Option 1">--SELECT--</option>
                                        <option value="Option 2">Spring</option>
                                        <option value="Option 3">Fall</option>
                                        <option value="Option 3">Summer</option>
                                    </select>
                                    <span class="focus"></span>
                                </div>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name'>
                                Year Offered
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='submit-button'>
                        <Link to="/" style={{  textDecoration: "none"}}>
                            <Button variant="contained" style={{height:50,width:"200%"}}>
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

export default Academiccourse;
