import React from "react";
import { FaDice } from "react-icons/fa";
function Dice() {
  return (
    <article className="noTask">
      <FaDice className="diceIcon" />
      <h5>Time to Chill you have no todos.</h5>
    </article>
  );
}

export default Dice;
