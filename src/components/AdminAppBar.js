import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../App.css';
import LogoutAction from './LogoutAction';

class AdminAppBar extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this)
    this.state={
      adminLoggedin:true
    }
  }

  handleLogout(){
    this.setState({
      adminLoggedin:false
    })
  }

  render(){
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6">
            Zimber
          </Typography>
          <div className="button-header">
          <Button variant="outlined" className="button-header" onClick={this.handleLogout}>
            Logout
          </Button>
          </div>
          {this.state.adminLoggedin ? null : <LogoutAction />}
        </Toolbar>
      </AppBar>
    </div>
  )}
}

export default AdminAppBar;
