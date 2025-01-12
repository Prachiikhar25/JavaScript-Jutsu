/*

// let cars = ['kia', 'xuv', 'pia'];
// console.log(cars);
// cars.unshift("ant");

// document.write('\n', cars);
// document.write("<br>");

// document.write(cars.slice());

// let arr = ["mangoo", "apple"];
// for (i of arr) {
//     console.log(i);
// }
// let p = [
//     ["a", "e", "i", "o", "u"],
//     ["pldkjo", "jhjjh"]
// ];
// for (i of p) {
//     for (p of i) {
//         console.log("This is andar ka" + p);
//     }
// }

// //Practice question
// // .WriteaJSprogramtodeletealloccurrencesofelement‘ num’ in a given array.
// // Example: ifarr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2 Resultshouldbearr = [1, 3, 4, 5, 6, 3]
// let arr1 = [1, 2, 3, 4, 5, 6, 2, 3];
// for (let i = 0; i < arr1.length; i++) {
//     if (arr[i] === 2) {
//         arr1.splice(i, 1);
//         i--;
//     }
// }
// console.log(arr1);
// //ho gaya sahi


// // Qs2.WriteaJSprogramtofindthenoofdigitsinanumber.
// // Example:ifnumber=287152,count=6
// //no. of digits=?
// let num = 287152;
// let count = 0;
// console.log("Before ", count);
// while (num > 0) {
//     num = Math.floor(num / 10);
//     count++;
// }

// console.log("After ", count);

// // The Math.floor
// // function is important in this context because it ensures that the division operation results in an integer by rounding down to the nearest whole number.This is crucial
// // for correctly counting the number of digits in a number.

// // WriteaJSprogramtofindthesumofdigitsinanumber.Example:ifnumber=287152,sum=25
// // let sum = 0;
// // num = 287152;
// // while (num > 0) {
// //     sum = sum + Math.floor(num) % 10;
// //     num = num / 10;
// // }
// // console.log("sum is", sum);

// //calc factorial of a number

// let f = 1;
// num = 4;
// for (let i = 1; i <= num; i++) {
//     f = f * i;
// }
// console.log("Factorial is = ", f);
// //Find the largest number in an array with only positive numbers.
// let a = [1, 2, 3, 4, 8, 5, 6];
// let max = 0;
// for (let i = 0; i < a.length; i++) {
//     if (a[i] > max) {
//         max = a[i];
//     }
// }
// console.log("max is ", max);



// ar:name,model,color.Print the car’s name
const car = {
    name: "Kia",
    Model: "new",
    color: "Grey"
};

//Aise print karo 
//car.name
//car["name"]

// CreateanobjectPersonwiththeirname,ageandcity.Edittheircity’soriginalvaluetochangeitto“NewYork”.AddanewpropertycountryandsetittotheUnitedStates
const Person = {
    name: "Prachi",
    age: 19,
    City: "Hinganghat"
};
Person.City = "New York";
Person.country = "The United States";

//building a function

function hello() {
    console.log("Hello This is a function");
}

hello();
//1 to 5
// function loop() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i, " ");
//     }
// }
// loop();

//now what i want to do is a dice roll
//1 to 6

function roll() {
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
}
roll();

// while (true) {
//     let c = prompt("roll or quit");
//     if (c == "roll") {
//         let dice = Math.floor(Math.random() * 6) + 1;
//         console.log("dice is ", dice);
//     } else if (dice == "quit") {
//         console.log("End");
//         break;
//     }

// }

// function name(n) {
//     console.log(`name is ${n}`);
// }
// name(13);

// function avg(a, b, c) {
//     console.log((a + b + c) / 3, " Is avg ");
// }
// avg(2, 3, 4);

function table(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n * i);
    }
}
table(2);
let c; {
    c = 9;
    if (c < 18) {
        c = 2;
    }
}
console.log(c);

console.log("------------------");

//higher order function
function multiGreet(func, count) {
    for (let i = 0; i < count; i++) {
        func();
    }
}
let greet = function() {
    console.log("Hi");
}
multiGreet(greet, 5);
//or


multiGreet(function() {
    console.log("Namaste")
}, 10);
*/
// Learning Try catch
try {
    console.log(a);
} catch {
    console.log("!ERROR a dont exist.")
}

// other way catch() isme var daaldo
try {
    console.log(b);
} catch (e) {
    console.log(e);
    //Reference error aaya!
}

//power
const pow = (a, b) => {
    console.log("Hi this is power", a ** b);
}

const mul = (a, b) => a * b;

const sum = (a, b) => (a + b);
const sub = (a, b) => (Math.abs(a - b));

//cube
const cube = (n) => n * n * n;

//setTimeout 
// setTimeout(function,time);
//1000ms =1s
setTimeout(k = () => {
        console.log("Hi there!");
    }, 2000)
    //2 sec baad hi ye call hua

//setInterval---->
// setInterval(() => {
//     console.log("Ye line 2 sec baad lagataar print hogi!");
// }, 2000);