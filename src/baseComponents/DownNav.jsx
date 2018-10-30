
import React,{Component} from 'react';

import WriteComment from './WriteComment.jsx';
import User from './User.jsx';


class DownNav extends Component{
    render(){
 
        return(
            <div className="Down">
            <div   className="DownNav" >
                <User  sourcefile='./src/user.png' clsname='userpicture'/>
                <WriteComment />
            </div>
            </div>
        );
    }
}

export default DownNav;
