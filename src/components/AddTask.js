import React, {Component} from 'react'
import { Button, TextField } from '@material-ui/core';

export default class AddTask extends Component {

    state = {
        name: '',
        desc: ''
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.name==='' && this.state.desc==='')
            alert("Enter all the task details")
        else{
            this.props.addTask(this.state);
            this.setState({
                name:'',
                desc:''
            })
        }
    }

    render(){
        return (
            <div>
                <form onSubmit={e=> this.handleSubmit(e)}>
                    <TextField label="Task Name"
                        value={this.state.name}
                        onChange={e=>{this.setState({name: e.target.value})}}
                    />
                    <br />
                    <TextField label="Task Desc"
                        value={this.state.desc}
                        onChange={e=>{this.setState({desc: e.target.value})}}
                    />
                    <br />               
                    <Button color="primary" onClick={e=>{this.handleSubmit(e)}}>Add new Task</Button>
                </form>
            </div>
        )
    }
}