// question 1
// I created a variable called sayHello, and the value Hello world

var sayHello = "Hello world";

// question 2
// I created a variable called person, and gave it 2 properties. The keys is name and age, and the value is Karsten and 23.

var person = {
  name: "Karsten",
  age: 23
};

// question 3
// here I created a variable called outOfStock and assign it with a boolean value "true". I created an if else statement, that checks the value of outofstock. If it is true, it will output "Out of stock", if it is false, it will output "in stock".

var outOfStock = true;
if (outOfStock === true) {
  console.log("Out of stock");
}
else {
  console.log("In stock");
}

// question 4
// I made an array of five numbers and loop through the array and console log each value

var arrayOfFiveNumbers = [2, 3, 5, 7, 8];
for(var index = 0; index < arrayOfFiveNumbers.length; index++) {
  console.log(arrayOfFiveNumbers[index]);
}


// question 5
// I made a for loop that starts at 15 and count each number up to 25

for(var counter = 15; counter <= 25; counter++) {
  console.log(counter);
}

// question 6
// Here I used the same loop from question 5, and made it only log the value of the counter variabel if it is equal to 20

for(var counter2 = 15; counter2 <= 25; counter2++)
if (counter2 === 20){
  console.log(counter2);
}

// question 7
// I created an array of two objects. I made that each object have the same three properties (with different values).
//I loop through the array and console log the number value and the boolean value

var users = [
  {
    name: "James",
    age: 23,
    male: true
  },
  {
    name: "Jane",
    age: 30,
    male: false
  }
];

for(var counter3 = 0; counter3 < users.length; counter3++){
  console.log(users[counter3].age);
  console.log(users[counter3].male);
}


// question 8
// I created a function called whatIDontLike that accepts one argument, I called the argument "dislikedItem".
// Inside the function I logged the string "I don´t like" together with the argument dislikedItem.
// I called the function whatIDontLike and passed in the string/value of "working".

function whatIDontLike(dislikedItem) {
  console.log("I don´t like " + dislikedItem);
}
whatIDontLike("working");

// question 9
// I created a functions that accepts 2 argument, I called the arguments number1 and number2.
// Inside the function I subtracted the second argument from the first. And console log the result.

function mySubtractFunction(number1, number2) {
  console.log(number1 - number2);
}
mySubtractFunction(3, 1);

// question 10
// I created an empty array. I created a functions called addToMyCakes and the function accept 1 argument. Inside the function I added the argument by using the variabel name and .push. I called the function and passed in "strawberrycake" as a string value.

var myCakes = []
function addToMyCakes(cake) {
  myCakes.push(cake);
}
addToMyCakes("strawberrycake");
console.log(myCakes);

// level 2

// question 1
// Here I copyed the loop from question 5. And to find out what the modulus % operater was I had to google it. After a youtube tutorial I understood it. And wrote the code that makes it to display only even numbers. So when the number is equal 0 it will display because then it is a even number.
for(var counter = 15; counter <= 25; counter++) {
  if (counter % 2 === 0) {
    console.log(counter);
  }
}

// question 2
// Here I made a variabel called innerFunction and made it equal a function, that logs the sentence "I am a function". Then I created another function called outerFunction. Inside the outerFunction I called the argument that I named myCaller. Then I called the function outerFunction and passed in the innerFunction variabel.

var innerFunction = function() {
  console.log("I am a function");
}

function outerFunction(myCaller){
  myCaller();
}

outerFunction(innerFunction);
