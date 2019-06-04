import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import UserLogin from "./UserLogin.js";
import '../App.css';
import UserLogout from "./UserLogout.js";

class UserHeader extends Component {
  constructor(props){
    super(props)
    this.userLogout = this.userLogout.bind(this)
    this.state={
      loggedOut:false
    }
  }

  userLogout(){
    this.setState({
      loggedOut:true
    })
  }

  render(){
    return (
      <div>
      {this.state.loggedOut ? <UserLogout /> : null}
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6">
            Zimber
          </Typography>
          <div className="button-header">
          <Button variant="outlined" className="button-header" onClick={this.userLogout}>
            User Logout
          </Button>
          </div>
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}

export default UserHeader;
