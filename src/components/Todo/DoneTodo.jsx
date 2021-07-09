import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import Todo from './Todo'
function DoneTodo({ todos,onToggle, onDelete }) {
  let isCheck = true;

  let doneTodo = todos.filter((todo) => todo.isDone !== false);
  let total = Math.floor((doneTodo.length / todos.length) * 100);
  return (
    <div className="listCon">
 <p className="remain" >{`Completed task: ${total}%`}</p>
   <div className="todoListContainer">
     
      {todos.map((todo) => {
        if (todo.isDone === true) {
          return (      
              <Todo
               key={todo.id}
               todo={todo}
               onToggle={onToggle}
               onDelete={onDelete}
               onCheck={isCheck}
              />
          );
        }
      })}
    </div>
    </div>
 
  );
}

export default DoneTodo;
