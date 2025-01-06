/*
const Student = {
    name: "Prachi",
    sem: 5,
    age: 19
};
//object literals can also store array
//const matlab hm student ye naam change nahi kar sakte hain.
let item = {
    price: 11,
    items: ["paani", "puri"]
};
console.log(item["price"]);

//Nesting of Object
classInfo = {
    aman: {
        name: "Aman",
        marks: 90
    },
    Shradha: {
        name: "Shradha",
        marks: 94.4
    },
    Kiran: {
        name: "Prachi",
        marks: 97
    }
};


//similarly hota hai array of object
const Nested = [{
        name: "prachi",
        rn: 16
    },
    {
        name: "Vedant",
        rn: 53
    }
];

//isko access as Nested[0]

//floor matlab choti value niche ki value
//ceil matlabbadi value
Math.floor(8987.3333)
console.log(Math.floor(-211.099))

//random is excusive to 1 i.e [0 to 1)
// to generate 21 to 25
Math.floor(Math.random()*5)+21;
*/


let max = prompt("Enter a max number");
let act = Math.floor(Math.random() * max) + 1;
let hintl = act - 2;
let hintr = act + 2;
let guess = prompt("Guess the number");
while (true) {
    if (guess == act) {
        console.log("CORRECT!");
        break;
    } else if (guess == "quit") {
        break;
    } else if (guess == "hint") {
        console.log("number lies between ", hintl, " and ", hintr);
        guess = prompt("Guess the number.");
    } else {
        guess = prompt("Guess the number.Enter 'hint' to get hint ");
    }
}