
import React,{Component} from 'react';

import Icon from './Icon.jsx';
import User from './User.jsx';


class Navbar extends Component{
    render(){
 
        return(
            <div   className="Navbar" >
                
                <Icon iconname='fa fa-pencil' status='Status' clsname="pStyle"/>
                <Icon iconname='fa fa-camera' status='Photo/Video' clsname="pStyle"/>
                <Icon iconname='fa fa-caret-down'  clsname="arrow"/>
                <User  sourcefile='./src/user.png' clsname='userPic' />
                
            </div>
        );
    }
}

export default Navbar;