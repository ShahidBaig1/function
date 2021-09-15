// function printStars(symb = "*", symb2 = " ") {
//   for (let i = 0; i < 2; i++) {
//     let output = "";
//     for (let j = 0; j < 10; j++) output += symb + symb2;

//     console.log(output);
//     console.log("");
//   }
// }

// printStars("|", "@", "&", 34343, 688986);
// // string
// // number
// // boolean
// // arrays
// // objs
// // functions

// function shortCircut(username) {
//   username = username || "new user";

//   console.log("Welcome ", username);
// }

// shortCircut("xyz");

// function sumOf(array = []) {
//   let sum = 0;
//   for (let i of array) {
//     // i = 3
//     if (typeof i === "number") sum = sum + i;
//     // 0 + 3  ===> 3
//   }
//   return sum;
// }

// let result = sumOf([3, 3, 2, "3", "3243"]);
// console.log(result);

// function CreateNewUserObj(username = "", password = "", email = "") {
//   // let newObj = {
//   //   username: username,
//   //   password: password,
//   //   email: email,
//   // };

//   // return newObj;

//   return {
//     username: username,
//     password: password,
//     email: email,
//   };
// }

// let newUser = CreateNewUserObj(213213213, "slkdfjlk34", 3434234323);
// console.log(newUser);

// Tasks to do
// Question # 1
//The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

/* YOUR SOLUTION */
function tellFortune(
  numberofChildren = " ",
  partnerName = "",
  geoLocation = "",
  jobTitle = ""
) {
  return `you will be  ${jobTitle} in  ${geoLocation} , and married to ${partnerName} with ${numberofChildren} kids`;
}

console.log(tellFortune(5, "abc", "rawalpindi", "dev"));
console.log(tellFortune(3, "mno", "hunza", "HR"));
console.log(tellFortune(8, "xyz", "gilgit", "manager"));

////////////////////////////////////////////////////
//88888888888888888888888888888888888888888888888//
////////////////////////////////////////////////////

// Question # 2
// The Puppy Age Calculator
// You know how old your dog is in human years, but what about dog years? Calculate it!

// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

/* YOUR SOLUTION */
function calculateDogAge(puppyAge, humantodog = 7) {
  return `Your doggie is ${puppyAge * humantodog} years old in dog years!`;
}
console.log(calculateDogAge(2));
console.log(calculateDogAge(3));
console.log(calculateDogAge(4));
////////////////////////////////////////////////////
//88888888888888888888888888888888888888888888888//
////////////////////////////////////////////////////

// Question # 3
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

/* YOUR SOLUTION */

function calculateSupply(age, amount) {
  let maxAge = 100;
  let ageremain = maxAge - age;
  let supply = amount * ageremain;
  return `You will need ${supply} to last you until the ripe old age of ${ageremain}`;
}
console.log(calculateSupply(20, 5 * 360));
////////////////////////////////////////////////////
//88888888888888888888888888888888888888888888888//
///////////////////////////////////////////////////

// Question # 4
// The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcCircumfrence(radius) {
  let a = radius;

  let cir = 2 * 3.1415 * a;
  let out = "the circumference is " + cir;
  console.log(out);
}
calcCircumfrence(50);

function calcArea(radius) {
  let a = radius;
  let cir = 3.1415 * a * a;
  let output = "the area  is " + cir;
  console.log(output);
}
calcArea(50);

/* YOUR SOLUTION */

////////////////////////////////////////////////////
//88888888888888888888888888888888888888888888888//
////////////////////////////////////////////////////

// Question # 5

// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

/* YOUR SOLUTION */

function celsiusToFahrenheit(celsius) {
  let cel = celsius;
  let fahrenheit = (cel * 9) / 5 + 32;
  let output = "fahrenheit of  " + cel + " is " + " " + fahrenheit;

  console.log(output);
}
celsiusToFahrenheit(20);

function fahrenheitToCelsius(fahrenheit) {
  let fah = fahrenheit;
  let cel = ((fah - 32) * 5) / 9;
  var celout = "celsius of  " + fah + " is " + " " + cel;
  console.log(celout);
}
fahrenheitToCelsius(50);

////////////////////////////////////////////////////
//88888888888888888888888888888888888888888888888//
////////////////////////////////////////////////////
