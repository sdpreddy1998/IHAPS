
import { AppBar, Typography, Toolbar } from '@mui/material'
import React from 'react';
import Logo from "./images/IHAPS-LOGO.png"
export default function Appbar() {
    return (
        <>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography>
                        <img src={Logo} target="blank" className="logo" />
                    </Typography>
                    <div classname="appbar-row">
                        <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom style={{textAlign:"left",marginTop:80,marginLeft:30,fontWeight:600}}>
                            Institute for Human and Planetary Sustainability
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph style={{marginLeft:30}}>
                           Innovative Solutions for Sustainable Future
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}