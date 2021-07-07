import React, { useState, Children, useContext } from "react";

import Todo from "./Todo";
import Dice from "./Dice";
import TodoContext from "./context/contex";
function TodoList({ onDelete, onToggle }) {
let isCheck = false;
  const todos = useContext(TodoContext);

  let ramianTodo = todos.filter((todo) => todo.isDone == false);
  let total = ramianTodo.length;
  return (
  <div className="listCon">
      {total == 0 ? null : <p>{`Tou have ${total} pending item`}</p>}
    <div className="todoListContainer">
    
      {total == 0 ? (
        <Dice />
      ) : (
        ramianTodo.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
              onCheck={isCheck}
            />
          );
        })
      )}
    </div>
  </div>


  );
}

export default TodoList;
