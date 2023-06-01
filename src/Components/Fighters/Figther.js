import React from "react";

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
