import React,{Component} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MySnackbarContentWrapper from './snackBar';
import Button from '@material-ui/core/Button';
import fire from './Config.js';
import {Redirect} from 'react-router-dom';

class LandingPage extends Component {
  constructor(props){
    super(props)
    this.userLogout = this.userLogout.bind(this);
    this.state={
      loggedOut:false
    }
  }

  userLogout(){
    fire.auth().signOut().then(()=>{
      // Sign-out successful.
      console.log('logout')
      this.setState({
        loggedOut:true
      })
    }
  )}

  render(){
    return (
      <div>
      <div className="button-header">
      <Button variant="outlined" className="button-header" onClick={this.userLogout}>
        Logout
      </Button>
      </div>
      {this.state.loggedOut ? <Redirect to="/" /> : null}
      </div>
    );
  }
}

export default LandingPage;
