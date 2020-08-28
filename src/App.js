import React, { Component } from 'react';
import { Paper, Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import logo from './logo.svg';
import './App.css';
import Tasks from './components/Tasks'

export default class App extends Component {
  state = {
    tasks: [
      {id:1, name:'Task 1', desc:"This is a description of Task 1"},
      {id:2, name:'Task 2', desc:"This is a description of Task 2"},
      {id:3, name:'Task 3', desc:"This is a description of Task 3"}
    ]
  }

  deleteTask = (id) => {
    const tasks = this.state.tasks.filter(task => {
      return task.id !== id
    });
    this.setState({tasks});
  }

  render(){
    return (
      <div className="App">
        <Paper elevation={3}>
          <AppBar position="static">
            <Typography variant="h4">To-do List</Typography>
          </AppBar>
          <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask}/>
          <Button color="primary">Add new Task</Button>
        </Paper>
      </div>
    );
  }
}

{/* <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      News
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar> */}