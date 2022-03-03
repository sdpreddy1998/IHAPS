import './App.css';

import {Link} from "react-router-dom";
import React , { Component}  from 'react';

function ResearchandScholorship() {

    return (
        <>
            <div className="main_container" style={{ backgroundColor: "rgb(223,246,221)" }}>
                <div className='second_section' >
                    <ul style={{ height: "100px", display: "flex", alignItems: "center" }}>
                        <li style={{ cursor: "none" }}><a >RESEARCH AND SCHOLORSHIP FORMS</a></li>
                    </ul>
                </div>
                <div className='total-boxes'>
                    <div className="first-boxes">
                      
                        <div className='box'>
                        <Link to="/FacultySusResearchService"  style={{  textDecoration: "none"}}>
                            <div className='box-text'> Faculty Sustainability Research  and Service</div>
                            </Link>


                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ResearchandScholorship;
