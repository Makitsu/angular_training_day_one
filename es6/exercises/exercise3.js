// Exercise 3

const person = {
    name: "Alice",
    age: 25,
    gender: "female"
};

const people = [
    { name: "Alice", age: 25, gender: "female" },
    { name: "Bob", age: 30, gender: "male" },
    { name: "Charlie", age: 35, gender: "male" }
];

// 1 - Use object destructuring to extract the name property from the person object.

// 2 - Use object destructuring to extract the age and gender properties from the person object and assign them to variables with different names.

// 3 - Define a function called printPerson that takes an object with name, age, and gender properties as an argument and logs a message to the console with the person's name and age.

// 4 - Use array destructuring to extract the first and third elements from the people array and assign them to variables with different names.

const arr = [1, 2, 3];
const arrCopy = [...arr];
console.log(arrCopy); // [1, 2, 3]


const personCopy = { ...person, occupation: "programmer" };
console.log(personCopy); // { name: "Alice", age: 25, gender: "female", occupation: "programmer" }

// 5 - Define a function called sumNumbers that takes an arbitrary number of arguments and returns the sum of those arguments.
// Use the spread syntax (...) to pass an array of numbers as arguments to the function.

class Person {
    constructor(name = "Unknown", age = 0, gender = "unknown") {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
}


// 6 - Create two inner class methods to return the number of letter from the name as a number, and another method to compare it with the age. 

// 7 - Unpack methods to access it from outside the class