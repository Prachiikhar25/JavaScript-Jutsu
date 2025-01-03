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