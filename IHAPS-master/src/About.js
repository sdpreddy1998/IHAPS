import './App.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import React, { Component } from 'react';
import Appbar from './Appbar';
import Footer from './Footer';
import Topappbar from './Topappbar';
import Navigationbar from './Navigationbar';
function About() {
    const About_content_list1 = [
        {
            content: "To support students and faculty with sustainability facility related projects - applied research and applications."
        },
        {
            content: "To develop and maintain a healthy, energy efficient, and cost-effective environment while promoting sustainable functions and operations in such areas as landscaping, land use, buildings, infrastructure and energy efficient use, water and waste management, purchasing, materials management and recycling, dining services, transportation and power equipment."
        },
        {
            content: "To make our campus a living laboratory for all interested in participating in sustainability efforts that support the purpose of the institute."
        }
    ]
    const About_content_list2 = [
        {
            content: "To foster an understanding of sustainability issues through education, training and communication by the dissemination of pedagogical materials, discussion topics, case studies, e-learning tools, and current and emerging technology."
        },
        {
            content: "To endorse a cross-faculty approach, to broaden the curricula to include components of critical-ethical analysis and systems thinking for sustainable development."
        },
        {
            content: "To support a student holistic learning approach by integrating sustainability elements in degree programs, resources, and exhibitions."
        },
        {
            content: "To focus faculty in research on sustainability challenges with innovative solutions."
        }
    ]
    const About_content_list3 = [
        {
            content: "To improve organizational structures aimed to promote more effective university-wide collaboration on sustainable practices."
        },
        {
            content: "To support leadership activities that align with sustainable practices within organizations."
        },
    ]
    const About_content_list4 = [
        {
            content: " To serve as a resource to champion resilient sustainability activities for local and global communities."
        },
        {
            content: "To bring a regional focus to efforts that implement concepts of sustainability."
        },
        {
            content: "To provide a convening function that reaches out to the civic and environmental leaders around the world, business executives, and government officials."
        },
        {
            content: "To provide information and communication between individuals, groups, institutions and organizations, local and globally, to facilitate positive debates and build knowledge regarding sustainable developments."
        }
    ]
    return (
        <div className="main_container" >
            <Topappbar />
            <Appbar />
            <Navigationbar />
            <div className='second_section' >
                <ul className="main-box" style={{ height: "80px", fontFamily:'sans-serif',display: "flex", alignItems: "center" }}>
                    <li style={{ fontSize: 40, color: "white" }}>About IHAPS</li>
                </ul>
            </div>
            <div className='about-content'>
                <h1>IHAPS Objectives: A Simple Breakdown</h1>
                <h2>Facilities and Operations</h2>
                <ul>

                    {
                        About_content_list1.map((ele, index) =>
                        (
                            <li className='about-list-item'>{ele.content}</li>

                        ))
                    }

                </ul>
                <h2>  Building Knowledge</h2>
                <ul>
                    {
                        About_content_list2.map((ele, index) =>
                        (
                            <li className='about-list-item'>{ele.content}</li>

                        ))
                    }

                </ul>
                <h2>Leadership & Organizational Structure</h2>
                <ul>
                    {
                        About_content_list3.map((ele, index) =>
                        (
                            <li className='about-list-item'>{ele.content}</li>

                        ))
                    }
                </ul>
                <h2>Local and Global Communities</h2>
                <ul>
                    {
                        About_content_list4.map((ele, index) =>
                        (
                            <li className='about-list-item'>{ele.content}</li>

                        ))
                    }

                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default About;
