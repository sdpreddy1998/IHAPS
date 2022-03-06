
import { AppBar, Typography, Toolbar } from '@mui/material'
import React from 'react';
import Logo from "./images/IHAPS-LOGO.png"
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
export default function Topappbar() {
    const handleIHAPSHome=()=>{
        window.location.reload();
    }
    return (
        <>
            <div style={{display:"flex",flexDirection:"row"}}>
                <div className='top-app-bar'>
                    <ul className="Top-bar-list">
                        <li onClick={handleIHAPSHome}>IHAPS Home</li><span style={{ fontWeight: 800, fontSize: 20 }}>&#47;</span>
                        <a href="https://www.aashe.org/" target="blank" style={{textDecoration:"none"}}><li>AASHE</li></a><span style={{ fontWeight: 800, fontSize: 20 }}>&#47;</span>
                        <li>Conference</li><span style={{ fontWeight: 800, fontSize: 20 }}>&#47;</span>
                        <li>Community</li><span style={{ fontWeight: 800, fontSize: 20 }}>&#47;</span>
                        <li>Resource HUb</li><span style={{ fontWeight: 800, fontSize: 20 }}>&#47;</span>
                        <li>Bulletin</li>
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
                     
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
        </>
    )
}