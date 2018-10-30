
import React,{Component} from 'react';

import Write from './Write.jsx';
import User from './User.jsx';


class Textbar extends Component{
    render(){
 
        return(
            <div   className="Textbar" >
                <User  sourcefile='./src/user.png' clsname='userPicTextarea' />
                <Write />
            </div>
        );
    }
}

export default Textbar;
