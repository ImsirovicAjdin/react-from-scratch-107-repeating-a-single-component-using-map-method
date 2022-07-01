import Car from './Car';
import './App.css';
import data from './data';

function App() {

  return (
    <div className="cars">
      <h1>My favorite cars</h1>
      {data.map(car => <Car make={car.make} color={car.color} year={car.year} carImgSrc={car.imgUrl} /> )}
    </div>
  );
}

export default App;
