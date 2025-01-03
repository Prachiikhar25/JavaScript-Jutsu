let cars = ['kia', 'xuv', 'pia'];
console.log(cars);
cars.unshift("ant");

document.write('\n', cars);
document.write("<br>");

document.write(cars.slice());

let arr = ["mangoo", "apple"];
for (i of arr) {
    console.log(i);
}
let p = [
    ["a", "e", "i", "o", "u"],
    ["pldkjo", "jhjjh"]
];
for (i of p) {
    for (p of i) {
        console.log("This is andar ka" + p);
    }
}

//Practice question
// .WriteaJSprogramtodeletealloccurrencesofelement‘ num’ in a given array.
// Example: ifarr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2 Resultshouldbearr = [1, 3, 4, 5, 6, 3]
let arr1 = [1, 2, 3, 4, 5, 6, 2, 3];
for (let i = 0; i < arr1.length; i++) {
    if (arr[i] === 2) {
        arr1.splice(i, 1);
        i--;
    }
}
console.log(arr1);
//ho gaya sahi


// Qs2.WriteaJSprogramtofindthenoofdigitsinanumber.
// Example:ifnumber=287152,count=6
//no. of digits=?
let num = 287152;
let count = 0;
console.log("Before ", count);
while (num > 0) {
    num = Math.floor(num / 10);
    count++;
}

console.log("After ", count);

// The Math.floor
// function is important in this context because it ensures that the division operation results in an integer by rounding down to the nearest whole number.This is crucial
// for correctly counting the number of digits in a number.