import React from "react";
import "./Fighter.css";


function Fighters({ fighters }) {
  return (
    <ul>
      {fighters.map((fighter, index) => (
        <p className="text-center" key={index}>{fighter}</p>
      ))}
    </ul>
  );
}

export default Fighters;
