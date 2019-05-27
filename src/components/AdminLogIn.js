import React,{Component,Fragment} from 'react';

class AdminLogIn extends Component {
  constructor(props){
    super(props);
    this.state={
      dialogState:false
    }
  }

  handleClick(){
    this.setState({
      dialogState:true
    })
    console.log(this.state.dialogState)
  }

  render(){
    return (
      <Fragment>
      <button className="button-header" onClick={this.handleClick.bind(this)} >
        Admin Login
      </button>
      </Fragment>
    );
  }
}

export default AdminLogIn;
