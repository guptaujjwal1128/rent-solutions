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

  class UserLogin extends Component {
    constructor(props){
      super(props);
      this.handleClickOpen = this.handleClickOpen.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSignin = this.handleSignin.bind(this);
      this.handleSignup = this.handleSignup.bind(this);
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

    handleSignin(event){
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).catch((error)=>{
          if(error){
          this.setState({
            errorMessage:error.message
          })
          this.openMessage();
        }
        else{
          this.closeMessage();
          this.handleClose();
        }
      });
    }

    handleSignup(event){
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).catch((error)=>{
          if(error){
          this.setState({
            errorMessage:error.message
          })
          this.openMessage();
        }
        else{
          this.closeMessage();
          this.handleClose();
        }
      });
    }

    render(){
      var{loggedIn} = this.props;
    return (
    <div>
      <div className="button-header">
      <Button variant="outlined" className="button-header" onClick={this.handleClickOpen}>
        User Login
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
          <Button onClick={this.handleSignup} color="primary">
            Sign Up
          </Button>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
        <p className="notice-dialog">
        Note:If you are already a user,then Login, otherwise signup.
        </p>
      </Dialog>
    </div>
  );
  }
}

export default UserLogin;
