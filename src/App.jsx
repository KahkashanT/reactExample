
import React,{Component} from 'react';
import Navbar from './baseComponents/Navbar.jsx';
import Textbar from './baseComponents/Textbar.jsx';
import Detail from './baseComponents/Detail.jsx';
import Wallpaper from './baseComponents/Wallpaper.jsx';
import Counter from './baseComponents/Counter.jsx';
import Emoji from './baseComponents/Emoji.jsx';
import DownNav from './baseComponents/DownNav.jsx';

class App extends Component{
    render(){
        return(
            <div className="App">
            
            <Navbar />
            <Textbar />
            <Detail />
            <Wallpaper />
            <Counter />
            <Emoji />
            <DownNav />
            </div>
        );
    }
}
export default App;