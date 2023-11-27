import React from "react";

const Task2 = () => {
  const date = new Date();

  let time = date.toLocaleTimeString();
  let d = date.toLocaleDateString();

  return (
    <>
      <h2>Syed Ahsan Manzar</h2>
      <p>{time}</p>
      <p>{d}</p>
    </>
  );
};

export default Task2;
