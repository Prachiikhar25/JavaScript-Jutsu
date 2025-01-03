let Todo = [];
let req = prompt("Enter your Request :");
console.log(req);

while (true) {
    if (req == "quit") {
        console.log("Quitting the application");
        break;
    } else if (req == "list") {
        console.log("-----------------");
        for (let i = 0; i < Todo.length; i++) {
            console.log(i, Todo[i]);
        }
        console.log("-----------------");
    } else if (req == "add") {
        let task = prompt("Enter the task u wanna add ");
        Todo.push(task);
    } else if (req == "delete") {
        let idx = prompt("Please enter the index of task need to delete.");
        Todo.splice(idx, 1);
    }
    req = prompt("Enter your Request :");

}

//Understanding splice.
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)