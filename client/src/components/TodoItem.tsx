import React from 'react';
import classes from './TodoItem.module.css';
const TodoItem: React.FC<{onRemoveTodo:(event:React.MouseEvent)=>void,text:string}>= (props) =>{

    return (
        <li onClick={props.onRemoveTodo} className={classes.item}>{props.text}</li>
    );
};

export default TodoItem;