import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "../App.css";
import UserLogin from "./UserLogin.js";
import AdminLogin from "./AdminLogin.js";
import LogoutAction from "./LogoutAction";
import {Redirect} from 'react-router-dom';

class SearchAppBar extends React.Component{
  constructor(props){
    super(props)
    this.state={
      adminLoggedin:false
    }
  }

  render(){
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6">
            zimber
          </Typography>
          {this.props.userIsLoggedIn ? <div>
            <LogoutAction/>
            <Redirect to="/user" />
            </div> : <UserLogin userIsLoggedIn={this.props.userIsLoggedIn}/>}
          {this.props.userIsLoggedIn ? null : <AdminLogin />}
        </Toolbar>
      </AppBar>
    </div>
    );
  }
}
export default SearchAppBar;
