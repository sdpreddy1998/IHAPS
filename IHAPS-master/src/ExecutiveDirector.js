import './App.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import React, { Component } from 'react';
import Appbar from './Appbar';
import megan from "./images/megan-topham.jpg"
import Footer from './Footer';
import Topappbar from './Topappbar';
import Navigationbar from './Navigationbar';
import Email from '@mui/icons-material/Email';
function ExecutiveDirector() {
    return (
        <div className="main_container" >
            <Topappbar />
            <Appbar />
            <Navigationbar />
            <div className='second_section' >
                <ul className="main-box" style={{ height: "80px",fontFamily:'san-serif',display: "flex", alignItems: "center" }}>
                    <li style={{ fontSize: 40, fontFamily:'sans-serif',color: "white" }}>Executive Director</li>
                </ul>
            </div>
            <div style={{padding:"5px 45px"}}>
                <div style={{ display: "flex", flexDirection: "row",marginTop:"50px" }}>
                    <div style={{marginTop:10}}>
                        <h2>Megan Topham, Ph.D.</h2>
                        <p className="about-list-item" style={{width:"95%"}}>Dr. Megan Topham is the Executive Director for the UHCL Institute for
                            Human and Planetary Sustainability (IHAPS) and Clinical Assistant Professor
                            of Management. She has a Ph.D. in Urban Planning with a concentration in
                            Sustainability and a Master of Science in Information Systems from The University
                            of Texas at Arlington. She has held previous positions with The University
                            of Texas at Arlington, including Campus Director of UTA Fort Worth, a
                            satellite campus in downtown Fort Worth, and Clinical Instructor in
                            both the College of Business and School of Urban and Public Affairs,
                            where she taught graduate courses in sustainability. Dr. Topham has
                            extensive knowledge and experience developing and managing sustainable
                            operations, innovative curriculum and programming, and strong community
                            partnerships and advocates.</p>
                        <p  className="about-list-item" style={{width:"95%"}}>Prior to joining UHCL in May 2021, Dr. Topham was an Assistant Professor in
                            Public Administration and Real Estate Development in the Huizenga College
                            of Business at Nova Southeastern University, where in addition to teaching
                            undergraduate and graduate courses in the MPA, MS in Real Estate, and MS
                            in Non-Profit Management programs, she created innovative student engagement
                            and retention initiatives, streamlined the assurances of learning practices
                            for the department, and facilitated the NASPAA accreditation process for
                            their MPA program.</p>
                        <p  className="about-list-item"  style={{width:"95%"}}>
                            In addition to holding the different administrative and academic positions,
                            Dr. Topham demonstrated an entrepreneurial spirit by founding Good Karma
                            Kitchen and Crazy Karma Commissary, a food truck and catering company and
                            commercial commissary in Fort Worth, TX. She is a certified massage therapist,
                            yoga instructor, and has a rank of second-degree black belt in aikido. Dr. Topham
                            works to enhance the lives of others through her work with a myriad of community
                            service organizations in which she has served over the years, including ARES, Meals
                            on Wheels, Leadership Fort Worth, Texas Makers Guild, FWISD Education Foundation,
                            Urban Theory, and the Fort Worth Chamber of Commerce.
                        </p>
                    </div>
                    <div>
                        <img src={megan} alt="Execuitve Director" style={{width:"300px",height:"330px"}}/>
                        <h3 style={{textAlign:"center"}}>Megan Topham, Ph.D.</h3>
                        <address>
                            <div style={{ display: "flex", flexDirection: "row",justifyContent:"center" }}>

                                <h4 >Email :</h4><h5><a href="mailto:topham@uhcl.edu">topham@uhcl.edu</a></h5>

                            </div>
                        </address>
                    </div>

                </div>

            </div>

            <Footer />
        </div>
    );
}

export default ExecutiveDirector;
