// Do the below programs in arrow functions.
// Print odd numbers in an array
// Convert all the strings to title caps in a string array
// Sum of all numbers in an array
// Return all the prime numbers in an array
// Return all the palindromes in an array




// // Print odd numbers in an array

// const printOddNumbers = arr => arr.forEach(num => {
//     if (num % 2 !== 0) {
//       console.log(num);
//     }
//   });
  
//   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   printOddNumbers(arr); // Output: 1, 3, 5, 7, 9


// // Convert all the strings to title caps in a string array


// const convertToTitleCaps = arr => arr.map(str => str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));
// const arr = ['subaash', 'mukesh', 'praveen'];
// const titleCapsArr = convertToTitleCaps(arr);
// console.log(titleCapsArr); // Output: [ 'Subaash', 'Mukesh', 'Praveen' ]



// Sum of all numbers in an array

// const sumArray = arr => arr.reduce((total, num) => total + num);
// const arr = [1, 2, 3, 4, 5];
// const sum = sumArray(arr);
// console.log(sum); // Output: 15




// // Return all the prime numbers in an array

// const isPrime = num => {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   };

//   const getPrimeNumbers = arr => arr.filter(num => isPrime(num));
//   const arr = [2, 3, 4, 5, 6, 7, 8, 9];
//   const primeArr = getPrimeNumbers(arr);
//   console.log(primeArr); // Output: [2, 3, 5, 7]
  


// // Return all the palindromes in an array


// const isPalindrome = str => str.split('').reverse().join('') === str;
// const getPalindromes = arr => arr.filter(str => isPalindrome(str));
// const arr = ['racecar', 'hello', 'level', 'world'];
// const palindromeArr = getPalindromes(arr);
// console.log(palindromeArr); // Output: ["racecar", "level"]
