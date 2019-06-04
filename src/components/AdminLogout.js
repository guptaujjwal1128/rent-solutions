import React,{Component} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MySnackbarContentWrapper from './snackBar';
import Button from '@material-ui/core/Button';
import fire from './Config.js';
import {Redirect} from 'react-router-dom';

class AdminLogout extends Component {
  constructor(props){
    super(props)
    this.adminLogout = this.adminLogout.bind(this);
    this.state={
      adminLoggedOut:false
    }
  }

  adminLogout(){
    // Sign-out successful.
    console.log('admin logout')
    this.setState({
      adminLoggedOut:true
    })
  }

  render(){
    return (
      <div>
      {true ? <Redirect to="/logout" /> : null}
      </div>
    );
  }
}

export default AdminLogout;
