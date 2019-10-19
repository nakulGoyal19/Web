import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import { transform } from '@babel/core';
import 'bootstrap/dist/css/bootstrap.css';
//const h={color:'red'};

export default class Navbar extends Component
{
    render()
    {
        return (
           <React.Fragment>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">College Library</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                            <a class="nav-item nav-link" href="#">Features</a>
                            <a class="nav-item nav-link" href="#">Pricing</a>
                            <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </div>
                    </div>
                    <h4 className="navbar-brand">Welcome to College Library</h4>
                </nav>
           </React.Fragment>
        )
    }
}