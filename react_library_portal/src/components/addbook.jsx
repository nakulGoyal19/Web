import React,{Component} from 'react';
export default class AddBook extends Component{
    state={
        name:"",
        author:"",
        version:""
    }

    handleChange = (event) =>
    {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render()
    {
        const {name,author,version }=this.state;
        const values={name,author,version };
        return (
            <div><center>
                <h1>Add a new book here</h1>
                <form onSubmit={this.props.addAndBack.bind(this,values)}>
                    <div className="form-group">
                    <input
                        type="text"
                        placeholder="Book Name..."
                        className="form-control"
                        name="name"
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Author..."
                        className="form-control mt-2"
                        name="author"
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Version..."
                        className="form-control mt-2"
                        name="version"
                        onChange={this.handleChange}
                    />
                    <button className="col btn btn-primary mt-2">Add</button>
                    </div>
                </form>
                <button className="btn btn-dark" onClick={()=>this.props.back()}>Back to Main Page</button>
            </center></div>
          )
    }
}