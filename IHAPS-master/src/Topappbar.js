
import { AppBar, Typography, Toolbar } from '@mui/material'
import React from 'react';
import Logo from "./images/IHAPS-LOGO.png"
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { useNavigate } from "react-router-dom";
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
export default function Topappbar() {
    const navigate = useNavigate();
    // const handleIHAPSHome=()=>{
    //     window.location="/";
    // }
    return (
        <>
            <div style={{display:"flex",flexDirection:"row"}}>
                <div className='top-app-bar'>
                    <ul className="Top-bar-list">
                        <li onClick={() => navigate("/")}>IHAPS Home</li><span style={{ fontWeight: 80, fontSize: 20 }}>&#47;</span>
                        <a href="https://www.uhcl.edu/sustainability/about/" target="blank" style={{textDecoration:"none"}}><li>About</li></a><span style={{ fontWeight: 800, fontSize: 20 }}>&#47;</span>
                        <a href="https://www.uhcl.edu/sustainability/history/" target="blank" style={{textDecoration:"none"}}><li>History</li></a><span style={{ fontWeight: 800, fontSize: 20 }}>&#47;</span>
                        <a href="https://www.uhcl.edu/sustainability/news-events/" target="blank" style={{textDecoration:"none"}}><li>News and Events</li></a><span style={{ fontWeight: 800, fontSize: 20 }}>&#47;</span>
                        <a href="https://www.uhcl.edu/sustainability/research-grant/" target="blank" style={{textDecoration:"none"}}><li>Research</li></a><span style={{ fontWeight: 800, fontSize: 20 }}>&#47;</span>
                        <a href="https://www.uhcl.edu/sustainability/resources" target="blank" style={{textDecoration:"none"}}><li>Resources</li></a><span style={{ fontWeight: 800, fontSize: 20 }}>&#47;</span>
                        <a href="https://www.uhcl.edu/sustainability/about/executive-director" target="blank" style={{textDecoration:"none"}}><li>Executive Director</li></a><span style={{ fontWeight: 800, fontSize: 20 }}/>
                    </ul>


                </div>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                     
                    <IconButton type="submit" sx={{ p: '10x' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
        </>
    )
}