console.log('-----100 Addition.md-----');
//Create a function that takes two numbers.

//Your function should return the sum of the two numbers passed in.
function addition(num1,num2){
let total = num1+num2;
return total;
}
let result = addition(2,3);
console.log('should be 5:',result);

let result2 = addition(2, 7);
console.log('should be 9:',result2);

console.log('-----110 Conditional.md-----');
//Create a function that takes two numbers.
// If the first number is bigger than the second number, return `"The first number was bigger!"`.
// If the second number is bigger than the first number, return `"The second number was bigger!"`.
// If the numbers are the same, return `"The numbers are the same!"`.

function conditional(num1, num2){
    if(num1>num2){
        return 'The first number was bigger!';
    }else if(num1<num2){
        return 'The second number was bigger!';
    }else{
        return 'The numbers are the same!';
    }
}
let result3 = conditional(3, 2)
console.log(result3);//first num should be bigger
let result4 = conditional(2, 7)
console.log(result4);//second num should be bigger
let result5 = conditional(7, 7);
console.log(result5);//numbers should be the same

console.log('-----120 Arrays.md-----');
// Create a function that takes in an array. Add up the first and last values in the array.
function superCoolArray(anArray){
   return anArray[0]+anArray[anArray.length-1];
}
let result6 = superCoolArray([1, 2, 3, 4, 5]);
console.log(result6);//should be 6
let result7 = superCoolArray([6, 7, 8, 9, 10, 11, 12]);
console.log(result7);//should be 18