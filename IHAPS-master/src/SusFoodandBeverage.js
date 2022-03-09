import './App.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import React , { Component}  from 'react';
import Appbar from './Appbar';
import Footer from './Footer';
import { AppBar, Typography, Toolbar } from '@mui/material'
import Topappbar from './Topappbar';
import Navigationbar from './Navigationbar';

function SusFoodandBeverage() {
    const Upload = (e) => {
        let files = e.target.files;
        console.log("data file", files)
    }

    return (
        <>
            <div className="main_container" >
                <Topappbar/>
                <Appbar/>
                <Navigationbar/>
                <div className='second_section' >
                    <ul  className="main-box" style={{ height: "80px", fontFamily:'sans-serif', display: "flex", alignItems: "center" }}>
                        <li style={{ cursor: "none" }}><a > Sustainable Food and Beverage Purchase Inventory</a></li>
                    </ul>
                </div>
                <div className='course-container'>
                    <div className='academiccourse-items'>
                        <div className='items'>
                            <div className='input-name-extra-large'>
                            Product name, label, or brand
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-extra-large'>
                            Product Type (Select One)
                            </div>
                            <div className='input-text'>
                                <div class="select">
                                    <select id="standard-select">
                                        <option value="Option 1">Select</option>
                                        <option value="Option 2">Sustainably Ethically Produced</option>
                                        <option value="Option 3">Plant based</option>
                                    </select>
                                    <span class="focus"></span>
                                </div>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                             Single Ingredient Product
                            </div>
                             <div className='input-text'>
                                <input type="radio" id="html" name="fav_language" value="HTML" />
                                <label for="html">Yes</label>
                                <input type="radio" id="css" name="fav_language" value="CSS" />
                                <label for="css">No</label>
                             </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-extra-large'>
                                Product Description
                            </div>
                            <div className='input-text'>
                                <textarea id="w3review" name="w3review" rows="4" cols="50">
                                </textarea>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-extra-large'>
                            Recognized sustainability standard met (e.g., third party certification or ecolabel)
                            </div>
                            <div className='input-text'>
                                <textarea id="w3review" name="w3review" rows="4" cols="50">
                                </textarea>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-large'>
                            Sourced through a short food supply chain (SFSC) that provides full traceability from identified farms, boats, or harvesters to the institution.
                            </div>
                            <div className='input-text'>
                                <input type="radio" id="html" name="fav_language" value="HTML" />
                                <label for="html">Yes</label>
                                <input type="radio" id="css" name="fav_language" value="CSS" />
                                <label for="css">No</label>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-extra-large'>
                                Reporting Period (start and end date)
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-extra-large'>
                                Expenditure For reporting period
                            </div>
                            <div className='input-text'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='items'>
                            <div className='input-name-extra-large'>
                            Offered by what type of Food Service Prodiver or Source: (select one)
                            </div>
                            <div className='input-text'>
                                <div class="select">
                                    <select id="standard-select">
                                        <option value="Option 1">Select</option>
                                        <option value="Option 2">Dining operations and catering services operated by the institution</option>
                                        <option value="Option 3">Dining operations and catering services operated by a contractor</option>
                                        <option value="Option 3">Student-run food/catering services</option>
                                        <option value="Option 3">Franchises (e.g., regional or global brands)</option>
                                        <option value="Option 3">Convenience stores</option>
                                        <option value="Option 3">Vending services</option>
                                        <option value="Option 3">Concessions</option>
                                        
                                    </select>
                                    <span class="focus"></span>
                                </div>
                            </div>
                        </div>

                        <div className='submit-button'>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <Button variant="contained" style={{ height: 50, width: "200%" }}>
                                    Submit
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className='visibility'>
                        dsadlf;ka
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default SusFoodandBeverage;