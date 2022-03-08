import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import SearchField from 'react-search-field';
import { Redirect } from 'react-router'
import axios from 'axios';


export default function Searchbar() {
    constructor(props)=>{
        super(props);
        this.state = { searchResults: [], search: '', };
        this.onSearchClick = this.onSearchClick.bind(this);
    };
    onSearchClick(event) => {
        let url = 'http://google.com' + encodeURI(this.state.search) + '&json=1';
        axios.get(url)
            .then(response => {
                let data = {
                    searchResults: response.data,
                };
                this.setState(data);
            })
            .catch(error => console.log(error));
    }
    return (
        <div class="container-fluid">
            <div class="row body flex-nowrap">
                <div class="bg-image">
                </div>
                <div class="bg-text">
                    <div class="title" >
                        Oerinspanish <br />
                    </div>
                    Recursos educativos de acceso libre <br />
                    para la enseñanza del español <br /> <br /> <br />

                    <SearchField class="search" placeholder='búsqueda' input type="text" required value={this.state.input}
                        onSearchClick={this.onSearchClick}>
                        <Redirect to={{
                            pathname: '/search',
                            state: { searchResults: this.state.searchResults }
                        }} />
                    </SearchField>
                </div>
            </div>
        </div>
    );
}
