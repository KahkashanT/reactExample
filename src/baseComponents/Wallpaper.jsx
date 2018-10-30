
import React,{Component} from 'react';

import User from './User.jsx';


class Wallpaper extends Component{
    render(){
        
        return(
            <div   className="Wallpaper" >
                <User  sourcefile='./src/wallpaper.jpg' clsname='WallpaperPic' />
                <hr />
            </div>
        );
    }
}

export default Wallpaper;
