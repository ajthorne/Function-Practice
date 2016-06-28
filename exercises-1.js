// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.
function sum(num1, num2) {
  return num1 + num2;
}
// sum();
console.assert(sum(3,1) === 4, 'three plus one equals 4');
console.assert(sum(3,1) === 5, 'three plus one equals 5');

// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.
function avg(num1, num2, num3) {
  return (num1 + num2 + num3)/3;
}
// avg();
console.assert(avg(1,2,3) === 2, 'avg is 2');
console.assert(avg(4,5,6) === 6, 'avg is 6');

// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length
function getLength(string) {
  return string.length;
}
// getLength();
console.assert(getLength("Amanda") === 6, 'Amanda is six length');
console.assert(getLength("Amanda") === 5, 'Amanda is five length');



// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.
function greaterThan(num1, num2) {
  if (num2 > num1) {
    return true;
  }
  else {
    return false;
  }
}
// greaterThan();
console.assert(greaterThan(5,1) === 5, 'five is greater than one');
console.assert(greaterThan(1,2) === 1, 'one is greater than two');



// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formatted like "Hello, Name!" where *Name*
// is the parameter that was passed in.
function greet(Name) {
  return 'Hello, ' + Name + '!';
}

console.assert(greet("Amanda") === 'Hello, Amanda!');
console.assert(greet("Amanda") === 'Hello, World!', 'hello world');




// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
function madLib(person, ingverb, adjective, noun) {
  return person + ' ' + 'likes ' + ingverb + ' ' + adjective + ' ' + noun + ' all day.';
}

console.assert(madLib("Amanda", "dancing", "tall", "cats" === "Amanda likes dancing tall cats all day."));
