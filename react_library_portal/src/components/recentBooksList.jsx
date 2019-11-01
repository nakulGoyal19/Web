import React,{Component} from 'react';
import AddBook from './addbook.jsx';
export default class RecentBooksList extends Component{
    
    render()
    {
        if(this.props.display==='mainpage'){
        return(
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Author Name</th>
                        <th>Book version</th>
                        <th>Remove Button</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.bookList.map((book,index)=>{return(
                            <tr key={index}>
                                <td>{book.name}</td>
                                <td>{book.author}</td>
                                <td>{book.version}</td>
                                <td><button onClick={()=>this.props.remove(book)}>Remove</button></td>
                            </tr>)
                        })
                    }
                    <tr>
                        <td colSpan={4} ><button onClick={()=>this.props.add()}>Add a book</button></td>
                    </tr>
                </tbody>
            </table>
        )}
        if(this.props.display==='addbook'){
            return <AddBook back={this.props.back} addAndBack={this.props.addAndBack}/>
        }
    //    return <h1>aaa</h1>
    }
}