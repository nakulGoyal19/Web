import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Photos from './photos.js';
export default class PhotoWall extends Component{
    render()
    {
        return(
            <React.Fragment>
            <div className="photogrid">{
                    this.props.posts.map((post,index)=><Photos key={index} post={post} onRemove={this.props.onRemove}/>)
                }</div>
                <button className="remove-button" onClick={()=>{this.props.onAdd()}}>Add</button>
            </React.Fragment>)
    }
}