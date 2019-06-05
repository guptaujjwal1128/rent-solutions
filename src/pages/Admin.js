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
    discription:"",
    uploadValue:0,
    image:null,
    url:''
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
      discription:this.state.discription,
      url:this.state.url
    });
    this.setState({
      location:"",
      price:0,
      discription:"",
    })
    alert('sucessfully added')
  }
  else{
    alert('mentioned fields are empty')
  }
  }

  updateState(e){
    this.setState({
      image:e.target.files[0]
    })
  }

  handleUpload(){
    const image = this.state.image;
    if(image!==null){
    fire.storage().ref('images/'+image.name).put(image).on('state_changed',(snapshot)=>{
      let progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);
      this.setState({
        uploadValue:progress
      })
    },(error)=>{
      alert(error);
    },()=>{
      fire.storage().ref('images').child(this.state.image.name).getDownloadURL().then((url)=>{
        this.setState({
          url:url
        })
        this.handleAdd()
      }).catch((error)=>{
        alert(error.code)
      })
    })
  }
  else{
    this.handleAdd()
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
            onChange={this.changeState}
            value={this.state.location}
          />
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
          <TextField
            autoFocus
            name="price"
            label="price"
            type="number"
            onChange={this.changeState}
            value={this.state.price}
          />
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
          <TextField
            multiline
            autoFocus
            name="discription"
            label="discription"
            type="text"
            fullWidth
            onChange={this.changeState}
            value={this.state.discription}
          />
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
          <ul>
          <li className="admin-list"><input type="file" onChange={this.updateState.bind(this)}/></li>
          <li className="admin-list"><progress value={this.state.uploadValue} max="100" /></li>
          </ul>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
          <Button variant="contained" color="primary" onClick={this.handleUpload.bind(this)}>
            Add
          </Button>
          </ExpansionPanelDetails>
          </ExpansionPanel>
       </div>
       </div>
    );
  }
}

export default Admin;
