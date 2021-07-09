import React from "react";
import { FaDice } from "react-icons/fa";
import Reveal from "react-reveal/Reveal"
function Dice() {
  return (
    <Reveal>
    <article className="dice">
      <FaDice className="diceIcon" />
      <h3>Time to Chill you have no todos.</h3>
    </article>
    </Reveal>
  );
}

export default Dice;
