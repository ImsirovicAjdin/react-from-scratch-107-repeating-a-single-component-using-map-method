import Car from './Car';
import './App.css';

function App() {

  const data = [
    {
       make: "BMW",
       color: "blue",
       year: 2011,
       imgUrl: "https://www.codingexercises.com/img/2022-01-25/001-bmw-blue.jpg"
    },
    {
       make: "Mercedes",
       color: "gray",
       year: 2018,
       imgUrl: "https://www.codingexercises.com/img/2022-01-25/002-mercedes-gray.jpg"
    },
    {
       make: "Toyota",
       color: "gray",
       year: "new",
       imgUrl: "https://www.codingexercises.com/img/2022-01-25/003-toyota-gray.jpg"
    },
    {
       make: "Alfa Romeo",
       color: "red",
       year: 2012,
       imgUrl: "https://www.codingexercises.com/img/2022-01-25/004-alpha-romeo-red.jpg"
    }
 ]

  return (
    <div className="cars">
      <h1>My favorite cars</h1>
      {data.map(car => <Car make={car.make} color={car.color} year={car.year} carImgSrc={car.imgUrl} /> )}
    </div>
  );
}

export default App;
