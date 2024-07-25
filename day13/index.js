// Day 13 Modules
// Tasks/Activities

// Activity 1: Creating and Exporting Modules
// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script

const { sum }  = require('./module1');

console.log('Sum', sum(2,2));

// Task 2: Create a module that exports an object representing a person with properties and method. Import and use this module in another script

const { person } = require('./module1');

console.log('Person', person.calculateBMI());

// ---------------------------------------------------------------------------------------------------------
// Activity 2: Named and Default Exports
// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script
console.log('Sum', sum(2,2));


// Task 4: Create a module that exports a single functions using default exports. Import and use this function in another script
const lolz = require('./module2');

console.log(lolz);

// -------------------------------------------------------------------------------------------------------------

// Activity 3: Importing Entier Modules
// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script
// and use its properties
const { age, gender} = person;

console.log(age, gender);

// ---------------------------------------------------------------------------------------------------------------

// Activity 4: Using Third Party Modules
// Task 6: Install a third party module (e.g., lodash) using npm. Import and use a function from this module in a script
const _ = require("lodash");
const isOdd = (num) => num % 2 != 0;
const res = _.filter([1, 2, 3, 4, 5, 6, 7, 8], isOdd);
console.log("Res >>>", res);

// Task 7: Install a third party module (e.g. axios) using npm. Import and use this module to make a network request in a script
const axios = require("axios");
const dataFromAxiosRequest = async () => {
  try {
    const res = await axios.get("https://api.kanye.rest/");
    console.log("data request using axios >>>", res.data);
  } catch (error) {
    console.log("Error >>>", error.message);
  }
};
dataFromAxiosRequest();







