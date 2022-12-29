// swap
let arr = [1,2];
let [v2, v1] = arr;
console.log(v1, v2);

// max-min
function getMaxMin (...rest){
    let max = rest[0], min = rest[1];
    for(let i=0; i<rest.length; i++)
    {
        if(rest[i]>max)
            max = rest[i];
        if(rest[i]<min)
            min = rest[i]
    }
    return {max: Math.max(rest), min: Math.min(rest)};
}
let result = getMaxMin(10,20,2,60,9); 
console.log(`Maximum Value: ${result.max}, Minimum Value: ${result.min}`);

// Array API Methods
let fruits = ["apple", "strawberry", "banana", "orange", "mango"];

console.log(fruits.every((item)=> typeof(item) == 'string'));
console.log(fruits.some((item)=>item.startsWith('a')));
console.log(fruits.filter((item)=>item.startsWith('b')||item.startsWith('s')));
console.log(fruits.map((item)=>`I like ${item}`));
fruits.forEach((item)=>console.log(`I like ${item}`));