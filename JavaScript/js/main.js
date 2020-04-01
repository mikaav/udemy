var tweet = prompt("Compose your tweet:");
var tweetCount = tweet.length;
alert(
  "You have written " +
    tweetCount +
    " characters, you have " +
    (148 - tweetCount) +
    " characters remaining."
);

var name = prompt("What is your name?");
// first = name.slice(0, 1).toUpperCase();
// second = name.slice(1).toLowerCase();
// alert("Hello " + first + second);
alert("Hello " + name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase());

// Dog's age to Human's age

var dogAge = prompt("Enter your dog's age:");
var dogToHuman = (dogAge - 2) * 4 + 21;
alert("If your dog will be a Human his age will be: " + dogToHuman + " years");

// Love score canculator

prompt("What is your name?");
prompt("What is their name?");
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
alert("Your love score is " + loveScore + "%");
