import Car from './Car';
import './App.css';
// import data from './data';
import data from './data2.json';

function App() {

  return (
    <div className="cars">
      <h1>My favorite cars</h1>
      {data.map(car => (
        <Car
          key={Math.floor((Math.random() * 10000) +1)}
          make={car.make}
          color={car.color}
          year={car.year}
          carImgSrc={car.imgUrl} />
      ))}
    </div>
  );
}

export default App;
