# About this React app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is [deployed on Netlify]().

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

#### (3) Move the data to a separate file and import it into App.js

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

#### (4) Move the data to an online JSON file and fetch it from there

#### (5) Answer: What would we do if we had 100 cars?

Answer: Instead of hard-coding it, we loop over the data by:
1. Extracting the data to a separate structure
2. Looping over that data
