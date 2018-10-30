import React,{Component} from 'react';



class User extends Component{
    render(){
        return(
            <div className="User">
              <img className={this.props.clsname} src={this.props.sourcefile}  />
            </div>
        );
    }
}
export default User;
