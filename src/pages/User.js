import React,{Component} from 'react';
import AdminAppBar from '../components/AdminAppBar';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class User extends Component {
  render(){
    return (
      <div>
      <AdminAppBar />
      <Grid container justify="center" spacing={2}>
          <Grid item xs>
            <Paper>
            <Grid container>
            <Grid item>
            <TextField
              name = "search"
              onChange={this.handleAddClick}
              style={{ margin: 20 }}
              placeholder="enter your loaction"
              fullwidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            </Grid>
            <Grid item>
            <div className="button-header">
            <Button variant="outlined" className="button-header">
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
              id="standard-number"
              label="Start Range"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
            <TextField
              id="standard-number"
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
            <Button variant="outlined" className="button-header">
              Apply
            </Button>
            </div>
            </Grid>
            </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
      </div>
    );
  }
}

export default User;
