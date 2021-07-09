import React, { useState, useContext } from "react";
import "./Todo.scss";

// todo Component
import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import DoneTodo from "./DoneTodo";
import Button from "./Button";
import Dice from "./Dice";

// contex Provider

import { ThingsProvider } from "./context/contex";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [btnText, setBtnText] = useState("Show");
  // Delete Todo

  const delTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const delAllTodos = () => {
    setTodos([]);
    dispalyNone = {
      display: 'none'
    }

  };
  // on Double tap
  const onCheked = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  //btn handlers
  const btnHandler = () => {
    setIsShown(!isShown);
    if (btnText == "Hide") {
      setBtnText("Show");
    } else {
      setBtnText("Hide");
    }
  };

  // form
  const addTodos = (todo) => {
    let id = Math.floor(Math.random() * 10000 + 1);
    let newTodo = { id, ...todo };
    setTodos([...todos, newTodo]);
  };

  let d = new Date();
  let day = d.toLocaleString("en-us", { weekday: "long" });
  let date = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();


  return (
    <ThingsProvider value={todos}>
      <div className="todoContainer">
        <Header day={day} date={date} month={month} year={year} />
        <TodoForm addTodo={addTodos} />

        {todos.length == 0 ? (
          <Dice />
        ) : (
          <div className="mainContainer">
          
            <TodoList  onDelete={delTodo} onToggle={onCheked} />

            {isShown ? <DoneTodo  todos={todos} onToggle={onCheked} onDelete={delTodo}/> : null}
          </div>
        )}
        <div className="btnHolder">
          {todos.find((todo) => todo.isDone == true) ? (
            <Button text={`${btnText} Completed`} onClick={btnHandler}  />
          ) : null}

          {todos.length !== 0 ? 
          <Button text="Clear All" onClick={delAllTodos} />
          : null }
        </div>
       
      </div>
    </ThingsProvider>
  );
}
