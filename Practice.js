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

//now what i want to do is a dice roll
//1 to 6

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