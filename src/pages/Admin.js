import React,{Component} from 'react';
import '../App.css';
import AdminAppBar from '../components/AdminAppBar'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Admin extends Component {
constructor(props){
  super(props)
  this.handleAddClick = this.handleAddClick.bind(this)
  this.state={
    search:"",
    start:0,
    end:0
  }
}
  handleAddClick(event){
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render(){
    return (
      <div className="back-ground">
      <AdminAppBar />
         <div style={{margin:'10px'}}>
         <ExpansionPanel>
          <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
          >
          <Typography >You can add a house here</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>

          </ExpansionPanelDetails>
          </ExpansionPanel>
       </div>
       </div>
    );
  }
}

export default Admin;
