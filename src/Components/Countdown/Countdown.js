import React, { useState, useEffect, useRef } from "react";
import Countdown from "react-countdown";
import Fighters from "../Fighters/Fighter";
import "./Countdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faStop,
  faUndo,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

function CountdownTimer() {
  const [fighters, setFighters] = useState([]);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countdownRef = useRef(null);

  const handlePlayPause = () => {
    setIsTimerRunning(!isTimerRunning);
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    if (countdownRef.current) {
      countdownRef.current.getApi().stop();
      countdownRef.current.getApi().start();
      setIsTimerRunning(true);
      setIsPaused(false);
    }
  };

  const handleStop = () => {
    if (countdownRef.current) {
      countdownRef.current.getApi().stop();
      setIsTimerRunning(false);
      setIsPaused(false);
    }
  };

  useEffect(() => {
    fetch("https://6438098cc1565cdd4d647cb0.mockapi.io/users")
      .then((res) => res.json())
      .then((data) => {
        const fighterNames = data.map((fighter) => fighter.name);
        setFighters(fighterNames);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching fighters:", error);
      });
  }, []);

  return (
    <div className="Container">
      <h1 className="text-center display-1 font-weight-bold">Cronómetro</h1>
      <div className="row justify-content-center text-center">
        <Countdown
          className="timer"
          ref={countdownRef}
          date={Date.now() + 120000}
          autoStart={isTimerRunning}
          controlled={false}
          onPause={() => setIsPaused(true)}
          onResume={() => setIsPaused(false)}
          onComplete={() => {
            setIsTimerRunning(false);
            setIsPaused(false);
          }}
        />
      </div>
      <div className="row justify-content-center mt-2">
        <button className="col-1 btn btn-primary m-1" onClick={handlePlayPause}>
          <FontAwesomeIcon icon={isPaused ? faPlay : faPause} />{" "}
          {isPaused ? "Play" : "Pause"}
        </button>

        <button className="col-1 btn btn-danger m-1" onClick={handleStop}>
          <FontAwesomeIcon icon={faStop} /> Stop
        </button>

        <button className="col-1 btn btn-warning m-1" onClick={handleReset}>
          <FontAwesomeIcon icon={faUndo} /> Reset
        </button>
      </div>
      <h2 className="text-center mt-4 mb-2">Peleadores actuales:</h2>
      <Fighters fighters={fighters} />
    </div>
  );
}

export default CountdownTimer;
