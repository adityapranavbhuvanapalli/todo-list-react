import React, { Component } from 'react';
import { Paper, Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import logo from './logo.svg';
import './App.css';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

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

  addTask = (task) => {
    task.id=Math.random()
    // const newId = this.state.tasks.length+1;
    this.setState(state => {
      const tasks = [
        ...state.tasks, 
        task    
      ];
 
      return {
        tasks
      };
    });
  }

  render(){
    return (
      <div className="App">
        <Paper elevation={3}>
          <AppBar position="static">
            <Typography variant="h4">To-do Tracker</Typography>
          </AppBar>
          <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask}/>
          <AddTask addTask={this.addTask}/> 
        </Paper>
      </div>
    );
  }
}

