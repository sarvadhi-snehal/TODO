import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
// import { fadeIn } from "react-animations";
import Fade from "react-reveal/Fade";
// import LightSpeed from "react-reveal/LightSpeed";

const Todo = ({ todo, onDelete, onToggle, onCheck }) => {
  const [isShown, setIsShown] = useState(false);

  const trashHandler = () => {
    setIsShown(!isShown);
  };

  // const setComplete = (id) => { };

  return (
    < Fade right>
      <div
        className="listContianer"
        onMouseEnter={trashHandler}
        onMouseLeave={() => setIsShown(false)}>
        <input
          type="checkbox"
          defaultChecked={onCheck}
          onChange={() => onToggle(todo.id)}
          
        />
        <p>{todo.todo}</p>
        {isShown ? (
          <Fade duration={500} right>
            <span className="trashIcon">
              <FaTrash className="icn" onClick={() => onDelete(todo.id)} />
            </span>
          </Fade>
        ) : null}
      </div>
    </Fade>
  );
};

export default Todo;
