import './App.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import React , { Component}  from 'react';


function ContinuingEducationCourses() {

    return (
        <>
            <div className="main_container" style={{ backgroundColor: "rgb(223,246,221)" }}>
                <div className='course-heading'>
                    Continuing Education Courses
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
                                Continuing Education Sustainability Course Title
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
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
                            <div className='input-name-large'>
                                Brief  Course Description
                            </div>
                            <div className='input-text'>
                                <input type="text" style={{ height: 80, width: "250%" }} />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                                Course Type (select)
                            </div>
                            <div className='input-text'>
                                <div class="select">
                                    <select id="standard-select">
                                        <option value="Option 1">--SELECT--</option>
                                        <option value="Option 2">Sustainability-Focused</option>
                                        <option value="Option 3">Sustainability-Inclusive</option>
                                    </select>
                                    <span class="focus"></span>
                                </div>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                            Semester and Year Offered
                            </div>
                            <div className='input-text'>
                                <div class="select">
                                    <select id="standard-select">
                                        <option value="Option 1">--SELECT--</option>
                                        <option value="Option 2">Spring 2022</option>
                                        <option value="Option 3">Summer 2022 </option>
                                        <option value="Option 3">Fall 2022</option>
                                        <option value="Option 3">Spring 2023</option>
                                        <option value="Option 3">Summer 2023</option>
                                        <option value="Option 3">Fall 2023</option>
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
            </div>
        </>
    );
}


export default ContinuingEducationCourses;
