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
// ________________________________________

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
                // ______________________________________
                
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