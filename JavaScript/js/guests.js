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
