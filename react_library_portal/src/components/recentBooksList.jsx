import React,{Component} from 'react';

export default class RecentBooksList extends Component{
    state = {
        bookList: [
            {name:"B1",author:"A1",version:"1.1"},
            {name:"B2",author:"A2",version:"1.1.1"},
            {name:"B3",author:"A3",version:"1.4"},
            {name:"B1",author:"A4",version:"2.1"}
        ]
    }
    render()
    {
        return(
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Book Author</th>
                        <th>Book Name</th>
                        <th>Book version</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.bookList.map((book,index)=>{return(
                            <tr key={index}>
                                <td>{book.author}</td>
                                <td>{book.name}</td>
                                <td>{book.version}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        )
    }
}