// Task 1
let person = {};
let handler = {
    set: function (target, key, value){
        if(key=="name" && String(value).length == 7)
        {
            target[key] = value;
            return true;
        }
        else if(key=="address" && typeof(value) == "string")
        {
            target[key] = value;
            return true;
        }
        else if(key == "age" && value >= 25 && value <=60)
        {
            target[key] = value;
            return true;
        }
        else{
            throw(`can't set ${key} property, it's invalid.`);
        }
        
    }
};

// let p = new Proxy(person, handler);
// p.name = "israaaa";
// p.address = "address";
// p.age = 25;
// console.log(p);

// Task 2
import * as shapes from "/scripts/day11_script.js";

let rectangle = new shapes.Rectangle(2, 3);
let square = new shapes.Square(4);
let circle = new shapes.Circle(5);

// rectangle.toString();
// square.toString();
// circle.toString();


// Task 3
function* fibonacci_sequence1(numberOfElements){
    let current = 0, prev = undefined;
    for(let i = 0; i<numberOfElements; i++)
    {
        yield current;
        let temp = current;
        current == 0? current = 1: current += prev;
        prev = temp;
    }
}
function* fibonacci_sequence2(maxNumber){
    let current = 0, prev = undefined;
    while(current <= maxNumber)
    {
        yield current;
        let temp = current;
        current == 0? current = 1: current += prev;
        prev = temp;
    }
}

// let generator = fibonacci_sequence1(7), generator2 = fibonacci_sequence2(7);
// for (const iterator of generator)
//     console.log(iterator);    

// for (const iterator of generator2)
//     console.log(iterator);    


// Task 4
let user = {
    first_name: "Israa",
    last_name: "Abdelaal",
    age: 22,
}
function* retrieve_props(){
    for (const key in this)
        yield `${key}: ${this[key]}`;     
}
user[Symbol.iterator] = retrieve_props;

// for (const iterator of user) {
//     console.log(iterator);    
// }