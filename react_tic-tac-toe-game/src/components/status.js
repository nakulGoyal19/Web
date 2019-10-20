import React,{Component} from 'react';
import Player from './choosePlayer'
export default class Status extends Component
{
    renderCheck()
    {
        if(this.props.winner)
            {
                return (
                    <p> Winner is : {this.props.winner}</p>
                )
            }
        else
            {
                return this.props.player ?
                    <p>Next Player:{this.props.player}</p>:
                    <Player player={(e)=>this.props.setPlayer(e)}/>
            }
    }
    render()
    {
        
        return (
            <span>{this.renderCheck()}</span>
        )
    }
}