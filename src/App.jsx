import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [cars, setCars] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((response) => {
        // console.log(response)
        return response.json();
      })
      .then((data) => {
        // console.log(data)
        setCars(data);
      });
  }, []);

  /* && If anything on the left side is true, it will perform the logic on
  the right side */
  return (
    <div>
      <h1>This is the landing page</h1>
      {cars &&
        cars.map((car, index) => {
          return (
            <div key={index}>
              <NavLink>{car.brand}</NavLink>
            </div>
          );
        })}
    </div>
  );
}

export default App;
