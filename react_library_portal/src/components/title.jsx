import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class Title extends Component{
    render()
    {
        return (
            <div>
                <center>
                <h1>Welcome to College Library</h1>
                <Link to='main'>Enter</Link>
                </center>
            </div>
        )
    }
}