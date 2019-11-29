import React,{Component} from 'react';
import Main from './components/main.jsx';
import Title from './components/title.jsx';
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom';
export default class App extends Component{
  render()
  {
    return(
      <div>
        <Route exact path='/' render={()=><Title />}></Route>
        <Route exact path='/main' render={()=><Main/>}></Route>
      </div>
    )
      
  }   
}
