import React,{Component} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MySnackbarContentWrapper from './snackBar';
import Button from '@material-ui/core/Button';
import fire from './Config.js';
class LandingPage extends Component {
  constructor(props){
    super(props)
    this.state={
      errorMessage:"",
      variant:"error",
      show:false
    }
    this.userLogout = this.userLogout.bind(this);
  }
  userLogout(){
    fire.auth().signOut().then(()=>{
      // Sign-out successful.
      this.setState({
        errorMessage:"successfully logged out",
        variant:"success",
        show:true
      })
    }).catch((error)=>{
      this.setState({
        errorMessage:error.message,
        variant:"error",
        show:true
      })
    });

  }
  render(){
    return (
      <div>
      <div className="button-header">
      <Button variant="outlined" className="button-header" onClick={this.userLogout}>
        Logout
      </Button>
      </div>
          <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.show}
        >
          <MySnackbarContentWrapper
            onClose={()=>{this.setState({
              show:false
            })}}
            variant={this.state.variant}
            message={this.state.errorMessage}
          />
        </Snackbar>
      </div>
    );
  }
}

export default LandingPage;
