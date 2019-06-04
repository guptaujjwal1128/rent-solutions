import React,{Component} from 'react';
import '../App.css';
import AdminHeader from '../components/AdminHeader.js'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import fire from '../components/Config';

class Admin extends Component {
constructor(props){
  super(props)
  this.changeState = this.changeState.bind(this)
  this.handleAdd = this.handleAdd.bind(this)
  this.state={
    location:"",
    price:0,
    discription:""
  }
}
  changeState(event){
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleAdd(){
    if(this.state.location!==""&&this.state.price!==0&&this.state.description!==""){
    fire.database().ref('users/').push({
      location:this.state.location,
      price:this.state.price,
      discription:this.state.discription
    });
    this.setState({
      location:"",
      price:0,
      discription:""
    })
  }
  else{
    alert('mentioned fields are empty')
  }
  }

  render(){
    return (
      <div className="back-ground">
      <AdminHeader />
         <div style={{margin:'10px'}}>
         <ExpansionPanel>
          <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
          >
          <Typography variant='h3'>ADD A HOUSE</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <TextField
            autoFocus
            name="location"
            label="location"
            type="text"
            fullWidth
            onChange={this.changeState}
            value={this.state.location}
          /><TextField
            autoFocus
            name="price"
            label="price"
            type="number"
            fullWidth
            onChange={this.changeState}
            value={this.state.price}
          /><TextField
            autoFocus
            name="discription"
            label="discription"
            type="text"
            fullWidth
            onChange={this.changeState}
            value={this.state.discription}
          />
          <div className="button-header">
          <Button variant="outlined" className="button-header" onClick={this.handleAdd}>
            Add
          </Button>
          </div>
          </ExpansionPanelDetails>
          <Typography >You can add a house here</Typography>
          </ExpansionPanel>
       </div>
       </div>
    );
  }
}

export default Admin;
