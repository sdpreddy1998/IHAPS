import './App.css';
import { Link } from "react-router-dom";
import Homeimage from "./images/homepageimage.png";
import Economic from "./images/Economic.png"
import Social from "./images/Social.png"
import Educational from "./images/Educational.png"
import Environmental from "./images/Environmental.png"
import Logo from "./images/IHAPS-LOGO.png"
import React from 'react';
import Appbar from './Appbar';
import Footer from './Footer';
import { AppBar, Typography, Toolbar } from '@mui/material'
function Home() {
  const handleClick = () => {
    window.open("https://www.uhcl.edu/sustainability/about/")
  }
  const content = [
    {
      heading: "Social",
      matter: "Creates diverse, eqitable, and inclusive societies that enable access, support wellness, improve quality of life, and increase citizen engagement.",
    },
    {
      heading: "Economic",
      matter: " Builds and supports long-term economic growth that optimizes resources, improves productivity, and increases efficiencies without negatively impacting the other dimensions.",
    },
    {
      heading: "Environmental",
      matter: "Protects, restores, and promotes ecosystems that prevent or mitigate vulnerbilities and harmful impacts to environmental resillience",
    },
    {
      heading: "Educational",
      matter: "Enhances the sharing and development of knowledge and experiences that suppport the other dimensions and creates a culture of continuous improvement, collaboration, and innovation.",
    }
  ]
  return (

    <div className="main_container">
      <Appbar />
      {/* <div className="logo">
      <img src={Logo} target="blank" className="logo"/>
      </div>
      <div className='first_section'>
            <Typography component="h1" variant="h3" align="center"  color="textPrimary" gutterBottom>
                     Institute for Human and Planetary Sustainability
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            It is to promote innovative solutions and sustainable outcomes to global challenges through a multi-disciplinary approach bringing social, economic, environmental, and educational perspectives to the forefront.
            </Typography>
      </div> */}
      <div className='second_section'>
        {/* <ul>
         <Link to ="/" style={{  textDecoration: "none"}} ><li><a>Home</a></li></Link>
         <Link to ="/Participation" style={{  textDecoration: "none"}}> <li><a>Login/Sign Up</a></li><Link to ="/Participation" style={{  textDecoration: "none"}}>
         <Link to="/Workgroupsreport"  style={{  textDecoration: "none"}}><li><a >Reports and Data</a></li></Link>
         <li><a onClick={handleClick}>About IHAPS</a></li>
        </ul> */}
        <div class="navbar">
          <div class="dropdown">
            <button class="dropbtn">Home
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <Link to="/"><a href=""></a></Link>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">Login & Sign Up
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <Link to="/Register"><a href="#">Sign Up</a></Link>
              <Link to="/Login"><a href="#">Login</a></Link>
              <Link to="/WorkGroups"><a href="#">Work Groups</a></Link>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">Reports and Data
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <Link to="/Curriculum"><a href="#">Curriculum</a></Link>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">About IHAPS
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="third-section">
          <div className='heading'>
            Our Mission
          </div>
          <div className='heading-content'>
            It is to promote innovative solutions and
            sustainable outcomes to global challenges
            through a multi-disciplinary approach bringing
            social, economic, environmental, and
            educational perspectives to the forefront.
          </div>
        </div>
        <div className='fourth_section'>
          <div className='Sustanability_heading'>
            The Four Dimensions of Sustainability
          </div>
          <div className='center-images'>
            <img src={Social} target="blank" className='center-image-width' />
            <img src={Economic} target="blank" className='center-image-width' />
            <img src={Environmental} target="blank" className='center-image-width' />
            <img src={Educational} target="blank" className='center-image-width' />
          </div>
        </div>
        <div className='fifth-section'>
          {
            content.map((ele, index) => (
              <div className='content_container'>
                <div className='content_heading'>{ele.heading}</div>
                <div className='content_matter'>{ele.matter}</div>
              </div>
            ))
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
