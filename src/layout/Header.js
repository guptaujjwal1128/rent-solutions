import React,{Component} from 'react';
import fire from '../components/Config.js';
import "../App.css";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import UserLogin from "../components/UserLogin.js";
import AdminLogin from "../components/AdminLogin.js";
import {Redirect} from 'react-router-dom';

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      userLoggedIn:false,
      adminLoggedIn:false
    }
  }

  componentWillMount(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        // User is signed in.
        this.setState({
          userLoggedIn:true
        })
      }
      else{
        // User is signed out.
        this.setState({
          userLoggedIn:false
        })
      }
    });
  }

  updateAdminState(state){
    console.log(state)
    this.setState({
      adminLoggedIn:state
    })
  }

  render(){
    return (
      <div>
      {this.state.userLoggedIn ? <div>
        <Redirect to={'/user/'+fire.auth().currentUser.email} />
        </div> : null}
      {this.state.adminLoggedIn ? <div>
        <Redirect to="/admin" />
        </div> : null}
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6">
              zimber
            </Typography>
            <UserLogin />
            <AdminLogin adminState={this.updateAdminState.bind(this)}/>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
