import React,{Component} from 'react';
import RecentBooksList from './recentBooksList.jsx';
export default class MainPage extends Component{
    render()
    {
        return(
            <React.Fragment>
                <RecentBooksList display={this.props.display} addAndBack={this.props.addAndBack} back={this.props.back} bookList={this.props.bookList} remove={this.props.remove} add={this.props.add}/>
            </React.Fragment>
        )
        
    }
}