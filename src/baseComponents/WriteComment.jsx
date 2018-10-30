

import React,{Component} from 'react';

import Icon from './Icon.jsx';



class WriteComment extends Component{
    render(){
 
        return(
            <div   className="WriteComment" >
                
                
                <input type="text" class="form-control" className="writeSomething" placeholder="Write Something on this page..."/>
               
                
                <Icon iconname='fa fa-camera' className="icons_down" clsname="downIcon"/>
                <Icon iconname='fa fa-smile-o' className="icons_down2" clsname="downIcon2"/>
                
            </div>
        );
    }
}

export default WriteComment;