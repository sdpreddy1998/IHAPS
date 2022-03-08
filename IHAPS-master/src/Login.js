import './App.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import React , { Component, useState}  from 'react';
import Appbar from './Appbar';
import Footer from './Footer';
import Topappbar from './Topappbar';
import Navigationbar from './Navigationbar';

function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleSubmit=()=>{
        console.log(email,password)
        if(email==="sai@gmail.com")
        {
            if(password==="Saikota123@")
            {
                window.location="/WorkGroups"
            }
        }
    }
    return (
        <div className="main_container" >
            <Topappbar/>
            <Appbar/>
            <Navigationbar/>
            <div className='second_section' >
                <ul className="main-box" style={{ height: "100px", display: "flex", alignItems: "center" }}>
                    <li style={{ fontSize: 40, color: "white" }}>Login</li>
                </ul>
            </div>
            <div className='course-container-login'>
                <div className='participation-menu'>
                    <table>
                        <tr>
                            <th>Login/SignUp</th>
                        </tr>
                        <tr>
                            <Link to="/Register">
                                <td>Sign Up</td>
                            </Link>
                        </tr>
                        <tr>
                            <Link to="/Login">
                                <td>Login</td>
                            </Link>
                        </tr>

                    </table>
                </div>
                <div className='academiccourse-items'>
                    <div className='items'>
                        <div className='input-name-small'>
                            UHCL Email
                        </div>
                        <div className='input-text'>
                            <input type="text" onChange={e => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className='items'>
                        <div className='input-name-small'>
                            Password
                        </div>
                        <div className='input-text'>
                            <input type="text" onChange={e => setPassword(e.target.value)} />
                        </div>
                    </div>

                    <div className='submit-button'>
                        <Link to="/WorkGroups" style={{  textDecoration: "none"}}>
                            <Button variant="contained" style={{ height: 50, width: "200%" }} onCLick={handleSubmit}>
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
    );
}

export default Login;
