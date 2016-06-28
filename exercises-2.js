// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.assert(max(5,9) === 9);
console.assert(max(5,9) === 5, 'five is greater than nine');


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}
console.assert(maxOfThree(5,9,3) === 9);
console.assert(maxOfThree(5,9,3) === 5, '5 is greater than 3 and 9');

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char) {
    if (char === 'a') {
        return true;
    } else if (char === 'e') {
        return true;
    } else if (char === 'i') {
        return true;
    } else if (char === 'o') {
        return true;
    } else if (char === 'u') {
        return true;
    } else {
        return false;
    }
}

console.assert(isVowel('a') === true);
console.assert(isVowel('x') === true, 'x is a vowel');

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase) {
    var newPhrase = phrase.split('');
    var endPhrase = '';

    for (var i = 0; i < newPhrase.length; i++) {
        if (newPhrase[i] !== 'a' && newPhrase[i] !== 'e' && newPhrase[i] !== 'i' && newPhrase[i] !== 'o' && newPhrase[i] !== 'u' && newPhrase[i] !== ' ') {
            endPhrase += (newPhrase[i] + 'o' + newPhrase[i]);
        } else {
            endPhrase += newPhrase[i];
        }
    }
    return endPhrase;
}

console.assert(rovarspraket('dinner is ready') === 'dodinonnoneror isos roreadodyoy');

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(backwards) {
    return backwards.split('').reverse().join('');
}
//MDN

console.assert(reverse('cats are awesome') === 'emosewa era stac');
