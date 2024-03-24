import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    console.log("timer");
    if (isRunning) {
      timer = setInterval(() => {
        console.log(time)
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  });

  const startStopWatch = () => {
    setIsRunning(true);
    console.log("start");
  };
  const stopStopWatch = () => {
    setIsRunning(false);
    console.log("stop");
  };
  const resetStopWatch = () => {
    setIsRunning(false);
    setTime(0);
    console.log("reset");
  };

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  return (
    <div className="stopwatch-container">
      <h1>Stopwatch</h1>
      <div>
        <span>{hours}:</span>
        <span>{minutes}:</span>
        <span>{seconds}</span>
      </div>
      <div>
        {!isRunning ? (
          <button className="stopwatch-buttons" onClick={startStopWatch}>
            Start
          </button>
        ) : (
          <button className="stopwatch-buttons-2" onClick={stopStopWatch}>
            Stop
          </button>
        )}
        <button className="stopwatch-buttons" onClick={resetStopWatch}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
