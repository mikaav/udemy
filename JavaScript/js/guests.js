var guestList = ["Angela", "Mikayel", "Henrikh", "Lilit", "Areg"];
var guestName = prompt("What is your name?");

if (guestList.includes(guestName)) {
  alert("Welcome!");
} else {
  alert("May be next time!");
}

//--------------------------------------------------------------------------------------------------

var output = [];
var count = 1;
function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
  } else if (count % 3 === 0) {
    output.push("Fizz");
  } else if (count % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(count);
  }

  count++;
  console.log(output);
}

//--------------------------------------------------------------------------------------------------

function whosPaying(names) {
  var numberOfPeople = names.lenght;
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
  var randomPerson = names[randomPersonPosition];
  return randomPerson + " is going to buy lunch today!";
}

//---------------------------------------------------------------------------------------------------

var numberOfBottles = 99;
while (numberOfBottles >= 0) {
  var bottleWord = "bottle";
  if (numberOfBottles === 1) {
    bottleWord = "bottles";
  }
  console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
  console.log(numberOfBottles + " " + bottleWord + " of beer,");
  console.log("Take one down, pass it around,");
  numberOfBottles--;
  console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

//------------------------------------------------------------------------------------------------------

function fibonacciGenerator(n) {
  var output = [];
  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    return output[(0, 1)];
  } else {
    output = [0, 1];

    for (var i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }

  return output;
}
