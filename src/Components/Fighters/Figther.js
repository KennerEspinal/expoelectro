import React from "react";

function Fighters(props) {
  return (
    <div>
      {props.fighters.map((fighter, index) => (
        <p key={index}>{fighter}</p>
      ))}
    </div>
  );
}

export default Fighters