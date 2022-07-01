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

#### (3) Move the data to a separate file and import it into App.js

Add a new file, and name it `data.js`.

#### (4) Move the data to an online JSON file and fetch it from there

#### (5) Answer: What would we do if we had 100 cars?

Answer: Instead of hard-coding it, we loop over the data by:
1. Extracting the data to a separate structure
2. Looping over that data
