import React,{Component} from 'react';
import RecentBooksList from './recentBooksList.jsx';
export default class MainPage extends Component{
    render()
    {
        return(
            <React.Fragment className="row">
                <RecentBooksList/>
            </React.Fragment>
        )
        
    }
}