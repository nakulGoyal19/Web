import React,{Component} from 'react';
import ReactDOM from 'react-dom';

export default class Photos extends Component{
    render()
    {
        return (
            <figure className="figure">
                <img className="photo" src={this.props.post.url} height="100" width="100"/>
                <p>{this.props.post.desc}</p>
                <div className="button-container">
                <button className="remove-button" onClick={()=>this.props.onRemove(this.props.post)}>Remove</button>
            </div></figure>
        )
    }
}