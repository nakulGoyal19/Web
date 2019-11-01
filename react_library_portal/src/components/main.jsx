import React,{Component} from 'react';
import NavBar from './navbar.jsx';
import MainPage from './mainpage.jsx';
export default class Main extends Component{

    constructor(){
        super();
        this.state = {
            bookList: [
                {name:"B1",author:"A1",version:"1.1"},
                {name:"B2",author:"A2",version:"1.1.1"},
                {name:"B3",author:"A3",version:"1.4"},
                {name:"B1",author:"A4",version:"2.1"}
            ],
        display:"mainpage"}
        this.remove=this.remove.bind(this);
        this.add=this.add.bind(this);
        this.back=this.back.bind(this);
    }
    remove(rBook)
    {
        this.setState({
            bookList:this.state.bookList.filter((book)=>{return book!==rBook})
        })
    }
    add()
    {
        this.setState({
            display:"addbook"
        })
    }
    back()
    {
      this.setState({
        display:"mainpage"
      })
    }

    addAndBack = (v,event) => {
      event.preventDefault();
      this.state.bookList.push(v);
      this.setState({
        display:"mainpage",
        bookList:this.state.bookList
      })
    }

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
            <MainPage display={this.state.display} back={this.back} addAndBack={this.addAndBack} bookList={this.state.bookList} remove={this.remove} add={this.add}/>
          </div>
        </div>
      </div>
    )
  }
}
