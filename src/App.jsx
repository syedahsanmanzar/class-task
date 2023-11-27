import React from 'react';
import "./App.css";
import Task1 from './assets/Components/Task1.jsx';
import Task2 from './assets/Components/Task2.jsx';
import Task3 from './assets/Components/Task3.jsx';

const App = () => {
  return (
    <>
    <h1>Task 01</h1>
      <Task1 />

    <h1>Task 02</h1>
      <Task2 />

    <h1>Task 03</h1>
      <Task3 />
    </>
  )
}

export default App
// // task 03
// import React, { useState } from "react";
// import "./App.css";

// const App = () => {

//   const date = new Date();

//   let time = date.toLocaleTimeString();

//   let [clock, setClock] = useState(time);

//   setTimeout(() => {
//     setClock(time)
//   }, 1000);

//   return (
//     <>
//       <h1>Digital Clock</h1>
//       <p>{clock}</p>
//     </>
//   )
// };

// export default App;

// // task 02
// import React from "react";
// import './App.css'

// const App = () => {
//   const date = new Date();

//   let time = date.toLocaleTimeString();
//   let d = date.toLocaleDateString();

//   // let day = date.toString();

//   // let day = date.getDate();
//   // let month = date.getMonth() + 1;
//   // let year = date.getFullYear();

//   return (
//     <>
//       <h1>Syed Ahsan Manzar</h1>
//       <h4>{time}</h4>
//       <h4>{d}</h4>
//     </>
//   );
// };

// export default App;

// task 01
// import React from "react";

// const App = () => {
//   // const d = new Date().getHours();
//   const d = new Date(2023,11,22,20).getHours();

//   if (d >= 1 && d <= 11) {
//     return <h1>Hello Sir, Good Morning</h1>;
//   } else if (d >= 12 && d <= 19) {
//     return <h1>Good After Noon</h1>;
//   } else if (d > 19) {
//     return <h1>Good Night</h1>;
//   }

//   return (
//     <>

//     </>
//   );
// };

// export default App;
