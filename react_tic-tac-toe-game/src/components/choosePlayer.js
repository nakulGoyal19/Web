import React,{Component} from 'react';

export default class Player extends Component
{
    handleForm(e)
    {
        e.preventDefault();
        //console.log(e.target.player.value);
        this.props.player(e.target.player.value)
    }
    render(){
        return(
            <form onSubmit={(e)=>this.handleForm(e)}>
                <label>
                    Player -  X
                    <input type="radio" name="player" value="X"/>
                </label>
                <label>
                    or O
                    <input type="radio" name="player" value="O"/>
                </label>
                <input type="submit" value="Start"/>
            </form>
        )
    }
}