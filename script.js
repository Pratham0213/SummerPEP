// function sum(a, b, cb) {
//   cb(a + b, null);
// }
// let a = 10;
// let b = 20;

// sum(a, b, (data, error) => {
//   console.log(data);
// });
// var fruitBasket = [7];
// const Basket = [20];
// console.log(typeof fruitBasket);
// console.log(typeof Basket);

// fruitBasket.push("apple");
// console.log(fruitBasket);
/*
const users = [
  { firstName: "Alok", lastName: "Raj", age: 23 },
  { firstName: "Ashish", lastName: "Kumar", age: 29 },
  { firstName: "Ankit", lastName: "Roy", age: 29 },
  { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];

// return array of name (first name)who’s age is less than 30

const result1 = users.filter((users) => users.age < 30);

console.log(result1);
//synchronous means line by line execution
//promises
let promise = new Promise((resolve, reject) => {
  resolve(console.log("Promises"));
});
console.log("promisedata", promise);
promise
  .then((data) => {
    console.log("Data", data);
  })
  .catch((error) => {
    console.log("Data", data);
  });

//async await
async function getData() {
  try {
    const data = await promise;
    console.log("Data", data);
  } catch (error) {
    console.log("Error", error);
  }
}
getData();

//fetch
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });


//string
let string = `LPU`;
// meta characters in regular exp(character classes){\n;\w;\S}
//escape sequence

console.log(string.length);
//system reads with backward slash
//path with forward slash

let result = 8.3;
//interpolation
let str = `${string} ${result}`;
console.log(str);

//ARRAY
let arr = [1, 2, 3, 4, 5];

let result = arr.map((data) => {
  return data * 2;
});

console.log(result);

let result1 = arr.filter((data) => {
  return data > 3;
});

console.log(result1);

//palindrome

let str = "malayalam";
let str1 = str.split("").reverse().join("");
if (str === str1) {
  console.log("palindrome");
} else {
  console.log("not a palindrome");
}
console.log(str.split());
// Render a list in react using map(what we learnt till now) where you loop through an array of fruits and list every fruit as an <li> item

const fruits = ["apple", "mango", "banana", "orange"];

// const fruitsList = fruits.map((fruit) => {
//   return <li>{fruit}</li>;
// });

let promise = new Promise(function (resolve, reject) {
  console.log(fruits);
  resolve("Promise resolved");
});
console.log(promise);
*/
console.log(this); // will point out the windows object
let car = {
  type: "fourwheeler",
  Size: 8,
  fun: function () {
    console.log(this.type);
  },
};
// bind method is used to prevent this();

let car1 = {
  type: "fourwheeler",
  Size: 8,
  fun: function () {
    console.log(this.type);
  },
};

car.colour = "VIBGYOR";
console.log(car);

let arr = [1, 2, 3, 4, 6, 7, 8, 9];
for (const value in arr) {
  console.log(arr[value]);
}
