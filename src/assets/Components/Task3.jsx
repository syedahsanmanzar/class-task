import React from "react";
import { useState } from "react";

const Task3 = () => {
  const date = new Date();

  let time = date.toLocaleTimeString();

  let [clock, setClock] = useState(time);

  const updateTime = ()=>{
    let time = new Date().toLocaleTimeString()
    setClock(time)
  }
  setInterval(updateTime, 1000);

  return (
    <>
      <h2>Digital Clock</h2>
      <p>{clock}</p>
    </>
  );
};

export default Task3;
