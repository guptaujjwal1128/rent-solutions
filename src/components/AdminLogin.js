import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';
import MySnackbarContentWrapper from './snackBar';
import '../App.css';
import fire from './Config.js';
import {Redirect} from 'react-router-dom';

  class AdminLogin extends Component {
    constructor(props){
      super(props);
      this.handleClickOpen = this.handleClickOpen.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSignin = this.handleSignin.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.closeMessage = this.closeMessage.bind(this);
      this.openMessage = this.openMessage.bind(this);
      this.state={
        errorStatus:false,
        dialogstatus:false,
        email:"",
        password:"",
        errorMessage:"",
        messageVariant:"error",
        loggedIn:false
      }
    }

    handleClickOpen(){
      this.setState({
        dialogstatus:true
      });
    }

    closeMessage(){
      this.setState({
        errorStatus:false
      });
    }

    openMessage(){
      this.setState({
        errorStatus:true
      });
    }

    handleClose(){
      this.setState({
        dialogstatus:false,
        errorStatus:false
      });
    }

    handleChange(event){
      this.setState({
        [event.target.name]: event.target.value,
      });
    }

    handleSignin(){
      if(this.state.email==="admin"&&this.state.password==="admin"){
        this.handleClose();
        this.closeMessage();
        this.setState({
          loggedIn:true
        })
      }
      else{
        this.setState({
          errorMessage:"either userId or password is wrong"
        })
        this.openMessage();
      }
    }

    render(){
    return (
    <div>
    {this.state.loggedIn ? <Redirect to="/admin" /> : null}
      <div className="button-header">
      <Button variant="outlined" className="button-header" onClick={this.handleClickOpen}>
        Admin Login
      </Button>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={this.state.errorStatus}
      >
        <MySnackbarContentWrapper
          onClose={this.closeMessage}
          variant={this.state.messageVariant}
          message={this.state.errorMessage}
        />
      </Snackbar>
      <Dialog open={this.state.dialogstatus} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">USER LOGIN</DialogTitle>
        <DialogContent>
        <form>
          <TextField
            autoFocus
            margin="dense"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            onChange={this.handleChange}
          />
          <TextField
            margin="dense"
            name="password"
            label="password"
            type="password"
            fullWidth
            onChange={this.handleChange}
          />
          </form>
        </DialogContent>
        <DialogActions>
          <Button type="submit" onClick={this.handleSignin} color="primary">
            Login
          </Button>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
  }
}

export default AdminLogin;
