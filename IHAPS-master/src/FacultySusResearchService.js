import './App.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import React , { Component}  from 'react';
import Appbar from './Appbar';
import Footer from './Footer';
import { AppBar, Typography, Toolbar } from '@mui/material'
function FacultySusResearchService() {

    return (
        <>
            <div className="main_container">
                <Appbar/>
                <div className='course-heading'>
                   Faculty Sustainability Research and Service
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
                                Faculty Name(Who Conducts sustainability research and/or service)
                            </div>
                            <div className='input-text'>
                                <input type="text"/>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                                Faculty Email
                            </div>
                            <div className='input-text'>
                                <input type="text"/>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                                Departmental Affiliation
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
                                Sustainability Research Areas
                            </div>
                            <div className='input-text'>
                                <div class="select">
                                    <select id="standard-select">
                                        <option value="Option 1">--SELECT--</option>
                                        <option value="Option 2">Environmental</option>
                                        <option value="Option 3">Social</option>
                                        <option value="Option 4">Economic</option>
                                        <option value="Option 5">Educational</option>
                                    </select>
                                    <span class="focus"></span>
                                </div>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                                Research interests/topics or a brief description justifying the individual's inclusion
                            </div>
                            <div className='input-text'>
                              <input type="text" style={{ height: 80, width: "250%" }} />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                                Research published in Peer-Reviewed Journal ?
                            </div>
                            <div className='input-text'>
                                <input type="radio" id="html" name="fav_language" value="HTML" />
                                <label for="html">Yes</label>
                                <input type="radio" id="css" name="fav_language" value="CSS" />
                                <label for="css">No</label>
                                <input type="radio" id="css" name="fav_language" value="CSS" />
                                <label for="css">Pending</label>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                                If Yes or Pending: Provide Publication title, Journal Name, and Date of Publication
                            </div>
                            <div className='input-text'>
                              <input type="text" style={{ height: 80, width: "250%" }} />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                               If Yes, is the publication deposited in a designated open access repository ?
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
                               Presented Research at a Higher Education sustainability conference ?
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
                                If Yes, Provide a list or brief description of the conferences, presentations, and Dates
                            </div>
                            <div className='input-text'>
                              <input type="text" style={{ height: 80, width: "250%" }} />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                               Serve on a board or committee of an external higher education sustainability network or conference ?
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
                                If Yes, Provide a list or brief description of the board or committee appointments, and service dates
                            </div>
                            <div className='input-text'>
                              <input type="text" style={{ height: 80, width: "250%" }} />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                                Support URL(s) (Optional)
                            </div>
                            <div className='input-text'>
                              <input type="text" style={{ height: 80, width: "250%" }} />
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


export default FacultySusResearchService;
