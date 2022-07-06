import React, { useEffect } from "react";
import Car from "./Car";
import "./App.css";

function App() {
  const [carsData, setCarsData] = React.useState([]);

  const getCarsData = () => {
    fetch("https://codingexercises.com/cars2.json")
      .then((response) => response.json())
      .then((data) => setCarsData(data))
  };

  useEffect(() => {
    getCarsData();
  }, []);

  return (
    <div>
      {carsData.map((car) => (
        <Car
          key={Math.floor(Math.random() * 10000 + 1)}
          make={car.make}
          color={car.color}
          year={car.year}
          carImgSrc={car.imgUrl}
        />
      ))}
    </div>
  );
}

export default App;
