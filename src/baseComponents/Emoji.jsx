

import React,{Component} from 'react';

import Icon from './Icon.jsx';

class Emoji extends Component{
    render(){
        var views={
            color:'blue',
            marginTop:'15px',
            float:'left'
        }
        var comments={
            color:'blue',
            marginTop:'15px',
            float:'right',
            marginRight:'15px'
        }
        
        return(
            <div   className="Emoji" >
               
                <Icon iconname='em em---1' clsname="Icons1" />
                <Icon iconname='em em-heart' clsname="Icons2"/>
                <Icon iconname='em em-astonished' clsname="Icons3"/>
                <Icon iconname='fa fa-caret-down' clsname="arrow" />
                <p style={views}>1.6M</p>
                <p style={comments}>Top Comments</p>
                
            </div>
        );
    }
}

export default Emoji;