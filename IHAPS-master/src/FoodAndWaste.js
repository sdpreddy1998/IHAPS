import './App.css';
import React , { Component}  from 'react';
import {Link} from "react-router-dom";

function FoodAndWaste() {

    return (
        <>
            <div className="main_container" style={{ backgroundColor: "rgb(223,246,221)" }}>
                <div className='second_section' >
                    <ul style={{ height: "100px", display: "flex", alignItems: "center" }}>
                        <li style={{ cursor: "none" }}><a >FOOD AND WASTE (AND PURCHASING) FORMS</a></li>
                    </ul>
                </div>
                <div className='total-boxes'>
                    <div className="first-boxes">
                      
                        <div className='box'>
                        <Link to="/SusFoodandBeverage"  style={{  textDecoration: "none"}}>
                            <div className='box-text'> Sustainability Food and Beverage Purchasing Inventory</div>
                            </Link>


                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default FoodAndWaste;
