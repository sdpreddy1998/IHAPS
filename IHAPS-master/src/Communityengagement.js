import './App.css';
import React , { Component}  from 'react';
import {Link} from "react-router-dom";

function Communityengagement() {

    return (
        <>
            <div className="main_container" style={{ backgroundColor: "rgb(223,246,221)" }}>
                <div className='second_section' >
                    <ul style={{ height: "100px", display: "flex", alignItems: "center" }}>
                        <li style={{ cursor: "none" }}><a >CAMPUS AND COMMUNITY ENGAGEMENT FORMS</a></li>
                    </ul>
                </div>
                <div className='total-boxes'>
                    <div className='three-boxes'>
                        
                        <div className='box' >
                        <Link to="/StudentSustain"  style={{  textDecoration: "none"}}>
                            <div className='box-text'> Student Sustainability Groups, Programs & initiatives</div>
                            </Link>
                        </div>
                      
                      
                        <div className='box'>
                        <Link to="/Peertopeeroutreach"  style={{  textDecoration: "none"}}>
                            <div className='box-text'> Peer-to-Peer Outreach</div>
                            </Link>
                        </div>
                        <div className='box'>
                        <Link to="/ContinuingEducationCourses"  style={{  textDecoration: "none"}}>
                            <div className='box-text'> Continuing Education Courses</div>
                            </Link>
                        </div>
                       
                    </div>
                    <div className="two-boxes">
                      
                        <div className='box'>
                        <Link to="/StaffDevelopment"  style={{  textDecoration: "none"}}>
                            <div className='box-text'> Staff Professional Development</div>
                            </Link>
                        </div>
                        <div className='box'>
                        <Link to="/CommunityPartnerships"  style={{  textDecoration: "none"}}>
                            <div className='box-text'> Community Partnerships</div>
                            </Link>        
                        </div>
                    </div>
                     <div className="first-boxes">
                         <div className='box'>
                        <Link to="/ContinuingEduPrograms"  style={{  textDecoration: "none"}}>
                            <div className='box-text'> Continuing Education Programs</div>
                            </Link>
                        </div>
                    </div>       
                </div>

            </div>
        </>
    );
}

export default Communityengagement;