

import React,{Component} from 'react';
import Icon from './Icon.jsx';
import User from './User.jsx';


class Detail extends Component{
    render(){
//        var textdata={
//            marginTop:'none'
//        }
        return(
            <div className="Detail">
                <div    >
                    <User  sourcefile='./src/template.jpg' clsname='templatePic' />
                </div>
                 <p ><b>Template.net</b> changed their cover photo</p>
                <Icon status='2 min' iconname='fa fa-globe' clsname="pStyle" />
                <Icon iconname='fa fa-angle-down' clsname="arrow" />
            </div>
        );
    }
}

export default Detail;