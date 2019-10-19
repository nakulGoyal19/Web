import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import images from './images.js';
import Title from './title.js';
import PhotoWall from './photowall.js';
import '.././stylesheet.css'
export default class Main extends Component
{
    constructor()
    {
        super();
        this.state={
            posts:[
                {id:1,url:images[0],desc:'my first image of the manali trip'},
                {id:2,url:images[1],desc:'my second image of the manali trip'}
            ]
        }
        this.remove=this.remove.bind(this);
        this.add=this.add.bind(this);
    }
    remove(post1){
        this.setState({
            posts:this.state.posts.filter((post,index)=>{return post!==post1})
        })
        //console.log('remove');
    }
    add(){
        //console.log('Add')
        let obj={
            id:3,
            url:images[2],
            desc:'new image added'
        };
        this.state.posts.push(obj);
        this.setState({posts:this.state.posts})
    }
    render()
    {
        return <div>
        <Title data='My Photo Wall'/>
        <PhotoWall posts={this.state.posts} onRemove={this.remove} onAdd={this.add}/>
        </div>
    }
}