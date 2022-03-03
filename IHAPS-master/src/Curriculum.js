import './App.css';
import React , { Component}  from 'react';
import {Link} from "react-router-dom";

function Curriculum() {

    return (
        <>
            <div className="main_container" style={{ backgroundColor: "rgb(223,246,221)" }}>
                <div className='second_section' >
                    <ul style={{ height: "100px", display: "flex", alignItems: "center" }}>
                        <li style={{ cursor: "none" }}><a >CURRICULUM FORMS</a></li>
                    </ul>
                </div>
                <div className='total-boxes'>
                    <div className='two-boxes'>
                        
                        <div className='box' >
                        <Link to="/Academiccourse"  style={{  textDecoration: "none"}}>
                            <div className='box-text' > Academic Courses</div>
                            </Link>
                        </div>
                      
                      
                        <div className='box'>
                        <Link to="/Appliedstudentlearning "  style={{  textDecoration: "none"}}>
                            <div className='box-text'> Appiled Student Learning</div>
                            </Link>
                        </div>
                       
                    </div>
                    <div className="first-boxes">
                      
                        <div className='box'>
                        <Link to="/Academicprograms"  style={{  textDecoration: "none"}}>
                            <div className='box-text'> Academic Programs</div>
                            </Link>


                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Curriculum;
