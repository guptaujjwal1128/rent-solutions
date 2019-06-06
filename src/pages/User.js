import React,{Component} from 'react';
import UserHeader from '../components/UserHeader';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import fire from '../components/Config';
import alternate_image from '../media/alternate_image.png';

const styles = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 1200,
    height: 700,
  }
})

export default withStyles(styles)(class User extends Component {
  constructor(props){
    super(props)
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

  removeFilterByLocation(){
      this.setState({
        locationfilter:false,
        val:this.state.storedVal
      })
  }

  handleSlider(){
      if(this.state.pricefilter===false){
        this.setState({
          val:this.state.val.filter((item)=>{
            return(Number(item.price)<=this.state.end && Number(item.price)>=this.state.start);
            })
          })
          this.state.pricefilter = true;
      }
      else{
        this.setState({
          val:this.state.storedVal
        })
        this.state.pricefilter = false;
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
    const classes = this.props.classes;
    return (
      <div className="back-ground">
      <UserHeader />
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
            <Grid item>
            <div className="button-header">
            <Button variant="outlined" className="button-header" onClick={this.removeFilterByLocation.bind(this)}>
              Remove
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
            <Switch
              onChange={this.handleSlider.bind(this)}
              color="primary"
              />
            </Grid>
            </Grid>
            </Paper>
          </Grid>
      </Grid>

      <div className={classes.root}>
        <GridList cellHeight={250} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} rows={2} style={{ height: 'auto' }}>
            </GridListTile>
              {this.state.val.map(tile => (
            <GridListTile key={tile.url}>
              <img src={tile.url||alternate_image} alt='image coming soon' />
              <GridListTileBar
                title={<span style={{fontSize:'25px',color:'white'}}>{tile.location}</span>}
                subtitle={<span style={{fontSize:'15px',color:'red'}}>
                <span style={{fontSize:'20px',color:'green'}}>price:{tile.price}</span>
                <br />
                {tile.discription}
                </span>}
                />
            </GridListTile>
            ))}
        </GridList>
      </div>
      </div>
    );
  }
})
