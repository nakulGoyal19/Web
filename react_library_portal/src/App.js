import React,{Component} from 'react';
import NavBar from './components/navbar.jsx';
import MainPage from './components/mainpage.jsx';
export default class App extends Component{
  render()
  {
    return(
      <div className="container">
        <div className="row">
          <div className="col">
            <NavBar/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <MainPage/>
          </div>
        </div>
      </div>
    )
  }
}
