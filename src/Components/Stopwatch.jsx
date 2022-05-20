import { useEffect, useRef, useState } from "react";

export const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const timerRef = useRef(null);
  const handleStop = () => {
    clearInterval(timerRef.current);
    setIsStart(false);
    timerRef.current = null;
  };
  const handleStart = () => {
    timerRef.current = setInterval(() => {
      setIsStart(true);
      setTime((prev) => prev + 1);
    }, 10);
  };
  useEffect(() => {
    if (time === 0) {
      clearInterval(timerRef.current);
    }
  }, [time]);
  var sec = 0;
  var min = 0;
  var hr = 0;
  sec = sec + Math.floor(time / 100);
  min += Math.floor(sec / 60);
  hr += Math.floor(min / 60);
  var netTime =
    (hr % 60) +
    "hr" +
    " " +
    (min % 60) +
    "m" +
    " " +
    (sec % 60) +
    "s" +
    " " +
    (time % 100);
  return (
    <div>
      <h1>Google Stopwatch</h1>
      {/* <input type="number"/> */}
      <h1>{netTime}</h1>

      {isStart ? (
        <div>
          <button onClick={handleStop}>STOP</button>
          <button
            onClick={() => {
              clearInterval(timerRef.current);
              setTime(0);
              setIsStart(false);
            }}
          >
            RESET
          </button>
        </div>
      ) : (
        <button onClick={handleStart}>START</button>
      )}
    </div>
  );
};
