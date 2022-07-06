# About this React app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is [deployed on Netlify](https://subtle-nougat-8bdf06.netlify.app/).

## Learning Concepts covered

### Extracting data to a separate component and avoiding component repetition

Learning points and commits:

#### (0) Set up the README and the starter code

Set up the shell of the README and the starter code that allows us to follow along with the commits.

#### (1) Extract data to an array of objects

Move all the hard-coded data from props in App.js to an array of objects in `data.js`.

Additionally, I'm updating the Car JSX element in App.js so that it shows the first object in the array of objects.

#### (2) Use the map method to map a component over each item in the data array

Using the map() method to display all the cars from the data array.

#### (3) Move the data to a separate file and import it into App.js"

Add a new file, and name it `data.js`.

If the contents of the `data.js` file looks like this:
```js
export default [
  {
    make: "BMW",
    color: "blue",
    year: 2011,
    imgUrl: "https://www.codingexercises.com/img/2022-01-25/001-bmw-blue.jpg",
  },
  {
    make: "Mercedes",
    color: "gray",
    year: 2018,
    imgUrl: "https://www.codingexercises.com/img/2022-01-25/002-mercedes-gray.jpg",
  },
  {
    make: "Toyota",
    color: "gray",
    year: "new",
    imgUrl: "https://www.codingexercises.com/img/2022-01-25/003-toyota-gray.jpg",
  },
  {
    make: "Alfa Romeo",
    color: "red",
    year: 2012,
    imgUrl: "https://www.codingexercises.com/img/2022-01-25/004-alpha-romeo-red.jpg",
  },
];
```

... you could import it like this in `App.js`:
```
import data from './data';
```

However, you'd be getting a warning that reads:
```
Assign array to a variable before exporting as module default import/no-anonymous-default-export
```

So instead, you can fix it like this:
```js
const data = [
    ...
]
export default data
```

#### (3b) Import local JSON file

Here's an example JSON file (named data2.json):
```json
[
    {
    "make": "BMW",
    "color": "blue",
    "year": 2011,
    "imgUrl": "https://www.codingexercises.com/img/2022-01-25/001-bmw-blue.jpg"
    },
    {
    "make": "Mercedes",
    "color": "gray",
    "year": 2011,
    "imgUrl": "https://www.codingexercises.com/img/2022-01-25/002-mercedes-gray.jpg"
    },
    {
    "make": "Toyota",
    "color": "gray",
    "year": "new",
    "imgUrl": "https://www.codingexercises.com/img/2022-01-25/003-toyota-gray.jpg"
    },
    {
    "make": "Alfa Romeo",
    "color": "red",
    "year": 2012,
    "imgUrl": "https://www.codingexercises.com/img/2022-01-25/004-alpha-romeo-red.jpg"
    }
]
```

#### (3c) Fix the warning, Each child in a list should have a unique key prop

If I open the dev tools in the browser, I'll have a warning:
*Each child in a list should have a unique "key" prop.*

To fix it, I can update the mapped `Car` JSX element like this:
```jsx
{data.map(car => <Car key={Math.floor((Math.random() * 10000) +1)} make={car.make} color={car.color} year={car.year} carImgSrc={car.imgUrl} /> )}
```

Of course, there are more elegant ways of setting a unique key, but let's stick with this makeshift solution for now.

Additionally, you can surround the mapped-over Car element in a pair of parentheses, so that it is much more readable, like this:
```jsx
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
```

#### (4) Move the data to an online JSON file and fetch it from there

To move the data to an online JSON file and fetch it from there, we'll need to understand a few more concepts, so this is something that will be done a bit later. For now, here's a non-explained update to my app that does just that. If you inspect the updated code, you will likely find several confusing things, which will be explained in upcoming lessons.

#### (5) Answer: What would we do if we had 100 cars?

Answer: Instead of hard-coding it, we loop over the data by:
1. Extracting the data to a separate structure
2. Looping over that data
