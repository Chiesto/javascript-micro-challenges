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

// Create a function that takes two parameters. The first parameter is an array, the second parameter will be a number.

// Your function should return a string that combines all of the values starting at the index of the number passed in through the end of the array.
function tripleThreat(array, num){
    let b = '';
    for (i=num; i<array.length; i++){
        b += array[i]+" ";
    }
    return b;
}
let result8 = tripleThreat(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 3);
console.log(result8);//should be 'Hi There!'
let result9 = tripleThreat(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 2);
console.log(result9);//should be 'Oh! Hi There!'

// Create a function that takes in an array of employee objects. Each employee object will come in with a property called `yearsOfExperience`.
// Your function should return the total years of experience for all of the employees.

function exp(array){
    let b=0;
    for(let i=0; i<array.length; i++){
       b+= array[i].yearsOfExperience;
    }
    return b;
}

let result10 = exp([
    { name: "Tony", yearsOfExperience: 10 }, 
    { name: "Carla", yearsOfExperience: 4 }
]);
console.log(result10);//should be 14
let result11 = exp([
    { name: "Tony", yearsOfExperience: 10 }, 
    { name: "Carla", yearsOfExperience: 4 },
    { name: "Kris", yearsOfExperience: 14 }
]);
console.log(result11);//should be 28

// Create a function that takes in an array of arrays. Add up all of the
//  numbers in all of the arrays and return the value.

function arraySquared(array){
    let value = 0;
    for(let i=0; i<array.length; i++){
        for (let j=0; j<array[i].length; j++){
            value+=array[i][j];
        }
    }
    return value;
}
let result12 = arraySquared([ [1, 2], [3, 4, 5] ]);
console.log(result12);//should be 15
let result13 = arraySquared([ [1, 2], [3, 4, 5], [6] ]);
console.log(result13);//should be 21
