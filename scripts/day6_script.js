//Task 1
function task1(par1, par2){
    if(arguments.length != 2)
        throw("this function takes only 2 parameters");
}

//Task 2
function add(){
    if(arguments.length == 0)
        throw("this function takes at least 1 parameter");
    var sum = 0;
    for(var i=0; i<arguments.length; i++)
        sum += Number(arguments[i]);
    if(isNaN(sum))
        throw("all parameters must be numbers");
    else
        console.log(sum);
}

//Task 3
function reverse1(){
    var reversed_array = [];
    reversed_array.length = arguments.length;
    for(var i=0; i<arguments.length; i++)
        reversed_array[i]  = arguments[arguments.length-i-1];
    
    return reversed_array;
}
function reverse2(){
    var array = [];
    for(var i=0; i<arguments.length; i++)
        array[i]  = arguments[i];
    return array.reverse();
}



//testing region
// task1(1,2); //--> no error
// task1(1,2,3); //-->error: function takes 2 parameters
// task1(1); //-->error: function takes 2 parameters

// add(1,2,3) //-->no error
// add(); //-->error: function takes at least 1 parameter
// add(1,2,"string"); //-->error: all parameters must be numbers

// console.log(reverse1(1,2,3,4,5));
// console.log(reverse2(1,2,3,4,5,6,7));