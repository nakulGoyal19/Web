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
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">College Library</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="#">Features</a>
                            <a className="nav-item nav-link" href="#">Pricing</a>
                            <a className="nav-item nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </div>
                    </div>
                    <h4 className="navbar-brand">Welcome to College Library</h4>
                </nav>
           </React.Fragment>
        )
    }
}