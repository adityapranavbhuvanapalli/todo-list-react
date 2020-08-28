import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { makeStyles } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import BookIcon from '@material-ui/icons/Book';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
}));



const Tasks = ({tasks,deleteTask}) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        // setOpen(!task.open);
        alert("Feature under development")
        setOpen(!open)
    };

    console.log(open)

    const taskList = tasks.length ? (
        <List>
            {
                tasks.map(task => {return(
                <div>
                    <ListItem button onClick={()=>handleClick(task)} key={task.id}>
                        <ListItemAvatar>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                        </ListItemAvatar> 
                        <ListItemText
                        primary={task.name}
                        />
                        {open ? <ExpandLess /> : <ExpandMore />}
                        <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                            <DeleteIcon onClick={() => deleteTask(task.id)}/>
                        </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem className={classes.nested}>
                            <ListItemIcon>
                                <BookIcon />
                            </ListItemIcon>
                            <ListItemText primary={task.desc} />
                            </ListItem>
                        </List>
                    </Collapse>
                </div>
                )})
            }
        </List>
    )
    : (<p>Add a task to the Todo-List</p>)
    return (
        <div className="tasks">
            {taskList}
        </div>
    )
}

export default Tasks;


