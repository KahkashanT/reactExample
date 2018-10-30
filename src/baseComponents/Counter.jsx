

import React,{Component} from 'react';

import Icon from './Icon.jsx';
import User from './User.jsx';


class Counter extends Component{
    render(){
 
        return(
            <div   className="Counter" >
               
                <Icon iconname='fa fa-thumbs-up' status='Like' clsname="pStyle"/>
                <Icon iconname='fa fa-comments-o' status='Comments' clsname="pStyle"/>
                <Icon iconname='glyphicon glyphicon-share-alt' status='Share' clsname="pStyle"/>
                <User  sourcefile='./src/user.png' clsname='CounterPic'/>
            </div>
        );
    }
}

export default Counter;