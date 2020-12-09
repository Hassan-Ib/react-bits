import React, { useState, useEffect } from "react";
import "./index.css";

const data = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  day: new Date().getDate(),
  hour: new Date().getHours(),
  min: 0,
};

const App = () => {
  const [time, setTime] = useState(data);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [laps, setLap] = useState(0);

  function timeSetting({ year, month, day, hour, min }) {
    setLap(true);
    const timeNow = new Date().getTime();
    console.log(min);
    const newTime = new Date(year, month, day, hour, min).getTime();
    console.log(newTime, min);

    const myHour = Math.floor((newTime - timeNow) / (60 * 60 * 1000));
    const minutes = Math.floor((newTime - timeNow) / (60 * 1000)) % 60;
    const seconds = Math.floor((newTime - timeNow) / 1000) % 60;
    // if (minutes === 0 && seconds < 1) return setLap(false);
    setMin(minutes);
    setHour(myHour);
    setSec(seconds);
  }

  useEffect(() => {
    const minute = parseInt(prompt("how many min : "));
    console.log(minute);
    clearInterval(interval);

    const interval = setInterval(() => {
      timeSetting({ ...time, min: minute });
    }, 1000);
    // return () => {
    //   if (min < 1) {
    //     clearInterval(interval);
    //   }
    };
  }, []);

  return (
    <main>
      <h1>{laps && `hour : ${hour}/ min: ${min} /sec:${sec}`}</h1>
      <button onClick={() => {}}>start</button>
    </main>
  );
};

export default App;
