//Task 1.1
//Task Description: take a group of numbers and perform some arithmetic operations on them
// function add(numbers)
// {
//     var sum = 0;
//     for(var i = 0; i< numbers.length; i++)
//         sum += numbers[i];
//     return sum;
// }
// function multiply(num1, num2, num3)
// {
//     var mul = 1;
//     for(var i = 0; i< numbers.length; i++)
//         mul *= numbers[i];
//     return mul;
// }
// function divide(num1, num2, num3)
// {
//     var div = 1;
//     for(var i = 0; i< numbers.length; i++)
//         div /= numbers[i];
//     return div;
// }
// var numbers = [];
// for(var i = 0; i< 3; i++)
//     numbers.push(parseInt(prompt("Enter Number "+ (i+1))));
// document.writeln("Addition Result is: "+ add(numbers));
// document.writeln("Multiplication Result is: "+ multiply(numbers));
// document.writeln("Division Result is: "+ divide(numbers));


//Task 1.2
//Task Description: take a group of numbers and arrange them ascending and descending
// function asc(numbers)
// {
//     return numbers.sort();
// }
// function desc(numbers)
// {
//     return asc(numbers).reverse();
// }
// var numbers = [];
// for(var i = 0; i<5; i++)
//     numbers.push(parseInt(prompt("Enter Number " + (i+1))));
// document.writeln("Ascending Order is: " + asc(numbers));
// document.writeln("Descending Order is: " + desc(numbers));


//Task 2
//Task Description: take a radius and calculate circle area + take angel and calculate its cosine
// function calcCircleArea(radius)
// {
//     return Math.PI * Math.pow(radius, 2);
// }
// var radius = parseInt(prompt("Enter Radius: "))
// document.writeln("Area of the Circle = " + calcCircleArea(radius));

// var number = parseInt(prompt("Enter Number: "));
// document.writeln("The square root of " + number + " is " + Math.sqrt(number));

// function calcCos(angel)
// {
//     var angelInRad = angel * Math.PI / 180;
//     return Math.cos(angelInRad);
// }
// var angel = Number(prompt("Enter Angel: "));
// document.writeln("cos "+ angel+ " is " + calcCos(angel));


//Task 3
//Task Description: Take a letter and a string then search for the letter in this string and return its indices
// function searchForTheLetter(sentence ,letter)
// {
//     var letters = sentence.split("");
//     var letterIndices = [];
//     for(var i = 0; i < letters.length; i++)
//     {
//         if(letters[i] == letter)
//             letterIndices.push(i);
//     }
//     return letterIndices;
// }
// var sentence = prompt("Enter Sentence: ");
// var letter = prompt("Enter Letter: ");
// document.writeln(searchForTheLetter(sentence, letter));


//Task 4
//Task Description: Take a group of names and pick 2 random names out of them 
// function getRandomNames(names)
// {
//     var randomNames = [];
//     for(var i = 0; i < 2; i++)
//     {
//         randomNames.push(names[Math.floor(Math.random() * 100) % 10]);
//     }
//     return randomNames;
// }
// var names = [];
// for(var i = 0; i < 10; i++)
//    names.push(prompt("Enter Name: "));
// document.writeln(getRandomNames(names));