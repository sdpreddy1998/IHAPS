
import { AppBar, Typography, Toolbar } from '@mui/material'
import React from 'react';
import Logo from "./images/IHAPS-LOGO.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
export default function Footer() {
    return (
        <>
            <AppBar position="static" color="default" >
                <Toolbar className='footer-row'>
                    <div>
                        <Typography>
                            <img src={Logo} target="blank" className="logo-footer" />
                        </Typography>
                        <div classname="appbar-row">
                            <Typography component="h1" variant="h5" color="textPrimary" gutterBottom style={{ textAlign: "left", marginTop: 35, marginLeft: 20,width:"700px" }}>
                                Institute for Human and Planetary Sustainability (IHAPS)
                            </Typography>
                            <Typography align="center" variant="h7" color="textSecondary" paragraph style={{ textAlign: "left", marginLeft: 20 }}>
                                Innovative Solutions for Sustainable Future
                            </Typography>
                        </div>
                    </div>
                    <div style={{ marginRight: 50 }}>
                        <Typography variant="h7" color="textPrimary" >
                            <p>Address:</p>
                            <p>2401 Walnut Street</p>
                            <p>Suite 102</p>
                            <p> Philadelphia, PA 19103</p>
                            <p> 888-347-9997</p>
                            <p> stars@aashe.org</p>
                        </Typography>
                    </div>
                    <div style={{marginRight:100,cursor:"pointer"}}>
                        <Typography>
                            Contact Us:
                        </Typography>
                        <a href="https://google.com" >
                        <EmailIcon />
                        </a>
                        <LinkedInIcon />
                        <TwitterIcon />
                        <FacebookIcon />
                    </div>
                   

                </Toolbar>
            </AppBar>
        </>
    )
}