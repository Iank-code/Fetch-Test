import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Car() {
  const { id } = useParams();
  console.log(id);

  const [car, setCar] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/cars/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCar(data)
      });
  }, []);
  return (
    <div>
      <h1>Display each car here</h1>
      <h2>Brand: {car && car.brand}</h2>
      <img src={car && car.image } />
    </div>
  );
}

export default Car;
