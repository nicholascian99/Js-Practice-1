// for (let i = 0; i <= 10; i+=2) {
//     console.log(i)
    
// }

// let minusSeven = (num) => {
//     return num - 7;
// }

// console.log(minusSeven(10));

// let timesFive = (num) => {
//     return num * 5;
// }

// console.log(timesFive(5));
// ____________________________________________________________________

// .push and .shift ARRAY METHODS
// function nextInLine(arr, item) {

//     arr.push(item);
//     return arr.shift();
// }

// let testArr = [1,2,3,4,5];

// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr,6));
// console.log("Before: " + JSON.stringify(testArr));

//IF STATEMENTS
// function testLogicalAnd(val) {

//     if (val <= 50 && val >= 25) {
//         return "Yes";
//     }
//     return "No"
// } 

// console.log(testLogicalAnd(6));
// 
// ________________________________________________________________________


// let doesLambiSuck = (scoreboard) => {
    //     if (scoreboard <= 1500) {
        //         return "lambi kinda sucks"
        //     } else if (scoreboard > 1500 && scoreboard <= 3000) {
            //         return "Lambi's not too bad"
            //     } else {
                //         return "Lambi does not suck"
                //     }
                // }
                
                // console.log(doesLambiSuck(1600))
// ________________________________________________________________________
                
//Golf Game

// let names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"]

// let golfScore = (par, strokes) => {
//     if (strokes == 1) {
//         return names[0]
//     } else if (strokes <= par - 2) {
//         return names[1]
//     } else if (strokes == par - 1) {
//         return names[2]
//     } else if (strokes == par) {
//         return names[3]
//     }else if (strokes == par + 1) {
//         return names[4]
//     }else if (strokes == par + 2) {
//         return names[5]
//     }else if (strokes >= par + 3) {
//         return names[6]
//     }
// }
    


// console.log(golfScore(9, 1));
// ______________________________________________________________
//SWITCH STATEMENTS CAN BE USED INSTEAD OF A CHAIN OF "IF ELSE" STATMENTS   
// function caseInSwitch(val){
//     var answer = "";
//     switch(val) {
//         case 1:
//             answer = "alpha";
//             break;
//         case 2:
//             answer = "beta";
//             break;
//         case 3:
//             answer = "gamma";
//             break;
//         ////omit break statement for a single switch statment to represent multiple answers
//         case 4:
//         case 5:
//         case 6:
//             answer = "delta";
//             break;
//         default:
//             answer = "none of them lol";
//             break;
//         }
//         return answer;
//     }
//     console.log(caseInSwitch(6))


// _________________________________________________________________________
//whenever the function is called, the number to bet increases or decreases depending on the numbers that were passed into the function. If the number is high, you bet, if low, dont bet.
// let count = 0;

// let cc = (card) => {
//     switch(card) {
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             count++;
//             break;
//         ////if the count is 7, 8, or 9, do nothing
//         case 10:
//         case "J":
//         case "Q": 
//         case "K":
//         case "A":
//             count--;
//             break;       
// }

// let holdbet = 'Hold'
// if (count > 0) {
//     holdbet = 'Bet'
// }    
//     return count + " " + holdbet;
    
// }



// cc(2); cc(3); cc(7); cc('K'); cc('A');

// console.log(cc(4))

// ____________________________________________________

// OBJECTS!!!!!



// let cousinLookup =(val) => {
//     let result = "";


//     const lookup = {
//         "Bob": "tsarnas",
//         "Lambi": "poulos",
//         "Krissy": "Gregor",
//         "Zachary": "Gregor",
//         "Louie": "Poulos",
//         "George": "Poulis",
//         "Sam": "Gregor"
//     };
//     result = lookup[val];

//     return result;
// }

// console.log(cousinLookup('Lambi'));
// ____________________________________________________
// testing objects for properties


// let myObj = {
//     gift: "Pony",
//     pet: "Kitten",
//     bed: "Sleigh"
// };

// function checkObject (checkProp) {

//     if (myObj.hasOwnProperty(checkProp)){
//     return myObj[checkProp];
// } else {
//     return "Not Found"
//     }
// }

// console.log(checkObject("pet"));
//  ______________________________________________________________
//ACCESSING NESTED ARRAYS

// let myPokemon = [
//     {
//         "Species": "Flygon",
//         "egg-group": "Dragon",
//         "evolution-stage": "3rd",
//         "moves": [
//             "dragonbreath",
//             "earthquake",
//             "outrage"
//         ],
//         "my favorite": true
//     },

//     { 
//         "Species": "Treeko",
//         "egg-group": "field",
//         "evolution-stage": "1st",
//         "moves": [
//             "leaf blade",
//             "quick attack",
//             "giga drain"
//         ],
//         "my favorite": false
//     }
// ]

// let opMove = myPokemon[1].moves[2];
// console.log(opMove)
// ______________________________________________________________
//ACCESSING NESTED OBJECTS

// let myStorage = {
//     "car": {
//         "inside": {
//             "glove box": "maps",
//             "passenger seat": "crumbs"

//         },
//         "outside": {
//             "trunk": "jack"
//         }
//     }
// }

// let gloveBoxContents = myStorage.car.inside["glove box"];

// console.log(gloveBoxContents)

// ____________________________________________________

//WHILE LOOPS
// let myArray = [];

// let i = 0

// while(i < 5) {
//     myArray.push(i);
//     i++;
// }
// console.log(myArray);

// ________________________________________________________________
//   FOR LOOPS (USUALLY BEST PRACTICE)

// let ourArray = [];

// for (let i = 0; i < 5; i++) {
//     ourArray.push(i);
// }


// let myArray = [];

// for (let i = 1; i < 6; i++) {
//     myArray.push(i);
// }
// console.log(ourArray)

// console.log(myArray);

// let ourArray = [];

// for (let i = 1; i < 11; i += 2) {
//     ourArray.push(i);
// }

// console.log(myArray);
// console.log(ourArray);

// let ourArray = [];

// for (let i = 9; i > 0; i -= 2) {

//     console.log(ourArray);
// }
// ______________________________________________________________
// let myArray = [9, 10, 11, 12];
// let myTotal = 0;

// for (let i = 0; i < array.length; i++) {
//     ourTotal += ourArray[i];
    
// }
// console.log(ourTotal);

// _________________________________________________________
// let ourArray = [2, 3, 4, 5, 6];
// let total = 0;

// for (let i = 0; i < ourArray.length; i++) {
//     total += ourArray[i];
// }

// console.log(total)
// _________________________________________________________

// function multiplyAll(arr) {
//     var product = 1;

//     for (var i=0; i < arr.length; i++) {
//         for (var j=0; j < arr[i].length; j++){
//             product *= arr[i][j];
//         }
//     }

//     return product;
// }

// var product = multiplyAll([[1,2],[3,4],[4,6]]);

// console.log(product);

// var myArray = [];
// var i = 10;

//   do {
//     myArray.push(i);
//     i++;
    
// }
// while (i < 5)

// console.log(i, myArray);

// ________________________________________________________
// PROFILE LOOKUP

// let contacts = [
//     {
//         "firstName": "Shrilanka",
//         "lastName" : "that bitch",
//         "number" : "0509896758",
//         "likes" : ["twerking", "breaking bodies", "making money"]
//     },
//     {
//         "firstName": "Benji",
//         "lastName": "Wilbur",
//         "number": "9685746583",
//         "likes": ["Harry Potter", "brownies", "pokemon"] 
//     },
//     {
//         "firstName": "Kenny",
//         "lastName": "Brown",
//         "number": "6867564758",
//         "likes": ["Cod", "bad bitches", "being tall"]
//     },
//     {
//         "firstName": "Sherry",
//         "lastName": "Quinn",
//         "number": "4637586945",
//         "likes": ["jump rope", "raw chicken", "tiktok"]
//     }    
// ];

// function lookupProfile(name, prop){
//     for (let i = 0; i < contacts.length; i++) {
//         if (contacts[i].firstName === name) {
//             return contacts[i][prop] || "No such property";
//         }
//     }
//     return "No such contact";
// }

// let data = lookupProfile("Shrilanka", "number");

// console.log(data)
     
// ________________________________________________________
// GENERATING RANDOM NUMBERS
// function randomFraction() {

//     return Math.random();
// }

// console.log(randomFraction());

// let randomNumberBetween0and19 = Math.floor(Math.random() * 20);

// let randomWholeNum = () => {
    
    
//      return Math.floor(Math.random() * 10);
//  }

// console.log(randomWholeNum());

// let ourRandomRange = (ourMin, ourMax) => {
//     return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
// }

// ourRandomRange(1, 9);



// let randomRange = (myMin, myMax) => {

//     return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
// }

// let myRandom = randomRange(5,15);

// console.log(myRandom)

// ___________________________________________________________
// PARSE INT Function


// function convertToInteger(str) {
//     return parseInt(str);

// }

// convertToInteger("56")

// function convertToInteger(str) {
//     return parseInt(str, 2)
// }

// convertToInteger("10011");

// _______________________________________________________________
// TURNARY OPERATOR

// function checkEqual(a,b) {
//     return a === b ? true : false;
// }

// checkEqual(1, 2);

// function checkSign(num) {
//     return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
// }

// console.log(checkSign(0));

// ________________________________________________________
// MUTATE AN ARRAY DECLARED WITH CONST

// const s = [5, 7, 8];

// function editInPlace() {
//     "use strict";

//     s[0] = 2; 
//     s[1] = 3;
//     s[2] = 4;

// }

// editInPlace();

// console.log(s)

// _______________________________________________________
// ARROW FUNCTIONS


// //convert to arrow function
// var myConcat = function (arr1, arr2) {
//     return arr1.concat(arr2);
// };

// //converted to arrow function
// const myConcat = (arr1, arr2) => arr1.concat(arr2);



// console.log(myConcat([1, 2], [3, 4, 5]));

// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

// const squareList = (arr) => {
//     const squaredIntegers = arr;
//     return squaredIntegers;
// };

// const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);

// const myRealNumberArray = [6, 4.6, 7.7, 16, 18, -8, 1, 4]
    

// const mySquaredList = (arr) => {;
//     const mySquaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
//     return mySquaredIntegers;
// };

// const mySquaredIntegers = mySquaredList(myRealNumberArray);
// console.log(mySquaredIntegers);

// _______________________________________________________
//DEFAULT PARAMETERS

// const increment = (function() {
//     return function increment(number, value) {
//         return number + value;
//     };
// })();
// console.log(increment(5, 2));
// console.log(increment(5));

// __________________________________________________________
// REST OPERATOR

// const sum = (function(){
//     return function sum(...args) {
//         return args.reduce((a,b) => a + b, 0);
//     };
// })();
// console.log(sum(1, 2, 3, 4));

// ________________________________________________________
// SPREAD OPERATOR

// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;
// (function() {
//     arr2 = [...arr1];
//     arr1[0] = 'potato'
// })();
// console.log(arr2);

// ________________________________________________________
// DESTRUCTURING ASSIGNMENT

// var voxel = {x: 3.6, y: 7.4, z: 6.54 };

// var x = voxel.x;
// var y = voxel.y;
// var z = voxel.z;

// const { x : a, y : b, z : c } = voxel;

// ------------------------------------------------

// const AVG_TEMPERATURES =  {
//     today: 77.5,
//     tomorrow: 79
// };

// function getTempOfTmrw(avgTemperatures) {
//     "use strict";

//     const { tomorrow : tempOfTomorrow } = avgTemperatures;

//     return tempOfTomorrow;
// }

// console.log(getTempOfTmrw(AVG_TEMPERATURES));

// console.log(AVG_TEMPERATURES.tomorrow)

// -------------------------------------------------------
//NESTED DESTRUCTURING ASSIGNMENT

// const LOCAL_FORECAST = {
//     today: { min: 72, max: 83 },
//     tomorrow: { min: 73.3, max: 84.6 }
// };

// function getMaxOfTmrw(forecast) {
//     "use strict";


// const { tomorrow : {max : maxOfTomorrow}} = forecast;

// return maxOfTomorrow;
// }

// console.log(getMaxOfTmrw(LOCAL_FORECAST));


// -----------------------------------------------------------

// const [z, x, , y] = [1, 2, 3, 4, 5, 6];
// console.log(z, x, y);



// let a = 8, b=6;
// (() => {
//     "use strict";
//     [a, b] = [b, a]

// })();

// -----------------------------------------------------
// DESTRUCTURING WITH THE REST OPERATOR

// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list) {

//     const [ , , ...arr] = list;

//     return arr;
// }
// const arr = removeFirstTwo(source);
// console.log(arr);
// console.log(source);

// ----------------------------------------------------------
// USE DESTRUCTURING ASSIGNMENT TO PASS AN OBJECT AS A FUNCTION'S PARAMETERS

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85

};
const half = (function() {
    
    return function half({ max, min}) {
        return (max + min) / 2.0;
    };

})();
console.log(stats);
console.log(half(stats));

// ___________________________________________________________
// CREATE STRINGS USING TEMPLATE LITERALS

// const person = {
//     name : "Zodiac Hasbro",
//     age : 56
// };

// const greeting = `Hello, my name is ${person.name}!
// I am ${person.age} years old.`;

// console.log(greeting);

// ---------------------------------------------------

// SIMPLE FIELDS

// const createPerson = (name, age, gender) => {

//     return {
//         name: name,
//         age: age,
//         gender: gender

//     };
// //can change all of this into what is below--------

// };

// const createHuman = (name, age, gender) => ( {name, age, gender});


// console.log(createPerson("Zodiac Hasbro", 56, "male"));
// console.log(createHuman("Binki lazbro", 78, "male"))

// ____________________________________________________
//CLASS SYNTAX(CREATES AN OBJECT IN ES6)

// function makeClass() {
//     class Vegetable {
//         constructor(name) {
//             this.name = name;
//         }
//     }
//     return Vegetable;
// }
// const Vegetable = makeClass();
// const carrot = new Vegetable('carrot');
// console.log(carrot.name);

// _________________________________________________________
// GETTERS AND SETTERS

// function makeClass() {
//     class Thermostat {
//         constructor(temp) {
//             this._temp = 5/9 * (temp - 32);
//         }
//         get temperature(){
//             return this._temp;
//         }
//         set temperature(updatedTemp){
//             this._temp = updatedTemp;
//         }
//     }
//     return Thermostat;
// }

// const Thermostat = makeClass();
// const thermos = new Thermostat(76);
// let temp = thermos.temperature;
// thermos.temperature = 26;
// temp = thermos.temperature; 












        
    

