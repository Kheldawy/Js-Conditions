
//Hälsa användaren
let name = prompt("Enter your name:");
console.log(`Hello, ${name}!`);

// let name = prompt("Hello! What's your name?");
// alert("Nice to meet you, " + name + "!");

// Jämför två ord
let word1 = prompt("Enter the first word:");
let word2 = prompt("Enter the second word:");

if (word1.toLowerCase() < word2.toLowerCase()) {
  console.log(`${word1} comes first in the alphabet.`);
} else {
  console.log(`${word2} comes first in the alphabet.`);
}

// Är användaren vuxen?
let age = parseInt(prompt("Enter your age:"));
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are under 18.");
}

// Gissa ett djur
let animal = "lion"; 
let guess = prompt("Guess the animal I'm thinking of:").toLowerCase();

if (guess === animal) {
  alert("That's correct! Well done!"); 
  console.log("User guessed correctly: " + guess); 
} else {
  alert("That's not it, try again!"); 
  console.log("User guessed incorrectly: " + guess); 
}


// Känn igen en färg
let favoriteColor = prompt("What is your favorite color? (red, blue, green)");

if (favoriteColor.toLowerCase() === "red") {
    console.log("Red is a color of passion!");
} else if (favoriteColor.toLowerCase() === "blue") {
    console.log("Blue is a calming and peaceful color!");
} else if (favoriteColor.toLowerCase() === "green") {
    console.log("Green symbolizes nature and growth!");
} else {
    console.log("It seems you have a unique taste!");
}

// Godkänd eller inte
let score = parseInt(prompt("Enter your exam score (0-100):"), 10);

if (score >= 50) {
    console.log("Congratulations! You passed.");
} else {
    console.log("Unfortunately, you did not pass.");
}

// Vad ska vi göra idag?
let weather = prompt("How is the weather? (sunny, rainy, cloudy)");

if (weather.toLowerCase() === "sunny") {
    console.log("It's a perfect day for a picnic!");
} else if (weather.toLowerCase() === "rainy") {
    console.log("Maybe a good day to stay in and read a book.");
} else if (weather.toLowerCase() === "cloudy") {
    console.log("A walk might be nice today!");
} else {
    console.log("I'm not sure what to do in that weather.");
}

// Vilket språk talar du?
let language = prompt("What language do you speak?");

if (language.toLowerCase() === "swedish") {
    console.log("Hej! Hur mår du?");
} else if (language.toLowerCase() === "english") {
    console.log("Hello! How are you?");
} else {
    console.log("Nice to meet you!");
}

// Multipel av 5?
let number = parseInt(prompt("Enter a number:"));

if (number % 5 === 0) {
    console.log(number + " is a multiple of 5.");
} else {
    console.log(number + " is not a multiple of 5.");
}

// Ska vi gå ut?
let goOut = confirm("Do you want to go out?");

if (goOut) {
    console.log("Hope you have a great time out!");
} else {
    console.log("It's also nice to stay in and relax.");
}


// Siffra eller bokstav?
let character = prompt("Enter a character:");

if (!isNaN(character) && character.trim() !== "") {
    console.log(character + " is a number.");
} else if (character.length === 1 && /^[a-zA-Z]$/.test(character)) {
    console.log(character + " is a letter.");
} else {
    console.log("It's neither a number nor a letter.");
}

//Största av tre ord
let text1 = prompt("Enter the first word:");
let text2 = prompt("Enter the second word:");
let text3 = prompt("Enter the third word:");

let longestWord = text1;

if (text2.length > longestWord.length) {
    longestWord = text2;
}

if (text3.length > longestWord.length) {
    longestWord = text3;
}

console.log("The longest word is: " + longestWord);

// Lösenordskontroll
let password = prompt("Enter a password:");

if (password.length >= 8 && /\d/.test(password)) {
    console.log("The password is long enough and contains at least one digit.");
} else {
    console.log("The password is either not long enough or is missing a digit.");
}

// Ålderskategori
// let age = parseInt(prompt("Enter your age:"), 10);
// if (age >= 0 && age <= 12) {
//     console.log("You are a child.");
// } else if (age >= 13 && age <= 19) {
//     console.log("You are a teenager.");
// } else if (age >= 20 && age <= 64) {
//     console.log("You are an adult.");
// } else if (age >= 65) {
//     console.log("You are a senior citizen.");
// } else {
//     console.log("Invalid age.");
//  }

// Beslutstagande
let option1 = confirm("Do you want pizza?");
let option2 = confirm("Do you want sushi?");

if (option1 && option2) {
    console.log("You want both pizza and sushi!");
} else if (option1) {
    console.log("You chose pizza!");
} else if (option2) {
    console.log("You chose sushi!");
} else {
    console.log("You chose neither pizza nor sushi.");
}
