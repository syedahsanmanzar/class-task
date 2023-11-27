import React from "react";

const Task1 = () => {
  // const d = new Date().getHours();
    const d = new Date(2023,11,22,20).getHours();

    if (d >= 1 && d <= 11) {
      return <h2>Hello Sir, Good Morning</h2>;
    } else if (d >= 12 && d <= 19) {
      return <h2>Good After Noon</h2>;
    } else if (d > 19) {
      return <h2>Good Night</h2>;
    }

  return (
    <></>
  );
};

export default Task1;
