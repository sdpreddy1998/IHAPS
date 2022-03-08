
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
                            <Typography component="h1" variant="h5" color="textPrimary" gutterBottom style={{ textAlign: "left",marginTop: 35, fontWeight:"800",marginLeft: 20,width:"700px" }}>
                                Institute for Human and Planetary Sustainability
                            </Typography>
                            <Typography align="center" variant="h7" color="textSecondary" paragraph style={{ textAlign: "left", marginLeft: 20 }}>
                                Innovative Solutions for Sustainable Future
                            </Typography>
                        </div>
                    </div>
                    <div style={{ marginRight: 50 }}>
                        <Typography variant="h7" color="textPrimary" >
                            <div class="contact">
                                Contact Us
                            </div>
                            <p>University of Houston Clear Lake</p>
                            <p>Institute for Human and Planetary Sustainability</p>
                            <p> Phone: 281-283-2055</p>
                            <p>Email: ihaps@uhcl.edu</p>
                
                        </Typography>
                    </div>
                    <div style={{marginTop: 100,cursor:"pointer",marginRight:50}}>
                        <Typography>

                        </Typography>
                        <a href="mailto:ihaps@uhcl.edu" target={'blank'} >
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