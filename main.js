// Write a program that prints out the numbers 1 to 100 (inclusive).
// If the number is divisible by 3, print Crackle instead of the number.
// If it's divisible by 5, print Pop.
// If it's divisible by both 3 and 5, print CracklePop.
// Written in JavaScript

// declare variable i, initialize to 1
// set conditional to check if i is less than 100
// if true, increase i by 1
for (i = 1; i <= 100; i++) {
  // declare variable message, initialize to empty string
  let message = '';
  // if i is divisible by 3,
  // concatenate 'Crackle' to message
  if (i % 3 === 0) {
    message += 'Crackle';
  }
  // if i is divisible by 5,
  // concatenate 'Pop' to message
  if (i % 5 === 0) {
    message += 'Pop';
  }
  // if the length of message is greater than 0 (not empty),
  // output message to console
  // else,
  // output value of i
  if (message.length > 0) {
    console.log(message);
  } else {
    console.log(i);
  }
}
