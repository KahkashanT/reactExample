import React,{Component} from 'react';



class Icon extends Component{
    render(){
        
        var a={
            color:'grey'
        }
        return(
            <div className="Icon">
                <p className={this.props.clsname} >&nbsp;&nbsp;<i class={this.props.iconname} style={a}></i>&nbsp;{this.props.status}&nbsp;</p>
            </div>
        );
    }
}
export default Icon;
