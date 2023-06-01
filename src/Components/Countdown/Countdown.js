import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import Fighters from "../Fighters/Figther";

function CountdownTimer() {
  const [fighters, setFighters] = useState([]);

  useEffect(() => {
    //Get Fighters from API
    fetch("https://6438098cc1565cdd4d647cb0.mockapi.io/users")
      .then((res) => res.json())
      .then((data) => {
        // Aquí puedes verificar la estructura de la respuesta JSON
        // y acceder a la propiedad correcta que contiene los luchadores
        const fightersData = data.map((fighter) => fighter.name);
        setFighters(fightersData);
      })
      .catch((error) => {
        console.error("Error fetching fighters:", error);
      });
  }, []);
  return (
    <div className="Cronometro">
      <h1 className="text-center mb-4">Timer</h1>
      <div className="row justify-content-center text-center">
        <Countdown date={Date.now() + 120000} />
      </div>
      <h2 className="text-center mt-4 mb-2">Current Fighters:</h2>
      <Fighters fighters={fighters}/>
    </div>
  );
}

export default CountdownTimer;
