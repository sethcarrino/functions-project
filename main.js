// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2) {
  if (num1 > num2) {
    console.log("FLAWLESS VICORY");
  } else {
    console.log("WRONG!")
  }

}

max(777, 666);







// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(x, y, z) {
  if (x > y && x > z) {
    console.log("I WIN AGAIN!");
  } else {
    console.log("WRONG!");
  }
}
maxOfThree(9000, 21, 987);



// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char) {
  if (char === "a" || char === "i" || char === "e" || char === "o" || char === "u") {
    console.log("MY MOM TEACHES ENGLISH!");
  } else {
    console.log("I SHOULD HAVE LISTENED!");
  }
}

isVowel("i");

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.



function sum(num1, num2) {
  return num1 + num2;
}

let answer = sum(4, 4)

console.log(answer);


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

let theAnswer = avg(98, 56, 787);

console.log(theAnswer);
// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(string) {
  return string.length;
}

console.log(getLength("SUPERCALIFRAGILISTICEXPIALIDOCIOUS"));
// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(num1, num2){
  if (num1 > num2){
    console.log(true);
  }
  else{
    console.log(false);
  }
}

greaterThan(897, 6);

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(name){
  return "Hello," + " " + name;
}

console.log(greet("Hercules"));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.


function madlib(){
  
}
