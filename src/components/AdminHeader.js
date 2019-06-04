import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AdminLogin from "./AdminLogin.js";
import AdminLogout from "./AdminLogout.js";

class AdminHeader extends Component {
  constructor(props){
    super(props)
    this.state={
      loggedOut:false
    }
  }

  adminLogout(){
    this.setState({
      loggedOut:true
    })
  }

  render(){
    return (
      <div>
      {this.state.loggedOut ? <AdminLogout /> : null}
      <AppBar position="relative">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Zimber
          </Typography>
          <div className="button-header">
          <Button variant="outlined" className="button-header" onClick={this.adminLogout.bind(this)}>
            Admin Logout
          </Button>
          </div>
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}

export default AdminHeader;
