import React,{Component} from 'react';
import AdminAppBar from '../components/AdminAppBar';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import fire from '../components/Config';

class User extends Component {
  constructor(props){
    super(props)
    this.filterByPrice = this.filterByPrice.bind(this)
    this.filterByLocation = this.filterByLocation.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handlePrice = this.handlePrice.bind(this)
    this.state={
      val:[],
      locationfilter:false,
      pricefilter:false,
      start:0,
      end:0,
      search:"",
      storedVal:[]
    }
  }

  componentWillMount(){
    fire.database().ref('users/').on('value',(snapshot)=>{
      this.setState({
        val:Object.values(snapshot.val()),
        storedVal:Object.values(snapshot.val())
      })
    })
  }

  filterByLocation(){
    if(this.state.location!==""){
    this.setState({
      locationfilter:true,
      val:this.state.val.filter((item)=>{
        return item.location===this.state.search;
        })
      })
    }
    else{
      this.setState({
        locationfilter:false,
        val:this.state.storedVal
      })
    }
  }

  filterByPrice(){
    if(this.state.end>0){
      console.log(typeof(this.state.start))
      console.log(this.state.end)
    this.setState({
      pricefilter:true,
      val:this.state.val.filter((item)=>{
        return(Number(item.price)<=this.state.end && Number(item.price)>=this.state.start);
        })
      })
    }
    else{
      this.setState({
        pricefilter:false,
        val:this.state.storedVal
      })
    }
  }

  handlePrice(event){
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleSearch(event){
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  render(){
    return (
      <div>
      {console.log(this.state.val)}
      <AdminAppBar />
      <Grid container justify="center" spacing={2}>
          <Grid item xs>
            <Paper>
            <Grid container>
            <Grid item>
            <TextField
              name = "search"
              onChange={this.handleSearch}
              value = {this.state.search}
              style={{ margin: 20 }}
              placeholder="enter your loaction"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            </Grid>
            <Grid item>
            <div className="button-header">
            <Button variant="outlined" className="button-header" onClick={this.filterByLocation}>
              Search
            </Button>
            </div>
            </Grid>
            </Grid>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper>
            <Grid container>
            <Grid item>
            <TextField
              name="start"
              onChange={this.handlePrice}
              value = {this.state.start}
              label="Start Range"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
            <TextField
              name="end"
              onChange={this.handlePrice}
              value = {this.state.end}
              label="End Range"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
            </Grid>
            <Grid item>
            <div className="button-header">
            <Button variant="outlined" className="button-header" onClick={this.filterByPrice}>
              Apply
            </Button>
            </div>
            </Grid>
            </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <div>
      {
        this.state.val.map((item,i) =>{
        return (
          <div key={i}>
      <Card>
      <CardContent>
        <Typography component="h2" gutterBottom>
          Location: {item.location}
        </Typography>
        <Typography variant="h5" component="h3">
          Price: {item.price}
        </Typography>
        <Typography variant="body2" component="p">
          {item.discription}
        </Typography>
      </CardContent>
    </Card>
    </div>
    )
      })}
      </div>
      </div>
    );
  }
}
export default User;
