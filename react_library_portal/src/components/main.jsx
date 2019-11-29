import React,{Component} from 'react';
import NavBar from './navbar.jsx';
import MainPage from './mainpage.jsx';
export default class Main extends Component{

    constructor(){
        super();

        console.log("Constructor is called");

        this.state = {
            bookList: [
            ],
        display:"mainpage"}
        this.remove=this.remove.bind(this);
        this.add=this.add.bind(this);
        this.back=this.back.bind(this);
    }
    componentDidMount(){
      this.getLatestBooks();
    }

    getLatestBooks = () => {
      fetch('http://localhost:8082/bookList')
      .then(res=>res.json())
      .then(res=>{
        console.log(JSON.stringify(res));
        this.setState({bookList:res});
      })
    }

    remove(id)
    {
      fetch(`http://localhost:8082/bookList/${id}`, {
        method: 'delete'
      })
      .then(() => {
        console.log('Deleted')
        this.getLatestBooks()
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
      const newBook = {
        id: this.state.bookList.length + 1,
        name: v.name,
        author: v.author,
        version: v.version
      }
      // this.state.bookList.push(v);
      // this.setState({
      //   display:"mainpage",
      //   bookList:this.state.bookList
      // })

      fetch('http://localhost:8082/addBook',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(newBook)
      })
      .then(res=> res.json())
      .then(res=>{
        this.getLatestBooks();
        this.setState({
          display: 'mainpage'
        })
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
