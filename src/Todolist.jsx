import React from "react";

const TodoList = (props) =>{
    return <> 
    <div className="todo_style">
    <i class="fa fa-times"></i>
    <li>{props.text}</li>
    </div>
    
    </>
}
export default TodoList;
