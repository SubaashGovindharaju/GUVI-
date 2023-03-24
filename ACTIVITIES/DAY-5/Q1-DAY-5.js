// Do the below programs in anonymous function & IIFE
// Print odd numbers in an array
// Convert all the strings to title caps in a string array
// Sum of all numbers in an array
// Return all the prime numbers in an array
// Return all the palindromes in an array
// Return median of two sorted arrays of the same size.
// Remove duplicates from an array
// Rotate an array by k times


// Print odd numbers in an array

// Anonymous function

// let array=[1,2,3,4,5];

// let odd=function()
// {
//     return array.filter(num => num%2 != 0)
// }
// console.log(odd(array));

// IIFE

// let array=[1,2,3,4,5];

// (function(array)
// {
//     console.log(array.filter(num => num%2 != 0));
// })(array);


// Convert all the strings to title caps in a string array

// Anonymous function


// let arrayString=["subaash","vicky","mukesh","praveen"];

// let titlecaps =function(x){
// for(let i=0;i<x.length;i++)
// {
// x[i]=x[i][0].toUpperCase()+x[i].slice(1);
// }
// return x;
// }
// console.log(titlecaps(arrayString));


// IIFE

// let arrayString=["subaash","vicky","mukesh","praveen"];

// (function(arrayString){
// for(let i=0;i<arrayString.length;i++)
// {
//   arrayString[i]=arrayString[i][0].toUpperCase()+arrayString[i].slice(1);
// }
// console.log(arrayString);

// })(arrayString);



// Sum of all numbers in an array


// Anonymous function


// let array=[1,5,6,4,7,8,7,7,78,56,7894,65654,16314,9791,665979];

// let sumArray= function(array){
// let sum=0;
//   for(let i=0;i<array.length;i++)
//   {
//      sum += array[i]; 
//   }
//   return sum;
// }
// console.log(sumArray(array));


// IIFE


// let array=[1,5,6,4,7,8,7,7,78,56,7894,65654,16314,9791,665979];

// (function(array){
// let sum=0;
//   for(let i=0;i<array.length;i++)
//   {
//      sum += array[i]; 
//   }
//  console.log(sum);
// })(array);


// Return all the prime numbers in an array


// Anonymous function


// let primearray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// let prime = function(primearray){
//   primearray = primearray.filter((number) => {

//   for(var i=2;i<=Math.sqrt(number);i++)
//   {
//     if(number%i===0) 
//     {
//       return false;
//     }
//   }
//     return true;
  
// });
// return primearray;

// }
// console.log(prime(primearray));


// IIFE



// let primearray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// (function(primearray){
//   primearray = primearray.filter((number) => {

//   for(var i=2;i<=Math.sqrt(number);i++)
//   {
//     if(number%i===0) 
//     {
//       return false;
//     }
//   }
//     return true;
  
// });
// console.log(primearray);

// })(primearray);



// Return all the palindromes in an array


// Anonymous function

// let array = [121,565,689,999,589,111];


// let palindromes =function(array){
//   array=array.filter((number) => {

//     let rem,sum=0;
    
//      let temp=number;
//       while(temp>0)
//       {
//         rem=temp%10;
//         sum=sum*10+rem;
//         temp=parseInt(temp/10);
//        }
//       if(number === sum)
//       {
//       return true;
//       }
//       else
//       return false;

    
//     });
// return array;
// }
// console.log(palindromes(array));

// IIFE


// let array = [121,565,689,999,589,111];


// (function(array){
//   array=array.filter((number) => {

//     let rem,sum=0;
    
//      let temp=number;
//       while(temp>0)
//       {
//         rem=temp%10;
//         sum=sum*10+rem;
//         temp=parseInt(temp/10);
//        }
//       if(number === sum)
//       {
//       return true;
//       }
//       else
//       return false;

    
//     });
// console.log(array);
// })(array);


// Return median of two sorted arrays of the same size.

// Anonymous function

// let  arr1=[1,3,5,7,9];
// let  arr2=[0,2,4,6,8];

// let medium=function(arr1,arr2){

//   let arr=arr1.concat(arr2).sort((a,b) => a-b);
//   let middleIndex=Math.floor(arr.length/2);

//   if(arr.length%2===0)
//   {
//     return (arr[middleIndex-1]+arr[middleIndex])/2;
//   }
//   else
//   {
//     return arr[middleIndex];
//   }

  
// }
// console.log(medium(arr1,arr2));

// IIFE

// let  arr1=[1,3,5,7,9];
// let  arr2=[0,2,4,6,8];

// let median=(function(arr1,arr2){

//   let arr=arr1.concat(arr2).sort((a,b) => a-b);
//   let middleIndex=Math.floor(arr.length/2);

//   if(arr.length%2===0)
//   {
//     return(arr[middleIndex-1]+arr[middleIndex])/2;
//   }
//   else
//   {
//     return( arr[middleIndex]);
//   }

  
// })(arr1,arr2);

// console.log(median);




// Remove duplicates from an array

// Anonymous function


// let array=[5,8,9,6,6,5,4,7,1,2,3];

// let duplicate = function(array){
//     return [...new Set(array)];
// }
//  console.log(duplicate(array));


// IIFE

// let array=[5,8,9,6,6,5,4,7,1,2,3];

// (function(array){
//     console.log([...new Set(array)]);
// })(array);


// Rotate an array by k times


// Anonymous function


// let  array = [1, 2, 3, 4, 5];
// let  k = 2;

// let rotateArray=function(array, k) {
//     const n = array.length;
//     k = k % n;
//     array = array.slice(n - k).concat(array.slice(0, n - k));
//     return array;
//   }

// console.log(rotateArray(array,k)); 

// IIFE

// let  array = [1, 2, 3, 4, 5];
// let  k = 3;

// let rotateArray=(function(array, k) {
//     const n = array.length;
//     k = k % n;
//     array = array.slice(n - k).concat(array.slice(0, n - k));
//     return array;
//   })(array,k);

// console.log(rotateArray); 