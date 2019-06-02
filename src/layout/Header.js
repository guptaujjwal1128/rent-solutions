import React,{Component} from 'react';
import SearchAppBar from "../components/SearchAppBar";
import fire from '../components/Config.js';
class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedIn:false
    }
  }
  componentWillMount(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        // User is signed in.
        this.setState({
          loggedIn:true
        })
      }
      else{
        // User is signed out.
        this.setState({
          loggedIn:false
        })
      }
    });
  }
  render(){
    return (
      <div>
      <SearchAppBar userIsLoggedIn={this.state.loggedIn}/>
      </div>
    );
  }
}

export default Header;
