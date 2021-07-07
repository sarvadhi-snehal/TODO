import React, { useState,useReducer } from "react";
import { FaPlus } from "react-icons/fa";
const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const [btnTheme, setBtnTheme] = useState({});
  const changeHandler = (e) => {
    setNewTodo(e.target.value);
    setBtnTheme({ backgroundColor: "blue", color: "white" });
  };

  const handleTodoForm = (e) => {
    e.preventDefault();
    if (!newTodo && newTodo == "") {
      alert("Enter Todo");
    } else if (newTodo) {
      addTodo({ todo: newTodo, isDone: false });
    }
    setNewTodo("");
    setBtnTheme({});
  };

  return (
    <form onSubmit={handleTodoForm}>
      <input
        className="textInput"
        type="text"
        placeholder="Enter to do..."
        id="newTodo"
        name="newTodo"
        value={newTodo}
        onChange={changeHandler}
      />
      <button style={btnTheme} type="submit" className="btn" name="btn">
        <FaPlus />
      </button>
    </form>
  );
};

export default TodoForm;
